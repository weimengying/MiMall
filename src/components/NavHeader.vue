<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript">小米商城</a>
          <a href="javascript">MUI</a>
          <a href="javascript">云服务</a>
          <a href="javascript">协议规则</a>
        </div>
        <div class="tapbar-user">
          <a href="javascript">登录</a>
          <a href="javascript">注册</a>
          <a href="javascript" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu"></div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header'
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          width: 16px;
          height: 12px;
          margin-right: 4px;
          background-size: contain;
          display: inline-block;
        }
      }
    }
  }
  .nav-header {
    .container {
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ' ';
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
          }
          &:after {
            content: ' ';
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
    }
  }
}
</style>
