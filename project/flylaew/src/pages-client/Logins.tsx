import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import axios from "axios";

interface User {
    id: string;
    email: string;
    password: string;
}

const Logins: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>("/LoginData.json"); //  ดึงข้อมูลจากjson
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const foundUser = users.find(
            (user) => user.email === email && user.password === password // หา user ที่มี email และ password ตรงกับข้อมูลที่กรอก
        );

        console.log("foundUser:", foundUser);

        if (foundUser) {
            setError("");
            navigate("/");
        } else {
            setError("Invalid email or password.");
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-medium text-yellow-500 text-center mb-6">
                    Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full font-medium text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-yellow-500  hover:via-amber-400 hover:to-orange-200 px-4 py-2 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-yellow-400 hover:text-yellow-500"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Logins;
