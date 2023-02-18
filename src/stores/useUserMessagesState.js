import { defineStore } from 'pinia'
import axios from "axios";
import config from "../config.js";
import MediaRecorder from 'opus-media-recorder';
// import EncoderWorker from 'opus-media-recorder/encoderWorker.umd.js';
// import OggOpusWasm from 'opus-media-recorder/OggOpusEncoder.js';
// import WebMOpusWasm from 'opus-media-recorder/WebMOpusEncoder.js';

function exportStateToLocalStorage(value) {
 localStorage.setItem('localState', JSON.stringify(value));
}

function getLocalStorage() {
  let messages = [];
  if (localStorage.getItem('localState')) {
    let localState = JSON.parse(localStorage.getItem('localState'))
    for (let message of localState) {
      if(message.type == 2) {
        delete message.blob
        message.type = 0;
      }
      messages.push({
        title: message.title,
        type: message.type
      })
    }
  } else {
    messages = [];
  }
 return messages;
}

export const useUserMessagesState = defineStore({
  id: 'userMessages',

  state: function() {
    let messages = getLocalStorage()
    return {
      text: 'mic',
      messages: messages,
      error: null,
      isAudioRecording: false,
      mediaRecorder: null,
      mediaDevices: null,
      quickQuestions: [], /*['Что должно быть в видео-визитке?']*/
    }
  },

  actions: {
    getRemoteMessages() {
      const chatId = (new URL(window.location.href)).searchParams.get('chatId') ?? 1;
      axios.get(config.API_URL + `/chat/history?chatId=${chatId}`)
        .then(r => {
          this.messages = r.data;
        });
    },
    
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
        exportStateToLocalStorage(this.messages);
        userInput.value = ''
        this.text = 'mic'
        
        this.sendRequestToGetAnswer(value, container, xH);
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
      exportStateToLocalStorage(this.messages);
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
    },

    quickQuestionAction(title) {
      let container = document.querySelector('.chat-body-container')
      let xH = container.scrollHeight;

      if(!title ) {
        return this.errors = 'Неккоректный запрос'
      }
      this.quickQuestions.splice(this.quickQuestions.findIndex(el => el == title), 1)

      this.messages.push({
        title: title,
        type: 0,
      });
      
      this.sendRequestToGetAnswer(title, container, xH);
    },

    sendRequestToGetAnswer(message, container, xH) {
      axios.post(config.API_URL + '/chat/message-question', {
        message: message
      }).then((r) => {
        if(r.data.success) {
          speechSynthesis.speak(new SpeechSynthesisUtterance(r.data.ans));
          this.messages.push({
            title:r.data.ans,
            type: 1,
          });
          exportStateToLocalStorage(this.messages);
          setTimeout(() => {
            container.scrollTop = xH;
          }, 0)
          console.log(this.messages)
        } else {
          speechSynthesis.speak(new SpeechSynthesisUtterance('Извините, но у меня нет ответа на этот вопрос'));
          this.messages.push({
            title: 'Извините, но у меня нет ответа на этот вопрос',
            type: 1,
          });
          exportStateToLocalStorage(this.messages);
          setTimeout(() => {
            container.scrollTop = xH;
          }, 0)
        }
      }).catch(e => console.log(e))
    }
  }
})