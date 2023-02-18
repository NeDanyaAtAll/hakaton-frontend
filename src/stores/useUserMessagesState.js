import { defineStore } from 'pinia'
import axios from "axios";
import config from "../config.js";

export const useUserMessagesState = defineStore({
  id: 'userMessages',

  state: () => ({
    text: 'mic',
    messages: [],
    error: null,
    isAudioRecording: false,
    mediaRecorder: null,
    mediaDevices: null,
    answers: [],
  }),

  actions: {
    change(value) {
        return value.length ? this.text = 'arrow_upward' : this.text = 'mic'
    },

    addUserMessage(event) {
      this.error = null
      let userInput = document.querySelector('.user-message-input');
      let container = document.querySelector('.chat-body-container')
      let value = userInput.value.trim();
      if(value.length) {
        event.preventDefault();
        this.messages.push(value);
        let xH = container.scrollHeight;
        container.scrollTo(0, xH);
        userInput.value = ''
        this.text = 'mic'

        axios.post(config.API_URL + '/chat/message-question', {
          message: value
        }).then((r) => {
          if(r.data.success) {
            this.answers.push(r.data.ans);
          } else {
            this.answers.push('Извините, у меня нет ответа на этот вопрос');
          }
        }).catch(e => console.log(e))

      } else {
        event.preventDefault();
        this.text = 'mic'
        return this.error = 'Попытка отправить пустое сообщение'
      }
    },
    
    sendVoiceMessage(chunk) {
      const formData = new FormData();
      const blob = new Blob([chunk], {'type': 'audio/ogg; codecs=opus'})
      formData.append('voice', new File([blob], 'voice.ogg'));
      axios.post(config.API_URL + `/chat/voice-question`, formData)
        .then(r => r.json())
        .then(console.log);
    },
    
    stopRecording() {
      if (!this.isAudioRecording) {
        return;
      }
      this.isAudioRecording = false;
      this.mediaRecorder.ondataavailable = (e) => {
        this.sendVoiceMessage(e.data);
      }
      this.mediaRecorder.stop();
    },
    
    startRecording() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return;
      }
      
      if (!this.isAudioRecording) {
        navigator.mediaDevices.getUserMedia({audio: true})
          .then(stream => {
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.start();
            this.isAudioRecording = true;
          });
      }
    }
  }
})