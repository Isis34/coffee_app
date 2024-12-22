<script lang="ts">
    import CardCollection from './components/CardCollection.svelte';
    import LoadMoreButton from './components/LoadButton.svelte';
    import type {CoffeeCard} from './types/coffeeCard';
    import {cardsStore, isLoadingStore, loadCard} from './stores/cardsStore';
    import {autoLoaderStore} from './stores/timerStore';
    import {onMount} from 'svelte';
    import {scrollToBottom} from './utils/scrollToBottom';
    import ErrorMessage from './components/ErrorMessage.svelte';

    const imageUrl = 'https://loremflickr.com/500/500/coffee_bean';
    let cards: Array<CoffeeCard>;
    let isLoading: boolean = false;
    let errorMessage: string | null = null;

    $: cards = $cardsStore;
    $: isLoading = $isLoadingStore;


    const handleActivity =  () => {
        if (isLoading) {
            return;
        }
        restartTimer();
    };
    const initializeApp = async () => {
        await handleLoad();
        autoLoaderStore.start();

    };

    const restartTimer = async () => {
        if (isLoading) {
            return;
        }
        try {
            autoLoaderStore.stop();
           await autoLoaderStore.start();
            errorMessage = null;
        } catch (error) {
            errorMessage = "Couldn't fetch card, try again later";
        }

    }
    const handleLoad = async () => {
        if (isLoading) {
            return;
        }
        try {
            errorMessage = null;
            await loadCard();
        } catch (error) {
            errorMessage = "Couldn't fetch card, try again later";
        }

    };

    onMount(() => {
        initializeApp();
    });
</script>

<main use:scrollToBottom on:mousemove="{handleActivity}">
    <CardCollection {cards} {imageUrl}/>
    {#if errorMessage}
        <ErrorMessage message="{errorMessage}"/>
    {/if}
    <div class="button-container">
        <LoadMoreButton {isLoading} onClick="{handleLoad}"/>
    </div>
</main>

<style lang="less">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 90vh;
    overflow-y: scroll;
  }

  .button-container {
    margin-top: 16px;
  }
</style>
