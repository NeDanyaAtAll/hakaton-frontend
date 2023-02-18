<template>
    <div class="wrap">
        <div class="input-container">
            <input type="text" v-model="value" disabled>
            <button type="button"
                >
                <span class="material-symbols-outlined">
                    question_mark
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import { useUserMessagesState } from "../../stores/useUserMessagesState";

export default {
    data: () => ({
        value: 'Название проекта'
    }),

    setup: function() {
        const userMessages = useUserMessagesState();
        return {userMessages};
    }
}
</script>

<style scoped>
.wrap {
    background-color: #F4F4F4;
    padding: 1em;
    border-radius: 5px;
}
.input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
button {
    border-radius: 50%;
    background-color:#fff;
    height: 25px;
    border: 1px solid #faa419;

}


input {
    border: none;
    background-color:#fff;
    border: 1px solid #faa419;
    font-size: 1em;
    font-family: 'RosMol';
    border-radius: 5px;
    padding: 0.5em;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%);
    margin-right: 10px;
}

.material-symbols-outlined {
    font-size: 1em;
    color: #faa419;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>