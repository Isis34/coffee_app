import type {CoffeeCard} from '../types/coffeeCard';

export const fetchCard = async (): Promise<CoffeeCard> => {
    const response = await fetch('https://random-data-api.com/api/coffee/random_coffee');
    if (!response.ok) {
        throw new Error('Failed to fetch coffee data');
    }

    const data = await response.json();
    if (!data || typeof data !== 'object') {
        throw new Error('Invalid coffee data received');
    }
    return data;
};
