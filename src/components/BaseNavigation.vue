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

<style>
.nav {
      width: calc(clamp(445px, calc(0px + 100vw * 0.3), 576px));
      /* width: calc(clamp(424px, calc(0px + 100vw * 0.3), 571px)); */
      
      /* display: flex;
      justify-content: space-between; */
}

.nav-list {
      padding: 0;
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
}

.nav-list__item {
      
      list-style: none;
}

.nav-link {
      display: inline-block;
      /* margin: 0 8px; */
      position: relative;
      text-decoration: none;

      padding: 4px 18px;
      /* padding: 4px 8px; */
      /* height: 40px; */
      border-radius: 30px;

      transition: 0.4s;
}

.nav-link.router-link-exact-active {
      border: 1px solid var(--color-text);    
}

.nav-link:hover.router-link-exact-active{
      border-color: var(--color-accent);
}

/* .nav-link:hover.router-link-exact-active::before {
      
      border-color: var(--color-accent);
}
.nav-link.router-link-exact-active::before {
      content: "";
      width: calc(100% + 40px);
      height: 40px;
      position: absolute;
      top: -4px;
      left: -20px;
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
} */

@media (max-width: 1200px) {
      .nav-link:hover.router-link-exact-active::before {
            border-color: var(--color-accent);
      }

      .nav {
            /* width: 400px; */
            width: calc(clamp(418px, calc(0px + 100vw * 0.3), 445px));
      }

      .nav-link{
            padding: 4px 14px;
      }

      .nav-link.router-link-exact-active::before {
            content: "";
            width: calc(100% + 28px);
            position: absolute;
            top: -4px;
            left: -14px;

      }

      
      
}
@media (max-width: 992px){
      .nav{
            width: 356px;
      }
      .nav-link{
            padding: 4px 12px;
      }

}
@media (max-width: 768px){
      
}
</style>