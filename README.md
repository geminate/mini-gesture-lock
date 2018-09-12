## 简介
> 微信小程序的手势解锁组件。基于微信小程序原生开发。
另有 [Mpvue 版本的手势解锁](https://github.com/geminate/mpvue-gesture-lock)

**组件使用 DOM 实现，非Canvas。原因是微信小程序的Canvas目前存在问题，网上其他使用Canvas实现手势解锁的组件在小程序中存在严重的卡顿问题**

## 截图

<p align="center"><img src="https://github.com/geminate/geminate.github.io/blob/master/assets/images/2018/gesture.gif" alt="d-tools"></p>

## 构建

组件位于 components/miniGestureLock <br>
库文件位于 lib/gestureLock.js

可自行参考样例进行修改

## 组件属性
- containerWidth 容器宽度 单位rpx
- cycleRadius    锁圆宽度 单位rpx
- password 正确密码
