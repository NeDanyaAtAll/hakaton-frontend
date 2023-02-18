<template>
    <div class="input-content">
        <input class="user-message-input" type="text" placeholder="Введите сообщение"
            @input="button.change($event.target.value)"
        >
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
    font-size: 1em;
    font-family: inherit;
    width:100%;
    padding: 1.5em;
    padding-top: 3.25em;
    padding-left: 0.5em;
    margin: 0.5em;
}
</style>