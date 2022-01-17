<script>
    import { createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    function onClicked() {
        dispatch("clicked");
    }
</script>

<li
    class="d-flex justify-content-center align-items-center px-3 py-2"
    role="button"
    on:click={onClicked}
>
    <div>
        {#if $$slots.icon}
        <div class="d-flex justify-content-center">
            <slot name="icon" />
        </div>
        {/if}
        {#if $$slots.label}
        <p class="text-center m-0" style="font-size: 0.8rem">
            <slot name="label" />
        </p>
        {/if}
    </div>
</li>
