<template>
  <div class="business_content">
    <h2><a name="link_1">事業内容</a></h2>
     <h3>Seed Serviceはこんな方におすすめ</h3>
      <div class="trouble_list">
        <div class="trouble">
          <div class="trouble_pic"> 
            <img src="/static/trouble_3.png"/>
          </div>
          <div class="trouble_text">アプリ開発で詰まっていて時間だけが過ぎていってしまう</div>

        </div>
        <div class="trouble">
          <div class="trouble_pic"> 
            <img src="/static/trouble_2.png"/>
          </div>
          <div class="trouble_text">アプリを開発したけど、顧客に広く認知してもらう方法がわからない。</div>
        </div>
        <div class="trouble">
          <div class="trouble_pic"> 
            <img src="/static/trouble_1.png"/>
          </div>
          <div class="trouble_text">Webメディアを始めたいがどのように立ち上げたら良いのかわからない</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  
  .business_content {
    margin-top: 100px; 
  }

  .trouble_list {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }
  .trouble_text {
    width: 100%;
    padding-top: 35px;
    height: 50px;
    font-weight: bold;
    margin: auto;
    font-size: 20px;
  }

  .trouble {
    width: 100%;
    height: 300px;
  }

  .trouble_pic img{
    height: 250px;
  }
</style>
