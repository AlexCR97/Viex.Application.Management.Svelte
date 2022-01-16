<script>
    import { createEventDispatcher } from "svelte";

    import { ListGroup, ListGroupItem } from "sveltestrap";

    const dispatch = createEventDispatcher();

    export let users = [];

    function onUserItemClicked(user) {
        dispatch("userClicked", user);
    }
</script>

<ListGroup>
    {#each users as user (user._id)}
        <ListGroupItem
            class="p-3"
            role="button"
            on:click={() => onUserItemClicked(user)}
        >
            {user.email}
        </ListGroupItem>
    {/each}
</ListGroup>
