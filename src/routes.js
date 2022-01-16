import IdentityPage from './pages/Identity/Identity.page.svelte'
import IdentityIndex from './pages/Identity/IdentityIndex.page.svelte'
import UsersPage from './pages/Identity/Users.page.svelte'
import HomePage from './pages/Home.page.svelte'

export const routes = [
    {
        name: '/',
        component: HomePage,
    },
    {
        name: '/identity',
        component: IdentityIndex,
        nestedRoutes: [
            {
                name: 'index',
                component: IdentityPage,
            },
            {
                name: 'users',
                component: UsersPage,
            },
        ],
    },
]
