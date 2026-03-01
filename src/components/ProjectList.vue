<template>
  <div class="project-list">
    <div class="wrapper">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectList',

  components: { ProjectCard },

  props: {
    companyFilter: {
      type: String,
      default: null,
    },
    featuredOnly: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    sortedProjects() {
      return [...projects].sort((a, b) => {
        if (a.year > b.year) return -1
        if (a.year < b.year) return 1

        if (a.month > b.month) return -1
        if (a.month < b.month) return 1

        return 0
      })
    },

    filteredProjects() {
      let result = this.sortedProjects

      if (this.companyFilter) {
        result = result.filter(
          p => p.company === this.companyFilter
        )
      }

      if (this.featuredOnly) {
        result = result.filter(p => p.featured)
      }

      return result
    },
  },
}
</script>