function Login() {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>

            <div>
                <label className="block text-gray-600 mb-1">Email address</label>
                <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                />
            </div>

            <button type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Login
            </button>
        </form>
    </div>
 );
}
export default Login;









