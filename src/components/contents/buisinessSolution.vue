<template>
  <div>
    <div class="solution_block">
      <h2 class="solution_present">Seed Serviceが提供できること</h2>
      <div class="solution_list">
        <div class="solution">
          <div class="solution_pic"> 
            <img src="/static/code.png"/>
          </div>
          <div class="solution_list_details">開発経験豊富なエンジニアが、アプリの機能ごとの開発(範囲は要相談)・アプリの保守を承ります。</div>
        </div>
        <div class="solution">
          <div class="solution_pic"> 
            <img src="/static/explain.png"/>
          </div>
          <div class="solution_list_details">Webメディアコンサルタントがユーザーに広く認知してもらう方法をコンサルティングいたします。</div>
        </div>
        <div class="solution">
          <div class="solution_pic"> 
            <img src="/static/shakehand.png"/>
          </div>
          <div class="solution_list_details">お客様のWebメディア構築・アプリケーション開発を支援いたします。</div>
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

  .solution_present {
     padding-top: 50px;
  }

  .solution_block {
    margin-top: 100px; 
    background-color: #B9EAE1;
    height: 550px;
  }

  .solution_list {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }

  .solution {
    width: 100%;
    height: 300px;
  }

  .solution_list_details {
    width: 400px;
    margin: auto;
    font-weight: bold;
    font-size: 23px;
    padding-top: 35px;
  }

  .solution_pic img{
    height: 250px;
  }



</style>
