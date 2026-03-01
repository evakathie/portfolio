<template>
  <div class="page-header">
      <h1 style="display: none;">About Me: Eva Katharina Wolf</h1>
      <div class="text">
          <h2 class="page-title">A little bit about myself</h2>
          <p>Iʼm Eva, a {{ age }} year old UX Designer and Front-end Developer from Germany. Iʼm a creative outside-the-box thinker and passionate for Design Thinking, living in the beautiful city of Copenhagen. I have a background in Human-Computer-Interaction (B.Sc. and M.Sc.) and gained professional experience as a Product Designer at a Fintech company and in UX Design and Change Management at Novo Nordisk. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>
            <p>Outside the office, I enjoy spending time in nature and being active with yoga and going to the gym. I am a <router-link to="/play">published author and an amateur photographer</router-link> and enjoy pottery and painting.</p>
        </div>
      <img :src="'/images/about/eva-katharina-wolf-02.jpg'" alt="Professional job application photo: Eva stands in front of an office building in a blazer and white turtleneck shirt and smiles.">
  </div>

  <div class="resume">
    <div class="wrapper">
      <h2>My Resume</h2>
      <div class="timeline">

        <div class="col-left">
          <h3 class="highlighted-title timeline-left-title">Education</h3>

          <div class="resume-element-empty"></div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">M.Sc. Information Science (Human Centered Informatics)</p>
              <p class="company">University of Aalborg</p>
            </div>
            <div class="time">
              <p class="to">08/2025</p>
            </div>
          </div>

          <div class="resume-element-empty"></div>
          <div class="resume-element-empty-small"></div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">Masterʼs program in Information Science</p>
              <p class="company">University of Aalborg, Copenhagen (DK) | {{ duration(2023, 9, 2025, 8) }}</p>
            </div>
            <div class="time">
              <p class="to">08/2025</p>
              <p class="from">09/2023</p>
            </div>
          </div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">Continuous training in UX Design</p>
              <p class="company">Interaction Design Foundation, Online | {{ duration(2021, 6, 2024, 5) }}</p>
            </div>
            <div class="time">
              <p class="to">05/2024</p>
              <p class="from">06/2021</p>
            </div>
          </div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">Mentee in a mentoring program for female junior executives</p>
              <p class="company">UHH Career Center, Hamburg (DE) | {{ duration(2020, 11, 2021, 12) }}</p>
            </div>
            <div class="time">
              <p class="to">12/2021</p>
              <p class="from">11/2020</p>
            </div>
          </div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">B.Sc. Human-Computer Interaction</p>
              <p class="company">University of Hamburg</p>
            </div>
            <div class="time">
              <p class="to">09/2020</p>
            </div>
          </div>

          <div class="resume-element resume-left">
            <div class="station">
              <p class="role">Bachelorʼs program in Human-Computer Interaction</p>
              <p class="company">University of Hamburg, Hamburg (DE) | {{ duration(2015, 10, 2020, 9) }}</p>
            </div>
            <div class="time">
              <p class="to">09/2020</p>
              <p class="from">10/2015</p>
            </div>
          </div>

        </div>

        <div class="col-right">
          <h3 class="highlighted-title timeline-right-title">Experience</h3>

          <div class="resume-element">
            <div class="time">
              <p class="to">since</p>
              <p class="from">09/2025</p>
            </div>
            <div class="station">
              <p class="role">Digital Transformation Partner</p>
              <p class="company">{{ duration(2025, 9) }} | Novo Nordisk A/S, Copenhagen (DK)</p>
            </div>
          </div>

          <div class="resume-element">
            <div class="time">
              <p class="to">08/2025</p>
              <p class="from">02/2025</p>
            </div>
            <div class="station">
              <p class="role">Master Thesis Student</p>
              <p class="company">{{ duration(2025, 2, 2025, 8) }} | Novo Nordisk A/S, Copenhagen (DK)</p>
            </div>
          </div>

          <div class="resume-element">
            <div class="time">
              <p class="to">08/2025</p>
              <p class="from">12/2023</p>
            </div>
            <div class="station">
              <p class="role">Student Assistant UX Design & Research</p>
              <p class="company">{{ duration(2023, 12, 2025, 8) }} | Novo Nordisk A/S, Copenhagen (DK)</p>
            </div>
          </div>

          <div class="resume-element">
            <div class="time">
              <p class="to">06/2023</p>
              <p class="from">10/2020</p>
            </div>
            <div class="station">
              <p class="role">Product Designer</p>
              <p class="company">{{ duration(2020, 10, 2023, 6) }} | Digitec GmbH, Hamburg (DE)</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

      <div class="skillset-header">
        <div class="wrapper">
            <h2>Skillset</h2>
        </div>
            <div class="skillset-container">
                <div class="wrapper">
                    <div class="col-left">
                        <h3 class="highlighted-title">Expertise</h3>
                        <ul>
                            <li>UX Design: User Journey Mapping, Prototyping</li>
                            <li>User Research: Qualitative &amp; Quantitative</li>
                            <li>Front-end: Component-based &amp; Responsive Development</li>
                            <li>Facilitation: Design Thinking, Design Sprints</li>
                            <li>Software Accessibility</li>
                            <li>Information Architecture</li>
                        </ul>
                        <h3 class="highlighted-title">Programming</h3>
                        <ul>
                            <li>Front-end: JavaScript, HTML &#38; CSS</li>
                            <li>Frameworks: Vue.js</li>
                            <li>Data Science: R</li>
                        </ul>
                    </div>
                    <div class="col-right">
                        <h3 class="highlighted-title">Tools</h3>
                        <ul>
                            <li>Prototyping: Figma | Adobe XD | Sketch</li>
                            <li>Wireframing: Balsamiq</li>
                            <li>User Research: Dovetail | Maze | Loop11</li>
                            <li>Product Management: Atlassian Jira &amp; Confluence</li>
                            <li>Collaboration: Miro | FigJam | Microsoft Teams</li>
                            <li>GenAI: ChatGPT</li>
                        </ul>
                        <h3 class="highlighted-title">Languages</h3>
                        <ul>
                            <li>German (native speaker)</li>
                            <li>English (C2 - full professional proficiency)</li>
                            <li>Danish (A2 - beginner)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'About',

    computed: {

        age() {
            const birthDate = new Date('1996-07-22');
            const currentDate = new Date();

            let age = currentDate.getFullYear() - birthDate.getFullYear();

            // Check if birthday has occurred this year
            if (currentDate.getMonth() < birthDate.getMonth() ||
                (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
            ) {
                age--;
            }

            return age;
        }
    },

    methods: {

        duration(start_year, start_month, end_year, end_month) {
            let years = 0;
            let months = 0;

            if (!end_year && !end_month){
                const current_date = new Date();

                end_month = current_date.getMonth() + 1;
                end_year = current_date.getFullYear();
            }

            if (end_month >= start_month - 1) {
                years = end_year - start_year;
                months = end_month - start_month + 1;
            } else {
                years = end_year - start_year - 1;
                months = 12 - start_month + end_month + 1;
            }

            if (years == 0) {
                return months + " mo"
            } else if (months == 0) {
                return years + " yrs"
            } else {
                return years + " yrs " + months + " mo"
            }
        }
    },
}
</script>

