export const products = [
    {
        id: 1,
        title: "Cotton Kurti Set",
        image: "/src/assets/images/cotton_kurti.png",
        description: "Breathable cotton kurti with matching palazzo",
        material: "Pure Cotton",
        price: 1644,
        category: "women",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Off White", "Blue"],
        inStock: true
    },
    {
        id: 2,
        title: "Silk Saree",
        image: "/src/assets/images/saree.png",
        description: "Traditional Banarasi silk saree with zari work",
        material: "Pure Silk",
        price: 1349,
        category: "women",
        sizes: ["One Size"],
        colors: ["Red", "Gold"],
        inStock: true
    },
    {
        id: 3,
        title: "Kurta",
        image: "/src/assets/images/mkurta.png",
        description: "Ethnic Motifs Embroidered Mandarin Collar Straight Kurta",
        material: "Pure Silk",
        price: 1349,
        category: "men",
        sizes: ["One Size"],
        colors: ["Red", "Gold"],
        inStock: true
    },
    {
        id: 4,
        title: "Watch",
        image: "/src/assets/images/watch.png",
        description: "Women Round Analogue Watch",
        material: "Stainless Steel, Rose Gold Plated",
        price: 1800,
        category: "accessories",
        sizes: ["One Size"],
        colors: ["Rose Gold", "Gold"],
        inStock: true
    },

    // Add more products...
];

export const categories = [
    { id: "men", name: "Men's Fashion" },
    { id: "women", name: "Women's Fashion" },
    { id: "accessories", name: "Accessories" }
];