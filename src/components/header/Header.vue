<template>
    <div class="header-container">
        <div class="header-mascot-container">
            <Mascot/>
        </div>
        <div class="header-name-container">
            <span> Цифра</span>
        </div>
    </div>
</template>

<script>
import Mascot from './Mascot.vue';

export default {
    components: {
        Mascot
    }
}
</script>

<style scoped>
    .header-container {
        background-color: #d78bf7;
        padding: 5px 10px;
        color: #8c64d8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        font-family: 'RosMol-label';
    }

    .header-container > span {
        width: min-content;
        text-align: right;
    }

</style>