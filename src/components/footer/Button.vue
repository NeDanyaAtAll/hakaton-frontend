<template>
    <div class="input-button">
        <button type="button"
          v-if="userMessages.text !== 'mic'"
          @click="userMessages.addUserMessage"
        >
            <span class="material-symbols-outlined">
                {{ userMessages.text }}
            </span>
        </button>
        <button
          v-else
          @click="recordAudio"
        >
          <span class="material-symbols-outlined" v-show="!userMessages.isAudioRecording">
            {{ userMessages.text }}
          </span>
          <span class="material-symbols-outlined" v-show="userMessages.isAudioRecording">
            arrow_upward
          </span>
        </button>
    </div>
</template>

<script setup>
import { useUserMessagesState } from "../../stores/useUserMessagesState";

const userMessages = useUserMessagesState();

const recordAudio = () => {
  if (userMessages.isAudioRecording) {
    userMessages.stopRecording();
  } else {
    userMessages.startRecording();
  }
}

</script>

<style scopeds>
div > button {
    border: none;
    background: transparent;
}

div > button:hover{
    opacity: 0.6;
    cursor: pointer;
    transition: 0.2s;
}


.input-button {
    margin: 5px;
    height: 33px;
    width: 33px;
    background-color: #faa419;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%)
        
}

.material-symbols-outlined {
    padding-top: 5px;
    user-select: none;
    font-size: 1.25em;
    color: #F4F4F4;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

</style>