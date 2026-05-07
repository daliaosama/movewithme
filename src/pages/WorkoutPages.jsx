import { videos } from '../data/videos';
import WorkoutPage from './WorkoutPage';
import zumbaBanner from '../Assets/zumbabanner.png';
import armBanner from '../Assets/armbanner.png';
import chestBanner from '../Assets/chestbanner.png';
import yogaBanner from '../Assets/yogabanner.png';
import cardioBanner from '../Assets/cardiobanner.png';
import legBanner from '../Assets/legbanner.png';
import backBanner from '../Assets/backbanner.png';

export function ZumbaPage() {
  return (
    <WorkoutPage
      title="ZUMBA"
      subtitle="Dance Your Heart Out"
      description="High-energy dance workouts to Latin beats. Burn calories while having the time of your life!"
      icon="💃"
      accent="#e91e8c"
      videos={videos.zumba}
      banner={zumbaBanner}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_3QzXmp0Kmg4QfSD6zvfKZh"
    />
  );
}

export function ArmPage() {
  return (
    <WorkoutPage
      title="ARM WORKOUTS"
      subtitle="Sculpt & Tone"
      description="Build strong, toned arms with these targeted workouts. No gym required!"
      icon="💪"
      accent="#ff6b35"
      videos={videos.arm}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_1bgBvYUEqrvT0KNTFvrWxR"
      banner={armBanner}
    />
  );
}

export function BackPage() {
  return (
    <WorkoutPage
      title="BACK WORKOUTS"
      subtitle="Strong Back, Strong You"
      description="Strengthen and sculpt your back for better posture and a powerful physique."
      icon="🏋️"
      accent="#7c3aed"
      videos={videos.back}
      banner={backBanner}
    />
  );
}

export function ChestPage() {
  return (
    <WorkoutPage
      title="CHEST WORKOUTS"
      subtitle="Lift & Define"
      description="Tone and lift your chest with effective exercises you can do anywhere."
      icon="🫀"
      accent="#059669"
      videos={videos.chest}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_2ThQKCTfQPo2NcWH_Ia8-y"
      banner={chestBanner}
    />
  );
}

export function LegPage() {
  return (
    <WorkoutPage
      title="LEG WORKOUTS"
      subtitle="Strong Legs, Strong Base"
      description="Build powerful, sculpted legs and glutes with these targeted workouts."
      icon="🦵"
      accent="#2563eb"
      videos={videos.leg}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_1Mf5ilukyNmPOsH5fKF2Tp"
      banner={legBanner}
    />
  );
}

export function YogaPage() {
  return (
    <WorkoutPage
      title="YOGA"
      subtitle="Breathe. Stretch. Find Balance."
      description="Reconnect with your body and mind through calming, strengthening yoga flows."
      icon="🧘"
      accent="#d97706"
      videos={videos.yoga}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_1rjlsZ8H_G5WN0PSO_5onZ"
      banner={yogaBanner}
    />
  );
}
export function CardioPage() {
  return (
    <WorkoutPage
      title="CARDIO"
      subtitle="Push Harder Every Day."
      description="Fast-paced cardio sessions designed to increase endurance, torch fat, and keep your heart strong."
      icon="🏃"
      accent="#d97706"
      videos={videos.cardio}
      playlistLink="https://www.youtube.com/playlist?list=PLl4rSoQc6H_2C_B80V4QJ5vEaBbZ8szw5"
      banner={cardioBanner}
    />
  );
}