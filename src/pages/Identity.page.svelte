<script>
    import { Icon, ListGroup, ListGroupItem } from "sveltestrap";
    import Header from "../components/Header.component.svelte";

    const items = [
        {
            icon: 'people',
            label: 'Users',
        },
        {
            icon: 'key',
            label: 'Refresh Tokens',
        },
    ];

    function onListItemClicked(item) {
        console.log("item:", item);
    }
</script>

<div>
    <Header />

    <ListGroup>
        {#each items as item (item.label)}
        <ListGroupItem class="d-flex align-items-center p-3" role="button" on:click={() => onListItemClicked(item)}>
            <Icon class="me-3" name={item.icon}></Icon>
            <p class="m-0">{item.label}</p>
        </ListGroupItem>
        {/each}
    </ListGroup>
</div>
