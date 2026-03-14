import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { AppPreview } from "@/components/sections/app-preview";
import { VideoDemo } from "@/components/sections/video-demo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AppPreview />
        <VideoDemo />
      </main>
    </>
  );
}
