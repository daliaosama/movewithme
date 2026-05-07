import PageHero from "../components/PageHero";
import VideoCard from "../components/VideoCard";
import { allVideos } from "../data/videos";
import banner from '../assets/b.png';

export default function Videos() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        title="WATCH ON YOUTUBE"
        subtitle="Join the Energy 🔥"
        description="All workouts are available on my YouTube channel. Click below and start training!"
        icon="🎬"
        accent="#e91e8c"
        youtubeLink="https://www.youtube.com/@moveWithMe-foryou"
        banner={banner}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVideos.map((video, i) => (
            <div
              key={video.id}
              className="opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationFillMode: "forwards",
              }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
