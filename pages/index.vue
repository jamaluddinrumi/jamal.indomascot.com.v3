<template>
    <div class="grid place-content-center">

        <Head>
            <Title>Marketing Practitioner - Jamaluddin Rumi</Title>
        </Head>
        <h2 class="text-center font-light text-base">about <span>
                <IconNuxt class="inline-block opacity-75"></IconNuxt>
            </span> NuxtJS, <IconGoogleMarketingPlatform class="inline-block opacity-75"></IconGoogleMarketingPlatform>
            Marketing,
            <IconStyled class="inline-block opacity-75"></IconStyled> UI/UX
        </h2>
        <i-toggle v-model="toggled">I accept the terms and conditions</i-toggle>
    </div>
</template>

<script setup>
import IconNuxt from "~icons/vscode-icons/file-type-nuxt"
import IconGoogleMarketingPlatform from "~icons/logos/google-marketing-platform"
import IconStyled from "~icons/vscode-icons/file-type-styled"

const toggled = ref(false);
</script>