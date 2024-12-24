import { writable } from 'svelte/store';
import { fetchCard } from '../api/loadCardData';
import type { CoffeeCard } from '../types/coffeeCard';

export const cardsStore = writable<CoffeeCard[]>([]);
export const isLoading = writable<boolean>(false);

export const hasLoadingError = writable<boolean>(false);

export const loadCard = async () => {
  isLoading.set(true);
  hasLoadingError.set(false);
  try {
    const newCard: CoffeeCard = await fetchCard();
    cardsStore.update((cards) => [...cards, newCard]);
  } catch (error) {
    console.log(error);
    hasLoadingError.set(true);
  } finally {
    isLoading.set(false);
  }
};
