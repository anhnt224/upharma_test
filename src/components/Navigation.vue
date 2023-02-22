<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transition name="nav-fade">
    <div v-if="showNav" class="nav__bg"></div>
  </transition>
  <transition name="slide">
    <div v-if="showNav" class="nav">
      <button class="nav__close-btn" @click="handleCloseButtonTap">
        <font-awesome-icon icon="xmark" size="2x" style="color: white" />
      </button>

      <div class="nav-header">
        <img src="" alt="" class="nav-header__img" />
        <div class="nav-header__content">
          <div class="nav-header__title-1">Nhà thuốc</div>
          <div class="nav-header__title-2">Upharma</div>
        </div>
      </div>

      <div class="nav-content">
        <div class="history">
          <div class="history__icon"></div>
          <div class="history__title">Tra cứu lịch sử mua hàng</div>
        </div>

        <div class="nav__group">Danh mục sản phẩm</div>

        <div class="nav__menu">
          <div
            class="menu-item"
            v-for="productType in productTypes"
            :key="productType.id"
          >
            <div class="menu-item__icon items-center">
              <font-awesome-icon
                :icon="productType.icon"
                size="3x"
                style="color: gray"
              />
            </div>
            <div class="menu-item__title">{{ productType.title }}</div>
          </div>
        </div>
        <div class="nav__group">Thông tin</div>
      </div>

      <div class="nav-footer">
        <div class="nav-footer__title">Liên hệ chúng tôi</div>
        <div class="nav-footer__content">
          <div class="hotline">
            <div class="hotline__title">Gọi tổng đài</div>
            <div class="hotline__content">0866.681.899</div>
          </div>
          <div class="social">
            <div
              v-for="contact in contacts"
              :key="contact.id"
              class="social__item"
            >
              <img class="social__img" :src="contact.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showNav: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["onCloseNav"],
  methods: {
    handleCloseButtonTap() {
      this.$emit("onCloseNav");
    },
  },
  data() {
    return {
      productTypes: [
        {
          id: "1",
          icon: "prescription-bottle-medical",
          title: "Thực phẩm chức năng",
        },
        {
          id: "2",
          icon: "prescription-bottle-medical",
          title: "Dược mĩ phẩm",
        },
        {
          id: "3",
          icon: "shield",
          title: "Chăm sóc cá nhân",
        },
        {
          id: "4",
          icon: "capsules",
          title: "Thuốc",
        },
        {
          id: "5",
          icon: "robot",
          title: "Thiết bị y tế",
        },
      ],
      contacts: [
        {
          id: "zalo",
          link: "",
          img: "https://play-lh.googleusercontent.com/Zs0-SVFd7FHABCT6buDhAVmOZHlIJS8Z37LMmWghcJV9N4ryZfpI0dZa0jzejcJ3cQ",
        },
        {
          id: "zalo2",
          link: "",
          img: "https://play-lh.googleusercontent.com/Zs0-SVFd7FHABCT6buDhAVmOZHlIJS8Z37LMmWghcJV9N4ryZfpI0dZa0jzejcJ3cQ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme/colors.scss";
$animation-duration: 0.5s;
.nav__bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
}
.nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  // background-image: linear-gradient($primary-light, $primary-dark);
  background-color: white;
}

// nav close-button
.nav__close-btn {
  width: 40px;
  height: 40px;
  background-color: transparent;
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
  border-radius: 40px;
  z-index: 1000;
}

.nav__close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

//nav-header
.nav-header {
  width: 100%;
  height: 80px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  background-image: linear-gradient($primary-light, $primary-dark);
}

.nav-header__img {
  width: 50px;
  height: 50px;
  margin-right: 8px;
}
.nav-header__title-1 {
  color: $white400;
  font-size: 1.6rem;
}

.nav-header__title-2 {
  color: $white;
  margin-top: 4px;
  font-size: 2.4rem;
}

// nav content
.nav-content {
  flex: 1;
  overflow-y: auto;
}

// history
.history {
  height: 44px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  gap: 8px;
}

.history__icon {
  width: 24px;
  height: 24px;
  background-color: lightblue;
}

.history__title {
  color: $content-color;
  font-size: 1.4rem;
}

// group title
.nav__group {
  font-size: 1.4rem;
  margin-top: 8px;
  margin-left: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

// nav-menu
.menu-item {
  display: flex;
  padding: 10px 4px;
  margin: 0px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
}

.menu-item:active {
  background-color: $primary-bg;
}

.menu-item .menu-item__icon {
  width: 24px;
  height: 24px;
}

.menu-item__title {
  font-size: 1.4rem;
  color: $content-color;
}

//nav-footer
.nav-footer {
  height: 100px;
  width: 100%;
  background-color: $primary-bg;
}

.nav-footer__title {
  font-size: 1.8rem;
  margin: 16px;
}

.nav-footer__content {
  display: flex;
  align-items: center;
}

.hotline {
  flex: 1;
  color: $title-color;
  margin-left: 16px;
}
.hotline__title {
  font-size: 1.2rem;
  color: $content-color;
}
.hotline__content {
  color: $title-color;
  margin-top: 4px;
  font-size: 1.8rem;
  font-weight: 600;
}

.social {
  gap: 8px;
  flex: 1;
  display: flex;
  align-items: center;
}

.social__item {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
}

.social__img {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

// animation
.slide-enter-active {
  animation: slideIn $animation-duration ease-out forwards;
}

.slide-leave-active {
  animation: slideOut $animation-duration ease-out forwards;
}

.nav-fade-enter-active {
  animation: fadeIn $animation-duration;
}

.nav-fade-leave-active {
  animation: fadeOut $animation-duration;
}

@keyframes slideIn {
  from {
    display: block;
    right: -100%;
  }

  to {
    right: 0;
  }
}

@keyframes slideOut {
  from {
    right: 0;
  }
  to {
    right: -100%;
    display: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
