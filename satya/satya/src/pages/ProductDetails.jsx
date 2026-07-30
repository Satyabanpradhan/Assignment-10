import axios from "axios";
import { ArrowLeft, Heart, HeartOff, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { MyStore } from "../contexts/MyContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart, incrementQuantity, decrementQuantity, wishlist, toggleWishlist } = useContext(MyStore);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return <main className="flex min-h-[70vh] items-center justify-center text-slate-500">Loading product...</main>;
  }

  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-slate-600">
        <p>Product could not be found.</p>
        <button onClick={() => navigate("/products")} className="rounded-md bg-blue-600 px-4 py-2 text-white cursor-pointer">Back to products</button>
      </main>
    );
  }

  const cartProduct = cartItems.find((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const finalPrice = product.price * (1 - product.discountPercentage / 100);

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.success(isInWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <main className="w-full bg-slate-50 px-4 py-8 text-slate-800 md:px-8 md:py-12">
      <section className="mx-auto max-w-6xl">
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline cursor-pointer">
          <ArrowLeft size={17} /> Back to products
        </button>

        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="flex min-h-80 items-center justify-center bg-slate-100 p-8 md:p-12">
            <img src={product.thumbnail} alt={product.title} className="max-h-[420px] w-full object-contain" />
          </div>

          <div className="p-6 md:p-10">
            <p className="text-sm font-medium capitalize text-blue-600">{product.category}</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{product.title}</h1>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1 font-medium text-slate-700"><Star size={17} className="fill-amber-400 text-amber-400" /> {product.rating}</span>
              <span className="text-slate-400">|</span>
              <span className={product.stock > 0 ? "text-emerald-600" : "text-red-500"}>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
            </div>

            <p className="mt-6 leading-7 text-slate-600">{product.description}</p>

            <div className="mt-7 border-y border-slate-200 py-5">
              <p className="text-sm text-slate-500">Price</p>
              <div className="mt-1 flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900">${finalPrice.toFixed(2)}</span>
                {product.discountPercentage > 0 && <span className="pb-1 text-sm text-slate-400 line-through">${product.price.toFixed(2)}</span>}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {cartProduct ? (
                <div className="flex flex-1 items-center justify-between rounded-md bg-blue-600 p-1 text-white">
                  <button onClick={() => decrementQuantity(product.id)} className="rounded p-3 hover:bg-white/15 cursor-pointer"><Minus size={19} /></button>
                  <span className="font-semibold">{cartProduct.quantity} in cart</span>
                  <button onClick={() => incrementQuantity(product.id)} className="rounded p-3 hover:bg-white/15 cursor-pointer"><Plus size={19} /></button>
                </div>
              ) : (
                <button onClick={handleAddToCart} className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer">
                  <ShoppingCart size={19} /> Add to cart
                </button>
              )}
              <button onClick={handleWishlist} className={`rounded-md border px-4 transition-colors cursor-pointer ${isInWishlist ? "border-red-200 bg-red-50 text-red-500" : "border-slate-200 text-slate-600 hover:bg-slate-100"}`} aria-label="Toggle wishlist">
                {isInWishlist ? <Heart size={21} fill="currentColor" /> : <HeartOff size={21} />}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-blue-50 p-4"><p className="font-semibold text-blue-700">Easy delivery</p><p className="mt-1 text-slate-500">{product.shippingInformation || "Fast delivery available"}</p></div>
              <div className="rounded-lg bg-blue-50 p-4"><p className="font-semibold text-blue-700">Simple returns</p><p className="mt-1 text-slate-500">{product.returnPolicy || "Returns accepted"}</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
