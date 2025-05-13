function Home() {
    return (
        <div>
            <div className="text-center bg-green-600 mt-10 m-4 mb-10 px-5 py-7 rounded-sm">
                <h3 className="text-white font-bold">Don't let your money have a mind of its own!</h3>
                <p className="">
                    <i>MoneyMinds</i> helps you spend your money wisely 
                    and control your money flow. Join it today to 
                    control your money with your mind!
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl gap-4 mt-5">
                <div class="border border-gray-400 px-10 py-10 rounded-xl">
                    <h3 class="font-semibold text-xl text-green-600 text-center">Record your expenses</h3>
                    <img src="src\assets\Expense Form.png"/>
                </div>
            
                <div class="border border-gray-400 px-10 py-10 rounded-xl">
                    <h3 class="font-semibold text-xl text-green-600 text-center">View your expenditure</h3>
                    <img src="src\assets\Expense List.png"/>
                </div>

                <div class="border border-gray-400 px-10 py-10 rounded-xl">
                    <h3 class="font-semibold text-xl text-green-600 text-center">See the statistics</h3>
                    <img src="src\assets\Bar Chart.png"/>
                </div>
            </div>
        </div>
    )
}
export default Home;