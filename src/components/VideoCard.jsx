import { useState } from 'react';

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden card-hover group">
      {/* Thumbnail / Player */}
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              }}
            />
            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-body font-medium px-2 py-0.5 rounded">
              {video.duration}
            </div>
            {/* Play Button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-14 h-14 bg-[#e91e8c] rounded-full flex items-center justify-center shadow-xl shadow-pink-500/50 transition-all duration-200 hover:scale-110 hover:shadow-pink-500/70">
                <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-white text-sm leading-snug mb-1">
          {video.title}
        </h3>
        <span className="text-[#e91e8c] text-xs font-body font-medium">
          {video.category}
        </span>
      </div>
    </div>
  );
}
