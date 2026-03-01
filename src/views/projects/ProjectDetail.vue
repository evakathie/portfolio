<template>
  <div v-if="project" class="project-header">
    
    <!-- Header Images -->
    <img :src="project.image" class="image-desktop" alt="">
    <img :src="project.imgMobile" class="image-mobile" alt="">

    <div class="wrapper">
      <h1>{{ project.title }}</h1>
    </div>

    <!-- Overview Section -->
    <div class="overview">
      <div class="wrapper">

        <!-- LEFT COLUMN -->
        <div class="col-left">
            <h2 class="highlighted-title">Overview</h2>

            <!-- Focus + Domain -->
            <ProjectFocus
                :focus="project.focus"
                :domain="project.domain"
            />

            <!-- Intro -->
            <div class="project-intro">
            <p
                v-for="(paragraph, index) in introParagraphs"
                :key="index"
            >
                {{ paragraph }}
            </p>
            </div>

            <!-- Timeline -->
            <p
                class="project-timeline"
                v-if="project.from && project.to"
            >
                {{ project.from }} ➙ {{ project.to }}
            </p>

            <p
                class="project-timeline"
                v-else-if="project.from"
            >
                {{ project.from }}
            </p>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-right">

          <div class="col-container">
            <h2 class="highlighted-title">Skills</h2>
            <ul class="competences">
              <li
                class="competence"
                v-for="competence in competences"
                :key="competence"
              >
                {{ competence }}
              </li>
            </ul>
          </div>

          <div class="col-container" v-if="tools.length">
            <h2 class="highlighted-title">Tools</h2>
            <ul class="competences">
              <li
                class="competence"
                v-for="tool in tools"
                :key="tool"
              >
                {{ tool }}
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

    <!-- Load Project Content -->
    <!--<component :is="projectContentComponent" />-->

  </div>

  <div v-else class="wrapper">
    <h1>Project not found</h1>
  </div>
</template>

<script>
import { projects } from '@/data/projects'
import ProjectFocus from '@/components/ProjectFocus.vue'

export default {
    name: 'ProjectDetail',

    components: {
     ProjectFocus,
    },

  computed: {
    // Find project based on URL slug
    project() {
      const slug = this.$route.params.slug
      return projects.find(p => p.slug === slug)
    },

    // These now simply return arrays (no split needed)

    focusAreas() {
      return this.project?.focus || []
    },

    domains() {
      return this.project?.domain || []
    },

    introParagraphs() {
        if (!this.project?.intro) return []
        return this.project.intro.split('\n').filter(p => p.trim())
    },

    projectContentComponent() {
        const slug = this.$route.params.slug
        return () => import(`@/projects/${slug}/Content.vue`)
    },

    competences() {
      return this.project?.competences || []
    },

    tools() {
      return this.project?.tools || []
    },
  },
}
</script>

<style lang="scss">

.project-header {
    margin-bottom: 24px;

    h1 {
        font-size: 32px;
        text-align: left;
        line-height: 120%;
        margin-top: 64px;
        padding: 0;
    }

    img {
        margin-top: 0;
    }

    .image-mobile {
        display: none;
    }

    @media screen and (max-width: 600px) {

      .image-desktop {
          display: none;
      }

      .image-mobile {
          display: block;
      }

      h1 {
          text-align: center;
      }
    }

    p, li {
        font-size: 14px;
    }

    .overview {
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

    .project-timeline {
        padding: 0;
        margin-top: 24px;
        text-transform: uppercase;
        font-weight: normal;
    }

    .competence {
        padding: 0;
        line-height: 150%;
        padding-bottom: 8px;
    }

    .col-left {
        width: 60%;

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .col-right {
        width: 40%;
        margin-left: 48px;
        display: flex;

        .col-container {
            padding-left: 32px;

            &:first-child {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 1000px) and (min-width: 600px) {
            display: block;

            .col-container {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }

}

</style>
