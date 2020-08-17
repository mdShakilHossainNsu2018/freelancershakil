<template>
    <v-footer
            dark
            padless
    >
        <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
        >
            <v-card-text>
                <v-btn
                        v-for="icon in icons"
                        :key="icon.name"
                        class="mx-4 white--text "
                        icon
                        :href="icon.link"
                >
                    <v-icon size="24px">{{ icon.name }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0 " style="width: 100vw">
                <h1>Contact us.</h1>

                    <v-btn
                            color="primary"
                            depressed
                            href="tel:01729996899"
                            class="mt-3"
                    >
                        <v-icon left>mdi-phone</v-icon>
                        01729996899
                    </v-btn>
                <br>

                <v-btn
                        color="primary"
                        depressed
                        class="mt-3"
                        href="mailto: shakilnsu2018@gmail.com"
                >
                    <v-icon left>mdi-email</v-icon>
                    shakilnsu2018@gmail.com
                </v-btn>
                <br>
                <v-btn
                        color="primary"
                        depressed
                        class="mt-3"
                >
                    <v-icon left>mdi-home</v-icon>
                    Rajsahi, Pabna, Ishurdi, Autapara
                </v-btn>



            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>CodeForSolutions</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "FooterSection",

        data(){
            return{
                icons: [
                    {name:'mdi-facebook', link: 'https://web.facebook.com/pkshakilhossin/'},
                    {name: 'mdi-email', link: 'mailto: shakilnsu2018@gmail.com'},
                    {name: 'mdi-twitter', link: 'https://twitter.com/MdShaki16422594'},
                    {name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/md-shakil-hossin-892369165/'},
                    {name: 'mdi-instagram', link: 'https://www.instagram.com/pkshakil/?hl=en'}
                ],
            }
        }
    }
</script>

<style scoped>

</style>