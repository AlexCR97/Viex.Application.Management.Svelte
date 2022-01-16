<script>
    import { Route } from "svelte-router-spa";
    import Header from "../../components/Header.component.svelte";
    export let currentRoute;
    const params = {};
</script>

<div>
    <Route {currentRoute} {params} />
</div>
