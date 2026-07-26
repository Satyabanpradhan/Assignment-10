import { Heart, HeartIcon, HeartOff, Minus, PackageCheck, Plus, ShoppingBag, Star, TriangleAlert } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../contexts/MyContext";
import toast from "react-hot-toast";

const ProductCards = ({ product }) => {
    let { cartItems, addToCart, incrementQuantity, decrementQuantity, wishlist, toggleWishlist } = useContext(MyStore);
    const navigate = useNavigate();
    const isInCart = cartItems.some((item) => item.id === product.id);
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    return (
        <article className="group relative w-full overflow-hidden rounded-lg border border-(--border-color) bg-(--bg-color) transition-shadow hover:shadow-md">
            {/* Image Section */}
            <div
                onClick={() => navigate(`/products/${product.id}`)}
                className="relative h-56 overflow-hidden bg-(--bg-secondary-color) p-5 cursor-pointer"
            >
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />

                {/* Category */}
                <span className="absolute top-3 left-3 rounded bg-white px-2 py-1 text-xs font-medium text-slate-700 capitalize shadow-sm">
                    {product.category}
                </span>
            </div>

            {/* Product Information */}
            <div className="p-4">
                {/* Rating */}
                <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />

                        <span className="font-space text-sm text-(--text-color)">
                            {product.rating}
                        </span>

                        <span className="font-space text-xs text-(--text-muted)">
                            ({product.reviews?.length || 0})
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="font-space text-xl font-medium text-(--text-color)">
                            ${discountedPrice.toFixed(2)}
                        </span>

                        {product.discountPercentage > 0 && (
                            <span className="font-space text-xs text-(--green) line-through">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h2
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="text-lg font-semibold leading-snug text-(--text-color) line-clamp-2 min-h-14 cursor-pointer"
                >
                    {product.title}
                </h2>

                {/* Description */}
                <p className="text-sm leading-relaxed text-(--text-muted) line-clamp-2 mt-2">
                    {product.description}
                </p>

                {/* Add to Cart */}

                <div className="relative flex gap-3 mt-6">
                    {isInCart ? (
                        <div
                            className="group flex-1 flex items-center justify-center gap-2 p-1 h-12 rounded-md bg-blue-600 text-white"
                        >
                            <button
                                onClick={() => decrementQuantity(product.id)}
                                className="group flex-1 flex items-center justify-center px-5 h-full rounded-lg hover:bg-(--bg-color)/15 text-(--bg-color) cursor-pointer"
                            >
                                <Minus size={24} />
                            </button>

                            <span className="group flex-1 flex items-center justify-center px-5 h-full text-(--bg-color)">
                                {cartItems.find((item) => item.id === product.id)?.quantity}
                            </span>

                            <button
                                onClick={() => incrementQuantity(product.id)}
                                className="group flex-1 flex items-center justify-center px-5 h-full rounded-lg hover:bg-(--bg-color)/15 text-(--bg-color) cursor-pointer"
                            >
                                <Plus size={24} />
                            </button>

                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                addToCart(product);
                                toast.custom((t) => (
                                    <div
                                        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
                                            } max-w-md bg-(--green-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--green) ring-opacity-5 p-4`}
                                    >
                                        <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--green) font-inter font-semibold">
                                            <PackageCheck size={20} className="fill-(--green-bg)" />Product added to cart
                                        </div>
                                    </div>
                                ));
                            }}
                            className="group flex-1 flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={19} />

                                <span className="font-space">Add to Cart</span>
                            </div>
                        </button>
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product);
                            toast.custom((t) => (
                                <div
                                    className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
                                        } max-w-md backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 p-4 ${isInWishlist ? "ring-(--red) bg-(--red-bg) text-(--red)" : "ring-(--pink) bg-(--pink-bg) text-(--pink)"}`}
                                >
                                    <div className="shrink-0 pt-0.5 flex items-center gap-2 font-inter font-semibold">
                                        {isInWishlist ?
                                            <>
                                                <HeartOff size={20} className="fill-(--red) text-(--red)" />Product removed from Wishlist.
                                            </>
                                            : <>
                                                <HeartIcon size={20} className="fill-(--pink) text-(--pink)" />Product added to Wishlist.
                                            </>
                                        }
                                    </div>
                                </div>
                            )); 
                        }}
                        className={`aspect-square p-3 rounded-md border flex items-center justify-center transition-colors group cursor-pointer ${isInWishlist
                            ? "bg-red-50 border-red-200 text-red-500"
                            : "border-(--border-color) bg-(--bg-color) text-(--text-muted) hover:text-red-500 hover:bg-red-50"
                            }`}>
                        <Heart
                            size={20}
                            className={`${isInWishlist ? "fill-current" : ""} group-hover:shadow-[0_25px_50px_-12px_var(--pink)]`}
                        />
                    </button>
                </div>
            </div>
        </article >
    );
};

export default ProductCards;
