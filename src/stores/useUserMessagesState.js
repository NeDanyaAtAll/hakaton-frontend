import { defineStore } from 'pinia'
import axios from "axios";
import config from "../config.js";
import MediaRecorder from 'opus-media-recorder';
// import EncoderWorker from 'opus-media-recorder/encoderWorker.umd.js';
// import OggOpusWasm from 'opus-media-recorder/OggOpusEncoder.js';
// import WebMOpusWasm from 'opus-media-recorder/WebMOpusEncoder.js';

export const useUserMessagesState = defineStore({
  id: 'userMessages',

  state: () => ({
    text: 'mic',
    messages: [{title: '', type: 0}],
    error: null,
    isAudioRecording: false,
    mediaRecorder: null,
    mediaDevices: null,
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
      let xH = container.scrollHeight;
      if(value.length) {
        event.preventDefault();
        
        this.messages.push({
          title: value,
          type: 0,
        });
        
        userInput.value = ''
        this.text = 'mic'

        axios.post(config.API_URL + '/chat/message-question', {
          message: value
        }).then((r) => {
          if(r.data.success) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(r.data.ans));
            this.messages.push({
              title: r.data.ans,
              type: 1,
            });
            setTimeout(() => {
              container.scrollTop = xH;
            }, 0)
          } else {
            speechSynthesis.speak(new SpeechSynthesisUtterance('Извините, но у меня нет ответа на этот вопрос'));
            this.messages.push({
              title: 'Извините, но у меня нет ответа на этот вопрос',
              type: 1,
            });
            setTimeout(() => {
              container.scrollTop = xH;
            }, 0)
          }
        }).catch(e => console.log(e))
      } else {
        event.preventDefault();
        this.text = 'mic'
        return this.error = 'Попытка отправить пустое сообщение'
      }
    },
    
    sendVoiceMessage(chunk) {
      let userInput = document.querySelector('.user-message-input');
      let container = document.querySelector('.chat-body-container')
      let value = userInput.value.trim();
      let xH = container.scrollHeight;
      const formData = new FormData();
      const blob = new Blob([chunk], {'type': 'audio/ogg; codecs=opus'});
      const file = new File([blob], 'voice.ogg', {'type': 'audio/ogg; codecs=opus'});
      this.messages.push({
        type: 2,
        title: 'Голосовое сообщение',
        blob: blob
      });
      setTimeout(() => {
        container.scrollTop = xH;
      }, 0)
      formData.append('voice', file);
      axios.post(config.API_URL + `/chat/voice-question`, formData)
        .then(r => {
          if (r.data.success) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(r.data.ans));
            this.messages.push({
              type: 1,
              title: r.data.ans
            });
            setTimeout(() => {
              container.scrollTop = xH;
            }, 0)
          } else {
            speechSynthesis.speak(new SpeechSynthesisUtterance('Я не знаю ответ на этот вопрос'));
            this.messages.push({
              type: 1,
              title: 'Я не знаю ответ на этот вопрос'
            });
            setTimeout(() => {
              container.scrollTop = xH;
            }, 0)
          }
        });
    },
    
    stopRecording() {
      if (!this.isAudioRecording) {
        return;
      }
      this.isAudioRecording = false;
      this.mediaRecorder.stop();
    },
    
    startRecording() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return;
      }
      
      if (!this.isAudioRecording) {
        navigator.mediaDevices.getUserMedia({audio: true})
          .then(stream => {
            this.mediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/ogg'}, {
              encoderWorkerFactory: _ => new Worker('/scripts/encoderWorker.umd.js'),
              OggOpusEncoderWasmPath: '/scripts/OggOpusEncoder.wasm',
              WebMOpusEncoderWasmPath: '/scripts/WebMOpusEncoder.wasm'
            });
            this.mediaRecorder.start();
            this.mediaRecorder.ondataavailable = (e) => {
              this.sendVoiceMessage(e.data);
            }
            this.isAudioRecording = true;
          });
      }
    }
  }
})