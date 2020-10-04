<template>
    <section class="sectionTwo col-12 col-s-12">
        <div>
            <img id="brooke-lark-img" src="brooke-lark-Uto4sJ8e_5k-unsplash.jpg" alt="Photo by Brooke Lark on Unsplash">
        </div>
        <div>
            <h2>{{sectionTitleTwo}}</h2>
            <p>
                {{content}}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                sectionTitleTwo: 'What I Am Looking for..',
                content: 'Creative work and solving problems are the reasons why I made my career change into tech. It is intreging for me to know how other people may write their codes different from me to solve the same problem.',
            }
        },
    }
</script>

<style lang="scss" scoped>
    #brooke-lark-img {
            max-width: 30rem;
            padding: 3rem;
            height: 100%;
    }
    h2 {
            text-align: center;
    }
    [class*="col-"] {
        section {
            div {
                #brooke-lark-img {
                    max-width: 100%;
                    height: auto;
                }
            }
            p {
                width: 40vw;
                margin: 5vw auto;
            }
        }
    }
    @media only screen and (min-width: 600px) {
    /* For tablets: */
    }
    @media only screen and (min-width: 768px) {
    /* For desktop: */
        .home {
            section {
                div {
                    max-width: 50%;
                    #brooke-lark-img {
                        max-width: 100%;
                        height: auto;
                    }
                }
                div {
                    h2 {
                    max-width: 100%;
                    height: auto;
                    text-align: center;
                    }
                    p {
                        max-width: 100%;
                        height: auto;
                        margin: 2vh auto;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 900px) {
    /* For desktop: */
        .home {
                section {
                    div {
                        #brooke-lark-img {
                            // max-width: 50%;
                            height: auto;
                        }
                    }
                    h2 {
                    max-width: 50%;
                    }
                    p {
                        max-width: 50%;
                    }
                }
            }
    }
    @media only screen and (min-width: 1250px) {
    /* For desktop: */
        .home {
            section {
                div {
                    #brooke-lark-img {
                        // max-width: 50%;
                        height: auto;
                    }
                }
                h2 {
                    max-width: 50%;
                    font-size: 3vh;
                }
                p {
                    max-width: 50%;
                }
            }
        }
    }
</style>