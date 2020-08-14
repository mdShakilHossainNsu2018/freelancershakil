<template>

    <v-app>
        <v-card class="overflow-hidden">
            <v-app-bar
                    absolute
                    color="white"
                    elevate-on-scroll
                    scroll-target="#scrolling-techniques-7"
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

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
                <!--                  <v-main>-->
                <!--      <HelloWorld/>-->


                <MainSection style="margin-top: 4rem"/>
                <SkillsSection/>
                <ServicesSection/>
                <ProductsSection/>
                <AchievementsSection/>
                <FooterSection/>




                <!--                  </v-main>-->

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

        data: () => ({
            //
        }),
    };
</script>


<style>

    html {
        overflow: hidden;
    }


</style>
