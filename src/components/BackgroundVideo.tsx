/**
 * https://raghunathchava.com
 */
import { useState, useRef, useEffect } from "react";

export function BackgroundVideo() {
  const [videoError, setVideoError] = useState(false);
  const [opacity, setOpacity] = useState(0.4); // Default opacity for light mode
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeDuration = 1.5; // seconds

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

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
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [videoError]);

  return (
    <>
      {/* Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-300"
          style={{ opacity }}
          onError={() => setVideoError(true)}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback Background - Only shows if video fails */}
      {videoError && (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-deepBlue/5 via-transparent to-teal/5" />
      )}
    </>
  );
}
