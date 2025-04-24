"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

import ProtectedRoute from "../components/ProtectedRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import { account } from "../lib/appwrite";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await account.get();
                if (session) {
                    router.push("/dashboard");
                }
            } catch (error) {
                // User is not logged in
                console.log("No active session");
            } finally {
                setInitialLoading(false);
            }
        };

        checkSession();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await account.createEmailPasswordSession(email, password);
            router.push("/dashboard")
        } catch (err) {
            console.error(err)
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    if (initialLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
                <LoadingSpinner size="lg" color="text-white" />
            </div>
        );
    }

    return (
        <ProtectedRoute>
        <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            <Link 
                href="/" 
                className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-primary hover:bg-white transition-all duration-200 shadow-lg"
            >
                <Home size={20} />
                <span>Back to Home</span>
            </Link>

            <div className="max-w-md w-full mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                <div className="text-center">
                    <img 
                        src="/logo/logo.png" 
                        alt="Pixel Animation" 
                        className="h-16 w-auto mx-auto mb-6"
                    />
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                        Login to Your Account
                    </h2>
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-7 bg-secondary h-0.5"></div>
                        <div className="w-[10px] h-[10px] bg-secondary rotate-45"></div>
                        <span className="ml-3 text-gray-600">WELCOME BACK</span>
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md space-y-5">
                        <div className="group">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                disabled={loading}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                disabled={loading}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-500 text-sm text-center py-2 px-4 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <LoadingSpinner size="sm" color="text-white" />
                                    Logging in...
                                </div>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <Link href="/register" className="font-medium text-primary hover:text-primary/80">Sign up</Link>
                </p>
            </div>
        </div>
        </ProtectedRoute>
    );
}
