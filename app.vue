<template>

  <Head>
    <Link rel="icon" href="/favicon/favicon.ico">
    </Link>
  </Head>
  <NuxtLayout name="default">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";
@import "@/assets/css/app.css";
@import "@/assets/css/inter.css";
@import "@/assets/css/tailwind.css";

:root {
  --color--primary--h: 202deg;
  --color--primary--s: 89%;
  --color--primary--l: 43%;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}

.fa-ul>li, .fa-ul>a {
    position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}
</style>