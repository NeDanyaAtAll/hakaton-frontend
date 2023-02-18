<template>
    <div class="question">
        {{ title }}
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Тестовый вопросик'
        }
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
        box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%)
    }
</style>