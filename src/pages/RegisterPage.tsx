import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Registration successful! (mock)");
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 animate-fadeIn">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h1>
                <form className="space-y-6" onSubmit={handleRegister}>
                    {/* Form fields for registration */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                        <input id="username" name="username" type="text" required className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
                        <input id="email" name="email" type="email" required className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <input id="password" name="password" type="password" required className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
                        Register
                    </button>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;