import { create } from "zustand";

type ToggleHeader = boolean;

type ToggleHeaderStore = {
    toggleHeader: ToggleHeader;
    onChangeToggle: () =>void
}

export const useToggleHeader = create<ToggleHeaderStore>((set)=>({
    toggleHeader: false,
    onChangeToggle: () =>set((state)=>({toggleHeader: !state.toggleHeader}))
}))

