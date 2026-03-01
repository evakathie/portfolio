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
import Navbar from './components/Navbar.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ToTopButton from './components/ToTopButton.vue'

export default {
  components: {
    Navbar,
    Footer,
    Contact,
    ToTopButton,
  },
}
</script>