<template>
    <TheSide></TheSide>
    <TheMain></TheMain>
</template>

<script>
import TheMain from '@/layouts/TheMain.vue';
import TheSide from '@/layouts/TheSide.vue';
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