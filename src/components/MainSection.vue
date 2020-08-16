<template>
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3 welcome-text">
                    Welcome to CodeForSolutions

                </h1>

                <p class="subheading font-weight-regular">
                    For help and collaboration with other Vuetify developers,
                    <br>please join our online
                    <v-icon>mdi-home</v-icon>
                    <a
                            href="https://community.vuetifyjs.com"
                            target="_blank"
                    >Discord Community</a>
                </p>

                <v-btn
                        v-for="icon in icons"
                        :key="icon.icon"
                        class="mx-4 white--text"
                        icon
                        :href="icon.link"

                >
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-col>


            <v-col xs="12" sm="12" md="4" lg="4" xl="4">

                <v-card
                        class="mx-auto"
                        max-width="400"
                        color="white"
                        shaped="true"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            src="../assets/img/me_fb.jpg"
                    >
                        <v-card-title>Md Shakil Hossain</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0 black--text">Number 10</v-card-subtitle>

                    <v-card-text class="black--text">
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
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
                    {icon:'mdi-facebook', link: 'https://facebook.com'},
                    {icon: 'mdi-twitter', link: 'https://facebook.com'},
                    {icon: 'mdi-linkedin', link: 'https://facebook.com'},
                    {icon: 'mdi-instagram', link: 'https://facebook.com'}
                ],
            }
        }
    }
</script>

<style scoped>

</style>