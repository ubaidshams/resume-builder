<template>
  
    <v-card class="container">
      <div class="header">
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
          <span class="position">Front-End Developer </span>
          <span class="desc--position">
            I am a front-end developer with more than 3 years of experience
            writing html, css, and js. I'm motivated, result-focused and seeking
            a successful team-oriented company with opportunity to grow.
          </span>
        </div>
      </div>
      <div class="details">
        <div class="section">
          <div class="section__title">Experience</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">KlowdBox</div>
                <div class="addr">San Fr, CA</div>
                <div class="duration">Jan 2011 - Feb 2015</div>
              </div>
              <div class="right">
                <div class="name">Fr developer</div>
                <div class="desc">did This and that</div>
              </div>
            </div>
            <div class="section__list-item">
              <div class="left">
                <div class="name">Akount</div>
                <div class="addr">San Monica, CA</div>
                <div class="duration">Jan 2011 - Feb 2015</div>
              </div>
              <div class="right">
                <div class="name">Fr developer</div>
                <div class="desc">did This and that</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section__title">Education</div>
          <div class="section__list">
            <div class="section__list-item">
              <v-card class="left" elevation="0">
                <div class="name">{{this.$store.state.educationalDetails.educationPayload.institutonName.mInstitution}}</div>
                <div class="addr">{{this.$store.state.educationalDetails.educationPayload.masters.mLocation}}</div>
                <div class="duration">{{this.$store.state.educationalDetails.educationPayload.masters.mastersFrom}} - {{this.$store.state.educationalDetails.educationPayload.masters.mastersTo}} </div>
              </v-card>
              <v-card class="right" elevation="0">
                <div class="name">{{this.$store.state.educationalDetails.educationPayload.institutonName.bInstitution}}</div>
                <div class="addr">{{this.$store.state.educationalDetails.educationPayload.bacholers.bLocation}}</div>
                <div class="duration">{{this.$store.state.educationalDetails.educationPayload.bacholers.bacholersFrom}} - {{this.$store.state.educationalDetails.educationPayload.bacholers.bacholersTo}}</div>
              </v-card>
            </div>
            
          </div>
        </div>
        <div class="section">
          <div class="section__title">Projects</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="text">
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow.
              </div>
            </div>

            <div class="section__list-item">
              <div class="text">
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow. <a href="/login">link</a>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section__title">Skills</div>
          <div class="skills">
            <div class="skills__item">
              <div class="left"><div class="name">Javascript</div></div>
            </div>
          </div>
          <div class="skills__item">
            <div class="left"><div class="name">CSS</div></div>
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
    margin-bottom: 10px;
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
