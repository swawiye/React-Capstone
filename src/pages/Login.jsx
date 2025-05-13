import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebaseConfig'; // import your Firebase auth config

function Login() {
    // Set up state for form inputs
    const [form, setForm] = useState({
      email: '',
      password: '',
    });

    const [error, setError] = useState(''); //error checking
    const navigate = useNavigate(); //for navigation

    // Handle input change and update form state
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
        // Create user with Firebase Auth
        const userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        console.log('User created and name saved:', userCredential.user);

        // Redirect to login after successful sign-up
        navigate('/expenseform');
      } catch (err) {
        setError(err.message);
        console.error('Error signing up:', err);
      }
    };
    
    return (
    <div className="flex items-center justify-center min-h-screen bg-green-600">
        <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-green-600">Log In</h2>

            <div>
                <label className="block mb-1">Email address</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block mb-1">Password</label>
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
                />
            </div>

            {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
            )}

            <button 
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-400 transition"
            >
                Login
            </button>
        </form>
    </div>
 );
}
export default Login;









