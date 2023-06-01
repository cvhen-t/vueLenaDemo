<template>
    <div>
        <canvas id='myCanvas'
                style='border:1px solid #000;width:100%;height:600px'> </canvas>
    </div>
</template>

<script>
import { manualCheckList } from '@/api/index';
export default {
    created() {},
    mounted() {
        let param = {
            containerName: []
        };
        manualCheckList(param).then(() => {});
        this.initCancas();
    },
    data() {
        return {
            canvasctx: null
        };
    },
    methods: {
        initCancas() {
            console.log('初始化canvas');
            let canvas = document.getElementById('myCanvas');
            let ctx = canvas.getContext('2d');
            this.canvasctx = ctx;
            canvas.addEventListener(
                'mousemove',
                (event) => {
                    if (this.isDrawing) {
                        const { clientX, clientY } = event;
                        const x = clientX - offsetLeft;
                        const y = clientY - offsetTop;
                        let newOriginX = originX,
                            newOriginY = originY;
                        let distanceX = Math.abs(x - originX);
                        let distanceY = Math.abs(y - originY);

                        // 让形状左上角的坐标永远大于右下角坐标，保证图形能正常绘制
                        if (x < originX) newOriginX = x;
                        if (y < originY) newOriginY = y;

                        // (x, y)为鼠标移动的过程中在画布上的坐标，(originX, originY)为鼠标点击时在画布上的坐标，
                        //（newOriginX, newOriginY）为绘制形状（比如矩形）时形状左上角的坐标
                        const mousePosition = { x, y, originX, originY, newOriginX, newOriginY, distanceX, distanceY };
                        console.log(mousePosition);
                        // let handleMousemove = this.handleMousemove();
                        // let currentHandleMousemove = handleMousemove[this.type]; // 根据当前类型的不同采取不同的操作
                        // currentHandleMousemove && currentHandleMousemove(mousePosition);
                    }
                },
                false
            );
        },
        draw() {
            this.canvasctx.beginPath();
            this.canvasctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
            this.canvasctx.moveTo(110, 75);
            this.canvasctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
            this.canvasctx.moveTo(65, 65);
            this.canvasctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
            this.canvasctx.moveTo(95, 65);
            this.canvasctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
            this.canvasctx.stroke();
            x;
        }
    }
};
</script>

<style>
</style>