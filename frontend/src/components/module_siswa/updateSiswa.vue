<template>
    <div id="updateSiswa">
        <Navbar/>
        <Sidebar/>

        <Footer/>
    </div>
</template>

<script>
// import axios
// import axios from "axios";
import Navbar from './../_layouts/Navbar.vue'
import Sidebar from './../_layouts/Sidebar.vue'
import Footer from './../_layouts/Footer.vue'

export default {
  name: 'updateSiswa',
  components: {
    Navbar,
    Sidebar,
    Footer
  },
}
</script>

<style lang="stylus" scoped>

</style>