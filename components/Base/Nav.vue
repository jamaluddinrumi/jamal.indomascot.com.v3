<template>
  <i-navbar>
    <i-navbar-brand to="/">
      <nuxt-icon class="opacity-85 align-text-bottom" name="Logo"></nuxt-icon>
      <div class="text-center text-2xl">
        <span class="font-extrabold">Jamal</span
        ><span class="opacity-75 text-sm align-text-top">Blog</span>
      </div>
    </i-navbar-brand>
    <i-navbar-collapsible class="_justify-content:center">
      <i-nav class="fa-ul mb-4 md:mb-0">
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/nuxtjs">
          <span class="fa-li ml-4">
            <IconNuxt
              class="align-text-bottom inline-block opacity-75"
            ></IconNuxt>
          </span>
          <span class="font-medium"> {{ $t("category.nuxtjs.title") }} </span>
        </i-nav-item>
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/marketing">
          <span class="fa-li ml-4">
            <IconGoogleMarketingPlatform
              class="align-text-bottom inline-block opacity-75 h-4 w-4 mb-[2px]"
            >
            </IconGoogleMarketingPlatform>
          </span>

          <span class="font-medium"> {{ $t("category.marketing.title") }} </span>
        </i-nav-item>
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/ui-ux">
          <span class="fa-li ml-4">
            <IconStyled
              class="align-text-bottom inline-block opacity-75 mb-[3px]"
            ></IconStyled>
          </span>
          <span class="font-medium"> {{ $t("category.uiUx.title") }} </span>
        </i-nav-item>
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/health">
          <span class="fa-li ml-4">
            <IconFitness
              class="align-text-bottom inline-block opacity-75 h-4 w-4 mb-[1.5px]"
            ></IconFitness>
          </span>
          <span class="font-medium"> {{ $t("category.health.title") }} </span>
        </i-nav-item>
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/property">
          <span class="fa-li ml-4">
            <IconHouse
              class="align-text-bottom inline-block opacity-75 h-4 w-4 mb-[3.5px]"
            ></IconHouse>
          </span>
          <span class="font-medium"> {{ $t("category.property.title") }} </span>
        </i-nav-item>
        <i-nav-item class="pl-0 mr-0 md:mr-2" to="/category/lab">
          <span class="fa-li ml-4">
            <IconTube
              class="align-text-bottom inline-block opacity-75 h-4 w-4 mb-[1px]"
            ></IconTube>
          </span>
          <span class="font-medium"> {{ $t("category.lab.title") }} </span>
        </i-nav-item>
      </i-nav>
      <i-input placeholder="cari..">
        <template #append>
          <i-button color="primary">
            <IconSearch></IconSearch>
          </i-button>
        </template>
      </i-input>
    </i-navbar-collapsible>
  </i-navbar>
</template>

<script setup>
import IconSearch from "~icons/carbon/search";
// import IconHome from "~icons/logos/google-home"
import IconNuxt from "~icons/logos/nuxt-icon";
import IconGoogleMarketingPlatform from "~icons/logos/google-marketing-platform";
import IconStyled from "~icons/vscode-icons/file-type-styled";
import IconFitness from "~icons/logos/google-fit";
import IconHouse from "~icons/noto-v1/house";
import IconTube from "~icons/noto/test-tube";

const open = ref(true);
</script>

<style scoped>
.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}

.fa-ul > a {
  position: relative;
}

.fa-li {
  left: -1.85em;
  position: absolute;
  text-align: center;
  width: 1.85em;
  line-height: inherit;
}

.navbar .navbar-collapsible .nav-item.-focused,
.navbar .navbar-collapsible .nav-item.-hovered,
.navbar .navbar-collapsible .nav-item:focus,
.navbar .navbar-collapsible .nav-item:hover {
  background: none;
}
</style>
