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
  height: min(550px, 100vh);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: 'RosMol';
  box-shadow: 0px 0px 20px darkgrey;
  font-size: 14px;
  position: relative;
}

::-webkit-scrollbar {
  width: 10px;               /* ширина scrollbar */
}
::-webkit-scrollbar-track {
  background: white;        /* цвет дорожки */
}

::-webkit-scrollbar-thumb {
  background-color: #faa419;    /* цвет плашки */
  border-radius: 20px;      /* закругления плашки*/
  border: 3px solid white;  /*padding вокруг плашки */
}


@media screen and (max-width: 600px) {
  .main-chat-container {
    height: 100%;
  }
}

</style>
