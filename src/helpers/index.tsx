// import { bag, cardBeachImg, cardHomeImg, cardOfficeImg, cardStreetImg, cardStudyImg, cardpartyImg, fullLook, related1, related2, shoe, shoe2, underwear } from "./images";
import { product11, product12, product13, product21, product22, product23, product31, product32, product41, product42, product43 } from "./images";
import { apiProductType, colorsType } from "./types";
  
export const colors:colorsType[] = [
  {
    name: "SNOW WHITE",
    color:{
      from: '#FFFFFF', 
      to: '#D3CBC6'
    }
  },
  {
    name: "ALMOST YELLOW",
    color:{
      from: '#F5E9D4', 
      to: '#C6A16E'
    }
  },
  {
    name: "PALE BLUE",
    color:{
      from: '#A6BCD0', 
      to: '#357897'
    }
  },
  {
    name: "PISTACHIO GREEN",
    color:{
      from: '#DFE3C5', 
      to: '#C8B595'
    }
  },
  {
    name: "EVERY ORANGE",
    color:{
      from: '#F3CDBA', 
      to: '#EFA16A'
    }
  },
  {
    name: "STEEL GREY",
    color:{
      from: '#D5D9DD', 
      to: '#686C6F'
    }
  },
  {
    name: "CHERRY RED",
    color:{
      from: '#F44248', 
      to: '#771818'
    }
  },
  {
    name: "CHOCOLATE BROWN",
    color:{
      from: '#50392F', 
      to: '#291B1D'
    }
  },
  {
    name: "black",
    color:{
      from: '#2C2F39', 
      to: '#000'
    }
  },
]
export const defaultColors: colorsType[] = [
  {
    name: 'blue',
    color: {
      from: "#6151A2", 
       to: "#3853A4"
    }
  }, 
  {
    name: 'green',
    color: {
      from: "#00A651", 
       to: "#3FB97B"
    }
  }, 
  {
    name: 'yellow',
    color: {
      from: "#BCD630", 
       to: "#EDB01C"
    }
  },
  {
    name: 'yellow',
    color: {
      from: "#BCD630", 
       to: "#EDB01C"
    }
  }
]
export const ClothingCategores: string[] = ["summer", 'dresses', "accories", "shoes"]

