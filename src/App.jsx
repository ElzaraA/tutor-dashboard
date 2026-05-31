// src/App.jsx

// Импортируем наш компонент карточки
import StatsCard from './components/StatsCard'

function App() {
  return (
    // Общий фон страницы (темный, минимум на весь экран)
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      
      {/* Заголовок страницы по центру */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          🎓 Tutor Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          Cтатистика по студентам
        </p>
      </header>
      {/* Контейнер для карточек (Сетка) */}
      {/* На телефоне 1 колонка, на компьютере (md) — 3 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Карточка 1 */}
        <StatsCard 
          title="Всего учеников" 
          value="12" 
          change="+2 за месяц" 
        />

        {/* Карточка 2 */}
        <StatsCard 
          title="Уроков проведено" 
          value="48" 
          change="+15% vs прошлый" 
        />

        {/* Карточка 3 */}
        <StatsCard 
          title="Средний балл" 
          value="4.7" 
          change="+0.3 за семестр" 
        />

      </div>
    </div>
  )
}

export default App