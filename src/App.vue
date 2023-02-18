<template>
  <div class="main-chat-container">
    <Header/>
    <Body/>
    <Footer/>
    <div class="error-container" v-if="userMessage.error">
      {{ userMessage.error }}
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/footer/Footer.vue'
import { useUserMessagesState } from './stores/useUserMessagesState'

export default {
  components: {
    Header,
    Body,
    Footer
  },

  setup:function(){
    const userMessage = useUserMessagesState()
    return {userMessage};
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
}

.error-container {
  padding: 1px;
  padding-left: 26px;
  font-size: 0.8em;
  text-align: left;
  color: #cc0001;
  opacity: 0.7;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  width: 10px;
  background: white;
}

::-webkit-scrollbar-thumb {
  background-color: #faa419;    /* цвет плашки */
  border-radius: 20px;      /* закругления плашки*/
  border: 3px solid white;  /*padding вокруг плашки */
}

@media screen and (max-width: 600px) {
  .main-chat-container {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
}

</style>
