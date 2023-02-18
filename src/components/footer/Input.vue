<template>
    <div class="input-content">
        <textarea class="user-message-input" type="text" placeholder="Введите сообщение"
            @input="button.change($event.target.value)"
        ></textarea>
    </div>
</template>

<script setup>

import { buttonStore } from "../../stores/button";

const button = buttonStore();
</script>

<style scoped>
.input-content {
    flex: 1;
    padding: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.user-message-input {
    resize: none;
    overflow: hidden;
    text-align: start;
    appearance: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font-size: 1em;
    font-family: inherit;
    width:100%;
    height: 50px;
    box-sizing: border-box;
    padding: 1.25em;
}
</style>