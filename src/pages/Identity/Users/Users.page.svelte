<script>
    import { onMount } from "svelte";
    import api from "../../../api";
    import { Spinner } from "sveltestrap";
    import UsersList from "../../../components/UsersList.component.svelte";
    import Header from "../../../components/Header.component.svelte";
    import { navigateTo } from "svelte-router-spa";

    export let currentRoute;

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

    function onUserClicked($event) {
        const user = $event.detail;
        navigateTo(`/identity/users/${user._id}`);
    }
</script>

<div>
    <Header>
        <span slot="title">
            {currentRoute.name}
        </span>
    </Header>

    {#await getUsersPromise}
        <div class="p-3">
            <div class="d-flex justify-content-center mb-2">
                <Spinner type="grow" />
            </div>
            <p class="text-center">Loading Users</p>
        </div>
    {:then users}
        <UsersList {users} on:userClicked={onUserClicked} />
    {:catch error}
        <code>{error}</code>
        <div class="d-flex justify-content-center">
            <button class="btn btn-link" on:click={onRetryClicked}>Retry</button
            >
        </div>
    {/await}
</div>
