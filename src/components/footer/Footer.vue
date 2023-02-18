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
    background-color: #ffffff;
    border-top:  1px solid #f4f4f4  ;
}

.footer-input-container {
    border-radius: 10px;
    background-color: #f4f4f4 ;
    display: flex !important;
    height: 40px;
    align-items: stretch;
}
</style>