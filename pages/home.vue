<template>
    <div ref="homediv" class="home col-12 col-s-12" @stick="addSticky">
        <img :src="imageUrl" alt="Photo by Annie Spratt on Unsplash" />
        <h1>{{title}}<br>{{subTitle}}</h1>
        <section class="col-12 col-s-12">
            <h2>{{sectionTitle}}</h2>
            <p>{{intro}}</p>
            <p>{{introTwo}}</p>
        </section>
        <homeSectionTwo />
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
                subTitle: 'DEVELOPER',
                sectionTitle: 'Tools Used to Build This Page',
                imageUrl: './annie-spratt-OWq8w3BYMFY-unsplash.jpg',
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

    .home {
        display: flex;
        // height: 750px;
        height: auto;
        flex-wrap: wrap;
        img {
            position: absolute;
            max-width: 100%;
        }
        h1 {
            width: 100%;
            margin-top: 7rem;
            text-align: center;
            z-index: 1;
        }
        section {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            z-index: 0;
            background-color: #f1eceb;
            // h2 {
            //     width: 100vw;
            //     font-size: 2vh;
            //     padding-top: 6vh;
            //     padding-left: 5vh;
            //     padding-right: 6vh;
            // }
            p {
                width: 40vw;
                margin: 5vw auto;
            }
        }
    }

    [class*="col-"] {
        width: 100%;
        padding: 0;

        h1 {
            font-size: 2vh;
            margin-top: 8rem;
            z-index: 0;
        }
        section {
            height: 65vh;
        }
    }
    
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .col-s-12 {
            width: 100%;
            padding: 0;
            h1 {
                font-size: 3vh;
                margin-top: 13rem;
                z-index: 0;
            }
            section {
                height: auto;
                h2 {
                    padding-left: 5vh;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                font-size: 3vh;
                margin-top: 20rem;
                margin-bottom: 3rem;
                z-index: 0;
            }
            section {
                height: auto;
                h2 {
                    padding-left: 7vh;
                }
            }
        }

    }
    @media only screen and (min-width: 900px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                font-size: 3vh;
                margin-top: 22rem;
                margin-bottom: 6rem;
                z-index: 0;
            }
            section {
                height: auto;
                h2 {
                    padding-left: 10vh;
                }   
            }
        }

    }
    @media only screen and (min-width: 1250px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                margin-top: 29rem;
                margin-bottom: 13rem;
                z-index: 0;
            }
            section {
                height: auto;
            }
        }

    }

</style>