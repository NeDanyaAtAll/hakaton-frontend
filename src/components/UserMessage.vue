<template>
    <div class="message user-message">
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
.user-message {
    border-radius: 10px 10px 10px 0px;
    margin-left: 25px;
}

</style>