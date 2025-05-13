const ExpenseForm = () => {
    return(
        <div>
            <h3 className="font-bold text-center mt-6 text-xl">EXPENSE FORM</h3>
            <p className="text-center text-sm text-green-600">Enter your expenses and earnings for today</p>
            <form className="bg-gray-100 mt-5 mb-10 m-10 p-15">
                <div>
                    <label className="block mb-3">Category</label>
                    <select id="category-select" className="border border rounded-sm w-full px-4 py-2">
                        <option value="earning">Earning</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div>
                    <label className="block mt-3 mb-3">Item</label>
                    <input 
                    type="text"
                    className="border border rounded-sm w-full px-4 py-2"
                    />
                </div>
                <div>
                    <label className="block mt-3 mb-3">Amount</label>
                    <input 
                    type="number"
                    className="border border rounded-sm w-full px-4 py-2"
                    placeholder="Enter the amount in Kshs"
                    />
                </div>
                <div>
                    <label className="block mt-3 mb-3">Date</label>
                    <input 
                    type="date"
                    className="border border rounded-sm w-full px-4 py-2"
                    />
                </div>
                <div>
                    <button 
                    type="submit" 
                    className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-400 transition"
                    >
                    Add
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;