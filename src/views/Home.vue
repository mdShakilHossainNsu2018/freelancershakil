<template>
<div style="margin-top: 4rem">
  <MainSection/>
  <SkillsSection/>
  <ServicesSection/>
  <ProductsSection/>
  <AchievementsSection/>
  <FooterSection/>
</div>



</template>

<script>
// @ is an alias to /src
import MainSection from "@/components/MainSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import AchievementsSection from "@/components/achievementsSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'Home',
  components: {
    FooterSection,
    AchievementsSection,
    ProductsSection,
    ServicesSection,
    SkillsSection,
    MainSection
  }
}
</script>
