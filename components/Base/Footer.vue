<template>
    <i-layout-footer class="mx-auto">
        <i-nav>
            <i-nav-item to="/">Home</i-nav-item>
            <i-nav-item to="/test">Test</i-nav-item>
        </i-nav>
    </i-layout-footer>
</template>

<style scoped>
nav .router-link-exact-active {
    @apply underline;
}
</style>