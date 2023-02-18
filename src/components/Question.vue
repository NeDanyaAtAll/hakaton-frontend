<template>
    <button class="question" @click="userMessages.quickQuestionAction(title)">
        {{ title }}
    </button>
</template>

<script>
import { useUserMessagesState } from '../stores/useUserMessagesState'
export default {
    props: {
        title: {
            type: String,
            default: 'Тестовый вопрос'
        }
    },
    setup: function() {
        const userMessages = useUserMessagesState()
        return {userMessages};
    }
}
</script>
<style scoped>
    .question {
        background-color:#faa419;
        font-size: 1em;
        color: #ffffff;
        font-family: inherit;
        border-radius: 5px;
        padding: 0.5em;
        box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%);
    }


</style>