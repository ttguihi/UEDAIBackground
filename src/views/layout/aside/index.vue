<template>
    <div
        class='layout_aside'
        :class="{ collapsed: isCollapse }"
    >
        <div class="logo">
            <div
                class="logo_pic"
                v-if="!isCollapse"
            ></div>
            <!-- <div class="logo_pic" v-else></div> -->
            <div
                v-else
                class="small_logo_pic"
            ></div>
        </div>

        <div class="menu">
            <el-menu
                backgroundColor="transparent"
                default-active="2"
                class="el-menu-vertical-demo font"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
            >
                <el-menu-item index="1">
                    <el-icon>
                        <House />
                    </el-icon>
                    <span v-if="!isCollapse">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span v-if="!isCollapse">项目管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span v-if="!isCollapse">AIRO关键词查询</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <Share />
                    </el-icon>
                    <span v-if="!isCollapse">区域代理管理</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <el-icon>
                        <Connection />
                    </el-icon>
                    <span v-if="!isCollapse">联系客服</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span v-if="!isCollapse">设置</span>
                </el-menu-item>
            </el-menu>

            <div
                class="fold"
                @click="handleifFold"
            >
                <i
                    class="iconfont icon-shuangxianzuojiantou"
                    v-if="!isCollapse"
                ></i>
                <i
                    class="iconfont icon-shuangxianyoujiantou"
                    v-else
                ></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isCollapse = ref(false);

const handleifFold = () => {
    isCollapse.value = !isCollapse.value;
    console.log(isCollapse.value);
};
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>

<style scoped lang='scss'>
.is-active {
    color: #303133;
    border-radius: 10px;
    background-color: rgba(227, 236, 255, 1.0);
}

.el-menu-item:hover {
    color: #303133;
    border-radius: 10px;
    background-color: rgba(227, 236, 255, 1.0);
}

.font {
    font-weight: 600;
}

.layout_aside {
    width: 220px;
    height: 100vh;
    background: linear-gradient(180deg, #AAC0FF 0%, #DFF3FE 58%, #CFC9FE 100%) no-repeat;
    transition: all 0.3s;
    /* 添加过渡效果 */

    &.collapsed {
        width: 64px;
        /* 折叠后的宽度 */
    }

    .logo {
        height: 80px;
        width: 90%;
        box-sizing: border-box;
        margin-bottom: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo_pic {
            
            width: 80%;
            height: 100%;
            background: url('@/assets/Group_1081.png') no-repeat center center;
            background-size: contain;
        }

        .small_logo_pic {
            width: 80%;
            height: 100%;

            background: url('@/assets/logo.png') no-repeat center center;
            background-size: contain;
        }
    }

    .menu {
        width: 100%;
        height: calc(100% - 80px - 30px);
        position: relative;

        .fold {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-weight: 700;
            cursor: pointer;
            text-align: center;
            line-height: 40px;
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background-color: #892cfb;
        }
    }
}

.el-menu {
    border-right-width: 0;
}
</style>
