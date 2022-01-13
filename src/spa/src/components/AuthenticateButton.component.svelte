<script>
    import { Button } from "sveltestrap";
    import services from '../services'

    async function onAuthenticateClicked() {
        console.log('Authenticating...')
        await services.auth.authenticateAsync('ale10@live.com', '123456')
        console.log('Authenticated!')
    }
</script>

<Button color="link" on:click={onAuthenticateClicked}>Authenticate</Button>

