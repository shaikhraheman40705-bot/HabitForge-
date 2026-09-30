# HabitForge 🔥 - Gamified Habit Tracker

**Live Demo:** https://habitforge-app-zeta.vercel.app
**Backend API:** https://habitforge-backend-three.vercel.app
**Test Login:** demo@habitforge.com / 123456

## What is this?
HabitForge helps users build habits with game-like motivation. Daily check-in se XP milta hai aur Level badhta hai.

## Gamification Logic (Important for Internship)
- **XP System:** Har habit complete karne pe +10 XP
- **Level Formula:** Level = floor( sqrt(XP) * 0.3 ) + 1
- Example: 100 XP = Level 4, 700 XP = Level 8

## Streak Logic
- Duplicate dates ko remove karta hai
- Dates ko sort karta hai (Set + Sort technique)
- Agar lagatar 1 din ka gap hai to streak continue, nahi to reset to 1
- Longest Streak alag se track hota hai

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, Recharts
- Backend: Node.js, Express, MongoDB Atlas
- Auth: JWT + bcrypt
- Deployment: Vercel (Frontend + Backend)

## Features Implemented
- Add / Delete Habits with Icon & Color
- Daily Check-in with XP
- GitHub Style Heatmap (Contribution Graph)
- XP, Level, Longest Streak Dashboard
- Premium Upgrade Page UI
- Fully Responsive

## How to Run Locally
1. `git clone <repo-url>`
2. Frontend: `cd client && npm install && npm run dev`
3. Backend: `cd server && npm install`
4. Create `server/.env`:
   MONGODB_URI=your_mongo_uri
   JWT_SECRET=mysecret123
   PORT=5000
5. `npm start`

## Deployed on Vercel
Frontend and Backend both live.

Made for Persevex Studio Internship Task
