<script setup>
import { ref } from "vue";
const rrweb = require("rrweb");
import rrwebPlayer from "rrweb-player";

const events = ref([]);
const stopFn = ref(null);
const showReplay = ref(false);
const replayer = ref(null);
const inputValue = ref('')

const record = () => {
  console.log("开始录制");
  stopFn.value = rrweb.record({
    emit: (event) => {
      console.log("event", event);
      events.value.push(event);
    },
    // 支持录制canvas
    recordCanvas: true,
    collectFonts: true,
  });
};
const replay = () => {
  stopFn.value();
  showReplay.value = true;
  new rrwebPlayer({
    // 可以自定义 DOM 元素
    target: replayer.value,
    // 配置项
    props: {
      // 传入events
      events: events.value,
    },
  });
};
const reset = () => {
  showReplay.value = false;
  events.value = [];
};
</script>

<template>
  <div class="main">
    <div>
      <el-button @click="record">录制</el-button>
      <el-button @click="replay">回放</el-button>
      <el-button @click="reset">返回</el-button>
    </div>
    <div v-if="!showReplay">
      <div>
        <el-input style="width: 300px" v-model="inputValue" />
      </div>
      <div>
        <el-button>按钮1</el-button>
      </div>
      <div>
        <el-button>按钮2</el-button>
      </div>
      <div>
        <el-button>按钮3</el-button>
      </div>
    </div>
    <div ref="replayer" style="margin： 0 auto"></div>
  </div>
</template>

