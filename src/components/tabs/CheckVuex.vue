<template>
  
    <v-card class="container" >
      <div class="header" v-if="this.$store.state.personalDetails.payload.name != ''">
        <div class="full-name">
          <span class="first-name">{{ this.$store.state.personalDetails.payload.name }}</span>
        </div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">{{ this.$store.state.personalDetails.payload.email }}</span>
          <span class="separator"></span>
          <span class="phone">Phone: </span>
          <span class="phone-val">{{
            this.$store.state.personalDetails.payload.phoneNumber
          }}</span><br>
          <span class="address">Address: </span>
          <span class="address-val">{{ this.$store.state.personalDetails.payload.address }}</span>
        </div>

        <div class="about">
          <span class="position">{{this.$store.state.aboutDetails.aboutPayload.designation}}</span>
          <span class="desc--position">
            {{this.$store.state.aboutDetails.aboutPayload.description}}
          </span>
        </div>
      </div>
      <!-- <div  v-else><h1>welcome to resume building, this is your canvas when update each form it will be refelected here...!</h1></div> -->
      <div class="details">
        <div class="section" v-if="this.$store.state.experienceDetails.experiencePayload.companyName != ''">
          <div class="section__title"  >Experience</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">{{this.$store.state.experienceDetails.experiencePayload.companyName}}</div>
                <div class="addr">{{this.$store.state.experienceDetails.experiencePayload.companyLocation}}</div>
                <div class="duration">{{this.$store.state.experienceDetails.experiencePayload.cFrom}}-{{this.$store.state.experienceDetails.experiencePayload.cTo}}</div>
              </div>
              <div class="right">
                <div class="name">{{this.$store.state.experienceDetails.experiencePayload.roleInThatCompany}}</div>
                <div class="desc">{{this.$store.state.experienceDetails.experiencePayload.responsibility}}</div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="section" v-if="this.$store.state.educationalDetails.educationPayload.institutonName.mInstitution != ''">
          <div class="section__title">Education</div>
          <div class="section__list">
            <div class="section__list-item">
              <v-card v-if="this.$store.state.educationalDetails.educationPayload.institutonName.mInstitution != ''" class="left" elevation="0">
                <div class="name">{{this.$store.state.educationalDetails.educationPayload.institutonName.mInstitution}}</div>
                <div class="addr">{{this.$store.state.educationalDetails.educationPayload.masters.mLocation}}</div>
                <div class="duration">{{this.$store.state.educationalDetails.educationPayload.masters.mastersFrom}} - {{this.$store.state.educationalDetails.educationPayload.masters.mastersTo}} </div>
              </v-card>
              <v-card v-if="this.$store.state.educationalDetails.educationPayload.institutonName.bInstitution != ''" class="right" elevation="0">
                <div class="name">{{this.$store.state.educationalDetails.educationPayload.institutonName.bInstitution}}</div>
                <div class="addr">{{this.$store.state.educationalDetails.educationPayload.bacholers.bLocation}}</div>
                <div class="duration">{{this.$store.state.educationalDetails.educationPayload.bacholers.bacholersFrom}} - {{this.$store.state.educationalDetails.educationPayload.bacholers.bacholersTo}}</div>
              </v-card>
            </div>
            
          </div>
        </div>
        <div class="section" v-if="this.$store.state.projectsDetails.projectPayload.project1 != ''">
          <div class="section__title">Projects</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="text" v-if="this.$store.state.projectsDetails.projectPayload.project1 != ''">
              <span class="name">Project-1:</span>
                {{this.$store.state.projectsDetails.projectPayload.project1}}
              </div>
            </div>

            <div class="section__list-item">
              <div v-if="this.$store.state.projectsDetails.projectPayload.project2 != ''" class="text">
                <span class="name">Project-2:</span>
                {{this.$store.state.projectsDetails.projectPayload.project2}}
              </div>
            </div>
          </div>
        </div>
        <div class="section" v-if="this.$store.state.skillDetails.skillsPayload.languages != ''">
          <div class="section__title">Skills</div>
          <div class="skills">
            <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.languages != ''" >
              <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.languages != ''" class="name">Languages <span v-if="this.$store.state.skillDetails.skillsPayload.languagesProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.languages}}</div></div>
            </div>
            <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.frontEnd != ''" >
              <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.frontEnd != ''" class="name">Front-End <span v-if="this.$store.state.skillDetails.skillsPayload.frontEndProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.frontEnd}}</div></div>
            </div>
            <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.backEnd != ''">
            <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.backEnd != ''" class="name">Back-End <span v-if="this.$store.state.skillDetails.skillsPayload.backEndProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.backEnd}}</div></div>
          </div>
          <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.rdbms != ''" >
            <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.rdbms != ''" class="name">SQL <span v-if="this.$store.state.skillDetails.skillsPayload.sqlProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.rdbms}}</div></div>
          </div>
          <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.noSQL != ''">
            <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.noSQL != ''" class="name">NoSQL <span v-if="this.$store.state.skillDetails.skillsPayload.noSqlEndProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.noSQL}}</div></div>
          </div>
          <div class="skills__item" v-if="this.$store.state.skillDetails.skillsPayload.devTools != ''">
            <div class="left"><div v-if="this.$store.state.skillDetails.skillsPayload.devTools != ''" class="name">Dev Tools <span v-if="this.$store.state.skillDetails.skillsPayload.devToolsProficient != false"><i>(proficient)</i></span> :{{this.$store.state.skillDetails.skillsPayload.devTools}}</div></div>
          </div>
          </div>
          
        </div>
      </div>
    </v-card>
  
