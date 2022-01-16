import IdentityPage from './pages/Identity.page.svelte'
import HomePage from './pages/Home.page.svelte'

export const routes = [
    {
        name: '/',
        component: HomePage,
    },
    {
        name: '/identity',
        component: IdentityPage,
    },
]
