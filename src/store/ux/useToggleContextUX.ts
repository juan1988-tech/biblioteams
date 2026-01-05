import { create } from "zustand";

type ToggleStateStore = {
    toggleBackground: boolean;
    toggleAside: boolean;
    toggleAsideFilter: boolean;
}

type ToggleStateActions ={
    onChangeBackground: () =>void;
    onChangeAside: () =>void;
    onChangeAsideFilter: ()=>void;
    onChangeFalseAside: ()=>void;
    onChangeFalseAsideFilter: ()=>void;    
}

export const useToggleContextUX = create<ToggleStateStore & ToggleStateActions>((set)=>({
    toggleBackground: false,
    toggleAside: false,
    toggleAsideFilter: false,
    onChangeBackground: () =>set((state)=>({toggleBackground: !state.toggleBackground})),
    onChangeAside: ()=>set((state)=>({toggleAside: !state.toggleAside})),
    onChangeAsideFilter:()=>set((state)=>({toggleAsideFilter: !state.toggleAsideFilter})),
    onChangeFalseAside:()=>set(()=>({toggleAside: false})),
    onChangeFalseAsideFilter:()=>set(()=>({toggleAsideFilter: false})),
}))

