import PageHero from "../components/PageHero";
import banner from "../assets/b.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        title="ABOUT ME"
        subtitle="Move With Me 💃"
        description="Fitness should feel good, fun, and empowering."
        icon="✨"
        accent="#e91e8c"
        banner={banner}
      />

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Intro */}
        <h2 className="text-3xl md:text-4xl text-white font-heading mb-6">
          Hi, I’m Your Coach 👋
        </h2>

        <p className="text-white/70 text-lg leading-relaxed mb-8">
          I created this platform to make fitness simple, fun, and accessible
          for everyone. Whether you love dancing 💃, strength training 💪, or
          just staying active, you’ll find workouts that fit your energy and
          lifestyle.
        </p>

        {/* Mission */}
        <div className="bg-[#111] rounded-2xl p-8 mb-10">
          <h3 className="text-2xl text-[#e91e8c] font-semibold mb-4">
            My Mission 🎯
          </h3>
          <p className="text-white/70">
            To help you move your body, feel confident, and enjoy every workout.
            No pressure. No perfection. Just progress and positivity.
          </p>
        </div>

        {/* What you offer */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 ">
          <Link to="/zumba">
            <div className="bg-[#111] p-6 rounded-xl cursor-pointer hover:bg-[#222] transition-colors duration-300 hover:border-pink-500 hover:border-2 ">
              <h4 className="text-white font-semibold mb-2">💃 Fun Workouts</h4>
              <p className="text-white/60 text-sm hover:text-pink-500 ">
                Zumba, dance fitness, and high-energy sessions.
              </p>
            </div>
          </Link>

          <Link to="/arm">
            <div className="bg-[#111] p-6 rounded-xl cursor-pointer hover:bg-[#222] transition-colors duration-300 hover:border-pink-500 hover:border-2 ">
              <h4 className="text-white font-semibold mb-2">
                💪 Strength Training
              </h4>
              <p className="text-white/60 text-sm hover:text-pink-500">
                Arm, chest, and full-body workouts with dumbbells & machines.
              </p>
            </div>
          </Link>
          <Link to="/cardio">
            <div className="bg-[#111] p-6 rounded-xl cursor-pointer hover:bg-[#222] transition-colors duration-300 hover:border-pink-500 hover:border-2 ">
              <h4 className="text-white font-semibold mb-2">🔥 Cardio</h4>
              <p className="text-white/60 text-sm hover:text-pink-500">
                Burn calories and boost your energy anytime.
              </p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@moveWithMe-foryou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full  bg-[#e91e8c] hover:bg-pink-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            ▶ Join Me on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
