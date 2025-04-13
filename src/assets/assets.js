import { ShoppingBasket, BrushIcon, Rotate3D } from "lucide-react";

import design1 from "./design1.jpg"
import design2 from "./design2.jpg"
import design3 from "./design3.jpg"
import design4 from "./design4.jpg"
import design5 from "./design5.jpg"
import design6 from "./design6.jpg"
import design7 from "./design7.jpg"
import design8 from "./design8.jpg"
import design9 from "./design9.jpg"
import design10 from "./design10.jpg"
import design11 from "./design11.jpg"
import design12 from "./design12.jpg"
import design13 from "./design13.jpg"
import design14 from "./design14.jpg"
import design15 from "./design15.jpg"
import design16 from "./design16.jpg"
import design17 from "./design17.jpg"
import design18 from "./design18.jpg"
import design19 from "./design19.jpg"
import design20 from "./design20.jpg"
import design21 from "./design21.jpg"
import design22 from "./design22.jpg"
import design23 from "./design23.jpg"
import design24 from "./design24.jpg"
import design25 from "./design25.jpg"
import design26 from "./design26.jpg"

import chair1 from "./chair1.jpg"
import chair2 from "./chair2.jpg"
import chair3 from "./chair3.jpg"
import chair4 from "./chair4.jpg"
import chair5 from "./chair5.jpg"

import vase1 from './vase1.jpg'
import vase2 from './vase2.jpg'
import vase3 from './vase3.jpg'
import vase4 from './vase4.jpg'
import vase5 from './vase5.jpg'
import vase6 from './vase6.jpg'

import bowl1 from './Bowl1.jpg'
import bowl2 from './Bowl2.jpg'


import plant1 from './plantr1.jpg'
import plant2 from './plant2.jpg'
import plant3 from './plant3.jpg'
import plant4 from './plant4.jpg'

import shelf1 from './shelf1.jpg'
import shelf2 from './shelf2.jpg'

import artprint1 from './artprint1.jpg'
import artprint2 from './artprint2.jpg'
import artprint3 from './artprint3.jpg'
import artprint4 from './artprint4.jpg'
import artprint5 from './artprint5.jpg'

import lamp1 from './lamp1.jpg'
import lamp2 from './lamp2.jpg'
import lamp3 from './lamp3.jpg'




export const services = [
    {
        title : "Furniture Selection",
        description : "Explore our curated collection of modern and timeless furniture pieces, handpicked to elevate your space with comfort and style." ,
        icon : <ShoppingBasket className="h-8 w-8 text-accent"/>
    },
    {
        title : "Custom Interior Design",
        description : "We turn your vision into reality with personalized interior design solutions tailored to your space, taste, and lifestyle." ,
        icon : <BrushIcon className="h-8 w-8 text-accent"/>
    },
    {
        title : "3D Space Planning",
        description : "Visualize your dream layout before it’s built. Our 3D planning service helps you see how furniture and décor fit perfectly in your space." ,
        icon : <Rotate3D className="h-8 w-8 text-accent"/>
    },
]


