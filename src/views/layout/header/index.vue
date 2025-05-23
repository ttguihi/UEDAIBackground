<template>
    <div class="header">
        <div class="title_icon">
            <el-icon
                size="20px"
                color="black"
            >
                <House />
            </el-icon>
            <div class="title">
                首页/项目管理
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>

<style scoped lang='scss'>
.header {
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;

    .title_icon {
        display: flex;
        margin-left: 2%;
    }
}
</style>