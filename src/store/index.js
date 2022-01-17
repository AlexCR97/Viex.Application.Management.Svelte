import { writable } from "svelte/store";

const loadingModalStore = writable({
    message: 'Loading',
    isOpen: false,
})

const tabsStore = writable({
    show: false,
})

export default {
    loadingModal: {
        open({ message }) {
            if (message == undefined || message == null)
                message = 'Loading'

            loadingModalStore.set({
                isOpen: true,
                message,
            })
        },
        close() {
            loadingModalStore.set({ isOpen: false, message: 'Loading' })
        },
        subscribe: loadingModalStore.subscribe,
    },

    tabs: {
        show() {
            tabsStore.set({ show: true })
        },
        hide() {
            tabsStore.set({ show: false })
        },
        subscribe: tabsStore.subscribe,
    },
}
