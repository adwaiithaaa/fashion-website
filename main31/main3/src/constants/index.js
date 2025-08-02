import { title } from "framer-motion/client";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  rent1,
  rent2,
  rent3,
  rent4,
  rent5,
  rent6,
  rent7,
  rent8,
  rent9
} from "../assets";



export const menProducts = [
  {
    id: 1,
    name: "Men's Shirt",
    price: "$49.99",
    image: rent1
  },
  {
    id: 2,
    name: "Men's Jeans",
    price: "$59.99",
    image: rent2
  },
  {
    id: 3,
    name: "Men's Jeans",
    price: "$59.99",
    image: rent3
  },
  {
    id: 4,
    name: "Men's Jeans",
    price: "$59.99",
    image: rent4
  },
];

export const womenProducts = [
  {
    id: 1,
    name: "Women's Dress",
    price: "$69.99",
    image: rent5
  },
  {
    id: 2,
    name: "Women's Blouse",
    price: "$45.99",
    image: rent5
  },
  {
    id: 3,
    name: "Women's Blouse",
    price: "$45.99",
    image: rent6
  },
  {
    id: 4,
    name: "Women's Blouse",
    price: "$45.99",
    image: rent7
  },
  {
    id: 5,
    name: "Women's Blouse",
    price: "$45.99",
    image: rent8
  },
  {
    id: 6,
    name: "Women's Blouse",
    price: "$45.99",
    image: rent9
  },
];

export const samplePosts = [
  { 
    id: 1,
    imageUrl: comp1,
    likes: 120,
    title: "Summer Look",
    description: "Beach ready outfit",
    tags: ["summer", "casual"]
  },
  { 
    id: 2,
    imageUrl: comp2,
    likes: 12,
    title: "Treking Look",
    description: "Hill Station outfit",
    tags: ["winter", "casual"]
  },
  { 
    id: 3,
    imageUrl: comp3,
    likes: 240,
    title: "Festive Outfit",
    description: "For Festivals",
    tags: ["festival", "traditional"]
  },
  { 
    id: 4,
    imageUrl: comp4,
    likes: 180,
    title: "Spring Fall",
    description: "Floral Outfit",
    tags: ["hotseason", "streetwear"]
  },
  { 
    id: 5,
    imageUrl: comp5,
    likes: 60,
    title: "Horse Riding",
    description: "Outdoot Acitivty",
    tags: ["outdoor", "activity"]
  },
  { 
    id: 6,
    imageUrl: comp6,
    likes: 900,
    title: "Concert Outfit",
    description: "For the shows",
    tags: ["mass", "group"]
  },
];

export const navigation = [
  {
    id: "0",
    title: "Our Collections",
    url: "/shop",
  },
  {
    id: "1",
    title: "Buy/Rent",
    url: "/resell",
  },
  {
    id: "2",
    title: "Dress To Impress",
    url: "/compete",
  },
  {
    id: "3",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
  },
  {
    id:"4",
    title:"About Us",
    url: "/aboutus"
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Mens Formal Vote of the Week",
    text: "A sharp semi-formal outfit featuring a white blazer and shirt paired with slim-fit brown trousers. Finished with black dress shoes, the look is clean, modern, and perfect for stylish events",
    date: "12/7/2025",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Womens Formal Vote of the Week",
    text: "chic Indo-western fusion stylish, comfortable pick perfect for casual outings",
    date: "11/7/2025",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Mens Traditional Vote of the Month",
    text: "A serene blend of tradition and elegance, this pastel blue kurta with shimmering details paired with crisp white churidar and classic mojaris evokes timeless grace under twilight.",
    date: "June 2025",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Womens Traditional Vote of the Month",
    text: "A blue lehenga, rich and regal, sways like a midnight dream—its intricate embroidery glistening like constellations, capturing the magic of tradition with every twirl.",
    date: "June 2025",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Explore",
    text: "Discover a world of style, inspiration, and curated fashion as you explore our website, where every click brings you closer to the trends, collections, and experiences designed to elevate your wardrobe and express your unique identity",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Dress To Impress",
    text: "Step into the spotlight and showcase your style in our Dress to Impress competition, where confidence meets creativity and every outfit tells a winning story",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Find your fashion tribe—connect with people who get your style and inspire your next iconic look",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Get Coupons",
    text: "Win exclusive Myntra & Meesho coupons by showcasing your best looks in our fashion competitions!",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Buy/Rent",
    text: "Rent dazzling festive outfits or buy timeless styles—look stunning for every celebration without the closet clutter",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Center Stage",
    text: "Turn heads in college with showstopping outfits that make you the ultimate style influencer",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light:true
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];