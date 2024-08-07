// import { bag, cardBeachImg, cardHomeImg, cardOfficeImg, cardStreetImg, cardStudyImg, cardpartyImg, fullLook, related1, related2, shoe, shoe2, underwear } from "./images";
import { product11, product12, product13, product21, product22, product23, product31, product32, product41, product42, product43 } from "./images";
import { apiProductType, colorsType, complectsType, typeForCategoriyesCard } from "./types";

// export const items:typeForCategoriyesCard[] = [
//     {
//       title: "Clothes for party",
//       count: "120 on sale",
//       products: [
//         {
//           id: 0,
//           title: "Salsy ferp",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "CHOCOLATE BROWN", "black"]
//         },
//         {
//           id: 0,
//           title: "Drend senser",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE","CHERRY RED", "CHOCOLATE BROWN", "black"]
//         }
//       ],
//       imageUrl: cardpartyImg
//     },
//     {
//       title: "Clothes for street",
//       count: "64 on sale",
//       products: [
//         {
//           id: 0,
//           title: "lover duny",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: [ "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
//         },
//         {
//           id: 0,
//           title: "Grade flows",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "black"]
//         }
//       ],
//       imageUrl: cardStreetImg
//     },
//     {
//       title: "Clothes for office",
//       count: "88 on sale",
//       products: [
//         {
//           id: 0,
//           title: "Relsor",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: ["SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY"]
//         },
//         {
//           id: 0,
//           title: "Jenkins",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: ["ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "CHOCOLATE BROWN", "black"]
//         }
//       ],
//       imageUrl: cardOfficeImg
//     },
//     {
//       title: "Clothes for study",
//       count: "45 on sale",
//       products: [
//         {
//           id: 0,
//           title: "Freshly krendy",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN"]
//         },
//         {
//           id: 0,
//           title: "snowly just",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: [ "SNOW WHITE","STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
//         }
//       ],
//       imageUrl: cardStudyImg
//     },
//     {
//       title: "Casual Clothes",
//       count: "34 on sale",
//       products: [
//         {
//           id: 0,
//           title: "nike slim",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
//         },
//         {
//           id: 0,
//           title: "shade jenc",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
//         }
//       ],
//       imageUrl: cardHomeImg
//     },
//     {
//       title: "Summer Clothes",
//       count: "58 on sale",
//       products: [
//         {
//           id: 0,
//           title: "Lorem ispum",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardpartyImg,
//           colors: ["SNOW WHITE", "ALMOST YELLOW", "PISTACHIO GREEN", "CHERRY RED", "CHOCOLATE BROWN","black"]
//         },
//         {
//           id: 0,
//           title: "Lorem ispum",
//           sizes: ["S", "M", "L", "XL"],
//           imgUrl: cardStreetImg,
//           colors: ["EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
//         }
//       ],
//       imageUrl: cardBeachImg
//     },
// ];
  
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
export const ClothingCategores: string[] = ["outerwear", 'underwear', "accories", "shoes"]

// export const complect: complectsType[] = [
//   {
//     id: 0, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Jimmy Choo', 
//     describtion: 'Amita 65mm leather pumps',
//     price: 89, 
//     priceOff: 123, 
//     imgUrl: fullLook
//   },
//   {
//     id: 1, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Jimmy Choo', 
//     describtion: 'Amita 65mm leather pumps',
//     price: 55, 
//     priceOff: 72, 
//     imgUrl: shoe
//   },
//   {
//     id: 2, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Del Core', 
//     describtion: 'boat-neck tie-waist poplin',
//     price: 32, 
//     priceOff: 52, 
//     imgUrl: bag
//   },
//   {
//     id: 3, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'ERDEM', 
//     describtion: 'rehfrency ferrikonse klonmy',
//     price: 41, 
//     priceOff: 56, 
//     imgUrl: underwear
//   },
//   {
//     id: 3, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'ERDEM', 
//     describtion: 'rehfrency ferrikonse klonmy',
//     price: 41, 
//     priceOff: 56, 
//     imgUrl: shoe2
//   }
// ]
// export const related: complectsType[] = [
//   {
//     id: 0, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Srelly fer', 
//     describtion: 'Amita 65mm leather pumps',
//     price: 99, 
//     priceOff: 123, 
//     imgUrl: related2
//   },
//   {
//     id: 1, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Jimmy Choo', 
//     describtion: 'Amita 65mm leather pumps',
//     price: 55, 
//     priceOff: 72, 
//     imgUrl: related1
//   },
//   {
//     id: 2, 
//     complectId: ["Salsy ferp", "Drend senser"], 
//     name: 'Del Core', 
//     describtion: 'boat-neck tie-waist poplin',
//     price: 32, 
//     priceOff: 52, 
//     imgUrl: cardHomeImg
//   },
// ]


