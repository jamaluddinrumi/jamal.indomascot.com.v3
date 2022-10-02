<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t(slugTitle) }} - Jamaluddin Rumi</Title>
    </Head>
    <article
      class="my-16 prose prose-slate mx-auto lg:prose-lg dark:prose-invert"
    >
      <h1 class="text-center">{{ $t(slugTitle) }}</h1>
      <p>
        {{ $t(slugSubtitle) }}
      </p>
    </article>
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const route = useRoute();
const slug = useChangeCase(route.params.slug, "camelCase");
const slugTitle = "category." + slug.value + ".title";
const slugSubtitle = "category." + slug.value + ".subtitle";

definePageMeta({
  name: "kategori",
});
</script>

<style lang="scss">
.icon {
  line-height: var(--heading--line-height);
}
</style>
