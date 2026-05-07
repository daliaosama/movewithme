# Move With Me 💃

A fitness website built with **React + Vite + Tailwind CSS**, inspired by your design.

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## 📺 Adding Your YouTube Videos

Open `src/data/videos.js` and replace the placeholder video IDs with your real ones.

**How to find your YouTube video ID:**
- Go to your video: `https://www.youtube.com/watch?v=XXXXXXXXXXX`
- Copy the part after `v=` → that's your video ID

Example:
```js
{
  id: 'YOUR_VIDEO_ID_HERE',   // ← paste your ID here
  title: '30 Min Zumba Dance Party',
  duration: '30:45',
  category: 'Zumba',
},
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation bar
│   ├── Footer.jsx        # Footer with links & newsletter
│   ├── VideoCard.jsx     # YouTube video card with play button
│   └── PageHero.jsx      # Hero banner for workout pages
├── pages/
│   ├── Home.jsx          # Home page
│   ├── WorkoutPage.jsx   # Generic workout page layout
│   └── WorkoutPages.jsx  # Zumba, Arm, Back, Chest, Leg, Yoga pages
├── data/
│   └── videos.js         # ← PUT YOUR VIDEO IDs HERE
├── App.jsx               # Router setup
├── main.jsx
└── index.css             # Tailwind + custom styles
```

## 🎨 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/zumba` | Zumba workouts |
| `/arm` | Arm workouts |
| `/back` | Back workouts |
| `/chest` | Chest workouts |
| `/leg` | Leg workouts |
| `/yoga` | Yoga workouts |

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router DOM 6**
- **Google Fonts** (Bebas Neue, Dancing Script, Outfit)
