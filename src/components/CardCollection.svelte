<script lang="ts">
  import Card from './Card.svelte';
  import type { CoffeeCard } from '../types/coffeeCard';

  export let cards: Array<CoffeeCard>;
  export let imageUrl: string;

  let i = 0;
</script>

<div class="card-collection">
  {#each cards as card}
    <div>
      <Card coffeeCard="{card}" {imageUrl} />
    </div>
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
