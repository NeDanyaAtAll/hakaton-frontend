<template>
  <div class="main-container">
    <div class="main-chat-container">
      <Header/>
      <Body/>
      <Footer/>
      <div class="error-container" v-if="userMessage.error">
        {{ userMessage.error }}
      </div>
    </div>
    <div class="examples-container">
      <InputWithButton/>
      <InputWithoutButton style="margin-top: 10px"/>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/footer/Footer.vue'
import { useUserMessagesState } from './stores/useUserMessagesState'
import InputWithButton from './components/examplesInputs/InputWithButton.vue'
import InputWithoutButton from "./components/examplesInputs/InputWithoutButton.vue";
import {onMounted} from "vue";

export default {
  components: {
    InputWithoutButton,
    Header,
    Body,
    Footer,
    InputWithButton
  },

  setup:function(){
    const userMessage = useUserMessagesState()
    
    onMounted(() => {
      userMessage.getRemoteMessages();
    });
    
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
  margin-right: 50px;

}

.error-container {
  padding: 1px;
  padding-left: 26px;
  font-size: 0.8em;
  text-align: left;
  color: #cc0001;
  opacity: 0.7;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
