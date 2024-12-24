<script lang="ts">
  import { onMount } from 'svelte';

  export let blend_name: string;
  export let origin: string;
  export let imageUrl: string;

  const loadingImageSrc = '../../img/loading-gif.gif';

  let imageLoaded = false;
  let loading = false;
  let imageError = false;

  onMount(() => {
    const img = new Image();
    img.src = imageUrl;
    loading = true;

    img.onload = () => {
      loading = false;
      imageLoaded = true;
    };
    img.onerror = () => {
      loading = false;
      imageError = true;
    };
  });
</script>

<div class="image-container">
  {#if imageLoaded}
    <img class="loaded" src="{imageUrl}" alt="Coffee image blend: {blend_name}, origin: {origin}" />
  {:else if imageError}
    <div class="error">Can't load the image</div>
  {:else}
    <img class="loading" src="{loadingImageSrc}" alt="Загрузка" />
  {/if}
</div>

<style lang="less">
  .image-container {
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, @primary 0%, @secondary 100%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;

      &.loading {
        width: 50px;
        height: 50px;
      }
    }

    .error {
      color: @font;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
