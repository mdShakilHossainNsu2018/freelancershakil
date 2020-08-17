<template>
    <v-container>
        <h1>Our Products:</h1>
        <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
        >
            <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
            >
                <v-row dense>
                    <v-col
                            cols="12"
                    >
                        <v-card
                                class="mx-auto"
                                color="white"
                        >
                            <v-img
                                    :src="slide.img"
                                    height="325"

                            ></v-img>



                            <v-card-title style="color: black" v-text="slide.title">
                            </v-card-title>

                            <v-card-subtitle style="color: black" v-text="slide.link">

                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-container>

</template>

<script>
    export default {
        name: "ProductsSection",

        data() {
            return {
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    {
                        id: 1,
                        img: 'https://lh3.googleusercontent.com/Hll9RbryguK8Lh2uY0AtaMqVYkeACl-fOStCS39BSlc5Xi6j42J2p3mOXvqL6Dc19Fs=s360-rw',
                        link: 'https://play.google.com/store/apps/details?id=com.thenewdhaka.read_tracker&hl=en',
                        title: 'Study tracker'
                    }
                ],
            }
        },

    }
</script>

<style scoped>

</style>