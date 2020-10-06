<template>
    <div>
        <footer>
            <p v-if="isHome">Original fireworks animation created by <a :href={authorUrl}>Judith Neumann</a> in CodePen. adopted into vue by me</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                authorUrl: 'https://codepen.io/judag/pen/XmXMOL'
            }
        },
        computed: {
            isHome() {
                return this.$route.name === 'home';
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        flex-shrink: 0;
        height: 10rem;
        background-color: #FF427F;
        p {
            margin: 0;
            width: 100%;
            text-align: right;
            align-self: flex-end;    
        }
    }
</style>