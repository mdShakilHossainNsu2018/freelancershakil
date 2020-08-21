<template>
    <v-container style="margin-top: 3rem" v-if="userDetail.is_superuser && userDetail.is_active && userDetail.is_staff">
        <v-card color="primary" class="mx-auto mt-3" >
            <v-card-text>
                <VueShowdown
                        :markdown="markdown"
                        flavor="github"
                        :options="{ emoji: true,  }" />

            </v-card-text>



        </v-card>

        <v-textarea
                label="Blog Markdown"
                v-model="markdown"
        ></v-textarea>




        <v-btn @click="onSubmit">Click</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "BlogCreate",
        data(){
            return {  markdown: '', }
        },
        methods: {
            onSubmit(){
                const data = {
                    owner: this.userDetail.id,
                    blog: this.markdown
                }

                this.$store.dispatch('createBlog', data)
            }
        },
        mounted(){

                this.$store.dispatch('getUserDetail')
            // console.log(this.$store.state.token)

        },

        computed: {
            userDetail(){
                return this.$store.state.userDetail;
            }
        }
    }
</script>

<style scoped>

</style>