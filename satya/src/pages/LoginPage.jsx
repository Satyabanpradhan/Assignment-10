import { ArrowRight, LockKeyhole, Mail, ShoppingBag, Sparkles } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { register, loginFormSubmit, handleSubmit, navigate, errors, isSubmitting } = useAuth();

  return (
    <main className="min-h-screen bg-[#10122a] px-4 py-5 text-white sm:px-8 sm:py-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-xl font-bold cursor-pointer">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-500 text-[#10122a]">
            <Sparkles size={18} fill="currentColor" />
          </span>
          Sky<span className="text-cyan-300">Mart</span>
        </button>
        <button
          onClick={() => navigate("/auth/register")}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 hover:border-cyan-300 hover:text-cyan-300 cursor-pointer"
        >
          Create account
        </button>
      </header>

      <section
        className="mx-auto mt-8 grid min-h-[calc(100vh-9rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 lg:grid-cols-[0.9fr_1.1fr]"
        style={{
          background: "radial-gradient(circle at 15% 15%, rgba(34,211,238,.24), transparent 28%), radial-gradient(circle at 75% 78%, rgba(139,92,246,.32), transparent 32%), #171935",
        }}
      >
        <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-12 lg:p-16">
          <div className="absolute -left-20 bottom-8 h-48 w-48 rounded-full border border-cyan-300/25" />
          <div className="absolute -left-6 bottom-24 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300" /> Your shopping space
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Find your next<br />
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">favourite thing.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/55 sm:text-lg">
              One small sign-in brings your saved products, cart, and the latest arrivals together.
            </p>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-cyan-300">24/7</p>
              <p className="mt-1 text-white/55">Shop when it suits you</p>
            </div>
            <div className="rounded-2xl border border-violet-300/30 bg-violet-400/10 p-4 backdrop-blur-sm">
              <ShoppingBag className="text-violet-200" size={25} />
              <p className="mt-3 text-white/55">Everything saved in one place</p>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#0c0d20]/45 p-6 sm:p-10">
          <form onSubmit={handleSubmit(loginFormSubmit)} className="w-full rounded-3xl border border-white/15 bg-[#171a38]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Member access</p>
            <h2 className="mt-3 text-3xl font-bold">Let’s get you in.</h2>
            <p className="mt-2 text-sm text-white/50">Enter your details below to continue.</p>

            <label className="mt-8 block text-sm font-medium text-white/80">Email address</label>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/15 bg-[#0d0f25]/60 px-4 focus-within:border-cyan-300">
              <Mail size={18} className="text-cyan-300" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/30"
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })}
              />
            </div>
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}

            <label className="mt-5 block text-sm font-medium text-white/80">Password</label>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/15 bg-[#0d0f25]/60 px-4 focus-within:border-cyan-300">
              <LockKeyhole size={18} className="text-cyan-300" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/30"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters required" } })}
              />
            </div>
            {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>}

            <button type="submit" disabled={isSubmitting} className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-400 px-5 py-4 font-bold text-[#10122a] hover:from-cyan-200 hover:to-violet-300 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer">
              {isSubmitting ? "Signing in..." : "Sign in"} <ArrowRight size={19} />
            </button>
            <p className="mt-6 text-center text-sm text-white/50">
              New to SkyMart? <button onClick={() => navigate("/auth/register")} type="button" className="font-semibold text-cyan-300 hover:underline cursor-pointer">Create your account</button>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
