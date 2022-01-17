<script>
    
</script>

<nav
    class:vx-tabs={true}
    class:border-top={true}
    class:bg-light={true}
    >
    <ul>
        <slot></slot>
    </ul>
</nav>

<style>
    .vx-tabs {
        position: fixed;
        bottom: 0;
        width: 100vw;
    }

    .vx-tabs ul {
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
