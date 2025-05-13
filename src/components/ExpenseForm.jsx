import { useState } from 'react';
//Bar graph to compare earnings and expenditure
import Chart from './Chart';

const ExpenseForm = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    category: '',
    item: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    const { category, item, amount, date } = form;

    // Validation
    if (!category) {
      alert('Please select a category');
      return;
    }
    if (!item) {
      alert('Please enter an item');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (!date) {
      alert('Please select a date');
      return;
    }

    const newExpense = {
      category,
      item,
      amount: parseFloat(amount),
      date
    };

    setExpenses(prev => [...prev, newExpense]);
    setForm({ category: '', item: '', amount: '', date: '' });
  };

  const handleDelete = (index) => {
    setExpenses(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3 className="font-bold text-center mt-6 text-xl">EXPENSE FORM</h3>
      <p className="text-center text-sm text-green-600">Enter your expenses and earnings for today</p>

      <form 
        className="bg-gray-100 mt-5 mb-10 m-10 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block mb-3">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full px-4 py-2"
          >
            <option value="">--Select--</option>
            <option value="earning">Earning</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block mt-3 mb-3">Item</label>
          <input
            type="text"
            name="item"
            value={form.item}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full px-4 py-2"
          />
        </div>

        <div>
          <label className="block mt-3 mb-3">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full px-4 py-2"
            placeholder="Enter the amount in Kshs"
          />
        </div>

        <div>
          <label className="block mt-3 mb-3">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full px-4 py-2"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-400 transition"
          >
            Add
          </button>
        </div>
      </form>

      <div className="p-6">
        <h3 className="font-bold text-center mt-6 text-2xl text-gray-800">EXPENSE LIST</h3>
        <p className="text-center text-green-600 text-sm mb-4">Transactions List</p>

        <div className="overflow-x-auto rounded-sm shadow-sm">
          <table className="min-w-full bg-white border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 border-b">Category</th>
                <th className="px-6 py-3 border-b">Item</th>
                <th className="px-6 py-3 border-b">Amount</th>
                <th className="px-6 py-3 border-b">Date</th>
                <th className="px-6 py-3 border-b">Delete</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((exp, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-6 py-4 border-b">{exp.category}</td>
                  <td className="px-6 py-4 border-b">{exp.item}</td>
                  <td className="px-6 py-4 border-b">{exp.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 border-b">{exp.date}</td>
                  <td className="px-6 py-4 border-b mb-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-700 p-2 rounded-sm text-white"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
              {expenses.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-400">No transactions added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Chart expenses={expenses}/>
      
    </div>
  );
};

export default ExpenseForm;
