<template>
    <v-container style="margin-top: 3rem; margin-bottom: 3rem">
        <h1>Hello blog</h1>
        <v-alert color="red">Stay tune still in development mode. will be available soon!</v-alert>
        <v-card color="primary" class="mx-auto mt-3" v-for="blog in blogs" v-bind:key="blog.id">
            <v-card-text>
                <VueShowdown
                        :markdown="blog.blog"
                        flavor="github"
                        :options="{ emoji: true,  }" />
                created at {{new Date(blog.timestamp).toLocaleString()}}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT || "https://api.EXAMPLE.dev/api"

    export default {
        name: "Blog",

        components: { },

        data() {
            return {

                items: [
                    {
                        id: 1,
                        name: 'Applications :',
                        children: [
                            { id: 2, name: 'Calendar : app' },
                            { id: 3, name: 'Chrome : app' },
                            { id: 4, name: 'Webstorm : app' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Documents :',
                        children: [
                            {
                                id: 6,
                                name: 'vuetify :',
                                children: [
                                    {
                                        id: 7,
                                        name: 'src :',
                                        children: [
                                            { id: 8, name: 'index : ts' },
                                            { id: 9, name: 'bootstrap : ts' },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 10,
                                name: 'material2 :',
                                children: [
                                    {
                                        id: 11,
                                        name: 'src :',
                                        children: [
                                            { id: 12, name: 'v-btn : ts' },
                                            { id: 13, name: 'v-card : ts' },
                                            { id: 14, name: 'v-window : ts' },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 15,
                        name: 'Downloads :',
                        children: [
                            { id: 16, name: 'October : pdf' },
                            { id: 17, name: 'November : pdf' },
                            { id: 18, name: 'Tutorial : html' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'Videos :',
                        children: [
                            {
                                id: 20,
                                name: 'Tutorials :',
                                children: [
                                    { id: 21, name: 'Basic layouts : mp4' },
                                    { id: 22, name: 'Advanced techniques : mp4' },
                                    { id: 23, name: 'All about app : dir' },
                                ],
                            },
                            { id: 24, name: 'Intro : mov' },
                            { id: 25, name: 'Conference introduction : avi' },
                        ],
                    },
                ],

            };

            },
        mounted() {
            this.$store.dispatch("fetchBlogs");

        },

        computed: {
          blogs(){
              return this.$store.state.blogs;
          }
        },

        methods: {
            onClick(){
                // this.$store.commit('increment');
                // console.log(this.$store.state.count)
                // console.log(this.markdown)

                // axios.post('http://127.0.0.1:8000/api/token/', {
                //     'username': 'test',
                //     'password': 'tom2jery'
                // }).then(response=> console.log(response))
            },
        }
    }
</script>

<style scoped>

</style>