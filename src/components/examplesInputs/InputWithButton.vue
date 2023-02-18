<template>
    <div class="wrap" style="font-size: 14px">
        <div class="input-container">
            <input type="text" placeholder="Видео-визитка (ссылка на ролик на любом видеохостинге)" style="width: 500px">
          <Popper v-model="showPopper">
            <button type="button">
              <span class="material-symbols-outlined">
                question_mark
              </span>
            </button>
            <template #content>
              <div class="pop-helper">
                <div>
                  <Mascot/>
                </div>
                <div style="width: 150px; display: flex; justify-content: flex-end; align-items: center;">
                  <span style="color: #faa419;font-size: 1.5em;font-family: 'RosMol-label';">Цифра</span>
                </div>
                <div style="color: rgb(44 53 80);font-family: 'RosMol';">За 5 минут вы должны кратко описать идею, методы реализации и ожидаемые результаты от проекта</div>
              </div>
            </template>
          </Popper>
        </div>
    </div>
</template>

<script>
import { useUserMessagesState } from "../../stores/useUserMessagesState";
import {ref} from "vue";
import Mascot from '../header/Mascot.vue';

export default {
    data: () => ({
    }),

    setup: function() {
        const userMessages = useUserMessagesState();
        let showPopper = ref(false);
        return {userMessages, showPopper};
    },
  
    components: {
      Mascot
    }
}
</script>

<style scoped>
.wrap {
    background-color: #F4F4F4;
    padding: 1em;
    border-radius: 5px;
}
.input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
button {
    border-radius: 50%;
    background-color:#fff;
    height: 25px;
    border: 1px solid #faa419;

}


input {
    border: none;
    background-color:#fff;
    border: 1px solid #faa419;
    font-size: 1em;
    font-family: 'RosMol';
    border-radius: 5px;
    padding: 0.5em;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%);
    margin-right: 10px;
}

.material-symbols-outlined {
    font-size: 1em;
    color: #faa419;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

.pop-helper {
  background: #fff;
  box-shadow: 0px 0px 20px darkgrey;
  padding: 5px 10px;
  display: flex;
  flex-flow: row wrap;
  max-width: 200px;
}
</style>