<template>
    <i-navbar>
        <i-navbar-brand to="/">
            <div class="text-center text-2xl"><span class="font-bold">Jamal</span><span
                    class=" opacity-75 text-sm align-text-top">Blog</span>
            </div>
        </i-navbar-brand>
        <i-navbar-collapsible>
            <i-nav class="fa-ul mb-4">
                <i-nav-item class="pl-0" to="/">
                    <span class="fa-li">
                        <IconHome class="align-text-bottom inline-block opacity-75"></IconHome>
                    </span>
                    Halaman Depan
                </i-nav-item>
                <i-nav-item class="pl-0" to="/">
                    <span class="fa-li">
                        <IconNuxt class="align-text-bottom inline-block opacity-75"></IconNuxt>
                    </span> NuxtJS
                </i-nav-item>
                <i-nav-item class="pl-0" to="/">
                    <span class="fa-li">
                        <IconGoogleMarketingPlatform class="align-text-bottom inline-block opacity-75">
                        </IconGoogleMarketingPlatform>
                    </span>
                    Marketing
                </i-nav-item>
                <i-nav-item class="pl-0" to="/">
                    <span class="fa-li">
                        <IconStyled class="align-text-bottom inline-block opacity-75"></IconStyled>
                    </span> UI/UX
                </i-nav-item>
                <i-nav-item class="pl-0" to="/">
                    <span class="fa-li">
                        <IconFitness class="align-text-bottom inline-block opacity-75"></IconFitness>
                    </span> Fitness
                </i-nav-item>
                <i-nav-item class="pl-0" to="/lab">
                    <span class="fa-li">
                        <IconTube class="align-text-bottom inline-block opacity-75"></IconTube>
                    </span>
                    Lab
                </i-nav-item>
            </i-nav>
            <i-input placeholder="ketik di sini untuk mencari..">
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
import IconHome from "~icons/logos/google-home"
import IconNuxt from "~icons/vscode-icons/file-type-nuxt"
import IconGoogleMarketingPlatform from "~icons/logos/google-marketing-platform"
import IconStyled from "~icons/vscode-icons/file-type-styled"
import IconFitness from "~icons/logos/google-fit"
import IconTube from "~icons/noto/test-tube"

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
</style>