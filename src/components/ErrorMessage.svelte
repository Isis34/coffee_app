<script lang="ts">
  import { blur, fade } from 'svelte/transition';
  export let message: string;
</script>

<div class="error-message" in:blur="{{ duration: 1000 }}" out:fade="{{ duration: 1000 }}">
  <span>{message}</span>
</div>

<style lang="less">
  .error-message {
    color: @font;
    background-color: @error;
    border: 1px solid @errorAccent;
    padding: 8px;
    margin: 16px 0;
    width: 200px;
    text-align: center;
    border-radius: 4px;
  }
</style>
