<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(title) }} - Jamaluddin Rumi</Title>
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
const title = useChangeCase(`footer.${route.name}.title`, "dotCase");
const subtitle = useChangeCase(`footer.${route.name}.subtitle`, "dotCase");

definePageMeta({
  name: "halaman",
});
</script>
