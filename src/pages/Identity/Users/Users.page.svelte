<script>
    import { onMount } from "svelte";
    import api from "../../../api";
    import { navigateTo } from "svelte-router-spa";
    import store from "../../../store";
    import { Header } from '../../../components'

    export let currentRoute;

    let getUsersPromise = getUsersAsync();

    onMount(() => {});

    async function getUsersAsync() {
        store.loadingModal.open({});
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        const response = await api.identity.getUsersAsync();
        store.loadingModal.close();
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

    {#await getUsersPromise then users}
        <UsersList {users} on:userClicked={onUserClicked} />
    {:catch error}
        <code>{error}</code>
        <div class="d-flex justify-content-center">
            <button class="btn btn-link" on:click={onRetryClicked}>Retry</button
            >
        </div>
    {/await}
</div>
