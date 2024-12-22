<script lang="ts">
  import Image from './Image.svelte';
  import Notes from './Notes.svelte';
  import type { CoffeeCard } from '../types/coffeeCard';

  export let imageUrl: string;
  export let coffeeCard: CoffeeCard;
</script>

<div class="card">
  <Image blend_name="{coffeeCard.blend_name}" origin="{coffeeCard.origin}" {imageUrl} />
  <div class="content">
    <h2>{coffeeCard.blend_name}</h2>
    <p>Origin: {coffeeCard.origin}</p>
    <p>Variety: {coffeeCard.variety}</p>
    <p>Intensity: {coffeeCard.intensifier}</p>
    <Notes notes="{coffeeCard.notes}" />
  </div>
</div>

<style lang="less">
  .card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px darken(@primary, 20);
    width: 400px;

    @media (max-width: 480px) {
      width: 95vw;
    }

    .content {
      background: linear-gradient(180deg, @secondary 0%, @primary 100%);
      color: @font;
      padding: 10px;
    }
  }
</style>
