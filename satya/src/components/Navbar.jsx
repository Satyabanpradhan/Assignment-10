import { useContext, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { NavLink } from "react-router";
import { MyStore } from "../contexts/MyContext";
import {
    LogOut,
    Moon,
    ShoppingCart,
    Sun,
    UserRound,
    Menu,
    X,
    Heart,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let { isCartOpen, setIsCartOpen, totalQuantity } = useContext(MyStore);
    const { theme, toggleTheme } = useTheme();
    const { logoutUser, loggedInUser } = useAuth();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="max-w-[1920px] sticky top-0 z-20 w-full flex items-center justify-between border-b border-(--border-color) bg-(--bg-color) px-4 py-3 lg:px-8 text-(--text-color)">
            <div className="lg:flex-1 w-full lg:w-auto flex items-center justify-between z-10">
                <NavLink
                    to="/" className="text-2xl font-bold text-blue-600 cursor-pointer">
                    SkyMart
                </NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `text-sm font-medium cursor-pointer ${isActive ? "text-blue-600" : "text-(--text-muted) hover:text-blue-600"}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    end
                    className={({ isActive }) =>
                        `text-sm font-medium cursor-pointer ${isActive ? "text-blue-600" : "text-(--text-muted) hover:text-blue-600"}`
                    }
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-sm font-medium cursor-pointer ${isActive ? "text-blue-600" : "text-(--text-muted) hover:text-blue-600"}`
                    }
                >
                    About
                </NavLink>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
                <div className="hidden lg:flex items-center gap-4 bg-(--blur-bg-color) backdrop-blur-sm px-4 py-2 rounded-2xl group hover:bg-(--hover-bg-color) transition-all duration-300 ease-in-out group cursor-pointer">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <UserRound className="text-(--text-color)" />
                    </div>
                    <p className="text-(--text-color) group-hover:text-(--text-color) font-space tracking-wider transition-all duration-300 ease-in-out">
                        {loggedInUser?.name || "User Name"}
                    </p>
                </div>
                <button
                    onClick={toggleTheme}
                    className="block p-2 hover:bg-slate-100 rounded-md transition-colors cursor-pointer group"
                >
                    {theme === "dark" ? (
                        <Moon className="group-hover:rotate-360 transition-all duration-600 ease-in-out" />
                    ) : (
                        <Sun className="group-hover:rotate-180 transition-all duration-600 ease-in-out" />
                    )}
                </button>
                <NavLink
                    to="/wishlist"
                    className={({ isActive }) =>
                        `hidden lg:block backdrop-blur-sm p-4 hover:bg-(--pink-bg) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer ${isActive ? "bg-(--pink-bg) text-(--pink)" : ""}`
                    }
                >
                    <Heart className="group-hover:text-(--pink) transition-all duration-600 ease-in-out" />
                </NavLink>
                <button
                    onClick={() => setIsCartOpen((prev) => !prev)}
                    className="relative p-2 hover:bg-slate-100 rounded-md transition-colors group cursor-pointer"
                >
                    <ShoppingCart className="group-hover:text-(--text-color) transition-all duration-600 ease-in-out" />
                    {totalQuantity > 0 && (
                        <span className="absolute top-1.5 right-1.5 w-5 h-5 flex items-center justify-center bg-(--text-color) text-(--bg-color) rounded-full font-instrument text-[15px] font-bold">
                            {totalQuantity}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => logoutUser()}
                    className="hidden lg:block backdrop-blur-sm p-4 hover:bg-(--red-bg) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer"
                >
                    <LogOut className="group-hover:text-(--red) transition-all duration-600 ease-in-out" />
                </button>


                <button
                    onClick={toggleMenu}
                    className="lg:hidden backdrop-blur-sm p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer z-10"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-0 right-0 w-auto h-screen">
                    <div className="h-full bg-(--bg-secondary-color)/90 backdrop-blur-2xl flex flex-col justify-between px-4 pt-24 pb-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300">
                        <div className="flex flex-col items-start gap-6 w-full py-4 px-4">
                            <NavLink
                                to="/"
                                end
                                // onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `font-instrument italic text-4xl cursor-pointer flex justify-center items-center gap-2 transition-colors duration-300 ${isActive ? "text-(--text-color)" : "text-(--text-muted)"}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={`h-0.5 bg-(--text-color) transition-all duration-300 ${isActive ? "w-10" : "w-0"}`}
                                        ></div>
                                        Home
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/products"
                                // onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `font-instrument italic text-4xl cursor-pointer flex justify-center items-center gap-2 transition-colors duration-300 ${isActive ? "text-(--text-color)" : "text-(--text-muted)"}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={`h-0.5 bg-(--text-color) transition-all duration-300 ${isActive ? "w-10" : "w-0"}`}
                                        ></div>
                                        Shop
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/about"
                                // onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `font-instrument italic text-4xl cursor-pointer flex justify-center items-center gap-2 transition-colors duration-300 ${isActive ? "text-(--text-color)" : "text-(--text-muted)"}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={`h-0.5 bg-(--text-color) transition-all duration-300 ${isActive ? "w-10" : "w-0"}`}
                                        ></div>
                                        About
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/wishlist"
                                // onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `font-instrument italic text-4xl cursor-pointer flex justify-center items-center gap-2 transition-colors duration-300 ${isActive ? "text-(--text-color)" : "text-(--text-muted)"}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={`h-0.5 bg-(--text-color) transition-all duration-300 ${isActive ? "w-10" : "w-0"}`}
                                        ></div>
                                        Wishlist
                                    </>
                                )}
                            </NavLink>
                            <div className="h-0.5 w-full bg-(--text-color)/50"></div>
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsCartOpen((prev) => !prev);
                                }}
                                className={`font-instrument italic text-4xl cursor-pointer flex justify-center items-center gap-2 transition-colors duration-300 ${isCartOpen ? "text-(--text-color)" : "text-(--text-muted)"}`}
                            >
                                <div
                                    className={`h-0.5 bg-(--text-color) transition-all duration-300 ${isCartOpen ? "w-10" : "w-0"}`}
                                ></div>
                                Cart
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 w-full mt-8">
                            <div className="flex w-full justify-between items-center rounded-2xl">
                                <div className="flex-1 flex items-center gap-4 bg-(--blur-bg)  px-4 py-2 rounded-2xl group hover:bg-(--hover-bg-color) transition-all duration-300 ease-in-out group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                        <UserRound className="text-(--text-color)" />
                                    </div>
                                    <p className="text-(--text-color) group-hover:text-(--text-color) font-space tracking-wider transition-all duration-300 ease-in-out">
                                        {loggedInUser?.name || "User Name"}
                                    </p>
                                    <button onClick={() => logoutUser()} className="flex justify-center items-center gap-3 bg-(--red-bg)/10 text-(--red) py-4 rounded-2xl hover:bg-(--red-bg)/20 transition-colors duration-300 cursor-pointer px-4">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
