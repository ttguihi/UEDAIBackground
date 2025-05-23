<template>
    <button
        class="y-button"
        :style="[minWidthCss]"
        :disabled="disabled"
        :class="[theme, isBorder, isRound, Size]"
    >
        <span>
            <i
                class="iconfont"
                :class="iconPrefix"
            ></i>
            <slot></slot>
            <i
                class="iconfont"
                :class="iconSuffix"
            ></i>
        </span>


    </button>
</template>

<script>
export default {
    name: "themeButton",
    props: {

        type: {
            type: String,
            default: 'primary'
        },
        border: Boolean, //默认false
        round: Boolean,//默认false
        disabled: Boolean,
        size: {
            type: String,
            default: ''
        },
        minWidth: {
            type: String,
            default: ''
        },
        //icon 图标 前缀部分 和 后缀部分
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        }
    },
    computed: {
        theme() {
            return this.type ? `y-button-${this.type}` : ''
        },
        isBorder() {
            return this.border ? 'is-border' : ''
        },
        isRound() {
            return this.round ? 'is-round' : ''
        },
        Size() {
            return this.size ? `y-button-${this.size}` : ''
        },
        minWidthCss() {
            if (!this.minWidth) { return '' }
            return { 'min-width': this.minWidth }
        },
        iconPrefix() {
            return this.prefix ? `icon-${this.prefix}` : ''
        },
        iconSuffix() {
            return this.suffix ? `icon-${this.suffix}` : ''
        }
    },
    data() {
        return {}
    }
}

</script>

<style scoped lang='scss'>
.y-button {

    border-width: 1px;
    border-style: solid;
    border-color: #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
    height: 40px;
    padding: 0 20px;

    >span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.y-button-medium {
    height: 36px;
}

.y-button-small {
    padding: 0 15px;
    height: 32px;
    font-size: 12px;
}

.y-button-mini {
    padding: 0 15px;
    height: 28px;
    font-size: 12px;
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

.y-button-themeColor {
    background: linear-gradient(90deg, #2254F4 0%, #9438FC 100%);
    border-color: transparent;
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
