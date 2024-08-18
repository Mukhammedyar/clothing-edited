
export interface CardProps {
    index: number | undefined, 
    children: React.ReactNode
}
export interface ClassNameProps {
    className: string,
    handleColorClick: (color: colorsType) => void;
}
export interface childrenProps extends ClassNameProps {
    children: React.ReactNode;
}

export interface categoriesProduct {
    id: number,
    title: string;
    sizes: string[],
    colors: string[],
    imgUrl: string
}
  
export interface typeForCategoriyesCard{
    title: string, 
    count: string, 
    products: categoriesProduct[],
    imageUrl: string
}

export interface colorsType {
    name: string, 
    color: colorsGradientType
}
interface colorsGradientType {
    from: string, 
    to: string
}
export interface complectsType {
    id: number, 
    index: number,
    complectId: string[], 
    name: string, 
    describtion: string,
    price: number, 
    priceOff: number, 
    imgUrl: string
}

export interface categoryType{
    _id: string | undefined,
    name: string | undefined, 
    type: string | undefined,
    count: number,
    imgUrl: string,
}
export interface ProductType{
    name: string | undefined,
    clotheId: string,
    imgUrl: string,
    sizes: string[],
    color: string,
    type: string,
    complection: string[],
    related: string[]
}
// export interface apiProductType {
//     _id: number | undefined,
//     name: string | undefined,
//     image: string | undefined,
//     sizes: string[],
//     detailsHeader: string | undefined,
//     description: string | undefined,
//     price: number | undefined,
//     priceOff: number,
//     complect: apiComplect[],
//     color: [string, string],
//     colorName: string | undefined
// }
// export interface apiComplect{
//     id: number | undefined,
//     colorName: string, 
//     color: string[],
//     image: string,
//     sizes: string[],
//     detailsHeader: string | undefined,
//     description: string | undefined,
//     name: string | undefined,
//     price: number,
//     priceOff: number
// }

export interface apiProductType {
    _id: number | undefined,
    productId: number,
    name: string ,
    title: string | undefined,
    image: string | undefined,
    sizes: string[],
    detailsHeader: string | undefined,
    description: string | undefined,
    price: number | undefined,
    priceOff: number,
    complect: string[],
    color: [string, string],
    colorName: string | undefined
}



export interface createCategoryType {
    name: string, count: number, imgUrl: string
}



