<template>
  <i-layout-footer class="">
    <div class="flex justify-between">
      <i-nav>
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
      <i-nav></i-nav>
    </div>
  </i-layout-footer>
</template>
