import { create } from 'zustand'

export interface CartType {
    id:number
    price:number
    image:string
    title?:string 
    company:string
    modelNumber:string
    
}

interface CartState  {
    Cart: CartType[];       
    AddCart: (item: CartType) =>  void ;
    RemoveAnItem:(id:number)=>void;
  };
  
  export const useStore = create<CartState>((set: any) => ({
    Cart: [],
    AddCart: (item: CartType) =>
      set((state: any) => {
        // Check if the item with the same id already exists in the cart
        const itemExists = state.Cart.some((cartItem: CartType) => cartItem.id === item.id);
  
        if (!itemExists) {
          // If it doesn't exist, add the item to the cart
          return { Cart: [...state.Cart, item] };
        } else {
          // If it exists, do nothing (prevent adding it again)
          return state;
        }
      }),
    RemoveAnItem: (id: number) =>
      set((state: any) => ({
        Cart: [...state.Cart.filter((item: CartType) => item.id !== id)],
      })),
  }));
  