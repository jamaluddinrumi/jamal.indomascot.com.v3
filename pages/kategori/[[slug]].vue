<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(translateSlug) }} - Jamaluddin Rumi</Title>
    </Head>
    <h1 class="text-center">{{ $t(translateSlug) }}</h1>
    <h2 class="text-center text-sm">
      Ridiculus Ullamcorper Venenatis Ipsum Purus.
    </h2>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const slug = useChangeCase(route.params.slug, "camelCase");
const translateSlug = "kategori." + slug.value;

definePageMeta({
  name: "kategori",
});
</script>
