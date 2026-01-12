/**
 * https://raghunathchava.com
 */
import { Home } from "lucide-react";

interface ErrorPageProps {
  statusCode?: number;
}

export function ErrorPage({ statusCode = 404 }: ErrorPageProps) {
  const messages: Record<number, { title: string; description: string }> = {
    404: {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
    },
    500: {
      title: "Server Error",
      description: "Something went wrong on our end. Please try again later.",
    },
  };

  const message = messages[statusCode] ?? messages[404]!;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl">
        <div className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
          {statusCode}
        </div>
        <h1 className="text-3xl font-bold mb-4">{message.title}</h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {message.description}
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          <Home className="w-5 h-5" />
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
