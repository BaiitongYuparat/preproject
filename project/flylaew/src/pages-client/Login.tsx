import React from "react";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const Login: React.FC = () => {
    const [inputs, setInputs] = React.useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login data:", inputs);
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-medium text-yellow-500 text-center mb-6">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                            placeholder="example@gmail.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition duration-200"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={inputs.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-amber-500 focus:outline-none transition duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-500"
                            >
                                {showPassword ? (
                                    <ImEye />
                                ) : (
                                    <ImEyeBlocked />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full font-medium text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500 shadow-md hover:shadow-lg focus:outline-none transition duration-200 py-2 px-4 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Register */}
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-yellow-400 hover:text-yellow-500 transition"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
