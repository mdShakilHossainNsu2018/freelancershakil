<template>
    <div class="skills-container">

                              <vue-particles

                                      color="#dedede"
                                      :particleOpacity="0.9"
                                      :particlesNumber="80"
                                      shapeType="circle"
                                      :particleSize="4"
                                      linesColor="#dedede"
                                      :linesWidth="1"
                                      :lineLinked="true"
                                      :lineOpacity="0.4"
                                      :linesDistance="150"
                                      :moveSpeed="3"
                                      :hoverEffect="true"
                                      hoverMode="grab"
                                      :clickEffect="true"
                                      clickMode="push"

                              >


                              </vue-particles>

            <v-container>
                <h1>My Skills</h1>

                <div class="skills" v-for="skill in skills" v-bind:key="skill.id">
                    <div>
                        <h3>{{skill.name}}</h3>
                        <k-progress :percent="skill.percentage" :line-height="lineHeight"></k-progress>
                    </div>

                </div>

            </v-container>



    </div>
</template>

<script>
    export default {
        name: "SkillsSection",

        data(){
            return { skills: [
            {id: 1, name: 'Html', percentage: 90},
            {id: 2, name: 'Css', percentage: 70},
            {id: 3, name: 'Javascript', percentage: 80},
            {id: 4, name: 'Python', percentage: 85},

                ], lineHeight: 10 }
        }
    }
</script>

<style scoped>
.skills-container{
    background-color: white;
    /*height: 100vh;*/
    width: 100%;
    text-align: center;
    position: relative;
}

    #particles-js{
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>