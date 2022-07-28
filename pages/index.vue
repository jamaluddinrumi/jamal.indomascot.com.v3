<template>
  <div class="grid place-content-center min-h-fit">
    <Head>
      <Title>{{ $t("title") }} - Jamaluddin Rumi</Title>
    </Head>
    <div class="flex justify-center items-start">
      <h1 class="text-center inline-flex">Coming</h1>
      <IconSoon
        class="icon align-text-bottom inline-flex w-11 h-11 mt-[calc(1rem_*_2.5)] ml-2"
      ></IconSoon>
    </div>
    <p class="container text-center text-sm">
      My name is Jamaluddin Rumi and Welcome to my personal website. I'm a Web
      Developer from Indonesia and work as Owner at
      <NuxtLink href="https://www.indomascot.com">INDOMASCOT</NuxtLink>. I'm
      also bootstrapping a startup called TanahkuLaku, a marketplace especially for
      trading land in Indonesia.
    </p>
  </div>
</template>

<script setup>
import IconSoon from "~icons/noto/soon-arrow";

definePageMeta({
  name: "halaman",
});
</script>

<style lang="scss">
.icon {
  line-height: var(--heading--line-height);
}
</style>
