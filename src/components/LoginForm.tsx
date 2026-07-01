import { useState } from "react";
import { useSignIn, useClerk } from "@clerk/clerk-react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginForm() {
  const { signIn, isLoaded } = useSignIn();
  const { setActive } = useClerk();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({
          session: result.createdSessionId,
        });
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Invalid Credentials");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-[500px] rounded-2xl bg-white/95 p-10 shadow-2xl backdrop-blur-xl transition-all"
    >
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
        Welcome Back
      </h1>

      <p className="mt-3 text-lg text-slate-500">
        Sign in to access your HRMS Workspace.
      </p>

      {/* EMAIL */}

      <div className="mt-10">
        <label className="mb-2 block font-semibold text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="admin@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-16 w-full rounded-xl border border-slate-300 px-5 py-4 text-lg outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* PASSWORD */}

      <div className="mt-6">
        <label className="mb-2 block font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-16 w-full rounded-xl border border-slate-300 px-5 py-4 pr-14 text-lg outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-5 text-slate-500 transition-colors hover:text-blue-600"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>
      </div>

      {/* OPTIONS */}

      <div className="mt-5 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* ERROR */}

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* LOGIN */}

      <button
        disabled={loading}
        className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98] disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Authenticating...
          </>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}