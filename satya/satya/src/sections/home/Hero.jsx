import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative my-6 grid overflow-hidden rounded-[2rem] border border-white/15 text-white md:grid-cols-[1.05fr_.95fr]" style={{ background: "radial-gradient(circle at 12% 20%, rgba(34,211,238,.25), transparent 30%), radial-gradient(circle at 85% 72%, rgba(139,92,246,.32), transparent 34%), #171935" }}>
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full border border-cyan-300/20" />
            <div className="relative flex flex-col justify-center p-8 sm:p-12 md:p-14">
                <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    <Sparkles size={16} fill="currentColor" /> Curated for your day
                </p>
                <h1 className="max-w-xl text-5xl font-bold leading-[.95] tracking-tight md:text-6xl">
                    Find your next <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">favourite thing.</span>
                </h1>
                <p className="mt-6 max-w-md text-base leading-7 text-white/60 sm:text-lg">
                    Discover useful products, save the ones you love, and make every checkout feel effortless.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                    <button
                        onClick={() => navigate("/products")}
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-400 px-5 py-3 font-bold text-[#10122a] hover:from-cyan-200 hover:to-violet-300 cursor-pointer"
                    >
                        <ShoppingBag size={18} /> Shop now
                    </button>
                    <button
                        onClick={() => navigate("/products?category=smartphones")}
                        className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium text-white/90 hover:border-cyan-300 hover:bg-white/10 cursor-pointer"
                    >
                        Explore phones <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="relative min-h-72 bg-[#0c0d20]/40 p-6 md:p-10">
                <div className="absolute right-5 top-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur-sm">New picks weekly</div>
                <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop"
                    alt="Online shopping"
                    className="h-full w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
                />
            </div>
        </section>
    );
};

export default Hero;
