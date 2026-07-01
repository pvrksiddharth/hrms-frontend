import LoginForm from "./components/LoginForm";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <SignedOut>
        <div className="flex h-screen overflow-hidden bg-slate-100">
          {/* Left Side */}

          <div className="relative hidden lg:block lg:w-1/2">
            <img
              src="/login-bg.png"
              className="m-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-2xl object-cover shadow-2xl"
            />

            <div className="absolute inset-3 rounded-2xl bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            <div className="absolute left-20 top-24 max-w-lg text-white">
              <h1 className="text-6xl font-extrabold">NEXA HRMS</h1>

              <p className="mt-6 text-2xl leading-relaxed">
                Smarter Workforce.
                <br />
                Better Decisions.
              </p>

              <div className="mt-10 space-y-7">
                <div className="w-[360px] rounded-xl border border-white/25 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl transition-all hover:translate-x-2 hover:bg-white/15">
                  1,250+ Employees Managed
                </div>

                <div className="w-[360px] rounded-xl border border-white/25 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl transition-all hover:translate-x-2 hover:bg-white/15">
                  98.7% Attendance Accuracy
                </div>

                <div className="w-[360px] rounded-xl border border-white/25 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl transition-all hover:translate-x-2 hover:bg-white/15">
                  Payroll Processing in Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <LoginForm />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex min-h-screen flex-col items-center justify-start gap-6 bg-slate-100 pl-20">
          <h1 className="text-4xl font-bold">HRMS Dashboard</h1>

          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </>
  );
}

export default App;