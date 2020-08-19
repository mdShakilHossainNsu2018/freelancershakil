<template>
  <div style="margin-top: 4rem;">
    <v-card
            class="mx-auto"
            max-width="344"
    >
      <v-img
              src="../assets/img/me_fb.jpg"
              height="200px"
      ></v-img>

      <v-card-title>
        Md Shakil Hossain
      </v-card-title>

      <v-card-subtitle>
        Full-stack web developer. <br>

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



      </v-card-subtitle>



    </v-card>

  </div>
</template>

<script>
  // import MainSection from "@/components/MainSection";
  // import SkillsSection from "@/components/SkillsSection";
  export default {

    name: 'About',

    // components:{
    //   SkillsSection,
    //   MainSection
    // },
  }
</script>
