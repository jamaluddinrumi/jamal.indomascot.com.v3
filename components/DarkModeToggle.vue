<template>
    <a class="_padding:1" @click="setColorMode">
        <IconSun v-if="colorMode === 'dark'"></IconSun>
        <IconMoon v-else></IconMoon>
        <span class="_visually-hidden">
            <span>Toggle color mode</span>
        </span>
    </a>
</template>

<script setup>
import IconSun from "~icons/carbon/sun"
import IconMoon from "~icons/carbon/moon"

const inkline = inject('inkline', {});
const colorMode = ref(inkline.options.colorMode);

// Set the initial color mode value to determine the icon to be displayed
if (colorMode.value === 'system' && typeof window !== 'undefined') {
    colorMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Toggle between light and dark mode
const setColorMode = () => {
    const mode = colorMode.value === 'dark' ? 'light' : 'dark';

    inkline.options.colorMode = mode;
    colorMode.value = mode;
};
</script>