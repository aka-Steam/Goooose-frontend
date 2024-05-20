<script setup>
      const props = defineProps({
            name: {
                  type: String,
                  default: "noname"
            },
            img_src: {
                  type: String,
                  default: "https://avatars.mds.yandex.net/get-mpic/1626700/img_id5550329233255757547.jpeg/orig"
            },
            price: {
                  type: Number,
                  default: 0
            },
            like: {
                  type: Boolean,
                  default: false
            }
      })
</script>

<template>
      <article class="card">
              <h3 class="card__title">{{ name }}</h3>
              <hr>
              <div class="image__container">
                  <img :src=img_src alt="image" class="card__img">
              </div>
              <hr>
              <span class="card__price">{{price}}₽</span>
      </article>
</template>

<style scope>

      .card{
            padding: 10px;
            width: 282px;
            height: 420px;
            cursor: pointer;
            background-color: var(--color-sidebar-foreground);
            box-shadow: 1px 2px 8px var(--color-darck);
            border-radius: 20px;
      }

      .card__title{
            margin-bottom: 8px;
            text-align: center;
      }

      .image__container{
            margin: 8px 0;
            position: relative;
            width: 262px;
            height: 262px;
            border: 1px solid var(--color-text);
            border-radius: 60px;
            overflow: hidden;
      }

      .card__img{
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
      }

      .card__price{
            font-size: 1.5rem;
      }
  
</style>