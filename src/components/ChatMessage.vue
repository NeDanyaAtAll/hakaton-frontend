<template>
    <div class="message chat-message">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
    
}
</script>

<style scoped>
.chat-message {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    background: #ffffff;
    color: rgb(44 53 80);
    max-width: 60%;
    padding: 0.5em;
    border-radius: 1em 1em 1em 0;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 7%);
    word-break: break-word;
    font-size: 1em;
}

</style>