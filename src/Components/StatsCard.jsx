// src/components/StatsCard.jsx

export default function StatsCard({ title, value, change }) {
  const isPositive = change?.startsWith('+') ?? false;

  return (
    // Заменил фон на твой цвет + добавил тёмную обводку для контраста
    <div className="bg-[#107A9C] p-6 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
      
      <p className="text-white/90 text-sm font-medium mb-2">
        {title}
      </p>

      <p className="text-4xl font-bold text-white mb-2">
        {value}
      </p>
      
      {/* Бейдж с динамикой */}
      <p className="text-sm font-semibold text-white">
        <span className={`px-2 py-0.5 rounded ${isPositive ? 'bg-emerald-500/30 text-emerald-100' : 'bg-rose-500/30 text-rose-100'}`}>
          {change || '—'}
        </span>
      </p>
      
    </div>
  );
}