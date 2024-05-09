<script setup></script>

<template>
      <nav class="nav">
            <ul class="nav-list">
                  <li class="nav-list__item">
                        <RouterLink to="/about" class="nav-link">О нас</RouterLink>     
                  </li>
                  <li class="nav-list__item">
                        <RouterLink to="/doc" class="nav-link">Документация</RouterLink>
                  </li>
                  <li class="nav-list__item">
                        <RouterLink to="/shop" class="nav-link">Магазин</RouterLink>
                  </li>
            </ul>
      </nav>
</template>

<style scoped>
.nav {
      width: calc(clamp(449px, calc(0px + 100vw * 0.3), 576px));
}

.nav-list {
      padding: 0;
      width: 100%;
      list-style: none;
}

.nav.horisontal .nav-list {
      display: flex;
      justify-content: space-between;
}

.nav.vertical .nav-list {
      display: block;
}

.nav-list__item {
      list-style: none;
}

.nav-link {
      display: inline-block;
       padding: 4px 18px;
      position: relative;
      border-radius: 30px;
      border: 1px solid transparent;
      text-decoration: none;
      white-space: nowrap;
      transition: 0.4s;
}

.nav-link.router-link-exact-active {
      border: 1px solid var(--color-text);    
}

.nav-link:hover.router-link-exact-active{
      border-color: var(--color-accent);
}

@media (max-width: 1200px) {
      .nav {
            width: calc(clamp(420px, calc(0px + 100vw * 0.3), 445px));
      }

      .nav-link{
            padding: 4px 14px;
      }    
}
@media (max-width: 991px){
      .nav{
            width: 366px;
      }
      .nav-link{
            padding: 4px 12px;
      }

}
@media (max-width: 768px){
      /* Увеличиваем облась клика ссылки до общепринятых значений в 40px*/
      .nav-list__item {
            display: flex;
            align-items: center;
            height: 40px;
      }
      .nav-link::before{
            content:'';
            margin: auto;
            width: calc(100vw - 60px);
            height: 40px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
      }
}
</style>