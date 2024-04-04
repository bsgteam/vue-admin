<template>
    <TheSide></TheSide>
    <TheMain></TheMain>
</template>

<script>
import TheMain from './TheMain.vue';
import TheSide from './TheSide.vue';
export default {
    components:{
		TheMain,
        TheSide
	},
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>