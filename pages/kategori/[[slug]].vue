<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ slug }} - Jamaluddin Rumi</Title>
    </Head>
    <h1 class="text-center">{{ slug }}</h1>
    <h2 class="text-center text-sm">
      Ridiculus Ullamcorper Venenatis Ipsum Purus.
    </h2>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const slug = useChangeCase(route.params.slug, "sentenceCase");

definePageMeta({
  name: "kategori",
});
</script>
