<template>
    <div class="home col-12 col-s-12">
        <img :src="imageUrl" alt="Photo by Annie Spratt on Unsplash" />
        <h1>{{title}}<br>{{subTitle}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Sawako Ishida Sagliano',
                subTitle: 'DEVELOPER',
                imageUrl: './annie-spratt-OWq8w3BYMFY-unsplash.jpg',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        height: 750px;
        img {
            position: absolute;
            z-index: 0;
            max-width: 100%;
            height: auto;
        }
    }

    [class*="col-"] {
        width: 100%;
        padding: 0;
         .home {
            display: flex;
            height: 600px;
            img {
                position: absolute;
                z-index: 0;
                max-width: 100%;
                height: auto;
            }
        }
        h1 {
                text-align: center;
                z-index: 0;
                width: 100%;
                margin-top: 8rem;
            }
    }
    
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .col-s-12 {
            width: 100%;
            padding: 0;
            h1 {
                    text-align: center;
                    z-index: 0;
                    width: 100%;
                    margin-top: 30vh;
                }
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                    text-align: center;
                    z-index: 0;
                    width: 100%;
                    margin-top: 55vh;
            }
        }

}

</style>