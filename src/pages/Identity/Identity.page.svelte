<script>
    import { Icon, ListGroup, ListGroupItem } from "sveltestrap";
    import { navigateTo } from "svelte-router-spa";
    import { onMount } from "svelte";
    import { Header } from '../../components'

    export let currentRoute;

    const items = [
        {
            icon: "people",
            label: "Users",
            route: "/identity/users",
        },
        // {
        //     icon: "key",
        //     label: "Refresh Tokens",
        //     route: "/identity/refreshTokens",
        // },
    ];

    onMount(() => {
        console.log("currentRoute:", currentRoute);
    });

    function onListItemClicked({ icon, label, route }) {
        navigateTo(route);
    }
</script>

<div>
    <Header>
        <span slot="title">
            {currentRoute.name}
        </span>
    </Header>

    <ListGroup>
        {#each items as item (item.label)}
            <ListGroupItem
                class="d-flex align-items-center p-3"
                role="button"
                on:click={() => onListItemClicked(item)}
            >
                <Icon class="me-3" name={item.icon} />
                <p class="m-0">{item.label}</p>
            </ListGroupItem>
        {/each}
    </ListGroup>
</div>
