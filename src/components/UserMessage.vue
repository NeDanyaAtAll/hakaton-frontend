<template>
    <div class="message user-message">
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
.user-message {
    font-size: 1em;
    border-radius: 1em 1em 0 1em;
    margin-left: auto;
    background: #faa419;
    color: #ffffff;
    box-shadow: -1px 1px 3px 0px rgb(0 0 0 / 7%);
    max-width: 40%;
    word-break: break-word;
    padding: 0.5em 1em;
}

</style>