<template>
            <v-container>
                <h1>Our Services:</h1>

                <v-row dense>

                    <v-col xs="12" sm="6" md="6" lg="4" xl="4" v-for="(product, index) in products" v-bind:key="product.id">
                        <v-card
                                max-width="344"
                                class="mx-auto"
                                dark
                                :color="colors[index % 3]"
                                elevation="10"
                        >
                            <v-list-item>

                                <v-list-item-content>
                                    <v-list-item-title class="headline">{{product.name}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-img
                                    :src="product.imageUrl"
                                    height="194"
                            ></v-img>

                            <v-card-text>
                                {{product.description}}
                            </v-card-text>
                        </v-card>
                    </v-col>

                </v-row>


            </v-container>
</template>

<script>
    export default {
        name: "ServicesSection",

        data(){
            return{
                products: [
                    {id:1, name: "Django", imageUrl: "https://e7.pngegg.com/pngimages/246/205/png-clipart-computer-icons-django-django-angle-text.png", description: "Django is a high-level Python Web framework that encourages rapid development and Django is a high-level Python Web framework that encourages rapid development andDjango is a high-level Python Web framework that encourages rapid development and"},
                    {id:2, name: "Vue js", imageUrl: "https://e7.pngegg.com/pngimages/246/205/png-clipart-computer-icons-django-django-angle-text.png", description: "Django is a high-level Python Web framework that encourages rapid development and Django is a high-level Python Web framework that encourages rapid development andDjango is a high-level Python Web framework that encourages rapid development and"},
                    {id:3, name: "Nuxt js", imageUrl: "https://e7.pngegg.com/pngimages/246/205/png-clipart-computer-icons-django-django-angle-text.png", description: "Django is a high-level Python Web framework that encourages rapid development and Django is a high-level Python Web framework that encourages rapid development andDjango is a high-level Python Web framework that encourages rapid development and"},
                    {id:4, name: "fontend", imageUrl: "https://e7.pngegg.com/pngimages/246/205/png-clipart-computer-icons-django-django-angle-text.png", description: "Django is a high-level Python Web framework that encourages rapid development and Django is a high-level Python Web framework that encourages rapid development andDjango is a high-level Python Web framework that encourages rapid development and"},
                ],
                flex: 4,
                colors: ['primary', 'secondary', 'accent']
            }
        },

        computed: {

        }
    }
</script>

<style scoped>

</style>