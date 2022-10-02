<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ slug }} - Jamaluddin Rumi</Title>
    </Head>
    <article
      class="my-16 prose prose-slate mx-auto lg:prose-lg dark:prose-invert"
    >
      <h1 class="text-center">{{ $t(title) }}</h1>
      <p>
        {{ $t(subtitle) }}
      </p>
    </article>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const slug = useChangeCase(route.name, "sentenceCase");

definePageMeta({
  name: "halaman",
});
</script>
