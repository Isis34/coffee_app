<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  export let isLoading: boolean;
  export let onClick: () => void;
</script>

<button class="load-more" disabled="{isLoading ? 'disabled' : ''}" on:click="{onClick}" out:fade>
  {#if isLoading}
    Loading...
  {:else}
    Load More
  {/if}
</button>

<style lang="less">
  .load-more {
    padding: 10px 20px;
    font-size: 1em;
    background-color: @secondary;
    color: @font;
    border: 1px solid fade(@primary, 10);
    box-shadow: 0 2px 5px darken(@secondary, 20);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: @accent;
      box-shadow: 0 2px 5px darken(@secondary, 80);
    }

    &:disabled {
      background-color: darken(@secondary, 20);
      cursor: not-allowed;
    }
  }
</style>
