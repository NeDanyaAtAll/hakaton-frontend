<template>
    <div class="input-button">
        <button type="button">
            <span class="material-symbols-outlined">
                {{ button.text }}
            </span>
        </button>
    </div>
</template>

<script setup>
import { buttonStore } from "../../stores/button";

const button = buttonStore();

</script>

<style scopeds>
div > button {
    border: none;
    background: transparent;
}

div > button:hover{
    opacity: 0.8;
}

.input-button {
    margin: 5px;
    width: 30px;
    background-color: #faa419;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.material-symbols-outlined {
    font-size: 18px;
    color: white;
    font-variation-settings:
    'FILL' 0,
    'wght' 250,
    'GRAD' 0,
    'opsz' 48
}

</style>