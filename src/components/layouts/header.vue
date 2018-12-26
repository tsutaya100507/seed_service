<template>
  <header class="header">
    <div class="header_list">
      <div class="header_left">
        <div class="logo">
          <img src="/static/logo.png"/>
        </div>
        <div class="site_title">Seed Service</div>
      </div>
      <div class="header_right">
        <div class="businessContent"><a href="#link_1">事業内容</a></div>
        <div class="engineer_list"><a href="#link_2">エンジニア一覧</a></div>
        <div class="engineer_list"><a href="#link_3">料金表</a></div>
        <div class="contact"><a href="https://goo.gl/forms/dKuFA8SZ3DNF30m72">お問い合わせ</a></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  .header {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .header_list {
    display: flex;
  }

  .header_left {
    display: flex;
    width: 100%;
    padding-left: 100px;
  }

  .header_right {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .site_title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: oblique;
    font-weight: bold;
    font-size: 30px;
  }

  .logo {
    height: 60px;
    width: 100px;
  }
  
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .businessContent{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .businessContent a {
    color: black;
  }

  .engineer_list {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .engineer_list a {
    color: black;
  }

  .contact {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .contact a {
    color: black;
  }

</style>
