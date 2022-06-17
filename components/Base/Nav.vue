<template>
    <i-navbar :collapse="true">
        <i-navbar-brand to="/">
            <nuxt-icon class="opacity-85 align-text-bottom" name="Logo"></nuxt-icon>
            <div class="text-center text-2xl"><span class="font-extrabold">Jamal</span><span
                    class=" opacity-75 text-sm align-text-top">Blog</span>
            </div>
        </i-navbar-brand>
        <i-navbar-collapsible class="_justify-content:center">
            <i-nav class="fa-ul mb-4">
                <i-nav-item class="pl-0 mr-8" to="/">
                    <span class="fa-li">
                        <IconNuxt class="align-text-bottom inline-block opacity-75"></IconNuxt>
                    </span>
                    <span class="font-medium">
                        NuxtJS
                    </span>
                </i-nav-item>
                <i-nav-item class="pl-0 mr-8" to="/">
                    <span class="fa-li">
                        <IconGoogleMarketingPlatform class="align-text-bottom inline-block opacity-75">
                        </IconGoogleMarketingPlatform>
                    </span>

                    <span class="font-medium">
                        Marketing
                    </span>
                </i-nav-item>
                <i-nav-item class="pl-0 mr-8" to="/">
                    <span class="fa-li">
                        <IconStyled class="align-text-bottom inline-block opacity-75"></IconStyled>
                    </span>
                    <span class="font-medium">
                        UI/UX
                    </span>
                </i-nav-item>
                <i-nav-item class="pl-0 mr-8" to="/">
                    <span class="fa-li">
                        <IconFitness class="align-text-bottom inline-block opacity-75"></IconFitness>
                    </span>
                    <span class="font-medium">
                        Fitness
                    </span>
                </i-nav-item>
                <i-nav-item class="pl-0 mr-8" to="/">
                    <span class="fa-li">
                        <IconHouse class="align-text-bottom inline-block opacity-75"></IconHouse>
                    </span>

                    <span class="font-medium">
                        Properti
                    </span>
                </i-nav-item>
                <i-nav-item class="pl-0 mr-8" to="/lab">
                    <span class="fa-li">
                        <IconTube class="align-text-bottom inline-block opacity-75"></IconTube>
                    </span>

                    <span class="font-medium">
                        Lab
                    </span>
                </i-nav-item>
            </i-nav>
            <i-input placeholder="cari..">
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
// import IconHome from "~icons/logos/google-home"
import IconNuxt from "~icons/logos/nuxt-icon"
import IconGoogleMarketingPlatform from "~icons/logos/google-marketing-platform"
import IconStyled from "~icons/vscode-icons/file-type-styled"
import IconFitness from "~icons/logos/google-fit"
import IconTube from "~icons/noto/test-tube"
import IconHouse from "~icons/noto-v1/house"

const open = ref(true)

</script>

<style scoped>
.fa-ul {
    list-style-type: none;
    margin-left: 2.5em;
    padding-left: 0;
}

.fa-ul>a {
    position: relative;
}

.fa-li {
    left: -1.85em;
    position: absolute;
    text-align: center;
    width: 1.85em;
    line-height: inherit;
}

.navbar .navbar-collapsible .nav-item.-focused,
.navbar .navbar-collapsible .nav-item.-hovered,
.navbar .navbar-collapsible .nav-item:focus,
.navbar .navbar-collapsible .nav-item:hover {
    background: none
}
</style>