<script lang="ts">
  import CardCollection from './components/CardCollection.svelte';
  import LoadMoreButton from './components/LoadButton.svelte';
  import { cardsStore, hasLoadingError, isLoading, loadCard } from './stores/cardsStore';
  import { autoLoader } from './stores/timerStore';
  import { onMount } from 'svelte';
  import { scrollToBottom } from './utils/scrollToBottom';
  import ErrorMessage from './components/ErrorMessage.svelte';
  import type { CoffeeCard } from './types/coffeeCard';

  const imageUrl = 'https://loremflickr.com/500/500/coffee_bean';
  let cards: Array<CoffeeCard>;
  let errorMessage: string = "Couldn't fetch card, try again later";

  $: cards = $cardsStore;

  const handleActivity = () => {
    if ($isLoading) {
      return;
    }
    restartTimer();
  };
  const initializeApp = async () => {
    await handleLoad();
    autoLoader.start();
  };

  const restartTimer = async () => {
    if ($isLoading) {
      return;
    }
    autoLoader.stop();
    autoLoader.start();
  };
  const handleLoad = async () => {
    if ($isLoading) {
      return;
    }
    await loadCard();
  };

  onMount(() => {
    initializeApp();
  });
</script>

<main use:scrollToBottom on:mousemove="{handleActivity}">
  <CardCollection {cards} {imageUrl} />
  {#if $hasLoadingError}
    <ErrorMessage message="{errorMessage}" />
  {/if}
  <div class="button-container">
    <LoadMoreButton isLoading="{$isLoading}" onClick="{handleLoad}" />
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
