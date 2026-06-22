import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCart = create(
    persist(
        (set) => ({
            tours: [],

            addToCart: (tour) => 
                set((state) => ({
                    tours: [
                        ...state.tours, 
                        tour
                    ]
                })),
            
            deleteFromCart: (id) => 
                set((state) => ({
                    tours: state.tours.filter((t) => t.id !== id)
                }))
        }),
        {
            name: "tours-cart"
        }
    )
)