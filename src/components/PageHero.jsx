export default function PageHero({
  title,
  subtitle,
  description,
  accent,
  icon,
  banner,
  playlistLink,
  youtubeLink,
}) {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Banner Image */}
      {banner && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accent}55 0%, transparent 70%)`,
        }}
      />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-4">{icon}</div>

        <p className="font-script text-[#e91e8c] text-xl mb-2">{subtitle}</p>

        <h1 className="font-heading text-5xl md:text-7xl text-white tracking-wider mb-4">
          {title}
        </h1>

        <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-6">
          {description}
        </p>

        {/* Playlist Button */}
        {playlistLink && (
          <a
            href={playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e91e8c] hover:bg-pink-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105"
          >
            ▶ Watch Full Playlist
          </a>
        )}
        {youtubeLink && (
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e91e8c] hover:bg-pink-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105"
          >
            ▶ Watch on YouTube
          </a>
        )}

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-[#e91e8c]" />
          <div className="w-2 h-2 rounded-full bg-[#e91e8c]" />
          <div className="h-px w-12 bg-[#e91e8c]" />
        </div>
      </div>
    </div>
  );
}
