import { useState } from "react";
import { User, Mail , LockIcon, EyeClosed, EyeIcon } from "lucide-react";

export default function LoginForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", form);
  };

  return (
    <div className="flex min-h-screen overflow-hidden font-sans mb-11">
      {/* Left Panel */}
      <div className="relative flex w-[56%] flex-col items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end overflow-hidden">
        {/* Decorative Circles — top right */}
        <div className="pointer-events-none absolute -top-32 -right-32">
          <div className="h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute top-8 left-8 h-[360px] w-[360px] rounded-full border border-white/10" />
          <div className="absolute top-16 left-16 h-[300px] w-[300px] rounded-full border border-white/10" />
        </div>

        {/* Decorative Circles — bottom left */}
        <div className="pointer-events-none absolute -bottom-40 -left-24">
          <div className="h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute top-8 left-8 h-[360px] w-[360px] rounded-full border border-white/10" />
        </div>

        {/* Brand Name */}
        <h1 className="relative z-10 text-5xl font-black tracking-widest italic text-white uppercase select-none">
         Doctor's Point
        </h1>
      </div>

      {/* Right Panel */}
      <div className="flex w-[44%] flex-col items-center justify-center bg-white px-12">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h2 className="mb-1 text-3xl font-bold text-gradient-start">Hello!</h2>
          <p className="mb-8 text-sm text-gray-500">Sign Up to Get Started</p>

          {/* Form */}
          <div className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
              <User className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"/>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
              <Mail className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"/>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
             <LockIcon className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"/>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeIcon  className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" />
                ) : (
                  <EyeClosed  className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"  />
                )}
              </button>
            </div>

            {/* Register Button */}
            <button
              onClick={handleSubmit}
              className="w-full rounded-xl   bg-gradient-start py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#8168ac] active:scale-[0.98] cursor-pointer"
              >
              Register
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="fixed bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
    </div>
  );
}
