import { useState } from 'react';

function App(){
  const [habits, setHabits] = useState([
    { _id: '1', title: 'Drink Water', icon: '💧', color: '#10b981', streak: 5 },
    { _id: '2', title: 'Exercise', icon: '💪', color: '#f59e0b', streak: 2 }
  ]);
  const [title, setTitle] = useState('');

  const addHabit = ()=>{
    if(!title) return;
    setHabits([...habits, {_id: Date.now(), title, icon: '🔥', color: '#10b981', streak: 0}]);
    setTitle('');
  }
  const checkIn = (id)=>{
    setHabits(habits.map(h=> h._id===id? {...h, streak: h.streak+1} : h));
    alert('Checked-In! +10 XP 🔥');
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="p-4 flex gap-4 border-b border-slate-700 font-bold">
        <span>HabitForge 🔥</span>
        <span className="bg-slate-800 px-3 py-1 rounded text-sm">Level 8 | 700 XP</span>
      </nav>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex gap-2 mb-6">
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New Habit: e.g. Drink Water" className="flex-1 p-3 rounded bg-slate-800 border border-slate-700" />
          <button onClick={addHabit} className="bg-emerald-500 px-6 rounded font-bold text-black">+ Add</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {habits.map(h=>(
            <div key={h._id} style={{borderColor: h.color}} className="border-2 p-4 rounded-xl bg-slate-800">
              <div className="text-3xl">{h.icon}</div>
              <h3 className="font-bold mt-2">{h.title}</h3>
              <p className="text-sm text-slate-400">Streak: {h.streak} 🔥</p>
              <button onClick={()=>checkIn(h._id)} className="mt-3 w-full bg-white text-black p-2 rounded font-bold">Check-in +10 XP</button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="font-bold mb-3">GitHub Style Heatmap (Demo)</h3>
          <div className="grid grid-cols-[repeat(20,1fr)] gap-1">
            {Array.from({length: 120}, (_,i)=>(<div key={i} className={`w-4 h-4 rounded-sm ${Math.random()>0.3? 'bg-emerald-500' : 'bg-slate-700'}`}></div>))}
          </div>
          <p className="mt-3 text-xs text-slate-400">🔒 Premium me 365 days + Line Graph unlock hoga</p>
        </div>
      </div>
    </div>
  )
}
export default App;