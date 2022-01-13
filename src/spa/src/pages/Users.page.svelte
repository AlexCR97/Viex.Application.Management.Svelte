<script>
    import { onMount } from "svelte";
    import api from "../api";
    import { Spinner } from "sveltestrap";
    import UsersList from "../components/UsersList/UsersList.component.svelte";

    let getUsersPromise = getUsersAsync();

    onMount(() => {});

    async function getUsersAsync() {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        const response = await api.identity.getUsersAsync();
        return response.content;
    }

    async function onRetryClicked() {
        getUsersPromise = getUsersAsync()
    }
</script>

<div class="p-3">
    <h1 class="mb-4">Users Page</h1>

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
            <button class="btn btn-link" on:click="{onRetryClicked}">Retry</button>
        </div>
    {/await}

</div>