export const productData : apiProductType[] = [
  {
    _id: 0,
    name: "produc1-1",
    image: product11,
    sizes: ["S", "M", "L"], 
    detailsHeader: "Product Details",
    description: "Product Details description",
    price: 120,
    priceOff: 100,
    complect: [
      {
        id: 0,
        colorName: "black", 
        color: ["#A44A3F", "#c1c1c1"],
        image: product12,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details for second product",
        description: "Product Details description",
        name: "produc1-2",
        price: 120,
        priceOff: 100
      },
      {
        id: 1,
        colorName: "black", 
        color: ["#A44A3F", "#c1c1c1"],
        image: product13,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details for third product",
        description: "Product Details description",
        name: "produc1-3",
        price: 120,
        priceOff: 100
      }
    ],
    color: ["#A44A3F", "#c1c1c1"],
    colorName: "black"
  },
  {
    _id: 1,
    name: "produc2-1",
    image: product21,
    sizes: ["S", "M", "L"],
    detailsHeader: "Product Details",
    description: "Product Details description",
    price: 110,
    priceOff: 90,
    complect: [
      {
        id: 0,
        colorName: "black", 
        color: ["#A44A3F", "#c1c1c1"],
        image: product22,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details",
        description: "Product Details description",
        name: "produc2-2",
        price: 100,
        priceOff: 90
      },
      {
        id: 1,
        colorName: "black", 
        color: ["#A44A3F", "#c1c1c1"],
        image: product23,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details",
        description: "Product Details description",
        name: "produc2-3",
        price: 120,
        priceOff: 100
      }
    ],
    color: ["#A44A3F", "#c1c1c1"],
    colorName: "black"
  },
  {
    _id: 2,
    name: "produc3-1",
    image: product31,
    sizes: ["S", "M", "L"],
    detailsHeader: "Product Details",
    description: "Product Details description",
    price: 110,
    priceOff: 90,
    complect: [
      {
        id: 0,
        colorName: "pinc", 
        color: ["#e7d7e0", "#b27d86"],
        image: product32,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details",
        description: "Product Details description",
        name: "produc3-2",
        price: 100,
        priceOff: 90
      }
    ],
    color: ["#e7d7e0", "#b27d86"],
    colorName: "pinc"
  },
  {
    _id: 3,
    name: "produc4-1",
    image: product41,
    sizes: ["S", "M", "L"],
    detailsHeader: "Product Details",
    description: "Product Details description",
    price: 110,
    priceOff: 90,
    complect: [
      {
        id: 0,
        colorName: "red", 
        color: ["#742418", "#c3c2d4"],
        image: product42,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details",
        description: "Product Details description",
        name: "produc4-2",
        price: 100,
        priceOff: 90
      },
      {
        id: 1,
        colorName: "red", 
        color: ["#742418", "#c3c2d4"],
        image: product43,
        sizes: ["S", "M", "L"],
        detailsHeader: "Product Details",
        description: "Product Details description",
        name: "produc4-3",
        price: 100,
        priceOff: 90
      }
    ],
    color: ["#742418", "#c3c2d4"],
    colorName: "red"
  },
]

