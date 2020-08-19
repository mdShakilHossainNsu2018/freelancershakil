<template>
    <v-container>
        <h1>My Skills</h1>

        <div class="skills" v-for="(skill, index) in skills" v-bind:key="skill.id">
            <div>
                <h3>{{skill.name}}</h3>
                <k-progress :percent="skill.percentage"  :color="colors[index % 7]"
                            :line-height="lineHeight"></k-progress>
            </div>
        </div>

    </v-container>


</template>

<script>
    export default {
        name: "SkillsSection",

        data() {
            return {
                skills: [
                    {id: 1, name: 'Html', percentage: 90},
                    {id: 2, name: 'Css', percentage: 70},
                    {id: 3, name: 'Javascript', percentage: 80},
                    {id: 4, name: 'Python', percentage: 85},
                    {id: 5, name: 'Dart', percentage: 60},
                    {id: 6, name: 'Flutter', percentage: 70},
                    {id: 7, name: 'Vue js', percentage: 90},
                    {id: 8, name: 'Django', percentage: 80},
                    {id: 9, name: 'Docker', percentage: 70},
                    {id: 10, name: 'Sql', percentage: 75},


                ],
                lineHeight: 15,

                colors: [
                    '#CDDC39',
                    '#6A1B9A',
                    '#3949AB',
                    '#4CAF50',
                    '#00BCD4',
                    '#FF5722',
                    '#2196F3',
                ],

            }
        }
    }
</script>

<style scoped>
    .k-progress {
        color: white;
    }
</style>