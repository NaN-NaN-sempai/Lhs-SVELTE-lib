import CompoundImage from './components/footer/components/CompoundImage.svelte';
import LinkList from './components/footer/components/LinkList.svelte';
import PathList from './components/footer/components/PathList.svelte';
import Footer from './components/footer/Footer.svelte';

export { default as Button } from "./components/Button.svelte";
export { default as DarkModeSwitch } from "./components/DarkModeSwitch.svelte";
export const footer = {
    components: {
        CompoundImage,
        LinkList,
        PathList,
    },
    Footer,
};
export { default as LanguageManager } from "./components/LanguageManager.svelte";