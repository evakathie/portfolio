<template>
  <div>

    <div class="page-header">
      <div class="text">
        <h1>My Projects</h1>
        <p>
          I design and build digital products with a focus on usability,
          accessibility, and technical feasibility. Below is a selection
          of projects across UX design, user research, and frontend development.
        </p>
        <p>
          <em>
            Please note: this page doesn't represent all my projects, but a selection that I can show publicly.
          </em>
        </p>
      </div>

      <img
        :src="'/images/about/my-work.jpg'"
        alt="A person sketches a wireframe on a writing pad."
      />
    </div>

    <ProjectList />

    <div class="align-center">
        <router-link to="/about" class="button">
            Learn more about my background
        </router-link>
    </div>

  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue'

export default {
  name: 'Work',
  components: {
    ProjectList
  }
}
</script>