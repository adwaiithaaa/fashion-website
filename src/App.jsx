import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainSellerPage from "./pages/MainSellerPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import NotFound from "./pages/NotFound";
import BuyPointsPage from "./pages/BuyPointsPage";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./context/CartContext";

function App() {
    const location = useLocation();
    const { cartCount } = useCart();

    const hideCartOnPaths = ["/buy-points"];
    const shouldShowCart = !hideCartOnPaths.includes(location.pathname);

    return (
        <>
            {/* Floating Cart Button */}
            {shouldShowCart && (
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
            )}

            {/* Page Transitions */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper><MainSellerPage /></PageWrapper>} />
                    <Route path="/shop" element={<PageWrapper><MainSellerPage /></PageWrapper>} />
                    <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
                    <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
                    <Route path="/checkout" element={<PageWrapper><CheckoutPage /></PageWrapper>} />
                    <Route path="/order-confirmation" element={<PageWrapper><OrderConfirmationPage /></PageWrapper>} />
                    <Route path="/buy-points" element={<PageWrapper><BuyPointsPage /></PageWrapper>} />
                    <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

// Helper to reduce repetition
const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export default App;






