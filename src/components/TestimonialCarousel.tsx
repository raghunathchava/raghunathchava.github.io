/**
 * https://raghunathchava.com
 * Testimonial Carousel Component
 *
 * Rotating customer testimonials with auto-play and navigation.
 *
 * Requirements: 3.1
 */
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types/components";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];
  if (!currentTestimonial) return null;

  return (
    <div className="relative bg-card border border-border rounded-2xl p-8">
      <Quote className="w-8 h-8 text-deepBlue mb-4" />
      <div className="min-h-[200px]">
        <p className="text-lg text-foreground mb-6 italic">
          "{currentTestimonial.quote}"
        </p>
        <div className="flex items-center gap-4">
          {currentTestimonial.avatar && (
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            {currentTestimonial.author && (
              <p className="font-semibold text-foreground">
                {currentTestimonial.author}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.title}
              {currentTestimonial.industry &&
                `, ${currentTestimonial.industry.charAt(0).toUpperCase() + currentTestimonial.industry.slice(1)} Industry`}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      {testimonials.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-deepBlue w-8"
                    : "bg-muted-foreground/30",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
