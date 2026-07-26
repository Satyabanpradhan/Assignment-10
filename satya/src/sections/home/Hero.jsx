import { ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="my-6 grid overflow-hidden rounded-lg bg-blue-600 text-white md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
                    Welcome to SkyMart
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                    Simple shopping, everyday.
                </h1>
                <p className="mt-4 max-w-md text-blue-100">
                    Find useful products, save your favourites, and add items to your cart in just a few clicks.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                    <button
                        onClick={() => navigate("/products")}
                        className="flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-blue-700 hover:bg-blue-50 cursor-pointer"
                    >
                        <ShoppingBag size={18} /> Shop now
                    </button>
                    <button
                        onClick={() => navigate("/products?category=smartphones")}
                        className="flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 font-medium hover:bg-white/10 cursor-pointer"
                    >
                        Explore phones <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="min-h-64 bg-blue-500 p-6 md:p-10">
                <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop"
                    alt="Online shopping"
                    className="h-full w-full rounded-md object-cover shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
