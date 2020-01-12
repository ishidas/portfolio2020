<template>
    <nav ref="navigation">
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
        mounted() {
            if (process.client) {
                this.$window
                console.log('nav', this.$refs.navigation);
            
            }
        }
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