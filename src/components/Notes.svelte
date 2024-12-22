<script lang="ts">
    import {getRandomColor} from "../utils/randomColor";
    import * as colorPalette from '../styles/colorPalette';

    export let notes: string;

    const tagColors = [
        colorPalette.tagColor1,
        colorPalette.tagColor2,
        colorPalette.tagColor3,
        colorPalette.tagColor4,
        colorPalette.tagColor5,
        colorPalette.tagColor6,
        colorPalette.tagColor7,
        colorPalette.tagColor8,
    ];

    const coloredNotes = notes.split(',').map(note => ({
        text: note.trim(),
        color: getRandomColor(tagColors)
    }));

</script>

<div class="tags">
    {#each coloredNotes as note}
        <span class="tag" style="background-color: {note.color}">{note.text}</span>
    {/each}
</div>

<style lang="less">
  .tags {
    display: flex;
    overflow-x: scroll;
    column-gap: 8px;

    .tag {
      white-space: nowrap;
      color: @font;
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
</style>