<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="@/pages/users/engineers">
          Seed Serviceとは？
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          提供サービス
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          所属エンジニア
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          お問い合わせ
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
  }

  a {
    font-weight: 800;
    font-size: 18px;
    color: #FFFFFF;
  }

  a:hover {
    color: yellow;
  }

</style>

