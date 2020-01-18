<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
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

</style>