import PageHero from "../components/PageHero";
import banner from '../assets/b.png';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      
      <PageHero
        title="TERMS & CONDITIONS"
        subtitle="Please Read Carefully 📜"
        description="By using this website, you agree to the following terms."
        icon="⚖️"
        accent="#e91e8c"
        banner={banner}
      />

      <section className="max-w-4xl mx-auto px-4 py-16 text-white/70 leading-relaxed space-y-6">

        <h2 className="text-white text-xl font-semibold">1. Use of Content</h2>
        <p>
          All content on this website is for informational and educational purposes only.
          You may not copy, reproduce, or distribute content without permission.
        </p>

        <h2 className="text-white text-xl font-semibold">2. Fitness Disclaimer</h2>
        <p>
          All workouts and fitness advice are provided for general guidance only.
          You should consult a physician before starting any exercise program.
          You perform all exercises at your own risk.
        </p>

        <h2 className="text-white text-xl font-semibold">3. External Links</h2>
        <p>
          This website may contain links to third-party platforms such as YouTube.
          We are not responsible for the content or policies of those platforms.
        </p>

        <h2 className="text-white text-xl font-semibold">4. Limitation of Liability</h2>
        <p>
          We are not responsible for any injuries, damages, or losses resulting from
          the use of this website or its content.
        </p>

        <h2 className="text-white text-xl font-semibold">5. Changes to Terms</h2>
        <p>
          These terms may be updated at any time without notice.
        </p>

      </section>
    </div>
  );
}