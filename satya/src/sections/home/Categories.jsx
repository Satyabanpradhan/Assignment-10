import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Categories = ({ categories, handleCategoryClick }) => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600">Browse categories</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">Shop by category</h2>
        </div>
        <button onClick={() => navigate("/products")} className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline cursor-pointer">
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.slice(0, 12).map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-5 text-left text-sm font-medium capitalize text-slate-700 shadow-sm hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
