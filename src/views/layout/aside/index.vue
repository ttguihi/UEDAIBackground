<template>
    <div class='layout_aside'>
        <div class="aside_top">

        </div>
    </div>
    <div>
        <el-scrollbar height="400px">
            <p
                v-for="item in 20"
                :key="item"
                class="scrollbar-demo-item"
            >{{ item }}</p>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>

<style scoped lang='scss'>
.layout_aside {
    width: 10%;
    height: 100%;
    background-color: pink;
}
</style>