<template>
<div class="nav-wrapper">
    <nav ref="navigation" :class="isSticky ? 'sticky-nav' : ''">
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
</div>
</template>

<script>
import _ from 'lodash';

    export default {
        data() {
            return {
                items: [
                    {
                        value: 'Home',
                        page: 'home'
                    },
                    {
                        value:'Contact',
                        page: 'contact',
                    }
                ],
                isSticky: false,
            }
        },
        watch: {
            isSticky() {
            },
        },
        beforeMount() {
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll, 300);
            }
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                if (window.screenY > 0) {
                    this.$emit('stick');
                    this.isSticky = true;
                    this.resetAnimation();
                }
                if (window.scrollY === 0) {
                    this.isSticky = false;
                    this.resetAnimation();
                }
            },
            resetAnimation() {
                this.$refs.navigation.style.WebkitAnimation = 'none';
                this.$refs.navigation.style.MozAnimation = 'none';
                this.$refs.navigation.style.MsAnimation = 'none';
                this.$refs.navigation.style.oAnimation = 'none';
                this.$refs.navigation.style.Animation = 'none';
                setTimeout(() => {
                    this.$refs.navigation.style.WebkitAnimation = '';
                    this.$refs.navigation.style.MozAnimation = '';
                    this.$refs.navigation.style.MsAnimation = '';
                    this.$refs.navigation.style.oAnimation = '';
                    this.$refs.navigation.style.Animation = '';
                }, 10);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        display: flex;
        width: 100%;
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            z-index: 1;
            // background-color: #c7a08099;
            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
            -moz-animation: fadein 2s; /* Firefox < 16 */
            -ms-animation: fadein 2s; /* Internet Explorer */
            -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
            a {
                padding: 1rem;
                color:white;
                font-style: none;
                text-decoration: none;
            }
        }
    }
    .sticky-nav {
        width: 100%;
        position: sticky;
        display: flex;
        top: 0;
        align-self: flex-start;
        justify-content: space-evenly;
        z-index: 2;
        
        // background-color: #636363c7;
        background-color: #c7a08099;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
    }
    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
</style>