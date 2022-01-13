<script>
    import { ListGroup, ListGroupItem } from "sveltestrap";

    export let users = [];
</script>

<ListGroup>
    {#each users as user (user._id)}
        <ListGroupItem>{user.email}</ListGroupItem>
    {/each}
</ListGroup>
