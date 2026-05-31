    // src/components/ProgressChart.jsx
    import { Line } from 'react-chartjs-2';
    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

    // Регистрируем элементы для линейного графика
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

    const labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Успеваемость',
        data: [65, 72, 70, 85, 82, 95], // Твои данные
        fill: true, // Закраска под графиком
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Полупрозрачный белый
        borderColor: '#FFFFFF', // Цвет линии
        tension: 0.4, // Плавность линий (0 - прямые, 0.4 - волна)
        },
    ],
    };

    const options = {
    responsive: true,
    scales: {
        y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 255, 255, 0.1)' }, // Цвет сетки (едва заметный)
        ticks: { color: '#FFFFFF' } // Цвет цифр
        },
        x: {
        grid: { display: false },
        ticks: { color: '#FFFFFF' }
        }
    },
    plugins: {
        legend: { display: false }, // Скрываем легенду, чтобы было чище
    },
    };

    export default function ProgressChart() {
    return (
        <div className="w-full h-full flex justify-center items-center p-2">
        <Line data={data} options={options} />
        </div>
    );
    }