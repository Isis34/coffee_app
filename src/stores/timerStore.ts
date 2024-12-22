import {writable} from 'svelte/store';
import {loadCard} from './cardsStore';

export const createAutoLoader = (loadCallback: () => void, interval: number = 3000) => {
    let timer: NodeJS.Timeout | null = null;

    const {set} = writable(false);

    const start = (): void => {
        if (timer) {
            return;
        }
        try {
            timer = setInterval(async () => {
                await loadCallback();
            }, interval);
        } catch (error) {
            console.error(error);
            throw error;
        }
        set(true);
    };

    const stop = (): void => {
        if (!timer) {
            return;
        }
        clearInterval(timer);
        timer = null;
        set(false);
    };

    return {
        start,
        stop,
    };
};

export const autoLoaderStore = createAutoLoader(loadCard);
