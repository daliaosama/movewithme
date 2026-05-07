import PageHero from "../components/PageHero";
import banner from '../assets/b.png';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      
      <PageHero
        title="PRIVACY POLICY"
        subtitle="Your Data Matters 🔒"
        description="We respect your privacy and keep things transparent."
        icon="🛡️"
        accent="#e91e8c"
        banner={banner}
      />

      <section className="max-w-4xl mx-auto px-4 py-16 text-white/70 leading-relaxed space-y-6">
        
        <p>
          This website may collect basic information such as browser type,
          pages visited, and time spent on the site to improve user experience.
        </p>

        <p>
          We may use third-party services like YouTube to display videos.
          These services may collect data according to their own privacy policies.
        </p>

        <p>
          We do not sell, trade, or share your personal information with third parties.
        </p>

        <p>
          By using this website, you agree to this privacy policy.
        </p>

        <p>
          If you have any questions, feel free to contact us.
        </p>

      </section>
    </div>
  );
}