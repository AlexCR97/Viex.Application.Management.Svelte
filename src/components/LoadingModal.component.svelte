<script lang="ts">
    import { Button, Icon, Spinner, Modal } from "sveltestrap";
    import store from "../store";

    let isOpen = false;
    let message = "Loading";

    const toggle = () => (isOpen = !isOpen);

    store.loadingModal.subscribe((value) => {
        isOpen = value.isOpen;
        message = value.message;
    });
</script>

<Modal backdrop="static" {isOpen} {toggle}>
    <div
        slot="external"
        style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
        <div class="d-flex justify-content-center mb-2">
            <Spinner color="light" type="grow" />
        </div>
        <h5 class="text-center text-light m-0">{message}</h5>
    </div>
</Modal>
