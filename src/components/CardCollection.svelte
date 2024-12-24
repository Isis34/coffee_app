<script lang="ts">
  import Card from './Card.svelte';
  import type { CoffeeCard } from '../types/coffeeCard';

  export let cards: Array<CoffeeCard>;
  export let imageUrl: string;
</script>

<div class="card-collection">
  {#each cards as card}
    <Card coffeeCard="{card}" {imageUrl} />
  {/each}
</div>

<style lang="less">
  .card-collection {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 9px;
  }
</style>
