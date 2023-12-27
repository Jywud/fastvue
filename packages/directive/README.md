# @fastvue/directive

##### vue2 的常用指令集合

### 安装

##### 使用 npm

```shell
npm install @fastvue/directive --save
```

##### 使用 yarn

```shell
yarn add @fastvue/directive
```

##### 使用 pnpm

```shell
pnpm add @fastvue/directive
```

### 使用

```shell
import Vue from "vue";
import Directives from "@fastvue/directive";
Vue.use(Directives);
```

### 例子

#### 按钮点击防抖

```html
<template>
  // 不传时间默认1000ms
  <button v-debounce="debounceClick">防抖按钮</button>
  <button v-debounce:2000="debounceClick">防抖按钮</button>
</template>

<script>
export default {
  methods: {
    debounceClick () {
      console.log('触发一次')
    }
  }
}
</script>

```

#### 一键复制文本

```js
<template>
  <button v-copy="copyConfig">复制</button>
</template>

<script> export default {
    data() {
      return {
        copyConfig: {
          text: '复制的内容XXX', //复制的内容
          onSuccess: ()=> {}  //复制成功后的回调
        }
      }
    },
  }
</script>
```

#### 图片懒加载

将组件内 标签的 src 换成 v-LazyLoad
```html
<img v-LazyLoad="xxx.jpg" />
```

#### 添加水印

使用，设置水印文案，颜色，字体大小即可
```html
<template>
  <div v-waterMarker="{text:'dayu',textColor:'#ddd'}"></div>
</template>
```
#### 元素拖拽

使用: 在 Dom 上加上 v-draggable 即可
```html
<template>
  <div v-draggable></div>
</template>
```

#### 限制输入框特殊字符输入

将需要校验的输入框加上 v-emoji 即可
```html
<template>
  <input type="text" v-model="note" v-emoji />
</template>
```

#### 输入框自动获取焦点

将需要校验的输入框加上 v-focus 即可
```html
<template>
  <input type="text" v-model="note" v-focus />
</template>
```

#### 判断点击事件是否发生在指定的元素外部

将需要校验的元素加上 v-clickOutside 即可
```html
<template>
  <div v-clickOutside="handleClickOutside"></div>
</template>
```
#### 用于禁用点击事件

将需要校验的元素加上 v-disableClick 即可
```html
<template>
  <div v-disableClick="isDisabled"></div>
</template>
```
#### 无限滚动加载

这个指令用于实现无限滚动加载。它接受一个函数作为参数，该函数将在滚动到页面底部时调用。
```html
<template>
  <div v-infinite-scroll="loadMoreData" style="height: 500px; overflow-y: scroll;">  
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>  
  </div>
</template>
```
