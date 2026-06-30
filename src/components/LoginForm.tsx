import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";

export default function LoginForm() {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

        async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        if (!isLoaded || !signIn) return;

        setLoading(true);
        setError("");

        try {
            const result = await signIn.create({
            identifier: email,
            password,
            });

            if (result.status === "complete") {
            window.location.reload();
            }

        } catch (err: any) {
            setError(err.errors?.[0]?.message || "Login failed.");
        }

        setLoading(false);
        }

  return (
    <form
      onSubmit={handleLogin}
      className="w-[520px] rounded-3xl bg-white p-12 shadow-2xl"
    >
      <h1 className="text-5xl font-bold tracking-tight">
        Welcome Back
      </h1>

      <p className="mt-3 mb-10 text-lg text-gray-500">
        Sign in to access your HRMS Workspace.
      </p>

      <label className="font-semibold">
        Email
      </label>

       <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 mb-8 h-14 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-blue-600"
       />

      <label className="font-semibold">
        Password
      </label>

        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 mb-8 h-14 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-blue-600"
        />

            {error && (
        <p className="mt-3 text-red-600">
            {error}
        </p>
        )}
        
        <button
        type="submit"
        disabled={loading}
        className="mt-10 h-14 w-full rounded-xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >

        {loading ? "Signing In..." : "Login Securely"}     
    
        </button>
    </form>
  );
}