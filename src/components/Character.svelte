<script lang="ts">
    import { base } from "$app/paths";
    export let width: number;
    export let height: number;
    export let scale: number;
    export let character: string;

    const values: [number, number, number, string] = [
        width,
        height,
        scale,
        character,
    ];
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="animate-spin absolute select-none"
    style={`left: ${values[0]}%; top: ${values[1]}%;`}
    width={values[2] * 332}
    height={values[2] * 477}
    src={`${base}/${values[3]}.png`}
/>
