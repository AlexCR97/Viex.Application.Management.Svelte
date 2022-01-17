<script>
    import { Icon } from "sveltestrap";
    import { routes } from "./routes";
    import { Router, navigateTo } from "svelte-router-spa";
    import store from "./store";
	import { LoadingModal, Tabs, Tab } from './components'

    let showTabs = false;

	store.tabs.subscribe(value => {
		showTabs = value.show
	})

    const tabs = [
		{
			icon: "house",
			label: "Home",
			route: "/home",
		},
        {
            icon: "person-workspace",
            label: "Identity",
            route: "/identity",
        },
    ];

    function onTabClicked({ icon, label, route }) {
        navigateTo(route);
    }
</script>

<main>
	<LoadingModal />

    <Router {routes} />

    {#if showTabs}
        <Tabs>
            {#each tabs as tab (tab.label)}
                <Tab on:clicked={() => onTabClicked(tab)}>
                    <Icon slot="icon" name={tab.icon} />
                    <span slot="label">{tab.label}</span>
                </Tab>
            {/each}
        </Tabs>
    {/if}
</main>
