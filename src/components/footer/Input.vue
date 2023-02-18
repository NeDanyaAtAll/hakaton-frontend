<template>
    <div class="input-content" v-if="!userMessages.isAudioRecording">
        <textarea placeholder="Введите сообщение" class="user-message-input" type="text" minlength="1"
            @input="userMessages.change($event.target.value)"
            @keydown.enter="userMessages.addUserMessage($event)"
        ></textarea>
    </div>
    <div class="input-content" v-else="userMessages.isAudioRecording">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-wave" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="-13.5" cy="50" r="4" fill="#faa419">
          <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animate>
        </circle><circle cx="-4.5" cy="51.6269465723032" r="4" fill="#e19417">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.06666666666666667s" repeatCount="indefinite"></animate>
      </circle><circle cx="4.5" cy="52.972579301909576" r="4" fill="#32b9b3">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.13333333333333333s" repeatCount="indefinite"></animate>
      </circle><circle cx="13.5" cy="53.804226065180615" r="4" fill="#2a9893">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.2s" repeatCount="indefinite"></animate>
      </circle><circle cx="22.5" cy="53.97808758147309" r="4" fill="#faa419">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.26666666666666666s" repeatCount="indefinite"></animate>
      </circle><circle cx="31.5" cy="53.46410161513776" r="4" fill="#e19417">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
      </circle><circle cx="40.5" cy="52.35114100916989" r="4" fill="#32b9b3">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.4s" repeatCount="indefinite"></animate>
      </circle><circle cx="49.5" cy="50.83164676327104" r="4" fill="#2a9893">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.4666666666666667s" repeatCount="indefinite"></animate>
      </circle><circle cx="58.5" cy="49.16835323672896" r="4" fill="#faa419">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.5333333333333333s" repeatCount="indefinite"></animate>
      </circle><circle cx="67.5" cy="47.64885899083011" r="4" fill="#e19417">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.6s" repeatCount="indefinite"></animate>
      </circle><circle cx="76.5" cy="46.53589838486224" r="4" fill="#32b9b3">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
      </circle><circle cx="85.5" cy="46.02191241852691" r="4" fill="#2a9893">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.7333333333333333s" repeatCount="indefinite"></animate>
      </circle><circle cx="94.5" cy="46.195773934819385" r="4" fill="#faa419">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.8s" repeatCount="indefinite"></animate>
      </circle><circle cx="103.5" cy="47.027420698090424" r="4" fill="#e19417">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.8666666666666667s" repeatCount="indefinite"></animate>
      </circle><circle cx="112.5" cy="48.3730534276968" r="4" fill="#32b9b3">
        <animate attributeName="cy" values="46;54;46" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.9333333333333333s" repeatCount="indefinite"></animate>
      </circle>
      </svg>
    </div>
</template>

<script setup>
import { useUserMessagesState } from "../../stores/useUserMessagesState";
const userMessages = useUserMessagesState();
</script>

<style scoped>
.input-content {
    flex: 1;
    overflow: hidden;
    border-radius: 10px;
    display: flex !important;
    align-items: stretch;
}

.user-message-input {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    padding: 0.5em;
    overflow: hidden;
    width: 100%;
    background-color: #f4f4f4 ;
    border: none;
    resize: none;
    margin: 0.5em;
    border-radius: 1em;
    padding-left: 1em;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
}

.svg-wave {
  margin: auto;
  display: block;
  height: 100px;
  position: absolute;
  bottom: -20px;
  left: -16px;
}
</style>