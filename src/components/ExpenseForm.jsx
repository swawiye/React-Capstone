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

            <div className="p-6">
              <h3 className="font-bold text-center mt-6 text-2xl text-gray-800">EXPENSE LIST</h3>

              <div className="mt-4">
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
                      {/* Example row */}
                      {/* <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 border-b">Food</td>
                        <td className="px-6 py-4 border-b">Groceries</td>
                        <td className="px-6 py-4 border-b">$50.00</td>
                        <td className="px-6 py-4 border-b">2025-05-12</td>
                        <td className="px-6 py-4 border-b text-red-500 cursor-pointer">Delete</td>
                      </tr> */}
                    </tbody>

                    <tfoot className="bg-gray-50">
                      <tr>
                        <td className="px-6 py-3 font-semibold text-right" colSpan="5">
                          {/* Add footer content if needed */}
                        </td>
                      </tr>
                    </tfoot>

                  </table>

                </div>
                
              </div>

            </div>

        </div>
    )
}
export default ExpenseForm;