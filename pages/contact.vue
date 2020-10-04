<template>
    <div class="home">
        <!-- <img :src="imageUrl" alt="Photo by Erol Ahmed on Unsplash" /> -->
        <section class="">
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
                imageUrl: 'erol-ahmed-IHL-Jbawvvo-unsplash.jpg',
                items: [
                    { title: 'name', value: 'Sawako Ishida Sagliano', type: 'string' },
                    { title: 'phone', value: '808-230-9698', type: 'string'},
                    { title: 'city', value: 'Seattle, WA', type: 'string' },
                    { title: 'email', value: 'sawako.ishida1@gmail.com', type: 'email'} ,
                    { title: 'linkedInUrl', value: 'https://www.linkedin.com/in/sawakoi/', type: 'url'},
                    { title: 'GithubUrl', value: 'https://github.com/ishidas' , type: 'url'},
                ]
                
            }
        },
    }
</script>

<style lang="scss" scoped>
//  .home {
//     display: flex;
//     min-height: 100vh;
//     flex-wrap: wrap;
//     img {
//             position: absolute;
//             max-width: 100%;
//     }
//     h1 {
//         width: 100%;
//         margin-top: 15rem;
//         text-align: center;
//         z-index: 1;
//     }
//     section {
//         width: 100%;
//         height: auto;
//         display: flex;
//         flex-wrap: wrap;
//         // background-color: #f1eceb;
//     }
//     ul {
//         width: 100%;
//         padding-top: 5vh;
//         padding-bottom: 5vh;
//         background-color: #fafafaa3;
//         text-align: center;
//         z-index: 1;
//         li {
//             min-width: 30vw;
//             list-style: none;
//             align-items: flex-end;
//             z-index: 1;
//         }
//     }
// }
//     [class*="col-"] {
//         width: 100%;
//         padding: 0;
//     }
//      @media only screen and (min-width: 600px) {
//         /* For tablets: */
//         .col-s-12 {
//             width: 100%;
//             padding: 0;     
//         }
//         .home > section > h1 {
//             margin-bottom: 8rem;
//         }

//     }

//     @media only screen and (min-width: 768px) {
//         /* For desktop: */
//         .col-12 {
//             width: 100%;
//             padding: 0;
          
//         }
//         .home > section > h1 {
//             margin-bottom: 15rem;
//         }

//     }
//     @media only screen and (min-width: 900px) {
//         /* For desktop: */
//         .col-12 {
//             width: 100%;
//             padding: 0;
//         }
//         .home > section {
//             justify-content: center;
//             h1 {
//                 margin-top: 10rem;
//                 margin-bottom: 0rem;
//             }
//             ul {
//                 width: 70%;
//                 border-radius: 25px;
//                 max-height: 40%;
//             }
//         } 
//     }
//     @media only screen and (min-width: 1250px) {
//         /* For desktop: */
//         .col-12 {
//             width: 100%;
//             padding: 0;
//         }
//         .home > section {
//             justify-content: center;
//             h1 {
//                 margin-top: 10rem;
//                 margin-bottom: 10rem;
//             }
//             ul {
//                 width: 80%;
//                 border-radius: 25px;
//                 max-height: 40%;
//             }
//         } 
//     }

</style>