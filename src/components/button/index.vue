<template>
    <button class="y-button y-button-primary ">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "yButton",
    data() {
        return {}
    }
}

</script>

<style scoped lang='scss'>
.y-button {
    margin-left: 20px;
    margin-top: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
    height: 40px;
    padding: 0 20px;
}

// 当 y-button 组件处于 disabled 状态时，降低它的透明度
// [disabled]：属性选择器，匹配带有 disabled 属性的元素
.y-button[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
}

.y-button-primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;

    &.is-border {
        background-color: transparent;
        color: #409eff;
    }
}

.y-button-success {
    background-color: #00d100;
    border-color: #00d100;
    color: #fff;

    &.is-border {
        background-color: transparent;
        color: #00d100;
    }
}

.y-button-warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;

    &.is-border {
        background-color: transparent;
        color: #e6a23c;
    }
}

.y-button-danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;

    &.is-border {
        background-color: transparent;
        color: #f56c6c;
    }
}

//圆角
.is-round {
    border-radius: 100px;
}
</style>
