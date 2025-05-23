<template>
    <div class="layout">

        <Aside></Aside>

        <div class="main">
            <Header class="header">

            </Header>

            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <p
                    v-for="o in 4"
                    :key="o"
                    class="text item"
                >{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </el-card>
            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <p
                    v-for="o in 4"
                    :key="o"
                    class="text item"
                >{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </el-card>
        </div>



    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Aside from './aside/index.vue'
import Header from './header/index.vue'
</script>

<style scoped lang='scss'>
.layout {
    display: flex;
    background-color: #f6f8f9;

    .main {
        flex: 1;

        .header {
            width: 100%;
        }

        display: flex;
        flex-direction: column;

    }

}
</style>