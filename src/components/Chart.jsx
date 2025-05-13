//The chart components
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

//Chart rendering
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({expenses}) => {
    //Calculate totals based on expense list
    const earningsTotal = expenses
        .filter(e => e.category === 'earning')//filter the earnings only
        .reduce((sum, e) => sum + e.amount, 0); 

    const expensesTotal = expenses
        .filter(e => e.category === 'expense')//filter the expenses only
        .reduce((sum, e) => sum + e.amount, 0); 

    const data = {
        labels: ['Earnings', 'Expenses'], //Labels on the chart
        datasets: [
        {
            label: 'Amount (Kshs)',
            data: [earningsTotal, expensesTotal],
            backgroundColor: ['#16a34a', '#dc2626'], //colors for the bars
        },
        ],
    };

    //Deciding whether you want to display the bars or not
    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Earnings vs Expenses' },
      },
    };

  return (
    <div className="p-6">
      <h3 className="font-bold text-center text-xl mt-10 mb-4 text-gray-700">Earnings vs Expenses</h3>
      <div className="max-w-xl mx-auto bg-white rounded-md shadow-sm p-4">
        {/* The bar chart */}
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
};
export default Chart;