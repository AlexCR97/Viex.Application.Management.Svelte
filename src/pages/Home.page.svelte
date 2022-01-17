<script>
    import { Header } from '../components'
    export let currentRoute
</script>

<div>

    <Header>
        <span slot="title">
            {currentRoute.name}
        </span>
    </Header>
</div>
