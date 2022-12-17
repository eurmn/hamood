<script lang="ts">
    import "./global.css";
    import "uno.css";
    import Character from "../components/Character.svelte";
    import { base } from "$app/paths";

    let audios: {
        [key: string]: HTMLAudioElement;
    } = {};

    let counter = 0;

    let addHamood = () => {
        let randomForMahGah = Math.floor(Math.random() * 1000);
        let character = randomForMahGah == 0 ? "ohmahgawd" : "hamood";
        let audio: HTMLAudioElement;
        let width = Math.random() * 100 - 4;
        let height = Math.random() * 100 - 10;
        let scale = Math.random() * 0.6 + 0.1;

        if (character == "ohmahgawd") {
            audio = audios["ohmahgawd"];
        } else {
            let r =
                Object.keys(audios)[
                    Math.floor(Math.random() * (Object.keys(audios).length - 1))
                ];
            console.log(r);
            audio = audios[r];
        }

        audio.play();
        counter++;

        new Character({
            target: document.body,
            props: {
                width,
                height,
                scale,
                character,
                counter,
            },
        });
    };

    document.body.addEventListener("click", addHamood);
    document.addEventListener("keyup", (e) => {
        if (e.code == "Space") {
            addHamood();
        }
    });
</script>

<div
    class="absolute top-1 right-1 text-white font-sans text-xl bg-black px-2"
    style={`z-index: ${counter + 1}`}
>
    {counter}
</div>
<audio bind:this={audios["hamood"]} src={base + "/audio/hamood.mp3"} />
<audio bind:this={audios["hamood-2"]} src={base + "/audio/hamood-2.mp3"} />
<audio
    bind:this={audios["hamood-habibi-hamood"]}
    src={base + "/audio/hamood-habibi-hamood.mp3"}
/>
<audio
    bind:this={audios["goumganmeninoma"]}
    src={base + "/audio/goumganmeninoma.mp3"}
/>
<audio
    bind:this={audios["goumganmeninoma-2"]}
    src={base + "/audio/goumganmeninoma-2.mp3"}
/>
<audio
    bind:this={audios["ye-amad-hamadi"]}
    src={base + "/audio/ye-amad-hamadi.mp3"}
/>
<audio bind:this={audios["ohmahgawd"]} src={base + "/audio/secret.mp3"} />
