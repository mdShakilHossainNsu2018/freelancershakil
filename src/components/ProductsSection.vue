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
                    },
                    {
                        id: 2,
                        img: 'https://scontent.fdac3-1.fna.fbcdn.net/v/t1.0-9/119601388_113380663844957_8705156631399622140_o.png?_nc_cat=105&ccb=2&_nc_sid=825194&_nc_eui2=AeGjKTW7PjZwb2fAZ-Ks4NQcAZAy_D-7vT4BkDL8P7u9PgSQOVg-m1b51oelK3r0S9FiJno0x-KZ8CJOX69zZJGn&_nc_ohc=DkKT6C_9JxEAX_ybYPz&_nc_ht=scontent.fdac3-1.fna&oh=46de885a2878551a2223409710436f8a&oe=5FC693D3',
                        link: 'https://tools.selfpublishingtitans.com/',
                        title: 'Self Publishing titans tools'
                    },
                ],
            }
        },

    }
</script>

<style scoped>

</style>