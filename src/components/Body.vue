<template>
    <div class="chat-body-container">
        <div class="chat-content__dialog">
            <ChatMessage :title="helloMesage"/>
            <template v-for="message in userMessages.messages" >
                <template v-if="message.type == 0 && message.title !== ''">
                    <UserMessage :title="message.title"/>
                </template>
                <template v-if="message.type == 1 && message.title !== ''">
                    <ChatMessage :title="message.title"/>
                </template>
                <template v-if="message.type == 2 && message.blob">
                  <VoiceMessage :title="message.title" :blob="message.blob"/>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue'
import UserMessage from './UserMessage.vue'
import {useUserMessagesState} from '../stores/useUserMessagesState'
import VoiceMessage from "./VoiceMessage.vue";

export default {
    components: {
      VoiceMessage,
        ChatMessage,
        UserMessage,
    },
    setup: function() {
        const userMessages = useUserMessagesState();
        return {userMessages};
    },
    data: () => ({
        helloMesage: 'Вас приветсвует голосовой помощник "Цифра"'
    })
}
</script>

<style scoped>
.chat-body-container {
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 0.5em;
    padding: 0.5em calc(1em + 3px) 0.5em calc(0.5em + 3px);
    padding-right: 0.5em;
    overflow-y: scroll;
    position: relative;
}

.chat-content__dialog {
    display: flex;
    flex-flow: column;
    gap: 0.8em;
    
}

</style>