import LoginForm from "./components/LoginForm";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <SignedOut>
        <div className="flex min-h-screen">

          {/* Left Side */}

          <div className="hidden lg:block lg:w-1/2">
            <img
              src="/login-bg.png"
              alt="HRMS"
              className="h-screen w-full object-cover"
            />
          </div>

          {/* Right Side */}

          <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <LoginForm />
          </div>

        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100">

          <h1 className="text-4xl font-bold">
            HRMS Dashboard
          </h1>

          <UserButton afterSignOutUrl="/" />

        </div>
      </SignedIn>
    </>
  );
}

export default App;