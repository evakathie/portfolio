<template>
  <div class="home">

    <div class="page-header">
      <div class="text">
        <h1>
          <router-link to="/about">Hi, Iʼm Eva!</router-link>
        </h1>
        <p>
          I’m a UX Designer and Frontend Developer based in Copenhagen, Denmark. I design and build digital products with a strong focus on usability, accessibility, and technical feasibility.
          With a background in Human-Computer Interaction and experience working closely with development teams, I combine user research and design thinking with hands-on frontend implementation. I enjoy translating complex problems into intuitive interfaces and bringing them to life in code.
        </p>
      </div>

      <img src="/images/about/eva-katharina-wolf.jpg" alt="Eva sitting in front of a MacBook, smiling into the camera." />
    </div>

    <ProjectList :featuredOnly="true" />

  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue'

export default {
  name: 'Home',

  components: {
    ProjectList,
  }
}
</script>
