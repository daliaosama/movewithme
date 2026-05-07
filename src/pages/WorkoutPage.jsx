import PageHero from '../components/PageHero';
import VideoCard from '../components/VideoCard';

export default function WorkoutPage({ title, subtitle, description, icon, accent, videos,  banner,
  playlistLink,}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        title={title}
        subtitle={subtitle}
        description={description}
        icon={icon}
        accent={accent}
        banner={banner}
        playlistLink={playlistLink}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {videos.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-white/40 text-lg">No videos yet. Add your YouTube video IDs in <code className="text-pink-500">src/data/videos.js</code></p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
