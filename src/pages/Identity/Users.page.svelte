<script>
    import { onMount } from "svelte";
    import api from "../../api";
    import { Spinner } from "sveltestrap";
    import UsersList from "../../components/UsersList/UsersList.component.svelte";
    import Header from "../../components/Header.component.svelte";

    export let currentRoute

    let getUsersPromise = getUsersAsync();

    onMount(() => {});

    async function getUsersAsync() {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        const response = await api.identity.getUsersAsync();
        return response.content;
    }

    async function onRetryClicked() {
        getUsersPromise = getUsersAsync();
    }
</script>

<div>
    <Header>
        <span slot="title">
            {currentRoute.name}
        </span>
    </Header>

    {#await getUsersPromise}
        <div class="d-flex justify-content-center mb-2">
            <Spinner type="grow" />
        </div>
        <p class="text-center">Loading Users</p>
    {:then users}
        <UsersList {users} />
    {:catch error}
        <code>{error}</code>
        <div class="d-flex justify-content-center">
            <button class="btn btn-link" on:click={onRetryClicked}>Retry</button
            >
        </div>
    {/await}
</div>
