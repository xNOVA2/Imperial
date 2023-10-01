// Product Component Props interface
export interface ProductProps{
    title:string
    image1:string
    image2:string
    description:string
    price:number
  }

  export interface FetchProductsType {
    id:number
    Price:number
    Type:string
    Series:string
    Size:string
    Color:string
    CompanyName:string
    ProductUrl:string
    ItemType:string 
    ItemDescription:string
    ModelNo:string
  }