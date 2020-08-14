<template>



        <div class="main-container">

<!--            <v-img src="../assets/code.jpg" class="background-image">-->
<!--            </v-img>-->
            <img src="../assets/img/code.jpg" alt="img" class="background-image">
            <div class="centered">
                <v-row>
                    <v-col class="mb-4">
                        <h1 class="display-2 font-weight-bold mb-3 welcome-text">
                            Welcome to Vuetify
                        </h1>

                        <p class="subheading font-weight-regular">
                            For help and collaboration with other Vuetify developers,
                            <br>please join our online
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
                        <v-card class="mx-auto"
                                max-width="400">
                            <!--      < class="my-img" src="./assets/me.jpg" alt="my photo">-->
                            <v-img src="../assets/img/me_fb.jpg" class="white--text align-end my-img"
                                   height="250px"></v-img>
                            <h1 class="my-name">Md Shakil Hossain</h1>

                            <!--                            <font-awesome-icon icon="fab fa-facebook" />-->
                            <!--                            <i class="fab fa-facebook"></i>-->

                        </v-card>
                    </v-col>
                </v-row>
            </div>


        </div>



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

    .background-image{
        /*opacity:.2;*/
        /*backdrop-filter: blur(10px);*/

        /*width: 100% !important;*/
        /*position: absolute;*/
        height: 90vh;
        width: 100%;
        /*clip-rule: evenodd;*/
        clip-path: polygon(0 0, 100% 0, 100% 84%, 0% 100%);
        background-color: black;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        -webkit-filter: blur(4px);
        filter: blur(4px);

    }

    .main-container {
        position: relative;
        text-align: center;
        color: white;

    }

    .centered {
        position: absolute;

        top: 50px;
        width: 90%;
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
    }

    /*.welcome-text{*/
    /*    color: black;*/
    /*}*/



</style>