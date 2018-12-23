<template>
  <b-container>
    <FirstView />
    <b-row>
      <b-col>saaaaaa</b-col>
      <b-col>saaaaaa</b-col>
      <b-col>saaaaaa</b-col>
    </b-row>
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

