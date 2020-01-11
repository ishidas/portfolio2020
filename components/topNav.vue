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

</style>