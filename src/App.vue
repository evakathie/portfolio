<template>
  <div>
    <Navbar />
    <router-view />
    <Contact />
    <Footer />
    <ToTopButton />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Contact from './components/layout/Contact.vue'
import Footer from './components/layout/Footer.vue'
import ToTopButton from './components/layout/ToTopButton.vue'

export default {
  components: {
    Navbar,
    Footer,
    Contact,
    ToTopButton,
  },
}
</script>