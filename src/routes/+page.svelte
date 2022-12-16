<script lang="ts">
    import "./global.css";
    import "uno.css";
    import Character from "../components/Character.svelte";
    import { base } from "$app/paths";

    let audio: HTMLAudioElement;
    let counter = 0;

    let audios: { [key: string]: string[] } = {
        hamood: [
            "hamood",
            "hamood-2",
            "hamood-habibi-hamood",
            "goumganmeninoma",
            "goumganmeninoma-2",
            "ye-amad-hamadi",
        ],
        ohmahgawd: ["ohmahgawd"],
    };

    let nextCharacter: string;
    document.body.addEventListener("click", () => {
        let randomForMahGah = Math.floor(Math.random() * 1000);
        counter++;
        console.log(counter);

        let character = randomForMahGah == 0 ? "ohmahgawd" : "hamood";

        audio.src =
            base + "/audio/" +
            audios[character][
                Math.floor(Math.random() * audios[character].length)
            ] +
            ".mp3";
        audio.play();
        
        nextCharacter = character;
    });
</script>

<div class="absolute top-1 right-1 text-white font-sans text-xl z-5">
    {counter}
</div>
{#each new Array(counter) as _}
    {@const width = Math.random() * 100}
    {@const height = Math.random() * 100}
    {@const scale = Math.random() * 0.6 + 0.1}
    {@const character = nextCharacter}
    <Character {width} {height} {scale} {character} />
{/each}
<audio bind:this={audio} />
