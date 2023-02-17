<template>
    <div class="message chat-message">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        default: ''
    }
    
}
</script>

<style scoped>
.chat-message {
    border-radius: 10px 10px 10px 0px;
    margin-right: 25px;
}
</style>