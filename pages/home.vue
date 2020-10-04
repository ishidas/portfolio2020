<template>
    <div ref="homediv" class="home" @stick="addSticky">
        <div class="profilePic">
            <img id="blurImage" :src="imageUrl" alt="Photo of Olive and I" />
            <img class="secondaryImage" id="clearImage1" :src="imageUrl" alt="Photo of Olive and I" />
            <img class="secondaryImage" id="clearImage2" :src="meImageUrl" alt="Sawako sitting at a table in italy" />
            <h1 class="titleOverBlur">{{title}}</h1>
            <h2 class="subTitleOverBlur">{{subTitle}}</h2>
        </div>
        <section class="">
            <h2>{{sectionTitle}}</h2>
            <p>{{intro}}</p>
            <p>{{introTwo}}</p>
        </section>
    </div>
</template>

<script>
import homeSectionTwo from '../components/homeSectionTwo';

    export default {
        components: {
            homeSectionTwo,
        },
        data() {
            return {
                title: 'Sawako Ishida Sagliano',
                subTitle: 'FULL STACK DEVELOPER',
                sectionTitle: 'Tools Used to Build This Page',
                imageUrl: './oliveMe.jpg',
                meImageUrl: './sawako.jpg',
                intro: 'Hi! Welcome to my website. I wanted to build a site which can showcase my skills I said I have on my resume, so here it is. This "Home" page was built using SCSS, CSS Animations. Nuxt.js/Vue.js/JavaScript.',
                introTwo: 'The reason why I chose these technologies is that I am currently working in Vue.js, and I wanted to let the world know that I can style without Bootstrap and other libraries.',
            }
        },
        methods: {
            addSticky() {
                console.log('hitting');
                this.$refs.homediv.style.top = 0;
            },
        }
    }
</script>

<style lang="scss" scoped>
    $accent-color: #FF427F;
    @mixin align-text-center-with-100 {
        width: 100%;
        text-align: center;
        color: $accent-color;
    }
    @mixin display-other-images {
        #clearImage1 {
            display: block;
            position: absolute;
            width: 18rem;
            top: 10%;
            left: 5%;
            transform: rotate(-15deg);
        }
        #clearImage2 {
            display: block;
            position: absolute;
            width: 18rem;
            top: 60%;
            right: 5%;
            transform: rotate(10deg);
        }
    }
    .profilePic {
        background-color: #007892;
        .secondaryImage {
            display: none;
        }
        #blurImage {
            display: block;
            margin: 5% auto;
            padding: 5% 0;
            /* Add the blur effect */
            filter: blur(8px);
            -webkit-filter: blur(8px);
        }
        .titleOverBlur {
            @include align-text-center-with-100;
            position: absolute;
            top: 30%;
            border-bottom: 1px solid white;
        }
        .subTitleOverBlur {
            @include align-text-center-with-100;
            position: absolute;
            top: 40%;
        }
    }
       
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        
    }

    @media only screen and (min-width: 768px) {
        @include display-other-images;
        /* For desktop: */

    }
    @media only screen and (min-width: 900px) {
        /* For desktop: */

    }
    @media only screen and (min-width: 1250px) {
        /* For desktop: */

    }

</style>