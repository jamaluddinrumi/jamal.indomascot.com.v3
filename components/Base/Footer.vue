<template>
  <i-layout-footer>
      <i-nav class="w-full flex justify-between md:justify-center">
        <i-nav-item to="/privacy"
          ><span class="text-xs opacity-75 font-medium">{{
            $t("footer.privacy.title")
          }}</span></i-nav-item
        >
        <i-nav-item to="/about"
          ><span class="text-xs opacity-75 font-medium">{{
            $t("footer.about.title")
          }}</span></i-nav-item
        >
        <i-nav-item to="/contact"
          ><span class="text-xs opacity-75 font-medium">{{
            $t("footer.contact.title")
          }}</span></i-nav-item
        >
        <i-nav-item to="/credits"
          ><span class="text-xs opacity-75 font-medium">{{
            $t("footer.credits.title")
          }}</span></i-nav-item
        >
      </i-nav>
  </i-layout-footer>
</template>
