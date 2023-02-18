<template>
    <div class="footer-container">
        <div class="questions-container" v-show="questions.titles">
            <template v-for="question in questions.titles">
                <Question :title="question"/>
            </template>
        </div>
        <div class="actions-cointainer">
            <Input/>
            <Button/>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'
import Question from '../Question.vue'
import {useQuestionsStore} from '../../stores/useQuestionsStore'

export default {
    components: {
        Input,
        Button,
        Question
    },
    setup: function() {
        const questions = useQuestionsStore();
        return {questions};
    }
}
</script>

<style scoped>
.footer-container {
    display: flex;
    flex-flow: column;
    padding: 10px 5px;
    align-items: center;
    position: relative;
    padding-bottom: 0.5rem;
    background-color: #ffffff;
}

.actions-cointainer {
    background-color: #f4f4f4;
    border-radius: 5px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    height: 45px;
}

.questions-container {
    border-bottom:  1px solid #f4f4f4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5em;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
</style>