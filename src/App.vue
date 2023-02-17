<template>
  <div class="main-chat-container">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/footer/Footer.vue'

export default {
  components: {
    Header,
    Body,
    Footer
  }
}
</script>


<style scoped>
.main-chat-container {
  width: 300px;
  max-height: 400px;
  min-height: 400px;
  border: 2px solid #8c64d8;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: 'RosMol';
  box-shadow: 0px 0px 20px darkgrey;
}


::-webkit-scrollbar {
  width: 10px;               /* ширина scrollbar */
}
::-webkit-scrollbar-track {
  background: white;        /* цвет дорожки */
}

::-webkit-scrollbar-thumb {
  background-color: #d78bf7;    /* цвет плашки */
  border-radius: 20px;      /* закругления плашки*/
  border: 3px solid white;  /*padding вокруг плашки */
}

</style>
