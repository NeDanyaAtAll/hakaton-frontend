<template>
    <div class="input-content">
        Message
    </div>
</template>

<script>

</script>

<style scoped>
.input-content {
    flex: 1;
    width: 100%;
    padding: 6px;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    align-items: center;
}

::-webkit-scrollbar {
    width: 10px;               /* ширина scrollbar */
}
::-webkit-scrollbar-track {
    background: white;        /* цвет дорожки */
}
::-webkit-scrollbar-thumb {
    background-color: #d78bf7;    /* цвет плашки */
    border-radius: 20px;      /* закругления плашки*/
    border: 3px solid white;  /*padding вокруг плашки */
}
</style>