<template>
    <div class="home col-12 col-s-12">
        <img :src="imageUrl" alt="Photo by Annie Spratt on Unsplash" />
        <h1>{{title}}<br>{{subTitle}}</h1>
        <section>
            <p>{{intro}}</p>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Sawako Ishida Sagliano',
                subTitle: 'DEVELOPER',
                imageUrl: './annie-spratt-OWq8w3BYMFY-unsplash.jpg',
                intro: 'Fruitcake sesame snaps dragée powder jelly beans. Ice cream croissant powder gummi bears donut. Marshmallow marshmallow liquorice toffee pie liquorice apple pie cake. Tart gummi bears chupa chups sweet cookie. Cheesecake pudding jelly croissant gingerbread pie jelly-o. Gummi bears liquorice lemon drops croissant jelly toffee. Ice cream donut macaroon marshmallow liquorice liquorice croissant carrot cake lemon drops. Chupa chups cheesecake candy canes soufflé halvah. Sweet bonbon caramels chocolate jujubes marzipan cookie.'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        height: 750px;
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
            height: 68vh;
            z-index: 0;
            background-color: #feffab;
            p {
                width: 90vw;
                margin: 5vw auto;
            }
        }
    }

    [class*="col-"] {
        width: 100%;
        padding: 0;
         .home {
            height: 600px;

                h1 {
                    margin-top: 8rem;
                    z-index: 0;
                }
            }
    }
    
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .col-s-12 {
            width: 100%;
            padding: 0;
            h1 {
                margin-top: 13rem;
                z-index: 0;
            }
            section {
                height: 40vh;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                margin-top: 20rem;
                margin-bottom: 3rem;
                z-index: 0;
            }
            section {
                height: 35vh;
            }
        }

    }
    @media only screen and (min-width: 900px) {
        /* For desktop: */
        .col-12 {
            width: 100%;
            padding: 0;
            h1 {
                margin-top: 22rem;
                margin-bottom: 6rem;
                z-index: 0;
            }
            section {
                height: 35vh;
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
                height: 35vh;
            }
        }

    }

</style>