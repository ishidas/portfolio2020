<template>
    <div class="projectContainer">
        <h2>Recent Projects</h2>
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="card"
        >
            <h3>{{project.name}}</h3>
            <a :href="project.url">Link to {{project.name}}</a>
            <p>{{project.note}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [{
                    url: 'https://sweetbrownhawaii.com',
                    name: 'Sweet Brown Hawaii Caramel Inc. site',
                    tools: 'Wordpress, PHP',
                    note: 'My friends in Hawaii own a locally sourced caramel candy store there, and they needed a person who could update their website and add an online shop. I helped them fix some existing pages, and I added the online shopping feature.',
                }],
            }
        },
    }
</script>

<style lang="scss" scoped>
    $accent-blue: #007892;

    .projectContainer {
        background-color: $accent-blue;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: 2.5%;
        h2 {
            width: 90%;
        }
        .card {
            background-color: white;
            width: 90%;
            padding: 2.5%;
        }
        .introSection {
            // background-color: $accent-blue;
            // position: relative;
            top: -1.5rem;
            h3 {
                position: relative;
                margin-left: 5%;
                top: 1.1rem;
            }
            p {
                background: white;
                border: solid $accent-blue 1px;
                position: relative;
                left: 2.5%;
                top: 1rem;
                margin: 0;
                padding: 2.5%;
            }
        }
    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .projectContainer {
            .card {
            // background-color: white;
            width: 50%;
            // padding: 2.5%;
            // flex-grow: 2;
            
        }
        }

    }
    @media only screen and (min-width: 900px) {
        /* For desktop: */
    }

    @media only screen and (min-width: 1250px) {
        /* For desktop: */

    }
</style>