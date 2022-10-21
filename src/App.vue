<script setup lang="ts">
import Bookmark from 'vue-material-design-icons/Bookmark.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import Button from './components/parts/Button.vue'
import SymbolText from './components/parts/SymbolText.vue'
</script>

<template>
  <div class="page">
    <div class="card">
      <div class="card__thumbnail">
        <img
          src="https://source.unsplash.com/r1XwWjI4PyE"
          class="card__thumbnailImage"
          alt="Cereals Image"
        />
      </div>
      <div class="card__detail">
        <h3 class="card__title">ポラーノの広場</h3>
        <div class="card__description">
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </p>
          <p>
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
        </div>
        <ul class="card__notes">
          <li class="card__note">
            <SymbolText vertical-align="top">
              <template #symbol>※</template>
              <template #text
                >この文章は「ポラーノの広場（著:宮沢賢治）」から引用しています。この作品は著者が亡くなった翌年の1934年に発表された作品です。</template
              >
            </SymbolText>
          </li>
        </ul>
        <div class="card__detailFooter">
          <ul class="card__buttons">
            <li class="card__button">
              <Button tag-name="button" theme="border">
                <SymbolText>
                  <template #symbol><Bookmark size="18" /></template>
                  <template #text
                    ><span class="card__buttonText">保存する</span></template
                  >
                </SymbolText>
              </Button>
            </li>
            <li class="card__button">
              <Button tag-name="a" href="#">
                <SymbolText position="backward">
                  <template #symbol><ChevronRight size="18" /></template>
                  <template #text
                    ><span class="card__buttonText">もっと見る</span></template
                  >
                </SymbolText>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 16px;
}

.card {
  display: flex;

  .card__thumbnail {
    flex-shrink: 1;
  }

  .card__thumbnailImage {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }

  .card__detail {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  .card__title {
    font-size: 18px;
    font-weight: bold;
  }

  .card__description {
    margin-top: 8px;
  }

  .card__detailFooter {
    margin-top: auto;
    padding-top: 16px;
  }

  .card__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: -8px;
    margin-left: -8px;
  }

  .card__button {
    flex-shrink: 1;
    margin-top: 8px;
    margin-left: 8px;
  }

  .card__buttonText {
    line-height: 1.2;
  }

  .card__notes {
    margin-top: 8px;
  }

  .card__note {
    color: #888;
    font-size: 10px;
  }
}
</style>
