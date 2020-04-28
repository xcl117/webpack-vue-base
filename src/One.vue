<template>
  <div class="one">
    <p>{{ message }}</p>
    <p>今天有点点不开心，给自己画个笑脸吧！</p>
    <canvas id="smile_canvas" width="400" height="500"></canvas>
  </div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {
      message: "我是子组件",
    };
  },
  created() {},
  mounted() {
    let oCanvas = document.getElementById("smile_canvas");
    this.drawSmile(oCanvas);
  },
  methods: {
    //   绘制笑脸
    drawSmile(oCanvas) {
      let cxt = oCanvas.getContext("2d");
      cxt.fillStyle = "yellow";
      cxt.beginPath();
      // https://www.w3school.com.cn/tags/canvas_arc.asp
      cxt.arc(200, 200, 180, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
      cxt.stroke();

      cxt.fillStyle = "white";
      cxt.beginPath();
      cxt.arc(100, 140, 30, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
      cxt.stroke();

      cxt.beginPath();
      cxt.arc(300, 140, 30, 0, Math.PI * 2);
      cxt.closePath();
      cxt.fill();
      cxt.stroke();

      cxt.beginPath();
      cxt.strokeStyle = "red";
      cxt.arc(200, 240, 100, Math.PI * 2, Math.PI);
      cxt.lineWidth = 2;
      cxt.stroke();
      cxt.closePath();
    },
  },
};
</script>

<style lang="scss">
.one {
  margin: 20px;
  padding: 20px;
  border: 1px solid;
}
</style>
