<script>
	import { Icon } from 'sveltestrap'
	import Tab from './components/Tabs/Tab.svelte'
	import Tabs from './components/Tabs/Tabs.svelte'
	import { routes } from './routes'
	import { Router, navigateTo } from 'svelte-router-spa'
	
	const tabs = [
		{
			icon: 'person-workspace',
			label: 'Identity',
			route: '/identity',
		},
	]

	function onTabClicked({ icon, label, route }) {
		navigateTo(route)
	}
</script>

<main>

	<Router {routes} />

	<Tabs>
		{#each tabs as tab (tab.label)}
		<Tab on:clicked={() => onTabClicked(tab)}>
			<Icon slot="icon" name={tab.icon}></Icon>
			<span slot="label">{tab.label}</span>
		</Tab>
		{/each}
	</Tabs>

</main>
