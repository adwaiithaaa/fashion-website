import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useState } from 'react';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { showToast } = useToast();
    const [selectedSize, setSelectedSize] = useState(null);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div className="text-white p-10">Product not found</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            showToast("⚠️ Please select a size");
            return;
        }

        const productWithSize = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            selectedSize: selectedSize,
        };

        addToCart(productWithSize);
        showToast("✅ Added to Cart");
    };

    return (
        <div className="min-h-screen bg-n-8 text-n-1 py-8 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8"
                >
                    <div className="md:w-1/2">
                        <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg bg-n-7 p-4">
                            <motion.img
                                src={product.image}
                                alt={product.title}
                                className="w-full rounded-lg cursor-zoom-in"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </div>

                    <div className="md:w-1/2">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                            <h1 className="h1 mb-4">{product.title}</h1>
                            <p className="text-2xl mb-6">{product.price.toLocaleString()} points</p>

                            <div className="mb-6">
                                <h3 className="h5 mb-2">Description</h3>
                                <p className="body-1">{product.description}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="h5 mb-2">Material</h3>
                                <p className="body-1">{product.material}</p>
                            </div>

                            {product.sizes && (
                                <div className="mb-6">
                                    <h3 className="h5 mb-2">Available Sizes</h3>
                                    <div className="flex gap-2">
                                        {product.sizes.map(size => (
                                            <motion.button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`px-4 py-2 border rounded transition ${selectedSize === size ? 'bg-purple-600 text-white' : 'border-n-5 hover:bg-n-7'}`}
                                            >
                                                {size}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToCart}
                                className="w-full button bg-color-4 text-n-8 py-3 rounded hover:bg-color-3 transition"
                            >
                                Add to Cart
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetailPage;








