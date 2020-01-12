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
                intro: 'Fruitcake sesame snaps dragée powder jelly beans. Ice cream croissant powder gummi bears donut. Marshmallow marshmallow liquorice toffee pie liquorice apple pie cake. Tart gummi bears chupa chups sweet cookie. Cheesecake pudding jelly croissant gingerbread pie jelly-o. Gummi bears liquorice lemon drops croissant jelly toffee. Ice cream donut macaroon marshmallow liquorice liquorice croissant carrot cake lemon drops. Chupa chups cheesecake candy canes soufflé halvah. Sweet bonbon caramels chocolate jujubes marzipan cookie. Ice cream cookie gummies tiramisu gummies oat cake jujubes. Macaroon caramels dragée topping tiramisu chocolate cake croissant. Cotton candy sweet roll lollipop gummi bears topping wafer pastry pastry. Gummies biscuit soufflé donut sesame snaps. Liquorice oat cake caramels gummi bears. Wafer candy dragée danish macaroon chocolate bar jelly-o croissant dragée. Sweet roll gummi bears cake marzipan gummies tootsie roll pie dragée jelly-o. Marshmallow danish pastry tiramisu cupcake tootsie roll cookie bonbon. Dessert muffin cupcake jelly powder marshmallow sesame snaps. Chocolate bar tart carrot cake donut sweet roll topping. Bonbon sesame snaps gummies. Gummi bears gingerbread cupcake cookie. Bear claw candy bonbon' +

'Jelly-o chocolate bar candy canes cookie marshmallow. Croissant cheesecake tiramisu macaroon cookie cake ice cream jelly-o carrot cake. Bear claw chocolate cheesecake gummi bears. Candy canes soufflé pie candy. Sesame snaps cake cake chupa chups marzipan. Bear claw apple pie carrot cake oat cake lemon drops. Jelly beans tiramisu cookie gummi bears. Dessert liquorice bear claw. Marzipan cookie candy. Powder danish sugar plum cake bear claw fruitcake. Candy canes sweet dessert pie cheesecake sesame snaps powder cotton candy. Cookie gummi bears wafer sesame snaps fruitcake muffin icing lollipop candy canes. Powder pudding biscuit. Donut fruitcake croissant icing wafer bear claw carrot cake.'
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