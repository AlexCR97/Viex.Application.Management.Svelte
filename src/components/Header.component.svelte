<script>
    import AuthenticateButton from "./AuthenticateButton.component.svelte";
    import { Icon } from "sveltestrap";

    function onBackClicked() {
        window.history.back();
    }
</script>

<header class="border-bottom bg-light sticky-top p-2">
    <div class="d-flex align-items-center">
        <button
            class="btn rounded-circle d-flex justify-content-center align-items-center"
            style="width: 2.2rem; height: 2.2rem"
            on:click={onBackClicked}
        >
            <Icon name="chevron-left" />
        </button>

        {#if $$slots.title}
            <p
                class="fw-bold m-0 ms-2"
                style="width: 12rem; overflow-x: hidden; text-overflow: ellipsis"
            >
                <slot name="title" />
            </p>
        {/if}
    </div>
</header>
