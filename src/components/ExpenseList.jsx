const ExpenseList = () => {
    return(
        <div>
            <h2>Expense Form</h2>
            <div class="expenses-list">
                <h2>Transactions list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody id="expenses-table-body">
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td id="total-amount"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default ExpenseList;