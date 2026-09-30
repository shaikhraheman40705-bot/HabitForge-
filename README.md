# HabitForge - Gamified Habit Tracker

Live Demo: https://habitforge.vercel.app
Test Login: demo@habitforge.com / 123456

## What is this?
HabitForge helps users build habits with game-like motivation. Daily check-in se XP milta hai aur Level badhta hai.

## Gamification Logic (Important for Internship)
- **XP System:** Har habit complete karne pe +10 XP
- **Level Formula:** Level = floor( sqrt(XP) * 0.3 ) + 1
- Example: 100 XP = Level 4

## Streak Logic
- Duplicate dates ko remove karta hai
- Dates ko sort karta hai
- Agar lagatar 1 din ka gap hai to streak continue, nahi to reset

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, Recharts
- Backend: Node.js, Express, MongoDB
- Auth: JWT

## Features
- Add / Delete Habits with Icon & Color
- Daily Check-in
- GitHub Style Heatmap
- XP, Level, Longest Streak
- Premium Upgrade Page UI

## How to Run Locally
1. npm install
2. cd server -> npm install
3. Create server/.env file
4. npm run dev

Made for Persevex Studio Internship Task