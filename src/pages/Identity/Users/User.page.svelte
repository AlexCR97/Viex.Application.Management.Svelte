<script>
    import { onMount } from "svelte";
    import { Spinner } from "sveltestrap";
    import api from "../../../api";
    import Header from "../../../components/Header.component.svelte";

    export let currentRoute;

    let promise = loadUserAsync();
    let user;

    onMount(() => {});

    async function loadUserAsync() {
        const id = currentRoute.namedParams.id;
        console.log("id:", id);
        const response = await api.identity.getUserByIdAsync(id);
        console.log("response:", response);
        user = response.content;
    }

    function onRetryClicked() {
        promise = loadUserAsync();
    }
</script>

<div>
    <Header>
        <span slot="title">
            {currentRoute.name}
        </span>
    </Header>

    <div class="p-3">
        {#await promise}
            <div class="d-flex justify-content-center mb-2">
                <Spinner type="grow" />
            </div>
            <p class="text-center">Loading User</p>
        {:then}
            <label class="mb-1">Id</label>
            <input
                class="form-control mb-3"
                readonly
                type="text"
                bind:value={user._id}
            />

            <label class="mb-1">Email</label>
            <input
                class="form-control mb-3"
                readonly
                type="text"
                bind:value={user.email}
            />

            <label class="mb-1">Password</label>
            <input
                class="form-control mb-3"
                readonly
                type="text"
                bind:value={user.password}
            />

            <label class="mb-1">Date Created</label>
            <input
                class="form-control mb-3"
                readonly
                type="text"
                bind:value={user.dateCreated}
            />
        {:catch error}
            <code>{error}</code>
            <div class="d-flex justify-content-center">
                <button class="btn btn-link" on:click={onRetryClicked}
                    >Retry</button
                >
            </div>
        {/await}
    </div>
</div>
