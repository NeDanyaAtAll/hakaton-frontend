<template>
    <div class="chat-body-container">
        <div class="chat-content__dialog">
            <ChatMessage :title="'Тестовый ответ чата'"/>
            <ChatMessage :title="'Тестовый ответ чата тестовый ответ чата тестовый ответ чата и ещё какой-то текст'"/>
            <template v-for="message in userMessages.messages">
                <UserMessage :title="message"/>
            </template>
        </div>
    </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue'
import UserMessage from './UserMessage.vue'
import {useUserMessagesState} from '../stores/useUserMessagesState'

export default {
    components: {
        ChatMessage,
        UserMessage,
    },
    setup: function() {
        const userMessages = useUserMessagesState();
        return {userMessages};
    },
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