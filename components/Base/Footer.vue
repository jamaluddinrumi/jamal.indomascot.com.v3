<template>
  <i-layout-footer class="">
    <div class="flex justify-between">
      <i-nav>
        <i-nav-item class="text-xs opacity-75" to="/privacy">{{
          $t("footer.privacy.title")
        }}</i-nav-item>
        <i-nav-item class="text-xs opacity-75" to="/about">{{
          $t("footer.about.title")
        }}</i-nav-item>
        <i-nav-item class="text-xs opacity-75" to="/contact">{{
          $t("footer.contact.title")
        }}</i-nav-item>
        <i-nav-item class="text-xs opacity-75" to="/credits">{{
          $t("footer.credits.title")
        }}</i-nav-item>
      </i-nav>
      <i-nav></i-nav>
    </div>
  </i-layout-footer>
</template>
