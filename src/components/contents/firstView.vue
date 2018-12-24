<template>
  <div class="wrapper">
    <div class="first-view">
      <div class="first-view-img"></div>
      <Header class="header" />
      <h1>Seed Service<br>機能開発承ります。</h1>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .wrapper {
    position: relative;
    text-align: center;
    background-color: #F9F9F9;
  }

  .first-view {
    position: relative;
    width: 100%;
    height: 500px;
    background-color:  rgba(0, 210, 210, .9);
  }

  .header {
    position: absolute;
  }

  .first-view-img {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    background-image: url('/43624947930_bc5ede0e54_o.jpg');
    opacity: 0.3;
    background-size: cover;
    background-position: center;
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 220px;
    width: 100%;
    text-align: center;
    line-height: 2;
    font-weight: 800;
    font-size: 35px;
    color: #FFFFFF;
  }

</style>
