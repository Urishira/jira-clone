import create from 'zustand';

type DrawerState = {
	open: boolean;
	setOpen: () => void;
};

export const useDrawerStore = create<DrawerState>()(set => ({
	open: false,
	setOpen: () => set(state => ({ open: !state.open })),
}));
