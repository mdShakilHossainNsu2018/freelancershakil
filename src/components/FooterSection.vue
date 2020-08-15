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
                        class="mx-4 white--text"
                        icon
                        :href="icon.link"
                >
                    <v-icon size="24px">{{ icon.name }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
                    {id:1, name:'mdi-facebook', link: 'https://facebook.com'},
                    {id:2, name: 'mdi-twitter', link: 'https://facebook.com'},
                    {id:3, name: 'mdi-linkedin', link: 'https://facebook.com'},
                    {id:4, name: 'mdi-instagram', link: 'https://facebook.com'}
                ],
            }
        }
    }
</script>

<style scoped>

</style>