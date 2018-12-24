<template>
  <div class="engineer_view">
    <h2>エンジニア一覧</h2>
    <div class="engineer_list">
      <div class="engineer_list-1">
        <div class="engineer_1">
          <div class="engineer_name-1"><h3>宮嶋 勇弥</h3></div>
          <div class="engineer_pic-1">
            <img src="/static/miyajima.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは40万PV。（現在当メディアは１００万PVに到達）</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOに関してのコンサルを担当</p>
              </div>
            </div>
        </div>
        <div class="engineer_2">
          <div class="engineer_name-2"><h3>依知川 達也</h3></div>
          <div class="engineer_pic-2">
            <img src="/static/ichikawa.png"/></div> 
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは40万PV。（現在当メディアは１００万PVに到達）</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOに関してのコンサルを担当</p>
              </div>
            </div>
        </div>
      </div>
      <div class="engineer_list-2">
        <div class="engineer_3">
          <div class="engineer_name-3"><h3>福田 翔</h3></div>
          <div class="engineer_pic-3">
            <img src="/static/fukuda.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは40万PV。（現在当メディアは１００万PVに到達</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOに関してのコンサルを担当</p>
              </div>
            </div>
        </div>
        <div class="engineer_4">
          <div class="engineer_name-3"><h3>福田 翔</h3></div>
          <div class="engineer_pic-3">
            <img src="/static/fukuda.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは40万PV。（現在当メディアは１００万PVに到達</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOに関してのコンサルを担当</p>
              </div>
            </div>
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
  .engineer_view {
    margin-top: 100px;
  }

  .engineer_list {
    display: flex;
    width: 100%;
    justify-content: space-evenly;;
    margin-top: 30px;
  }

  .engineer_1 {
    width: 100%;
  }

  .engineer_2 {
    width: 100%;
  }

  .engineer_3 {
    width: 100%;
  }

  .engineer_name-1 {
    width: 100%;
    height: 50px;
  }

  .engineer_name-2 {
    width: 100%;
    height: 50px;
  }

  .engineer_name-3 {
    width: 100%;
    height: 50px;
  }

  .engineer_pic-1 img{
    height: 250px;
  }

  .engineer_pic-2 img{
    height: 250px;
  }

  .engineer_pic-3 img{
    height: 250px;
  }

  .engineer_content {
    margin-top: 30px;
    height: 100%;
    width: 100%;
  }

  .engineer_detail {
    font-weight: bold;
  }

  .engineer_description {
    height: 100%;
    width: 400px;
    margin: auto;
  }

</style>
