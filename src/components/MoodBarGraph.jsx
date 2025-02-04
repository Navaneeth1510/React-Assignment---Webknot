import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MoodBarGraph({ history }) {
    const moodCounts = history.reduce((acc, entry) => {
        acc[entry.mood] = (acc[entry.mood] || 0) + 1;
        return acc;
    }, {});
    const data = {
        labels: Object.keys(moodCounts),
        datasets: [{
            label: 'Mood Frequency',
            data: Object.values(moodCounts),
            backgroundColor: ['#FF6B6B', '#4CAF50', '#FFC107'], 
        }],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Mood Frequency',
            },
        },
    };

    return (
        <div className="w-full">
            <Bar data={data} options={options} />
        </div>
    );
}
