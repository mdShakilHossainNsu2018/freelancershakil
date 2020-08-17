<template>
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3 welcome-text">
                    Welcome to CodeForSolutions

                </h1>


                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                            v-for="(item, i) in items"
                            :key="i"
                            :color="item.color"
                            :icon="item.icon"
                            fill-dot
                    >
                        <v-card
                                :color="item.color"
                                dark
                        >
                            <v-card-title class="title">{{item.title}}</v-card-title>
                            <v-card-text class="white text--black">
                                <p style="color: black">{{item.description}}</p>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>

            </v-col>


            <v-col xs="12" sm="12" md="4" lg="4" xl="4" >
                <v-hover v-slot:default="{ hover }">
                    <v-card
                            :elevation="hover ? 16 : 2"
                            class="mx-auto"
                            max-width="400"
                            color="white"
                            :shaped="true"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                src="../assets/img/me_fb.jpg"
                        >
                            <v-card-title>Md Shakil Hossain</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0 black--text">Ceo of the Code For Solutions</v-card-subtitle>

                        <v-card-text class="black--text">
                            <div>Code For Solution</div>

                            <div>Dhaka, Bangladesh</div>
                        </v-card-text>

                    </v-card>


                </v-hover>

                <v-card class=" mx-auto text-center mt-5">
                    <v-card-text>
                        <v-btn
                                v-for="icon in icons"
                                :key="icon.icon"
                                class="mx-4  white--text"
                                icon
                                :href="icon.link"

                        >
                            <v-icon size="24px">{{ icon.icon }}</v-icon>
                        </v-btn>
                    </v-card-text>

                </v-card>


            </v-col>
        </v-row>
    </v-container>




</template>

<script>
    export default {
        name: "MainSection",

        data(){
            return{
                icons: [
                    {icon:'mdi-facebook', link: 'https://web.facebook.com/pkshakilhossin/'},
                    {icon: 'mdi-email', link: 'mailto: shakilnsu2018@gmail.com'},
                    {icon: 'mdi-twitter', link: 'https://twitter.com/MdShaki16422594'},
                    {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/md-shakil-hossin-892369165/'},
                    {icon: 'mdi-instagram', link: 'https://www.instagram.com/pkshakil/?hl=en'}
                ],

                items: [
                    {
                        color: 'red lighten-2',
                        icon: 'mdi-star',
                        title: 'Goal',
                        description: 'Our goal is to make our client happy and fulfill all requirements.'
                    },
                    {
                        color: 'purple darken-1',
                        icon: 'mdi-account-clock',
                        title: 'Delivery Time',
                        description: 'We delver our product on time.'
                    },
                    // {
                    //     color: 'green lighten-1',
                    //     icon: 'mdi-tools',
                    //     title: 'Technology',
                    //     description: 'We use latest technology and make sure it is clint friendly.'
                    // },
                    {
                        color: 'indigo',
                        icon: 'mdi-emoticon',
                        title: 'Satisfied Customer',
                        description: 'We made a happy over 2000 customers.'
                    },
                ],

            }
        }
    }
</script>

<style scoped>

</style>