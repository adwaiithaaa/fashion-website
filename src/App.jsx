import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainSellerPage from "./pages/MainSellerPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import NotFound from "./pages/NotFound";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./context/CartContext";

function App() {
    const location = useLocation();
    const { cartCount } = useCart();

    return (
        <>
            {/* Floating Cart Button */}
            <button
                className="fixed bottom-6 left-6 bg-color-1 text-white p-4 rounded-full shadow-xl z-50"
                onClick={() => (window.location.href = "/cart")}
            >
                <FaShoppingCart size={24} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        {cartCount}
                    </span>
                )}
            </button>

            {/* Page Transitions */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MainSellerPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MainSellerPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductDetailPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <CartPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <CheckoutPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/order-confirmation"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <OrderConfirmationPage />
                            </motion.div>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <NotFound />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;




