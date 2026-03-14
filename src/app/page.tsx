import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-text-primary">
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-primary">
            Coaching Management — Coming Soon
          </h1>
        </div>
      </main>
    </>
  );
}
