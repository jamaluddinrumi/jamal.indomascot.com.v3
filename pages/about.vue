<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(title) }} - Jamaluddin Rumi</Title>
    </Head>
    <h1 class="text-center">{{ $t(title) }}</h1>
    <h2 class="text-center text-sm">{{ $t(subtitle) }}</h2>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const title = useChangeCase(`footer.${route.name}.title`, "dotCase");
const subtitle = useChangeCase(`footer.${route.name}.subtitle`, "dotCase");

definePageMeta({
  name: "halaman",
});
</script>
