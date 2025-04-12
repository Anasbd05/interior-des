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
        id : 1 ,
        title : "Master Chair" ,
        price : 70 ,
        image :  chair1
    } ,
    {
        id : 2 ,
        title : "Bowl" ,
        price : 25 ,
        image :  bowl1
    } ,
    {
        id : 3 ,
        title : "plant" ,
        price : 40 ,
        image : plant1
    } ,
    {
        id : 4 ,
        title : "Vase" ,
        price : 57 ,
        image : vase6
    } ,
    {
        id : 5 ,
        title : "Art paint" ,
        price : 60 ,
        image : artprint5
    } 
]
export const WorksGallery = [

    { image: design26, col: 1, row: 2  , room: "dining" },
    { image: design9, col: 2, row: 2 , room: "kitchen"  },
    { image: design3, col: 3, row: 3 , room: "living"  },

    
    { image: design1, col: 2, row: 2  , room: "kitchen" },
    { image: design14, col: 1, row: 2  , room: "kitchen" },
    { image: design16, col: 1, row: 2  , room: "dining" },
    { image: design17, col: 1, row: 2  , room: "living" },
    { image: design18, col: 1, row: 2  , room: "living" },
    { image: design19, col: 1, row: 2  , room: "living" },
    { image: design21, col: 2, row: 2  , room: "kitchen" },
    { image: design23, col: 2, row: 2 , room: "living"  },
    { image: design24, col: 1, row: 2 , room: "living"  },
    { image: design25, col: 1, row: 2  , room: "living" },
    { image: design8, col: 1, row: 2  , room: "outdoor" },
    { image: design11, col: 1, row: 2  , room: "outdoor" },
  

    { image: design2, col: 1, row: 3  , room: "bathrooms" },
    { image: design4, col: 1, row: 2  , room: "bathrooms" },
    { image: design5, col: 1, row: 2  , room: "outdoor" },
    { image: design10, col: 1, row: 2 , room: "living"  },
    { image: design12, col: 1, row: 2  , room: "outdoor" },
    { image: design20, col: 1, row: 2  , room: "living" },
  

    { image: design6, col: 1, row: 2 ,room: "outdoor"},
    { image: design7, col: 1, row: 1  ,room: "outdoor"},
    { image: design13, col: 1, row: 2  ,room: "outdoor"},
    { image: design15, col: 1, row: 2 ,room: "outdoor" },
    { image: design22, col: 1, row: 1  ,room: "living"},
  ];
  
  export const ProductGallery = [
    { 
        id: 1, 
        title: "Master Chair", 
        price: 70, 
        image: chair1, 
        description: "A comfortable and stylish chair for your living space." 
    },
    { 
        id: 2, 
        title: "Modern Bowl", 
        price: 25, 
        image: bowl1, 
        description: "A sleek and minimalistic bowl, perfect for any room decor." 
    },
    { 
        id: 3, 
        title: "Potted Plant", 
        price: 40, 
        image: plant1, 
        description: "Add some greenery to your home with this beautiful potted plant." 
    },
    { 
        id: 4, 
        title: "Elegant Vase", 
        price: 57, 
        image: vase6, 
        description: "A sophisticated vase that elevates any flower arrangement." 
    },
    { 
        id: 5, 
        title: "Art Print", 
        price: 60, 
        image: artprint5, 
        description: "A stunning art print to bring character and style to your walls." 
    },
    { 
        id: 6, 
        title: "Classic Chair", 
        price: 80, 
        image: chair2, 
        description: "A timeless chair design that complements any interior style." 
    },
    { 
        id: 7, 
        title: "Luxury Chair", 
        price: 85, 
        image: chair3, 
        description: "A luxurious chair offering both comfort and elegance." 
    },
    { 
        id: 8, 
        title: "Comfy Chair", 
        price: 90, 
        image: chair4, 
        description: "Designed for relaxation, this chair is perfect for cozy spaces." 
    },
    { 
        id: 9, 
        title: "Cozy Chair", 
        price: 95, 
        image: chair5, 
        description: "A cozy chair that combines comfort and style for your living room." 
    },
    { 
        id: 10, 
        title: "Decorative Vase", 
        price: 35, 
        image: vase1, 
        description: "A charming vase perfect for displaying your favorite flowers." 
    },
    { 
        id: 11, 
        title: "Glass Vase", 
        price: 40, 
        image: vase2, 
        description: "A beautiful glass vase that adds a touch of elegance to any space." 
    },
    { 
        id: 12, 
        title: "Ceramic Vase", 
        price: 45, 
        image: vase3, 
        description: "A handcrafted ceramic vase, ideal for bringing a rustic charm to your home." 
    },
    { 
        id: 13, 
        title: "Tall Vase", 
        price: 50, 
        image: vase4, 
        description: "A tall, elegant vase that works well as a statement piece." 
    },
    { 
        id: 14, 
        title: "Floral Vase", 
        price: 55, 
        image: vase5, 
        description: "A beautiful vase designed to enhance your floral arrangements." 
    },
    { 
        id: 15, 
        title: "Small Bowl", 
        price: 30, 
        image: bowl2, 
        description: "A small bowl perfect for snacks, fruit, or decorative use." 
    },
    { 
        id: 16, 
        title: "Succulent Plant", 
        price: 45, 
        image: plant2, 
        description: "A low-maintenance succulent to brighten up your home or office." 
    },
    { 
        id: 17, 
        title: "Fern Plant", 
        price: 50, 
        image: plant3, 
        description: "Add a touch of greenery with this vibrant and lush fern plant." 
    },
    { 
        id: 18, 
        title: "Decor Plant", 
        price: 55, 
        image: plant4, 
        description: "A perfect plant to enhance the natural ambiance of your space." 
    },
    { 
        id: 19, 
        title: "Wooden Shelf", 
        price: 100, 
        image: shelf1, 
        description: "A stylish wooden shelf to organize and display your decor items." 
    },
    { 
        id: 20, 
        title: "Metal Shelf", 
        price: 120, 
        image: shelf2, 
        description: "A sleek metal shelf that provides both storage and modern style." 
    },
    { 
        id: 21, 
        title: "Abstract Art", 
        price: 65, 
        image: artprint1, 
        description: "A contemporary abstract print that adds creativity to any room." 
    },
    { 
        id: 22, 
        title: "Framed Art", 
        price: 70, 
        image: artprint2, 
        description: "A beautifully framed print to make a bold statement in your space." 
    },
    { 
        id: 23, 
        title: "Nature Art", 
        price: 75, 
        image: artprint3, 
        description: "A stunning nature-inspired art print that brings serenity to your home." 
    },
    { 
        id: 24, 
        title: "Minimal Art", 
        price: 80, 
        image: artprint4, 
        description: "A minimalist art print that creates a calm and balanced atmosphere." 
    },
    { 
        id: 25, 
        title: "Table Lamp", 
        price: 60, 
        image: lamp1, 
        description: "A stylish table lamp that adds warmth and elegance to your space." 
    },
    { 
        id: 26, 
        title: "Standing Lamp", 
        price: 65, 
        image: lamp2, 
        description: "A modern standing lamp with adjustable height for versatile lighting." 
    },
    { 
        id: 27, 
        title: "Floor Lamp", 
        price: 70, 
        image: lamp3, 
        description: "A tall, sleek floor lamp to brighten up any corner of your room." 
    }
];
