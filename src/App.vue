<template>


    <v-app>
        <v-card class="overflow-hidden">
            <v-app-bar
                    absolute
                    dark
                    :collapse="!collapseOnScroll"
                    :collapse-on-scroll="collapseOnScroll"
                    scroll-target="#scrolling-techniques-6"
            >

                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>CodeForSolutions</v-toolbar-title>


                <v-spacer></v-spacer>



<!--                <v-btn icon>-->
<!--                    <v-icon>mdi-magnify</v-icon>-->
<!--                </v-btn>-->

                <v-menu
                        left
                        bottom
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list v-if="!userName">
                        <v-list-item
                                @click="() => {}"
                        >
                            <v-list-item-title>
                                <v-btn to="/login">
                                    <v-icon>mdi-login</v-icon>
                                    login
                                </v-btn>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-list v-if="userName">
                        <v-list-item
                                @click="() => {
                                    this.$store.dispatch('userLogout')
                                }"
                        >
                            <v-list-item-title>
                                <v-btn class="mt-4">
                                    <v-icon>mdi-logout</v-icon>
                                    logout
                                </v-btn>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>


                    <v-list v-if="!userName">
                        <v-list-item
                                @click="() => {}"
                        >
                            <v-list-item-title>
                                <v-btn to="/register" class="mt-4">
                                    <v-icon>mdi-account-arrow-right</v-icon>
                                    sign up
                                </v-btn>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>


                </v-menu>

                <v-btn v-if="userName">
                    <v-icon>mdi-account</v-icon> {{userName}}
                </v-btn>

            </v-app-bar>


            <v-sheet
                    id="scrolling-techniques-6"
                    class="overflow-y-auto"
                    max-height="600"
            >


                <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        temporary
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="./assets/img/me_fb.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Md Shakil Hossain</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>

                        <v-list-item

                                v-for="item in items"
                                :key="item.title"
                                :to="item.link"
                        >
                            <v-list-item-icon>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-container fluid style="min-height: 100vh;">
                    <router-view/>
                </v-container>


            </v-sheet>
        </v-card>


    </v-app>

</template>
<script>

    export default {
        name: 'App',

        data() {
            return {
                drawer: null,
                items: [
                    {title: 'Home', icon: 'mdi-home', link: '/'},
                    {title: 'Blog', icon: 'mdi-blogger', link: '/blog'},
                    {title: 'About', icon: 'mdi-information', link: '/about'},

                ],
                collapseOnScroll: true,
            }
        },
        mounted(){
            this.$store.dispatch('inIt')
        },
        computed: {
            userName: function(){
                return this.$store.state.username;
            }
        }
    };
</script>


<style>
    html {
        overflow: hidden !important;
        overflow-x: hidden !important;
    }

    /*.overflow-y-auto{*/
    /*    overflow-y: hidden !important;*/
    /*}*/
</style>
