<template>

    <v-app>
        <v-card class="overflow-hidden">
            <v-app-bar
                    absolute
                    color="white"
                    elevate-on-scroll
                    scroll-target="#scrolling-techniques-7"
            >

                <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

                <v-toolbar-title>CodeForSolutions</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>



            <v-sheet
                    id="scrolling-techniques-7"
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
                                link
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





                <MainSection style="margin-top: 4rem"/>
                <SkillsSection/>
                <ServicesSection/>
                <ProductsSection/>
                <AchievementsSection/>
                <FooterSection style="margin-bottom: 1rem"/>

            </v-sheet>
        </v-card>


    </v-app>
</template>

<script>
    import MainSection from './components/MainSection';
    import SkillsSection from "@/components/SkillsSection";
    import ProductsSection from "@/components/ProductsSection";
    import FooterSection from "@/components/FooterSection";
    import ServicesSection from "@/components/ServicesSection";
    import AchievementsSection from "@/components/achievementsSection";

    export default {
        name: 'App',

        components: {
            AchievementsSection,
            ServicesSection,
            FooterSection,
            ProductsSection,
            SkillsSection,
            MainSection,
        },

        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'mdi-home' },
                    { title: 'About', icon: 'mdi-information' },
                ],
            }
        },
    };
</script>


<style>

    html {
        overflow: hidden;
    }


</style>
