import { loadCard } from './cardsStore';
import { writable } from 'svelte/store';

export const isTimerSet = writable<boolean>(false);

export const createAutoLoader = (loadCallback: () => void, seconds: number = 30) => {
  let timer: number | null = null;

  const start = (): void => {
    if (timer) {
      return;
    }
    timer = window.setInterval(() => {
      loadCallback();
    }, seconds * 1000);
    isTimerSet.set(true);
  };

  const stop = (): void => {
    if (!timer) {
      return;
    }
    clearInterval(timer);
    isTimerSet.set(false);
    timer = null;
  };

  return {
    start,
    stop,
  };
};

export const autoLoader = createAutoLoader(loadCard);
