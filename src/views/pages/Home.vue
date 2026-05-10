<template>
  <div class="home">

    <div class="page-header">
      <div class="text">
        <h1>
          <router-link to="/about">Hi, Iʼm Eva!</router-link>
        </h1>
        <p>
            I work at the intersection of user experience, product thinking, and technology, with a background in Human-Computer Interaction (MSc &amp; BSc). I’m passionate about translating complex workflows and user needs into intuitive interfaces, and how ideas move from understanding user needs, business requirements, and technical constraints to shaping and building digital products.

            My experience spans product design and user research in complex, domain-heavy products such as fintech and pharmaceuticals manufacturing.
        </p>
      </div>

      <img src="/images/about/eva-katharina-wolf.jpg" alt="Eva sitting in front of a MacBook, smiling into the camera." />
    </div>

    <ProjectList :featuredOnly="true" />

    <div class="align-center">
        <router-link to="/work" class="button">
            View more projects
        </router-link>
    </div>

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