<style lang="scss" scoped>


/* RESUME */
.resume {

    h2 {
        margin-bottom: 42px;
    }

    .wrapper {
        padding-bottom: 24px;
    }

    .timeline {
        display: flex;

        @media screen and (max-width: 600px) {
            display: block;
        }

        .col-left {
            width: 50%;

            @media screen and (max-width: 600px) {
                width: 100%;
                border-right: 1px solid color(black);
            }
        }

        .col-right {
            width: 50%;
            border-left: 1px solid color(black);

            @media screen and (max-width: 600px) {
                width: 100%;
                border-left: none;
                border-left: 1px solid color(black);
            }
        }

        .timeline-left-title {
            text-align: right;
            padding: 0 94px 48px 0;
            color: color(color);

            @media screen and (max-width: 600px) {
                text-align: center;
                padding: 24px 0 24px 0;
            }
        }

        .timeline-right-title {
            padding: 0 0 48px 94px;
            color: color(color);

            @media screen and (max-width: 600px) {
                padding: 24px 0 24px 0;
                text-align: center;
            }
        }
    }

    .resume-element {
        display: flex;
        margin-bottom: 24px;


        .from, .company {
            padding-top: 0;
        }

        .to, .role {
            padding-bottom: 0;
        }

        .to {
            border-bottom: 1px solid color(black);
        }

        .to, .from {
            padding-left: 8px;
            padding-right: 8px;
            font-size: 14px;

        }

        .station {
            padding-left: 24px;
            padding-right: 24px;
        }

        .role {
            font-size: 18px;
            font-weight: normal;
            line-height: 120%;
        }

        .company {
            font-size: 14px;
        }
    }

    .resume-element-empty {
        height: 64px;
        margin-bottom: 24px;

        @media screen and (max-width: 600px) {
            display: none;
        }

        @media screen and (max-width: 1250px) {
            height: 128px;
        }
    }

    .resume-element-empty-small {
        height: 24px;
        margin-bottom: 12px;

        @media screen and (max-width: 600px) {
            display: none;
        }
    }

    .resume-left {
        text-align: right;
        padding-right: 0;
        justify-content: flex-end;
    }

}

/* SKILLSET */
.skillset-header {
    margin-bottom: 24px;

    h2 {
        text-align: left;
        line-height: 120%;
        margin-top: 64px;
        padding: 0;

    }

    img {
        margin-top: 0;
    }

    p, li {
        font-size: 14px;
    }

    .skillset-container {
        background: color(color_lightest);
        margin-top: -9px;
        padding: 48px 0 48px 0;

        .wrapper {
            display: flex;

            @media screen and (max-width: 600px) {
              display: block;
            }
        }

    }

    .col-left {
        width: 50%;

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .col-right {
        width: 50%;
        margin-left: 48px;

        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }

}

</style>
