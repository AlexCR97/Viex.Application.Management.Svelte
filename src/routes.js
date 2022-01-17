import IdentityPage from './pages/Identity/Identity.page.svelte'
import IdentityIndex from './pages/Identity/IdentityIndex.page.svelte'
import UsersPage from './pages/Identity/Users/Users.page.svelte'
import UserPage from './pages/Identity/Users/User.page.svelte'
import { HomePage, LoginPage } from './pages'

export const routes = [
    {
        name: '/',
        component: LoginPage,
    },
    {
        name: '/home',
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
            {
                name: 'users/:id',
                component: UserPage,
            },
        ],
    },
]
