/**
 * https://raghunathchava.com
 */
import { useState, useRef, useLayoutEffect } from "react";

const VIDEO_SRC = "/video.mp4";

export function BackgroundVideo() {
  const [videoError, setVideoError] = useState(false);
  const [opacity, setOpacity] = useState(0.4); // Default opacity for light mode
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeDuration = 1.5; // seconds

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

    const handleTimeUpdate = () => {
      if (video.duration) {
        const timeRemaining = video.duration - video.currentTime;

        // If we're in the last 1.5 seconds, fade out
        if (timeRemaining <= fadeDuration) {
          // Calculate fade opacity: 0 at end, full opacity at fadeDuration seconds before end
          const fadeProgress = timeRemaining / fadeDuration;
          // Base opacity: 0.4 for light mode, 0.3 for dark mode
          const baseOpacity = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? 0.3
            : 0.4;
          setOpacity(baseOpacity * fadeProgress);
        } else {
          // Reset to full opacity when not in fade zone
          const baseOpacity = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? 0.3
            : 0.4;
          setOpacity(baseOpacity);
        }
      }
    };

    const handleLoadedMetadata = () => {
      // Set initial opacity based on theme
      const baseOpacity = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? 0.3
        : 0.4;
      setOpacity(baseOpacity);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Handle theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      if (video.duration) {
        const timeRemaining = video.duration - video.currentTime;
        if (timeRemaining > fadeDuration) {
          const baseOpacity = mediaQuery.matches ? 0.3 : 0.4;
          setOpacity(baseOpacity);
        }
      }
    };
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("loadeddata", attemptPlay);
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
