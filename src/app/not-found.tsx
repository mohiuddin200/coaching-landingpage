import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
