<template>
  <div class="engineer_view">
    <h2><a name="link_2">エンジニア一覧</a></h2>
    <div class="engineer_list">
      <div class="engineer_list-1">
        <div class="engineer">
          <div class="engineer_name"><h3>宮嶋 勇弥</h3></div>
          <div class="engineer_pic">
            <img src="/static/miyajima.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>株式会社div メンター, 株式会社Asobica エンジニア(サービス名 fever), フリーランスエンジニア(ウェブシステム請負、開発)SIer企業、ベンチャーIT企業を1年弱勤務して退職した後、株式会社divのメンターとして働く。メンター業務を半年ほどしてからフリーランスエンジニアとして主にWebシステムを知人の紹介から受諾開発(5件ほど)する。</p>
                <p>またそれと並行して株式会社Asobicaでコミュニティを活性化させるサービス(fever)を業務委託で開発していて現在に至る。</p>
              </div>
            </div>
        </div>
        <div class="engineer">
          <div class="engineer_name"><h3>依知川 達也</h3></div>
          <div class="engineer_pic">
            <img src="/static/ichikawa.png"/></div> 
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは約４０万PV。（現在当メディアは１００万PVに到達）</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOに関してのコンサルを担当</p>
              </div>
            </div>
        </div>
      </div>
      <div class="engineer_list-2">
        <div class="engineer">
          <div class="engineer_name"><h3>福田 翔</h3></div>
          <div class="engineer_pic">
            <img src="/static/fukuda.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>プログラミングスクールでSwift、Ruby、Ruby on Rails、HTML/CSS、JavaScriptなどを学習。プログラミングスクールにそのまま転職し、プログラミングメディアの編集長を担当。月間最高PVは半年で約４０万PVを達成。（現在当メディアは１００万PVに到達）GMOグループでも勤務。</p>
                <p>その後フロントエンドの受託企業に転職し独立。Seed Serviceでは、アプリ開発・SEOコンサルを担当</p>
              </div>
            </div>
        </div>
        <div class="engineer">
          <div class="engineer_name"><h3>里 優裕</h3></div>
          <div class="engineer_pic">
            <img src="/static/sato.png"/></div>
            <div class="engineer_content">
              <div class="engineer_detail">経歴</div>
              <div class="engineer_description">
                <p>ビットコインウォレット事業の営業、会計、総務、広報、法務、マーケティング、採用、その他コーポレート業務の創業支援</p>
                <p>プログラミングスクールB to B向けエンジニア人材紹介事業の営業支援</p>
                <p>仮想通貨・ブロックチェーンメディアの立上げ</p>
                <p>プログラミング、キャリア転職向けのWEBメディア0からの立上げ支援</p>
                <p>フィットネススマホアプリの会員集客およびビックサイトの催事開催、B to B、B to Cの営業支援</p>
                <p>プログラミングスクール事業のプログラミング（Ruby, Swift）教育支援</p>
                <p>大手製造会社CRMシステムによるB to B、B to C営業支援</p>
                <p>大手旅行会社のスマホアプリB to B営業支援</p>
                <p>大手通信会社の通信回線新規顧客開拓B to C 営業支援</p>
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

  .engineer {
    width: 100%;
  }

  .engineer_name {
    width: 100%;
    height: 50px;
  }

  .engineer_pic img{
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
