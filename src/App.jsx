import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainSellerPage from "./pages/MainSellerPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./context/CartContext"; // ✅ Import cart context

function App() {
    const location = useLocation();
    const { cartCount } = useCart(); // ✅ Dynamic cart count

    return (
        <>

            {/* Page Transitions */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MainSellerPage />
                        </motion.div>
                    } />
                    <Route path="/shop" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MainSellerPage />
                        </motion.div>
                    } />
                    <Route path="/product/:id" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProductDetailPage />
                        </motion.div>
                    } />
                    <Route path="/cart" element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CartPage />
                        </motion.div>
                    } />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
