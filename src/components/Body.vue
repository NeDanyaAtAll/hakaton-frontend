<template>
    <div class="chat-body-container">
        <div class="chat-content__dialog">
        <ChatMessage :title="'Тестовый ответ чата'"/>
        <UserMessage :title="'Тестовое сообщение от пользователя'"/>
        <ChatMessage :title="'Тестовый ответ чата'"/>
        </div>
    </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue'
import UserMessage from './UserMessage.vue'

export default {
    components: {
        ChatMessage,
        UserMessage
    },
}
</script>

<style scoped>
.chat-body-container {
    flex: 1;
    overflow-y: scroll;
}

.chat-content__dialog {
    padding: 5px;
}     
    
</style>