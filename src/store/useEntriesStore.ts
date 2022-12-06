import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

type EntriesStateType = {
	id: string;
	description: string;
	createAt: string;
	status: 'Pending' | 'In-progress' | 'Completed';
};

export type EntriesStoreTypes = {
	entries: EntriesStateType[];
	setEntries: (_entries: EntriesStateType) => void;
};

export const useEntriesStore = create<EntriesStoreTypes>()(set => ({
	entries: [
		{
			id: uuidv4(),
			createAt: DateTime.now().toISO(),
			description: 'lorem',
			status: 'Pending',
		},
	],
	setEntries: (_entries: EntriesStateType) =>
		set(state => ({ entries: { ...state.entries, ..._entries } })),
}));
