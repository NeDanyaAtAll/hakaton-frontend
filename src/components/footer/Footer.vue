<template>
    <div class="footer-container">
        <div class="actions-cointainer">
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
    display: flex;
    flex-flow: row;
    padding: 10px 5px;
    align-items: center;
    position: relative;
    padding-bottom: 0.5rem;
    background-color: #ffffff;
    border-top:  1px solid #f4f4f4  ;
}

.actions-cointainer {
    background-color: #f4f4f4;
    border-radius: 1em;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    height: 45px;
}
</style>