import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Hero from "../sections/home/Hero";
import Categories from "../sections/home/Categories";
import TopRated from "../sections/home/TopRated";
import NewArrival from "../sections/home/NewArrival";

const Home = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=0");
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            const res = await axios.get(
                "https://dummyjson.com/products/categories",
            );
            setCategories(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const topRatedProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 4);

    const handleCategoryClick = (category) => {
        if (category === "all") {
            navigate("/products");
        } else {
            navigate(`/products?category=${encodeURIComponent(category)}`);
        }
    };

    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color)">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                
                <Hero />
                
                <Categories 
                    categories={categories} 
                    handleCategoryClick={handleCategoryClick} 
                />
                
                <TopRated 
                    topRatedProducts={topRatedProducts} 
                />
                
                <NewArrival 
                    newArrivals={newArrivals} 
                />

            </div>
        </main>
    );
};

export default Home;
