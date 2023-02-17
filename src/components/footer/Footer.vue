<template>
    <div class="footer-container">
        <div class="footer-input-container">
            <Input/>
            <Button/>
        </div>
       
    </div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'

export default {
    components: {
        Input,
        Button,
    }
}
</script>

<style scoped>
.footer-container {
    padding: 10px;
    background-color: #d78bf7;
}

.footer-input-container {
    border-radius: 10px;
    background-color: white;
    display: flex !important;
    height: 40px;
    align-items: stretch;
}
</style>