// export const productsData : apiProductType[] = [
//   {
//     _id: 0,
//     name: "produc1-1",
//     image: product11,
//     sizes: ["S", "M", "L"], 
//     detailsHeader: "Product Details",
//     description: "Product Details description",
//     price: 120,
//     priceOff: 100,
//     complect: [
//       {
//         id: 0,
//         colorName: "black", 
//         color: ["#A44A3F", "#c1c1c1"],
//         image: product12,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details for second product",
//         description: "Product Details description",
//         name: "produc1-2",
//         price: 120,
//         priceOff: 100
//       },
//       {
//         id: 1,
//         colorName: "black", 
//         color: ["#A44A3F", "#c1c1c1"],
//         image: product13,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details for third product",
//         description: "Product Details description",
//         name: "produc1-3",
//         price: 120,
//         priceOff: 100
//       }
//     ],
//     color: ["#A44A3F", "#c1c1c1"],
//     colorName: "black"
//   },
//   {
//     _id: 1,
//     name: "produc2-1",
//     image: product21,
//     sizes: ["S", "M", "L"],
//     detailsHeader: "Product Details",
//     description: "Product Details description",
//     price: 110,
//     priceOff: 90,
//     complect: [
//       {
//         id: 0,
//         colorName: "black", 
//         color: ["#A44A3F", "#c1c1c1"],
//         image: product22,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details",
//         description: "Product Details description",
//         name: "produc2-2",
//         price: 100,
//         priceOff: 90
//       },
//       {
//         id: 1,
//         colorName: "black", 
//         color: ["#A44A3F", "#c1c1c1"],
//         image: product23,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details",
//         description: "Product Details description",
//         name: "produc2-3",
//         price: 120,
//         priceOff: 100
//       }
//     ],
//     color: ["#A44A3F", "#c1c1c1"],
//     colorName: "black"
//   },
//   {
//     _id: 2,
//     name: "produc3-1",
//     image: product31,
//     sizes: ["S", "M", "L"],
//     detailsHeader: "Product Details",
//     description: "Product Details description",
//     price: 110,
//     priceOff: 90,
//     complect: [
//       {
//         id: 0,
//         colorName: "pinc", 
//         color: ["#e7d7e0", "#b27d86"],
//         image: product32,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details",
//         description: "Product Details description",
//         name: "produc3-2",
//         price: 100,
//         priceOff: 90
//       }
//     ],
//     color: ["#e7d7e0", "#b27d86"],
//     colorName: "pinc"
//   },
//   {
//     _id: 3,
//     name: "produc4-1",
//     image: product41,
//     sizes: ["S", "M", "L"],
//     detailsHeader: "Product Details",
//     description: "Product Details description",
//     price: 110,
//     priceOff: 90,
//     complect: [
//       {
//         id: 0,
//         colorName: "red", 
//         color: ["#742418", "#c3c2d4"],
//         image: product42,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details",
//         description: "Product Details description",
//         name: "produc4-2",
//         price: 100,
//         priceOff: 90
//       },
//       {
//         id: 1,
//         colorName: "red", 
//         color: ["#742418", "#c3c2d4"],
//         image: product43,
//         sizes: ["S", "M", "L"],
//         detailsHeader: "Product Details",
//         description: "Product Details description",
//         name: "produc4-3",
//         price: 100,
//         priceOff: 90
//       }
//     ],
//     color: ["#742418", "#c3c2d4"],
//     colorName: "red"
//   },
// ]
export const productData:apiProductType[] = [
  {
   _id: 0,
   productId: 0,
   name: "product1-1",
   title: "product1",
   image: product11,
   sizes: ["S", "M", "L"],
   detailsHeader: "Product1-1 Details",
   description: "Product1-1 Details description",
   price: 120,
   priceOff: 100,
   complect: ["product1-2", "product1-3"],
   color: ["#5C0B04", "#111"],
   colorName: "black"
 },
  {
   _id: 1,
   productId: 1,
   name: "product1-2",
   title: "product1",
   image: product12,
   sizes: ["S", "M", "L", 'XL'],
   detailsHeader: "Product1-2 Details",
   description: "Product1-2 Details description",
   price: 110,
   priceOff: 80,
   complect: ["product1-1", "product1-3"],
   color: ["#5C0B04", "#111"],
   colorName: "black"
 },
  {
   _id: 2,
   productId: 2,
   name: "product1-3",
   title: "product1",
   image: product13,
   sizes: ["S", "M", "L", 'XL'],
   detailsHeader: "Product1-3 Details",
   description: "Product1-3 Details description",
   price: 130,
   priceOff: 95,
   complect: ["product1-1", "product1-2"],
   color: ["#5C0B04", "#111"],
   colorName: "black"
 },
  {
   _id: 3,
   productId: 0,
   name: "product2-1",
   title: "product2",
   image: product21,
   sizes: ["S", "M", 'XL'],
   detailsHeader: "Product2-1 Details",
   description: "Product2-1 Details description",
   price: 180,
   priceOff: 140,
   complect: ["product2-2", "product2-3"],
   color: ["#A44A3F", "#c1c1c1"],
   colorName: "black"
 },
  {
   _id: 4,
   productId: 1,
   name: "product2-2",
   title: "product2",
   image: product22,
   sizes: ["S", "M", 'L'],
   detailsHeader: "Product2-2 Details",
   description: "Product2-2 Details description",
   price: 151,
   priceOff: 118,
   complect: ["product2-1", "product2-3"],
   color: ["#A44A3F", "#c1c1c1"],
   colorName: "black"
 },
  {
   _id: 5,
   productId: 2,
   name: "product2-3",
   title: "product2",
   image: product23,
   sizes: ["S", "M", 'L', "XS"],
   detailsHeader: "Product2-3 Details",
   description: "Product2-3 Details description",
   price: 131,
   priceOff: 114,
   complect: ["product2-1", "product2-2"],
   color: ["#A44A3F", "#c1c1c1"],
   colorName: "black"
 },
  {
   _id: 6,
   productId: 0,
   name: "product3-1",
   title: "product3",
   image: product31,
   sizes: ["S", "M", 'L', "XL"],
   detailsHeader: "Product3-1 Details",
   description: "Product3-1 Details description",
   price: 159,
   priceOff: 142,
   complect: ["product3-2"],
   color: ["#e7d7e0", "#b27d86"],
   colorName: "pink"
 },
  {
   _id: 7,
   productId: 1,
   name: "product3-2",
   title: "product3",
   image: product32,
   sizes: ["S", "M", 'L', "XL"],
   detailsHeader: "Product3-2 Details",
   description: "Product3-2 Details description",
   price: 159,
   priceOff: 142,
   complect: ["product3-1"],
   color: ["#e7d7e0", "#b27d86"],
   colorName: "pink"
 },
  {
   _id: 8,
   productId: 0,
   name: "product4-1",
   title: "product4",
   image: product41,
   sizes: ["S", "M", 'L'],
   detailsHeader: "Product4-1 Details",
   description: "Product4-1 Details description",
   price: 137,
   priceOff: 100,
   complect: ["product4-2", "product4-3"],
   color: ["#742418", "#c3c2d4"],
   colorName: "red"
 },
  {
   _id: 9,
   productId: 1,
   name: "product4-2",
   title: "product4",
   image: product42,
   sizes: ["M", 'L', "XL"],
   detailsHeader: "Product4-2 Details",
   description: "Product4-2 Details description",
   price: 144,
   priceOff: 135,
   complect: ["product4-1", "product4-3"],
   color: ["#742418", "#c3c2d4"],
   colorName: "red"
 },
  {
    _id: 10,
    productId: 2,
    name: "product4-3",
    title: "product4",
    image: product43,
    sizes: ["XS", "M", 'L', "XL"],
    detailsHeader: "Product4-3 Details",
    description: "Product4-3 Details description",
    price: 200,
    priceOff: 189,
    complect: ["product4-1", "product4-2"],
    color: ["#742418", "#c3c2d4"],
    colorName: "red"
 },
]




