import { create } from "zustand";

export const useStore = create(set => ({
  myCart: [],
  addProduct: product => set(state => ({ myCart: [...state.myCart, product] })),
  removeProduct: id =>
    set(state => ({
      myCart: state.myCart.filter(item => item.id !== id),
    })),
}));
