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
        background-color: #ffffff;
        padding: 5px 10px;
        color: #fdcb00;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5em;
        font-family: 'RosMol-label';
        border-bottom:  1px solid #f4f4f4  ;
    }

    .header-container > span {
        width: min-content;
        text-align: right;
    }

</style>