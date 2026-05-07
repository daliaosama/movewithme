import { Link } from "react-router-dom";
import { trendingVideos } from "../data/videos";
import VideoCard from "../components/VideoCard";
import banner from "../assets/banner.png";
import zumba from "../assets/zumba.png";
import yoga from "../assets/yoga.png";
import strength from "../assets/strength.png";
import zumbaImg from "../assets/zumba1.png";
import yogaImg from "../assets/yoga1.png";
import armImg from "../assets/arm1.png";
import backImg from "../assets/back1.png";
import chestImg from "../assets/chest1.png";
import legImg from "../assets/leg1.png";
import motivationBg from "../assets/motivation-bg.png";
const workoutCategories = [
  {
    name: "ZUMBA",
    tagline: "Dance. Sweat.\nHave Fun.",
    path: "/zumba",
    bg: "from-pink-900/60 to-black",
    emoji: "💃",
    image: zumba,
  },
  {
    name: "YOGA",
    tagline: "Stretch. Breathe.\nFind Balance.",
    path: "/yoga",
    bg: "from-purple-900/60 to-black",
    emoji: "🧘",
    image: yoga,
  },
  {
    name: "STRENGTH",
    tagline: "Get Strong.\nBe Powerful.",
    path: "/arm",
    bg: "from-orange-900/60 to-black",
    emoji: "💪",
    image: strength,
  },
];

const stats = [
  { icon: "🔥", label: "Burn Calories", sub: "Boost your energy" },
  { icon: "🏋️", label: "Build Strength", sub: "Tone your body" },
  { icon: "❤️", label: "Feel Amazing", sub: "Love your life" },
];

const allPages = [
  {
    name: "Zumba",
    path: "/zumba",
    icon: "💃",
    color: "#e91e8c",
    image: zumbaImg,
  },
  { name: "Arm", path: "/arm", icon: "💪", color: "#ff6b35", image: armImg },
  { name: "Back", path: "/back", icon: "🏋️", color: "#7c3aed", image: backImg },
  {
    name: "Chest",
    path: "/chest",
    icon: "🫀",
    color: "#059669",
    image: chestImg,
  },
  { name: "Leg", path: "/leg", icon: "🦵", color: "#2563eb", image: legImg },
  { name: "Yoga", path: "/yoga", icon: "🧘", color: "#d97706", image: yogaImg },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Pink gradient blob */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-pink-500/40 via-pink-900/20 to-transparent" />
        </div>
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-[#e91e8c] blur-[120px] opacity-20 pointer-events-none" />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full  bg-cover  bg-center  rounded-3xl border border-pink-500/20"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="max-w-2xl ">
            <p className="font-script text-[#e91e8c] text-2xl mb-3 animate-fadeInUp">
              Stronger Every Day
            </p>
            <h1 className="font-heading text-6xl md:text-8xl text-white leading-none tracking-wider mb-2 animate-fadeInUp animate-delay-100">
              MOVE YOUR BODY,
            </h1>
            <h1 className="font-heading text-6xl md:text-8xl text-[#e91e8c] leading-none tracking-wider mb-6 animate-fadeInUp animate-delay-200">
              LOVE YOURSELF
            </h1>
            <p className="font-body text-white/70 text-lg mb-8 max-w-md animate-fadeInUp animate-delay-300">
              Zumba, Yoga, Strength & more – workouts for every woman, every
              goal, every day.
            </p>

            <div className="flex flex-wrap gap-4 mb-14 animate-fadeInUp animate-delay-400">
              <Link
                to="/videos"
                className="bg-[#e91e8c] hover:bg-pink-600 text-white font-body font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/40 hover:scale-105"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 8l4 4-4 4"
                  />
                </svg>
              </Link>
              <Link
                to="/#workouts"
                className="border border-white/30 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:bg-white/5"
              >
                Explore Workouts
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 8l4 4-4 4"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="font-body font-semibold text-white text-sm">
                      {s.label}
                    </p>
                    <p className="font-body text-white/50 text-xs">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKOUT CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workoutCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg}`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="relative p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <h3 className="font-heading text-white text-4xl tracking-widest mb-1">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#e91e8c] mb-3" />
                  <p className="font-body text-white/70 text-sm whitespace-pre-line">
                    {cat.tagline}
                  </p>
                </div>
                <button className="self-start bg-[#e91e8c] hover:bg-pink-600 text-white font-body font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/40">
                  View Videos
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ALL PAGES GRID ── */}
      <section
        id="workouts"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 "
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="hidden md:block w-24 h-[2px] bg-gradient-to-r from-transparent to-pink-500"></div>
          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-widest">
            ALL <span className="text-[#e91e8c]">WORKOUTS</span>
          </h2>
          <div className="hidden md:block w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-500"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {allPages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="relative overflow-hidden border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
              style={{
                backgroundImage: `url(${page.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay (controls visibility of image) */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-200"></div>

              {/* Content */}
              <span className="relative z-10 text-4xl">{page.icon}</span>
              <span className="relative z-10 font-heading text-white tracking-widest text-lg group-hover:text-[#e91e8c] transition-colors">
                {page.name.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TRENDING WORKOUTS ── */}
      <section
        id="trending"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="hidden md:block w-24 h-[2px] bg-gradient-to-r from-transparent to-pink-500"></div>

          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-widest">
            TRENDING <span className="text-[#e91e8c]">WORKOUTS</span>
          </h2>
          <div className="hidden md:block w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-500"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingVideos.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </section>

      {/* ── MOTIVATION BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
        <div className="relative rounded-3xl overflow-hidden border border-pink-500/20 p-10 md:p-14">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${motivationBg})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 right-4 w-40 h-40 rounded-full bg-[#e91e8c] blur-[80px] opacity-15" />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-pink-400 blur-[60px] opacity-10" />
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-script text-[#e91e8c] text-2xl mb-1">
                You Don't Have To Be Extreme,
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-white tracking-widest">
                JUST <span className="text-[#e91e8c]">CONSISTENT</span> ❤️
              </h2>
            </div>

            <div className="flex-shrink-0 text-right">
              <p className="font-body text-white/70 mb-4">
                Small steps every day
                <br />
                lead to big changes.
              </p>

              <Link
                to="/cardio"
                className="inline-flex items-center gap-2 bg-[#e91e8c] hover:bg-pink-600 text-white font-body font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/40"
              >
                Let's Do This
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
