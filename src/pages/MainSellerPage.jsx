import React, { useState } from 'react';
import { FiShoppingBag, FiTag, FiAward, FiEye } from 'react-icons/fi';

const MainSellerPage = () => {
    const [showCouponModal, setShowCouponModal] = useState(false);

    const trendingStyles = [
        {
            id: 1,
            title: "Cotton Kurti Set",
            image: "/src/assets/images/cotton_kurti.png",
            description: "Handcrafted cotton kurti with chikankari embroidery",
            material: "100% Cotton",
            sustainability: "Handwoven | Eco-friendly dyes",
            price: "₹1,539",
            link: "https://www.myntra.com/kurta-sets/sangria/sangria-floral-printed-pure-cotton-straight-kurta-with-trouser--dupatta/25058842/buy"
        },
        {
            id: 2,
            title: "Silk Saree",
            image: "/src/assets/images/saree.png",
            description: "Banarasi silk saree with gold zari work",
            material: "Pure Silk",
            sustainability: "Supports Varanasi weavers",
            price: "₹1,290",
            link: "https://www.nykaafashion.com/anjaneya-sarees-orange-woven-designer-cotton-silk-kanjivaram-saree-with-unstitched/p/18557143"
        },
        {
            id: 3,
            title: "Men's Kurta",
            image: "/src/assets/images/mkurta.png",
            description: "Geometric Woven Design Straight Kurta",
            material: "100% Cotton",
            sustainability: "Supports Varanasi weavers",
            price: "₹2,850",
            link: "https://www.myntra.com/kurtas/diwas+by+manyavar/diwas-by-manyavar-geometric-woven-design-cotton-straight-kurta/30982573/buy"
        },
        {
            id: 4,
            title: "Lehenga",
            image: "/src/assets/images/lehenga.png",
            description: "White Sequins Work Semi-Stitched Lehenga",
            material: "Embellished Net",
            sustainability: "Supports Varanasi weavers",
            price: "₹7,285",
            link: "https://www.nykaafashion.com/panchhi-white-sequins-work-semi-stitched-lehenga-unstitched-blouse-with-dupatta-set-of-3/p/17537712"
        },
    ];

    return (
        <div className="min-h-screen bg-n-8 text-n-1">
            {/* Navigation */}
            <nav className="bg-n-7 py-4 px-6">
                <div className="container flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-color-1">REVA</h1>
                    <div className="flex gap-6">
                        <a href="/" className="hover:text-color-1">Home</a>
                        <a href="/shop" className="text-color-1 font-semibold">Shop</a>
                        <a href="/resale" className="hover:text-color-1">College Resale</a>
                        <a href="/competition" className="hover:text-color-1">Competition</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-n-6 to-n-9 py-20 text-center">
                <div className="container">
                    <h1 className="h1 mb-4">Trending This Season</h1>
                    <p className="body-1 max-w-2xl mx-auto mb-8">
                        Handpicked styles from India's best sustainable brands
                    </p>
                    <button className="button bg-color-1 text-n-8 px-6 py-3 rounded-full hover:bg-color-2 transition">
                        <FiAward className="inline mr-2" />
                        Redeem Coupons
                    </button>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 container mx-auto">
                <h2 className="h2 mb-12 text-center">Trending Bestsellers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingStyles.map((item) => (
                        <div key={item.id} className="bg-n-7 rounded-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-64 overflow-hidden relative group bg-n-7 flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-[85%] max-w-[85%] object-contain transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="h5 mb-2">{item.title}</h3>
                                <p className="body-2 text-n-3 mb-4">{item.description}</p>

                                <div className="mb-4 space-y-2">
                                    <div className="flex items-center">
                                        <FiTag className="text-color-4 mr-2" />
                                        <span>{item.material}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiShoppingBag className="text-color-4 mr-2" />
                                        <span>{item.sustainability}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="h6">{item.price}</span>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button bg-color-4 text-n-8 px-4 py-2 rounded hover:bg-color-3 transition"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coupon Section */}
            <section className="py-16 bg-n-7 text-center">
                <div className="container">
                    <h2 className="h2 mb-6">Unlock Exclusive Deals</h2>

                    <p className="body-1 max-w-2xl mx-auto mb-8">
                        Use your competition winnings for extra discounts on popular and sustainable fashion
                    </p>

                    <button
                        onClick={() => setShowCouponModal(true)}
                        className="button bg-color-3 text-n-8 px-6 py-3 rounded-full hover:bg-color-5 transition flex items-center gap-2 mx-auto"
                    >
                        <FiEye className="inline" />
                        View My Coupons
                    </button>

                </div>
            </section>



            {/* (Optional) Modal logic can be added below if needed */}
        </div>
    );
};

export default MainSellerPage;
