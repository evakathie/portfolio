<template>
  <router-link
    class="project"
    :to="`/projects/${project.slug}`"
  >
    <img :src="project.imgMobile" alt="" />

    <div class="text">
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

      <h3>{{ project.title }}</h3>

      <p>{{ project.description }}</p>

      <ProjectFocus
        :focus="project.focus"
        :domain="project.domain"
      />

    </div>
  </router-link>
</template>

<script>
import ProjectFocus from '@/components/ProjectFocus.vue'

export default {
  name: 'ProjectCard',

  components: {
    ProjectFocus,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.project {
    display: flex;
    border: 1px solid color(white);
    background: color(color_lightest);
    margin-top: 24px;
    text-decoration: none;

    &:hover, &:focus {
        text-decoration: none;
        border: 1px solid color(color);
        background: color(color_hover);

        .project-focus-batch {
            background: color(color_dark);
        }

        .project-domain {
            background: color(color);
        }
    }

    &:first-of-type {
        border-top-right-radius: 26px;

        @media screen and (max-width: 1000px) {
            border-top-right-radius: 0px;
        }
    }

    &:last-of-type {
        border-bottom-right-radius: 26px;

        @media screen and (max-width: 1000px) {
            border-bottom-right-radius: 0px;
        }
    }

    img {
        width: 30%;
        height: 30%;
        margin: 0;
    }

    h3 {
        padding-top: 0;
    }

    .text {
        padding-left: 24px;
        padding-right: 48px;
        margin-top: auto;
        margin-bottom: auto;
        flex: 2;

        .project-timeline {
            font-size: 12px;
            padding-top: 0px;
        }

        p {
            color: color(black);
            font-weight: lighter;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1000px) {
      display: block;
      border-radius: 0px 0px 0px 26px;

      img {
          width: 100%;
          height: 100%;
      }

      .text {
          padding: 24px;
      }
    }
}
</style>