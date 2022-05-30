<template>
    <v-card id="_dynamicTabNavBar">
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
      class="w-50%"
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card width="100%" id="_sideBar" dark>
          <v-card-text>
            <component :is="item.content"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    
  </v-card>
</template>

<script>
import PersonalDeatails from "@/components/tabs/PersonalDetails.vue";
import EducationalDetails from "@/components/tabs/EducationalDetails.vue";
import ExperienceComp from "@/components/tabs/ExperienceComp.vue";
import ProjectsComp from "@/components/tabs/ProjectsComp.vue";
import SkillsComp from "@/components/tabs/SkillsComp.vue";
import AchievementsComp from "@/components/tabs/AchievementsComp.vue"
    export default {
        name:"NavbarComp",
        data () {
      return {
        tab: null,
        items: [
          {tab: "Personal Deatails" ,content: 'PersonalDeatails' },
          { tab: 'Educational Details', content: 'EducationalDetails' },
          { tab: 'Experience', content: 'ExperienceComp' },
          { tab: 'Projects', content: 'ProjectsComp' },
          { tab: 'Skills', content: 'SkillsComp' },
          { tab: 'Achievements', content: 'AchievementsComp' },
          
        ],
      }
    },
    components:{
        PersonalDeatails,
        EducationalDetails,
        ExperienceComp,
        ProjectsComp,
        SkillsComp,
        AchievementsComp
    }
    }
</script>

<style scoped>
#_sideBar{
    height: 90vh;
    padding:0px 155px;
}
#_dynamicTabNavBar{
  position: relative;
  margin-top:-19px;
  width:50%;
}
</style>