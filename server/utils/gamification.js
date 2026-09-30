export const calculateLevel = (xp) => {
  return Math.floor(Math.sqrt(xp) * 0.3) + 1;
}
export const getXPForNextLevel = (level) => {
  return Math.pow((level / 0.3), 2);
}
export const calculateStreak = (history) => {
  if (!history ||!history.length) return 0;
  const dates = [...new Set(history.map(d => new Date(d).toDateString()))].map(s => new Date(s)).sort((a,b) => b-a);
  let streak = 1;
  for (let i=0; i<dates.length-1; i++) {
    const diff = (dates[i] - dates[i+1]) / (1000*60*60*24);
    if (diff === 1) streak++; else break;
  }
  return streak;
}