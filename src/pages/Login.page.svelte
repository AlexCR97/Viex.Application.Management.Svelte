<script>
    import { Button, Icon } from "sveltestrap";
    import services from "../services";
    import store from "../store";
    import { navigateTo } from "svelte-router-spa";
    
    let email = "";
    let password = "";

    function onLoginClicked() {
        loginAsync(email, password);
    }

    function onAuthenticateClicked() {
        loginAsync("ale10@live.com", "123456");
    }

    async function loginAsync(email, password) {
        store.loadingModal.open({ message: "Logging in" });
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        await services.auth.authenticateAsync(email, password);
        store.loadingModal.close();
        store.tabs.show();
        navigateTo("/home");
    }
</script>

<div
    class="shadow-sm"
    style="position: fixed; top: 45%; left: 50%; transform: translate(-50%, -50%); width: 90%"
>
    <h5 class="text-center my-5">Viex.Application.Management</h5>

    <div class="card">
        <div class="card-body">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <Icon class="m-0 p-0" name="envelope" />
                </span>
                <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    bind:value={email}
                />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <Icon class="m-0 p-0" name="lock" />
                </span>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    bind:value={password}
                />
            </div>

            <div class="d-flex justify-content-center">
                <Button color="link" on:click={onLoginClicked}>Login</Button>
            </div>

            <div class="d-flex justify-content-center">
                <Button color="link" on:click={onAuthenticateClicked}
                    >Authenticate</Button
                >
            </div>
        </div>
    </div>
</div>
