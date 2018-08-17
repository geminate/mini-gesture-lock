import GestureLock from '../../lib/gestureLock.js';

Component({
  properties: {
    containerWidth: {
      type: Number
    },
    cycleRadius: {
      type: Number
    },
    password: {
      type: Array
    }
  },
  data: {
    gestureLock: {}, // 锁对象
    circleArray: [], // 圆对象数组
    lineArray: [], // 已激活锁之间的线段
    activeLine: {}, // 最后一个激活的锁与当前位置之间的线段
    error: false
  },
  methods: {
    onTouchStart(e) {
      this.data.gestureLock.onTouchStart(e);
      this.refesh();
    },

    onTouchMove(e) {
      this.data.gestureLock.onTouchMove(e);
      this.refesh();
    },
    onTouchEnd(e) {
      const checkPoints = this.data.gestureLock.onTouchEnd(e);
      if (checkPoints.join("") == this.data.password.join("")) {
        console.log("密码正确");
        this.refesh();
        this.triggerEvent('end', checkPoints);
        
      } else {
        console.log("密码错误");
        this.setData({
          error: true
        });
        setTimeout(() => {
          this.refesh();
          this.triggerEvent('end', checkPoints);
        }, 800);
      }
    },
    refesh() {
      this.setData({
        error: false,
        circleArray: this.data.gestureLock.getCycleArray(),
        lineArray: this.data.gestureLock.getLineArray(),
        activeLine: this.data.gestureLock.getActiveLine()
      });
    }
  },
  ready() {
    this.setData({
      gestureLock: new GestureLock(this.data.containerWidth, this.data.cycleRadius)
    });
    this.refesh();
  }
})