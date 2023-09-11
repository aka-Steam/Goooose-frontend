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
      width: calc(clamp(424px, calc(0px + 100vw * 0.3), 571px));
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
      margin: 0 8px;
      position: relative;
      text-decoration: none;
}
.nav-link:hover.router-link-exact-active::before {
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
}

@media (max-width: 1200px) {
      .nav-link:hover.router-link-exact-active::before {
            border-color: var(--color-accent);
      }

      .nav {
            width: 400px;
      }

      .nav-link.router-link-exact-active::before {
            content: "";
            width: calc(100% + 28px);
            position: absolute;
            top: -4px;
            left: -14px;

      }

      
      
}
@media (max-width: 768px){
      
}
</style>