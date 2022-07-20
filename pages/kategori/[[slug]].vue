<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(slugTitle) }} - Jamaluddin Rumi</Title>
    </Head>
    <h1 class="text-center">{{ $t(slugTitle) }}</h1>
    <h2 class="text-center text-sm">
      {{ $t(slugSubtitle) }}
    </h2>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const slug = useChangeCase(route.params.slug, "camelCase");
const slugTitle = "kategori." + slug.value + ".title";
const slugSubtitle = "kategori." + slug.value + ".subTitle";

definePageMeta({
  name: "kategori",
});
</script>
