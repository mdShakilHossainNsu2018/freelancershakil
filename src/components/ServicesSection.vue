<template>
    <div>

        <div class="parallax">
            <v-container>
                <h1>Our Services:</h1>

                <v-row dense>
                    <!--                 TODO: make responsive-->

                    <!--                 <div class="product" >-->

                    <v-col cols="4" v-for="product in products" v-bind:key="product.id">
                        <v-card
                                max-width="344"
                                class="mx-auto"
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

                    <!--                 </div>-->

                </v-row>


            </v-container>
        </div>

    </div>
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
            }
        }
    }
</script>

<style scoped>
    .parallax {
        /* The image used */
        background-image: url("../assets/img/softdev.png");

        /* Set a specific height */
        min-height: 500px;


        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>