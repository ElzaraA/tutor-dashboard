// src/components/SubjectChart.jsx
    import { Pie } from 'react-chartjs-2';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

    // Регистрируем элементы, необходимые для круговой диаграммы
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
    labels: ['ОГЭ', 'ЕГЭ', 'Разговорный', 'Повышение успеваемости'],
    datasets: [
        {
        label: '# Уроков',
        data: [2, 4, 13, 8], // Твои данные
        backgroundColor: [
            '#BD87F7', // Белый
            '#C4D9FF', // Светло-голубой
            '#80B3FF', // Голубой
            '#3385FF', // СинийS
        ],
        borderColor: [
            '#107A9C', // Цвет фона карточки для рамки
        ],
        borderWidth: 1,
        },
    ],
    };

    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'bottom',
        labels: {
            color: '#FFFFFF', // Цвет текста легенды (белый для темного фона)
            font: { size: 14 }
        }
        },
    },
    };

    export default function SubjectChart() {
    return (
        <div className="w-full h-full flex justify-center items-center">
        <div className="w-48 h-48 md:w-64 md:h-64"> {/* Размер диаграммы */}
            <Pie data={data} options={options} />
        </div>
        </div>
    );
    }