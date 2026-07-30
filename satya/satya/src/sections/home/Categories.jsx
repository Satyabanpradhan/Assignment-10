import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Categories = ({ categories, handleCategoryClick }) => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Browse categories</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Shop your way.</h2>
        </div>
        <button onClick={() => navigate("/products")} className="flex items-center gap-1 text-sm font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer">
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.slice(0, 12).map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left text-sm font-medium capitalize text-white/75 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200 cursor-pointer"
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
