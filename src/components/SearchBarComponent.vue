<template>
    <div>
        <form @submit.prevent="">
            <input type="text" placeholder="cerca...">
            <button type="submit" class="btn btn-danger">Cerca</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SearchBarComponent',

    }
</script>

<style lang="scss" scoped>

</style>