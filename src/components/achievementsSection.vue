<template>
    <div>
        <v-container>

            <v-row dense>
                <v-col cols="12">
                    <v-card
                            color="#385F73"
                            dark
                    >
                        <v-card-title class="headline"><h1>Education:</h1></v-card-title>
                    </v-card>
                </v-col>

                <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                >
                    <v-card
                            :color="item.color"
                            dark
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                        class="headline"
                                        v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                            >
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    export default {
        name: "achievementsSection",

        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/North-South-University-logo-03.png',
                    title: 'North South University.',
                    artist: 'BSc in Computer Science',
                },
                {
                    color: '#952175',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1NoupsLDwJ2UDDKnu9JTkC1L028wlmMxq-56Ot7gUn0PJoQ&s',
                    title: 'Govt. Shahid Bulbul College, Pabna.',
                    artist: 'Hsc (2015-2017) from Science Department',
                },
            ],
        }),
    }
</script>

<style scoped>

</style>