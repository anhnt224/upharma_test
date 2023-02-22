<template>
  <div class="header-container">
    <div class="header">
      <div class="header__logo">
        <img
          class="header__logo-1"
          src="https://upharma.vn/img/logo-header.19f24a0f.png"
        />
        <img
          class="header__logo-2"
          src="https://upharma.vn/img/text-banner.c5ba8bf8.png"
        />
      </div>

      <div class="header-search">
        <div class="header-search__btn items-center">
          <font-awesome-icon
            icon="search"
            size="3x"
            :style="{ color: '#fff' }"
          />
        </div>
        <input
          type="text"
          class="header-search__input"
          :placeholder="`Tìm kiếm sản phẩm, bệnh lý, ...`"
        />
      </div>

      <div class="header__menu">
        <div class="menu-item">
          <div class="menu-item__icon items-center">
            <font-awesome-icon
              icon="phone"
              size="5x"
              :style="{
                color: 'white',
              }"
            />
          </div>
          <div class="menu-item__content">
            <div class="menu-item__title">Hotline mua hàng</div>
            <div class="menu-item__sub-title">0971036925</div>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item__icon items-center">
            <font-awesome-icon
              icon="clock-rotate-left"
              size="5x"
              :style="{
                color: 'white',
              }"
            />
          </div>
          <div class="menu-item__content">
            <div class="menu-item__title">Tra cứu</div>
            <div class="menu-item__sub-title">Lịch sử đơn hàng</div>
          </div>
        </div>
      </div>
      <div class="header__nav-btn" @click="onNavTap">
        <font-awesome-icon
          icon="bars"
          size="5x"
          :style="{
            color: 'white',
          }"
        />
      </div>
    </div>
    <navigation :showNav="showNav" @onCloseNav="onCloseNav"></navigation>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    onNavTap() {
      console.log("this.onNavTap");
      this.showNav = !this.showNav;
    },
    onCloseNav() {
      console.log("close nav");
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme/colors.scss";
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, $primary-light, $primary-dark);
  height: 88px;
  width: 100%;
}

.header {
  align-items: center;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--d-max-width);
  width: calc(100% - 64px);
  gap: 32px;
}

.header__logo {
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: baseline;
}

.header__logo-1 {
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 8px;
}

.header__logo-2 {
  width: 284px;
  height: 40px;
  margin-left: 12px;
}

.header__menu {
  display: flex;
  gap: 24px;
}

.menu-item {
  display: flex;
}
.menu-item__icon {
  width: 40px;
  height: 40px;
}
.menu-item__content {
  margin-left: 8px;
}
.menu-item__title {
  font-size: 1.2rem;
  color: white;
  font-weight: 400;
}
.menu-item__sub-title {
  font-size: 1.6rem;
  margin-top: 4px;
  color: white;
  font-weight: 600;
}

.header__nav-btn {
  width: 48px;
  height: 48px;
  /* background-color: white; */
  margin-right: 8px;
  border-radius: 24px;
}

.header__nav-btn:active {
  background-color: $white100;
}

.header__nav-btn:hover {
  background-color: $white100;
}
/* Header Search */
.header-search {
  background-color: white;
  width: 128px;
  flex: 1;
  height: 44px;
  border-radius: 129px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-search__btn {
  width: 40px;
  height: 40px;
  background-color: $accent-color;
  border-radius: 50px;
  margin: 2px;
}

.header-search__input {
  flex: 1;
  text-decoration: none;
  border: none;
  border-style: none;
  padding: 8px 0px;
  background-color: transparent;
  font-size: 1.4rem;
}
.header-search__input:focus {
  border: none;
  outline: none;
}

/* Responsive */
@media (min-width: 1024px) {
  .header__nav-btn {
    display: none;
  }
}

/* Tablet and mobile */
@media (max-width: 1023px) {
  .header {
    width: calc(100% - 32px);
  }

  .header__nav-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__menu {
    display: none;
  }
}

/* Mobile */
@media (max-width: 700px) {
  .header-search {
    height: 40px;
  }

  .header-search__btn {
    width: 36px;
    height: 36px;
  }
  .header {
    gap: 12px;
  }
  .header-container {
    height: 64px;
  }
  .header {
    width: calc(100%);
    padding-left: 16px;
  }

  .header__logo-1 {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }
  .header__logo-2 {
    height: 20px;
    width: 142px;
    border-radius: 4px;
    display: none;
  }

  .header__menu {
    display: none;
  }
}
</style>
