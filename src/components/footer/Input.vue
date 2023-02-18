<template>
    <div class="input-content">
        <textarea placeholder="Введите сообщение" class="user-message-input" type="text" minlength="1"
            @input="userMessages.change($event.target.value)"
            @keydown.enter="userMessages.addUserMessage($event)"
        ></textarea>

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
</style>