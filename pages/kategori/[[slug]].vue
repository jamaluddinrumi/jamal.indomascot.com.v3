<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(slugTitle) }} - Jamaluddin Rumi</Title>
    </Head>
    <div class="flex justify-center items-start">
      <IconNuxt
        v-if="slug === 'nuxtjs'"
        class="icon align-text-bottom inline-flex opacity-75 w-11 h-11 mt-[calc(1rem_*_2.5)]"
      ></IconNuxt>
      <IconGoogleMarketingPlatform
        v-if="slug === 'marketing'"
        class="icon align-text-bottom inline-flex opacity-75 w-8 h-8 mt-[calc(1rem_*_2.8)]"
      ></IconGoogleMarketingPlatform>
      <IconStyled
        v-if="slug === 'uiUx'"
        class="icon align-text-bottom inline-flex opacity-75 w-9 h-9 mt-[calc(1rem_*_2.5)]"
      ></IconStyled>
      <IconFitness
        v-if="slug === 'health'"
        class="icon align-text-bottom inline-flex opacity-75 w-9 h-9 mt-[calc(1rem_*_2.8)]"
      ></IconFitness>
      <IconHouse
        v-if="slug === 'property'"
        class="icon align-text-bottom inline-flex opacity-75 w-9 h-9 mt-[calc(1rem_*_2.5)]"
      ></IconHouse>
      <IconTube
        v-if="slug === 'lab'"
        class="icon align-text-bottom inline-flex opacity-75 w-9 h-9 mt-[calc(1rem_*_2.7)]"
      ></IconTube>
      <h1 class="ml-2 text-center inline-flex">{{ $t(slugTitle) }}</h1>
    </div>
    <h2 class="text-center text-sm">
      {{ $t(slugSubtitle) }}
    </h2>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";
import IconSearch from "~icons/carbon/search";
// import IconHome from "~icons/logos/google-home"
import IconNuxt from "~icons/logos/nuxt-icon";
import IconGoogleMarketingPlatform from "~icons/logos/google-marketing-platform";
import IconStyled from "~icons/vscode-icons/file-type-styled";
import IconFitness from "~icons/logos/google-fit";
import IconHouse from "~icons/noto-v1/house";
import IconTube from "~icons/noto/test-tube";

const route = useRoute();
const slug = useChangeCase(route.params.slug, "camelCase");
const slugTitle = "kategori." + slug.value + ".title";
const slugSubtitle = "kategori." + slug.value + ".subTitle";

definePageMeta({
  name: "kategori",
});
</script>

<style lang="scss">
.icon {
  line-height: var(--heading--line-height);
}
</style>
