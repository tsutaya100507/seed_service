<template>
  <div class="business_content">
    <h2>こんな方にオススメ</h2>
      <div class="trouble_list">
        <div class="trouble_1">
          <div class="trouble_text-1">早く完成させたいのに、開発で詰まっていてうまくいかない</div>
          <div class="trouble_pic-1"> 
            <img src="/static/trouble_3.png"/>
          </div>
        </div>
        <div class="trouble_2">
          <div class="trouble_text-2">アプリを開発したけど、顧客に広く認知してもらう方法がわからない</div>
          <div class="trouble_pic-2"> 
            <img src="/static/trouble_2.png"/>
          </div>
        </div>
        <div class="trouble_3">
          <div class="trouble_text-3">頼れるWebエンジニアがいない</div>
          <div class="trouble_pic-3"> 
            <img src="/static/trouble_1.png"/>
          </div>
        </div>
      </div>
    <hr>
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
  .trouble_text-1 {
    width: 100%;
    height: 50px;
  }

  .trouble_text-2 {
    width: 100%;
    height: 50px;
  }

  .trouble_text-3 {
    width: 100%;
    height: 50px;
  }

  .trouble_1 {
    width: 100%;
    height: 300px;
  }

  .trouble_2 {
    width: 100%;
    height: 300px;
  }

  .trouble_3 {
    width: 100%;
    height: 300px;
  }

  .trouble_pic-1 img{
    height: 250px;
  }

  .trouble_pic-2 img{
    height: 250px;
  }

  .trouble_pic-3 img{
    height: 250px;
  }
</style>
