<template>
    <nav>
        <router-link           
            v-for="(item, index) in items"
            :key="index"
            :to="{
                name: item.page,
            }"
        >
            {{item.value}}
        </router-link>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        value: 'Home',
                        page: 'home'
                    },
                    {
                        value: 'About',
                        page: 'about',
                    },
                    {
                        value:'Contact',
                        page: 'contact',
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        z-index: 1;
        a {
            padding: 1rem;
            color: white;
            font-style: none;
            text-decoration: none;
        }
    }
</style>