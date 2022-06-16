<template>
    <i-navbar>
        <i-navbar-brand to="/">
            <div class="text-center text-2xl"><span class="font-bold">Jamal</span><span
                    class=" opacity-75 text-sm align-text-top">Blog</span>
            </div>
        </i-navbar-brand>
        <i-navbar-collapsible>
            <i-nav>
                <i-nav-item to="/">
                    Home
                </i-nav-item>
                <i-nav-item to="/">
                    About
                </i-nav-item>
                <i-nav-item to="/">
                    Contact
                </i-nav-item>
                <i-nav-item to="/test">
                    Test
                </i-nav-item>
            </i-nav>
            <i-input placeholder="Type something..">
                <template #append>
                    <i-button color="primary">
                        <IconSearch></IconSearch>
                    </i-button>
                </template>
            </i-input>
        </i-navbar-collapsible>
    </i-navbar>
</template>

<script setup>
import IconSearch from "~icons/carbon/search"

</script>