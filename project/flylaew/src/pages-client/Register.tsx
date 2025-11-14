import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Register: React.FC = () => {
    const [inputs, setInputs] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        Name: "",
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const navigate = useNavigate();

    //เก็บข้อมูลผู้ใช้
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    //เช็คว่า password และ confirm password ตรงกันหรือไม่
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputs.password !== inputs.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        //เก็บข้อมูลผู้ใช้ใน localStorage ของเบราว์เซอร์
        localStorage.setItem(
            "registeredUser",
            JSON.stringify({
                email: inputs.email,
                password: inputs.password,
                firstName: inputs.Name,
            })
        );

        alert("Register successful! Please log in.");
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-medium text-yellow-500 text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">First Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={inputs.Name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
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
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-amber-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-500"
                            >
                                {showPassword ? <ImEye /> : <ImEyeBlocked />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={inputs.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-amber-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-500"
                            >
                                {showConfirmPassword ? <ImEye /> : <ImEyeBlocked />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full font-medium text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500 px-4 py-2 rounded-lg"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-yellow-400 hover:text-yellow-500">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
