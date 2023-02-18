<template>
    <div class="input-button">
        <button type="button"
         @click="userMessages.addUserMessage"
        >
            <span class="material-symbols-outlined">
                {{ userMessages.text }}
            </span>
        </button>
    </div>
</template>

<script setup>
import { useUserMessagesState } from "../../stores/useUserMessagesState";

const userMessages = useUserMessagesState();

</script>

<style scopeds>
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
}

.input-button {
    margin: 11px;
    height: 25px;
    width: 25px;
    background-color: #faa419;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.material-symbols-outlined {
    font-size: 1.25em;
    color: #F4F4F4;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

</style>