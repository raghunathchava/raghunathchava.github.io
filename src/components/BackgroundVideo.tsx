/**
 * https://raghunathchava.com
 */
import { useState, useRef, useLayoutEffect } from "react";

const VIDEO_SRC = "/video.mp4";
// First frame of the clip. Rendered by the element whenever playback has not
// started, so the background is never blank if a browser denies autoplay.
const VIDEO_POSTER = "/video-poster.jpg";

// The clip's first and last frames show the same scene with different detail,
// so the loop seam needs masking rather than hiding. A short, shallow dip does
// that: previously the opacity ramped to 0 across the final 1.5s, which blanked
// the background for about a second on every loop.
const SEAM_WINDOW = 0.45; // seconds of ramp on each side of the seam
const SEAM_FLOOR = 0.6; // never dim below 60% of base — no blank frame

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const baseOpacity = () => (prefersDark() ? 0.3 : 0.4);

/** Opacity for a given playback position, dipping gently across the loop seam. */
function loopOpacity(currentTime: number, duration: number): number {
  const base = baseOpacity();
  const edge = Math.min(currentTime, duration - currentTime);
  if (edge >= SEAM_WINDOW) return base;
  const ramp = Math.max(0, edge) / SEAM_WINDOW; // 0 at the seam, 1 at full
  return base * (SEAM_FLOOR + (1 - SEAM_FLOOR) * ramp);
}

export function BackgroundVideo() {
  const [videoError, setVideoError] = useState(false);
  const [opacity, setOpacity] = useState(baseOpacity);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safari/WebKit decides whether a media element may autoplay at the moment its
  // source begins loading. React sets `muted` as a DOM property rather than an
  // HTML attribute, so WebKit evaluated an "unmuted" element and denied autoplay
  // permanently — the video sat at currentTime 0 with readyState 4 (decoded fine,
  // never started) and every play() returned NotAllowedError. Chrome and Firefox
  // are more lenient and played it regardless.
  //
  // The element is therefore rendered with NO source; we set `muted` on the node
  // first and only then assign src, so WebKit evaluates an unambiguously muted
  // element. A user-gesture fallback covers any stricter policy.
  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    if (!video.getAttribute("src")) {
      video.setAttribute("src", VIDEO_SRC);
      video.load();
    }

    let cancelled = false;

    const attemptPlay = () => {
      if (cancelled || !video.paused) return;
      const started = video.play();
      if (started && typeof started.catch === "function") {
        started.catch(() => {
          // Autoplay refused — retry once the user interacts with the page.
          const resume = () => {
            video.play().catch(() => undefined);
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("keydown", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true });
          window.addEventListener("keydown", resume, { once: true });
        });
      }
    };

    attemptPlay();
    video.addEventListener("canplay", attemptPlay);
    video.addEventListener("loadeddata", attemptPlay);
    // Safari suspends media in background tabs and denies autoplay while the
    // page is hidden; retry when it becomes visible again.
    document.addEventListener("visibilitychange", attemptPlay);

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      setOpacity(loopOpacity(video.currentTime, video.duration));
    };

    const handleLoadedMetadata = () => {
      setOpacity(baseOpacity());
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Handle theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      setOpacity(
        video.duration
          ? loopOpacity(video.currentTime, video.duration)
          : baseOpacity(),
      );
    };
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("loadeddata", attemptPlay);
      document.removeEventListener("visibilitychange", attemptPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [videoError]);

  return (
    <>
      {/* Background video — `src` is assigned imperatively once `muted` is set,
          so WebKit evaluates a muted element and permits autoplay. */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
          style={{ opacity }}
          onError={() => setVideoError(true)}
          preload="auto"
          poster={VIDEO_POSTER}
          aria-hidden="true"
        />
      )}

      {/* Fallback Background - Only shows if video fails */}
      {videoError && (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-deepBlue/5 via-transparent to-teal/5" />
      )}
    </>
  );
}
