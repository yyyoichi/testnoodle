import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TagGraph ({subject}) {
  let labels = subject["tag"]["labels"]
  let scores = subject["tag"]["scores"]
  //labelsの数は3～5コ。+その他
  //その他の色のロジックは必要かも
  const bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];
  const bdColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];
  const l = scores.length
  const data = {
    labels: labels,
    datasets: [
      {
        label: '# 授業割合',
        data: scores,
        backgroundColor: bgColors.slice(0, l),
        borderColor: bdColors.slice(0, l),
        borderWidth: 1,
      },
    ]
  }
  return <Pie data={data}/>
}