</template>

<script>
export default {
  name: "CheckVuex",
  data() {
    return {
      imgSrc:
        "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  background: #fff;
  margin: 0px auto 0px;
  box-shadow: 1px 1px 2px #dad7d7;
  border-radius: 3px;
  padding: 20px;
  //   margin-top: 50px;
  // height:90vh;
}

.about {
  margin-bottom: 5px;
  // background-color: #54AFE4;
}

.header {
  margin-bottom: 30px;

  .full-name {
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .first-name {
    font-weight: bolder;
  }

  .last-name {
    font-weight: 300;
  }

  .contact-info {
    margin-bottom: 10px;
  }

  .email,
  .phone,.address {
    font-size: 10px;
    color: #999;
    font-weight: 300;
  }
  .email-val,
  .phone-val,.address-val {
    font-size: 10px;
    font-weight: bolder;
  }

  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }

  .position {
    font-weight: bolder;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
    font-size: 10px;
  }
  .desc--position {
    font-size: 10px;
    min-width: 70%;
  }
}

.details {
  line-height: 20px;
  margin-top: -20px;
  // background-color: #54AFE4;

  .section {
    margin-bottom: 10px;
  }

  .section:last-of-type {
    margin-bottom: 0px;
  }

  .section__title {
    letter-spacing: 1px;
    color: #54afe4;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .section__list-item {
    margin-bottom: 10px;
  }

  .section__list-item .text {
    font-size: 10px;
  }

  .section__list-item:last-of-type {
    margin-bottom: 0;
  }

  .left,
  .right {
    vertical-align: top;
    display: inline-block;
    font-size: 10px;
    // border: 2px solid crimson;

  }

  .left {
    width: 30%;
  }

  .right {
    // text-align: center;
    width: 39%;
    margin-right: 1px;
    // padding: 5px;
  }

  .name {
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: #000;
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
    color: #000;
  }

  .skills {
  }

  .skills__item {
    margin-bottom: 5px;
  }

  .skills__item .right {
    input {
      display: none;
    }

    label {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #c3def3;
      border-radius: 20px;
      margin-right: 3px;
    }

    input:checked + label {
      background: #79a9ce;
    }
  }
}
</style>
