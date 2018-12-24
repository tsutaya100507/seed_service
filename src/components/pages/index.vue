<template>
  <b-container class="container">
    <FirstView />
    <BuisinessContent />
    <EngineerList />
    <Contact />
  </b-container>
</template>

<script>
import FirstView from '@/components/contents/firstView.vue'
import BuisinessContent from '@/components/contents/buisinessContent.vue'
import EngineerList from '@/components/contents/engineerList.vue'
import Contact from '@/components/contents/contact.vue'


export default {
  name: 'index',
  components: {
    FirstView,
    BuisinessContent,
    EngineerList,
    Contact,
  }  
}
</script>

<style scoped>
 .container {
   max-width: 100%;
 }

</style>
