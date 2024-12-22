import {writable} from 'svelte/store';
import {fetchCard} from '../api/loadCardData';
import type {CoffeeCard} from '../types/coffeeCard';

export const cardsStore = writable<CoffeeCard[]>([]);
export const isLoadingStore = writable(false);

export const loadCard = async () => {
    isLoadingStore.set(true);
    try {
        const newCard: CoffeeCard = await fetchCard();
        cardsStore.update((cards) => [...cards, newCard]);
    } finally {
        isLoadingStore.set(false);
    }
};
