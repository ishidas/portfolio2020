<template>
    <div class="contact">
        <div class="contactImageContainer">
            <img class="contactImage" :src="imageUrl" alt="My dog Olive's pixel art by Sawako" />
        </div>
        <section class="contactContainer">
            <h1>Contact</h1>
            <ul>
                <li
                    v-for="(item, index) in items"
                    :key="index"
                >
                <title>{{item.title}}</title>
                <div v-if="item.type === 'url'"><a :href="item.value" aria-label="item.type">{{item.value}}</a></div>
                <div v-if="item.type === 'email'"><a :href="`mailto:${item.value}?Subject=Saw Your Website!`" aria-label="item.type">{{item.value}}</a></div>
                <p v-if="item.type === 'string'">{{item.value}}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: 'https://s3-us-west-2.amazonaws.com/sawakosagliano.com/pixil-olive512x512.png',
                items: [
                    { title: 'name', value: 'Sawako Ishida Sagliano', type: 'string' },
                    { title: 'city', value: 'Seattle, WA until December 2020. Moving back to Osaka, Japan', type: 'string' },
                    { title: 'email', value: 'sawako.ishida1@gmail.com', type: 'email'} ,
                    { title: 'linkedInUrl', value: 'https://www.linkedin.com/in/sawakoi/', type: 'url'},
                    { title: 'GithubUrl', value: 'https://github.com/ishidas' , type: 'url'},
                ]
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    $contact-accent-color: #007892;
    a {
        color: $contact-accent-color;
    }
    body {
        background: black;
    }
    .contact {
        // flex: 1 0 auto;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
        align-items: stretch;
    }
    .contactImageContainer {
        display: flex;
        justify-content: center;
        .contactImage {
            width: 70%;
            padding-top: 20%;
        }
    }
    .contactContainer {
        // display: flex;
        h1 {
            display: block;
            margin-top: 0;
            text-align: center;
            // padding-left: 5%;
        }
        ul {
            padding-left: 5%;
            padding-bottom: 10%;
            margin: 0 auto;
            width: 80%;
            li {
                list-style: none;
            }
        }
    }
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .contactImageContainer {
            .contactImage {
                width: 50%;
                padding-top: 10%;
            }
        }
        .contactContainer {
            ul {
                width: 60%;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .contactImageContainer {
            .contactImage {
                width: 30%;
                padding-top: 10%;
            }
        }

    }
    @media only screen and (min-width: 900px) {
        /* For desktop: */
        .contactImageContainer {
            .contactImage {
                width: 25%;
                padding-top: 5%;
            }
        }
        .contactContainer {
            ul {
                width: 50%;
            }
        }
    }

    @media only screen and (min-width: 1250px) {
        /* For desktop: */
        .contactContainer {
            ul {
                width: 30%;
                padding-bottom: 5%;
            }
        }
    }

</style>