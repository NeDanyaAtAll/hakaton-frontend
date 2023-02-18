<template>
  <div className="message user-message">
    <span>{{ title }}</span>
    <div class="input-button">
      <button type="button" @click="togglePlaying">
        <span class="material-symbols-outlined">
          {{ this.isPlaying ? 'pause' : 'play_arrow' }}
        </span>
      </button>
      <audio controls style="display: none;" ref="audio">
        <source :src="audioSource" type="audio/ogg">
      </audio>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref, toRefs} from "vue";

export default {
  setup(props) {
    const audio = ref(null);
    let isPlaying = ref(false);
    const { blob } = toRefs(props);
    
    onMounted(() => {
      audio.value.onpause = () => {
        isPlaying.value = false;
      }
      
      audio.value.onplay = () => {
        isPlaying.value = true;
      }
      
      audio.value.onended = () => {
        isPlaying.value = false;
      }
    });
    
    const togglePlaying = () => {
      if (isPlaying.value) {
        audio.value.pause();
        return;
      }
      
      audio.value.play();
      
      isPlaying.value = true;
    }
    
    return {
      isPlaying,
      togglePlaying,
      audioSource: computed(() => window.URL.createObjectURL(blob.value)),
      audio
    }
  },
  
  props: {
    title: {
      type: String,
      default: ''
    },
    blob: {
      type: null,
      default: null
    }
  }
}
</script>

<style scoped>
.user-message {
  font-size: 1em;
  border-radius: 1em 1em 0 1em;
  margin-left: auto;
  background: #faa419;
  color: #ffffff;
  box-shadow: -1px 1px 3px 0px rgb(0 0 0 / 7%);
  max-width: 40%;
  word-break: break-word;
  padding: 0.5em 1em;
  display: flex;
  flex-flow: row wrap;
}

div > button {
  border: none;
  background: transparent;
}

div > button:hover{
  opacity: 0.6;
  cursor: pointer;
  transition: 0.2s;
}

button > span {
  padding-top: 5px;
  user-select: none;
}

.input-button {
  margin: 5px;
  height: 33px;
  width: 33px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%)
  
}

.material-symbols-outlined {
  font-size: 1.25em;
  color: #faa419;
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

</style>