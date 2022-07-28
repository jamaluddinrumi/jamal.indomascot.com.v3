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
    <h2 class="container text-center text-sm">
      Hi, my name is Jamaluddin Rumi. I'd rather called me a Surviving Entrepreneur.
      I'm currently an Owner at
      <NuxtLink
        class="text-white underline font-bold"
        href="https://www.indomascot.com"
        >INDOMASCOT</NuxtLink
      > and also bootstrapping a startup called TanahkuLaku, a marketplace
      especially for trading land in Indonesia.
    </h2>
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