export const Seller = [
    { 
        id: 1, 
        title: "Potted Plant", 
        price: 40, 
        image: plant1, 
        small: "Fresh greenery for any room.",
        description: "Add a refreshing touch of nature to your interior with this vibrant potted plant. Carefully selected for its lush greenery and low maintenance needs, this plant brings warmth and life into any environment. Housed in a chic pot that complements all decor styles, it’s ideal for desks, shelves, or coffee tables."
    },
    { 
        id: 2, 
        title: "Classic Chair", 
        price: 80, 
        image: chair2, 
        small: "Timeless comfort and style.",
        description: "A timeless chair design that complements any interior style. Its solid build, elegant lines, and classic upholstery make it a versatile choice for dining areas, offices, or reading nooks. Enjoy its dependable comfort and graceful silhouette as a staple in your space."
    },
    { 
        id: 3, 
        title: "Elegant Vase", 
        price: 57, 
        image: vase6, 
        small: "Sophisticated ceramic vase.",
        description: "A sophisticated vase that elevates any flower arrangement with grace and charm. Crafted with high-quality ceramic and a smooth, matte finish, it serves as both a decorative piece and a functional container. Whether showcasing fresh flowers or standing empty, it draws attention and admiration."
    },
    { 
        id: 4, 
        title: "Art Print", 
        price: 60, 
        image: artprint5, 
        small: "Bold and modern wall art.",
        description: "A stunning art print that brings personality, depth, and modern flair to your walls. Printed on high-grade paper with vibrant, fade-resistant ink, this piece is perfect for creating a gallery wall or standing solo as a focal point. Designed to resonate with artistic minds and design lovers alike."
    },
    { 
        id: 5, 
        title: "Luxury Chair", 
        price: 85, 
        image: chair3, 
        small: "Premium seating experience.",
        description: "A luxurious chair offering both comfort and elegance. Featuring premium fabric and precision stitching, it enhances your home with a sense of refined beauty. Whether you're entertaining guests or lounging, this chair offers a premium experience."
    }
]
export const WorksGallery = [
    { image: design26, col: 1, row: 2, room: "dining", title: "Elegant Dining Area" },
    { image: design9, col: 2, row: 2, room: "kitchen", title: "Modern Kitchen" },
    { image: design3, col: 3, row: 2, room: "living", title: "Contemporary Living Room" },
  
    { image: design1, col: 2, row: 2, room: "kitchen", title: "Minimalist Kitchen" },
    { image: design14, col: 1, row: 2, room: "kitchen", title: "Bright Kitchen Space" },
    { image: design16, col: 1, row: 2, room: "dining", title: "Cozy Dining Corner" },
    { image: design17, col: 1, row: 2, room: "living", title: "Relaxing Living Room" },
    { image: design18, col: 1, row: 2, room: "living", title: "Stylish Living Area" },
    { image: design19, col: 1, row: 2, room: "living", title: "Modern Living Interior" },
    { image: design21, col: 2, row: 2, room: "kitchen", title: "Chic Kitchen Design" },
    { image: design23, col: 1, row: 2, room: "living", title: "Mohim's Living Room" },
    { image: design24, col: 1, row: 2, room: "living", title: "Spacious Living Space" },
    { image: design25, col: 1, row: 2, room: "living", title: "Sleek Living Setup" },
    { image: design8, col: 1, row: 2, room: "outdoor", title: "Peaceful Outdoor Area" },
    { image: design11, col: 1, row: 2, room: "outdoor", title: "Garden Lounge" },
  
    { image: design2, col: 1, row: 3, room: "bathrooms", title: "Modern Bathroom" },
    { image: design4, col: 1, row: 2, room: "bathrooms", title: "Cozy Bathroom Space" },
    { image: design5, col: 1, row: 2, room: "outdoor", title: "Outdoor Relaxation" },
    { image: design10, col: 1, row: 2, room: "living", title: "Warm Living Room" },
    { image: design12, col: 1, row: 2, room: "outdoor", title: "Terrace Vibes" },
    { image: design20, col: 1, row: 2, room: "living", title: "Urban Living Style" },
  
    { image: design6, col: 1, row: 2, room: "outdoor", title: "Nature-Inspired Patio" },
    { image: design7, col: 1, row: 1, room: "outdoor", title: "Compact Outdoor Space" },
    { image: design13, col: 1, row: 2, room: "outdoor", title: "Outdoor Dining Area" },
    { image: design15, col: 1, row: 2, room: "outdoor", title: "Modern Outdoor Setting" },
    { image: design22, col: 1, row: 1, room: "living", title: "Artistic Living Room" },
  ];
    
  export const ProductGallery = [
    { 
        id: 1, 
        title: "Master Chair", 
        price: 70, 
        image: chair1, 
        small: "Stylish and ergonomic seating.",
        description: "A comfortable and stylish chair for your living space. Crafted with premium materials and a sleek finish, it blends seamlessly with modern decor. Its ergonomic back support and plush cushion make it perfect for long hours of reading, working, or relaxing. Whether placed in your living room or office, this chair adds a touch of sophistication and comfort to your everyday routine.",
        category: "Chairs"
    },
    { 
        id: 2, 
        title: "Modern Bowl", 
        price: 25, 
        image: bowl1, 
        small: "Minimal and elegant ceramic bowl.",
        description: "A sleek and minimalistic bowl that enhances the aesthetic of any room. Made with durable ceramic and finished in a matte glaze, this bowl is both functional and decorative. Use it for snacks, potpourri, or as a standalone centerpiece. Its clean lines and neutral tones fit effortlessly into any home style.",
        category: "Bowls"
    },
    { 
        id: 3, 
        title: "Potted Plant", 
        price: 40, 
        image: plant1, 
        small: "Fresh greenery for any room.",
        description: "Add a refreshing touch of nature to your interior with this vibrant potted plant. Carefully selected for its lush greenery and low maintenance needs, this plant brings warmth and life into any environment. Housed in a chic pot that complements all decor styles, it’s ideal for desks, shelves, or coffee tables.",
        category: "Plants"
    },
    { 
        id: 4, 
        title: "Elegant Vase", 
        price: 57, 
        image: vase6, 
        small: "Sophisticated ceramic vase.",
        description: "A sophisticated vase that elevates any flower arrangement with grace and charm. Crafted with high-quality ceramic and a smooth, matte finish, it serves as both a decorative piece and a functional container. Whether showcasing fresh flowers or standing empty, it draws attention and admiration.",
        category: "Vases"
    },
    { 
        id: 5, 
        title: "Art Print", 
        price: 60, 
        image: artprint5, 
        small: "Bold and modern wall art.",
        description: "A stunning art print that brings personality, depth, and modern flair to your walls. Printed on high-grade paper with vibrant, fade-resistant ink, this piece is perfect for creating a gallery wall or standing solo as a focal point. Designed to resonate with artistic minds and design lovers alike.",
        category: "Art"
    },
    { 
        id: 6, 
        title: "Classic Chair", 
        price: 80, 
        image: chair2, 
        small: "Timeless comfort and style.",
        description: "A timeless chair design that complements any interior style. Its solid build, elegant lines, and classic upholstery make it a versatile choice for dining areas, offices, or reading nooks. Enjoy its dependable comfort and graceful silhouette as a staple in your space.",
        category: "Chairs"
    },
    { 
        id: 7, 
        title: "Luxury Chair", 
        price: 85, 
        image: chair3, 
        small: "Premium seating experience.",
        description: "A luxurious chair offering both comfort and elegance. Featuring premium fabric and precision stitching, it enhances your home with a sense of refined beauty. Whether you're entertaining guests or lounging, this chair offers a premium experience.",
        category: "Chairs"
    },
    { 
        id: 8, 
        title: "Comfy Chair", 
        price: 90, 
        image: chair4, 
        small: "Perfect for cozy moments.",
        description: "Designed for relaxation, this chair is perfect for cozy spaces. Its plush cushions and enveloping backrest invite you to sink in and unwind. Add it to a corner of your home to create the ultimate reading or meditation nook.",
        category: "Chairs"
    },
    { 
        id: 9, 
        title: "Cozy Chair", 
        price: 95, 
        image: chair5, 
        small: "Warm and inviting design.",
        description: "A cozy chair that combines comfort and style for your living room. Its padded seat and elegant form provide a warm embrace after a long day. Pair it with a soft throw or cushion for maximum relaxation.",
        category: "Chairs"
    },
    { 
        id: 10, 
        title: "Decorative Vase", 
        price: 35, 
        image: vase1, 
        small: "Simple charm for flowers.",
        description: "A charming vase perfect for displaying your favorite flowers. Its graceful curves and neutral color make it suitable for any table, shelf, or mantel. An effortless way to elevate your floral displays.",
        category: "Vases"
    },
    { 
        id: 11, 
        title: "Glass Vase", 
        price: 40, 
        image: vase2, 
        small: "Elegant and transparent vessel.",
        description: "A beautiful glass vase that adds a touch of elegance to any space. With its clear, smooth surface and tall form, it catches light beautifully and complements any bouquet.",
        category: "Vases"
    },
    { 
        id: 12, 
        title: "Ceramic Vase", 
        price: 45, 
        image: vase3, 
        small: "Rustic handcrafted beauty.",
        description: "A handcrafted ceramic vase, ideal for bringing a rustic charm to your home. Each piece is unique, with subtle variations that enhance its artisanal character.",
        category: "Vases"
    },
    { 
        id: 13, 
        title: "Tall Vase", 
        price: 50, 
        image: vase4, 
        small: "Striking vertical decor.",
        description: "A tall, elegant vase that works well as a statement piece. Whether filled with dried botanicals or left empty, it commands attention in any room.",
        category: "Vases"
    },
    { 
        id: 14, 
        title: "Floral Vase", 
        price: 55, 
        image: vase5, 
        small: "Perfect for fresh blooms.",
        description: "A beautiful vase designed to enhance your floral arrangements. With its flared opening and artistic design, it's the perfect complement for vibrant blooms.",
        category: "Vases"
    },
    { 
        id: 15, 
        title: "Small Bowl", 
        price: 30, 
        image: bowl2, 
        small: "Compact and versatile bowl.",
        description: "A small bowl perfect for snacks, fruit, or decorative use. The compact size and subtle glaze make it a versatile addition to your kitchen or coffee table.",
        category: "Bowls"
    },
    { 
        id: 16, 
        title: "Succulent Plant", 
        price: 45, 
        image: plant2, 
        small: "Cute and easy to care for.",
        description: "A low-maintenance succulent to brighten up your home or office. Its unique textures and earthy tones bring calm and freshness to any desk or shelf.",
        category: "Planters"
    },
    { 
        id: 17, 
        title: "Fern Plant", 
        price: 50, 
        image: plant3, 
        small: "Air-purifying greenery.",
        description: "Add a touch of greenery with this vibrant and lush fern plant. Known for its air-purifying qualities and decorative appeal, it’s an excellent choice for any room.",
        category: "Planters"
    },
    { 
        id: 18, 
        title: "Decor Plant", 
        price: 55, 
        image: plant4, 
        small: "Stylish and sculptural.",
        description: "A perfect plant to enhance the natural ambiance of your space. Its sculptural leaves and stylish pot make it a standout accessory in modern interiors.",
        category: "Planters"
    },
    { 
        id: 19, 
        title: "Wooden Shelf", 
        price: 100, 
        image: shelf1, 
        small: "Natural and functional wall storage.",
        description: "A stylish wooden shelf to organize and display your decor items. Crafted from solid wood, it adds warmth and character to any wall while offering functional storage.",
        category: "Shelfs"
    },
    { 
        id: 20, 
        title: "Metal Shelf", 
        price: 120, 
        image: shelf2, 
        small: "Sleek and modern storage solution.",
        description: "A sleek metal shelf that provides both storage and modern style. Its minimalist frame and open design make it ideal for books, plants, and more.",
        category: "Shelfs"
    },
    { 
        id: 21, 
        title: "Abstract Art", 
        price: 65, 
        image: artprint1, 
        small: "Bold and colorful expression.",
        description: "A contemporary abstract print that adds creativity to any room. Its bold shapes and vivid colors energize the space, sparking imagination and conversation.",
        category: "Art"
    },
    { 
        id: 22, 
        title: "Framed Art", 
        price: 70, 
        image: artprint2, 
        small: "Ready-to-hang statement piece.",
        description: "A beautifully framed print to make a bold statement in your space. The frame's premium finish enhances the artwork, adding depth and elegance.",
        category: "Art"
    },
    { 
        id: 23, 
        title: "Nature Art", 
        price: 75, 
        image: artprint3, 
        small: "Tranquil nature-inspired art.",
        description: "A stunning nature-inspired art print that brings serenity to your home. The tranquil imagery and soft color palette make it perfect for bedrooms and living rooms.",
        category: "Art"
    },
    { 
        id: 24, 
        title: "Minimal Art", 
        price: 80, 
        image: artprint4, 
        small: "Subtle, refined wall decor.",
        description: "A minimalist art print that creates a calm and balanced atmosphere. Its subtle tones and simple composition bring sophistication without overwhelming the space.",
        category: "Art"
    },
    { 
        id: 25, 
        title: "Table Lamp", 
        price: 60, 
        image: lamp1, 
        small: "Elegant lighting for desks.",
        description: "A stylish table lamp that adds warmth and elegance to your space. With a soft-glow bulb and refined shade, it creates the perfect mood for reading or relaxing.",
        category: "Lamps"
    },
    { 
        id: 26, 
        title: "Standing Lamp", 
        price: 65, 
        image: lamp2, 
        small: "Modern adjustable lighting.",
        description: "A modern standing lamp with adjustable height for versatile lighting. Its sleek base and clean design make it a favorite for contemporary homes.",
        category: "Lamps"
    },
    { 
        id: 27, 
        title: "Floor Lamp", 
        price: 70, 
        image: lamp3, 
        small: "Tall, sleek ambient light.",
        description: "A tall, sleek floor lamp to brighten up any corner of your room. With a minimalist frame and powerful light, it’s both functional and fashionable.",
        category: "Lamps"
    }
];
