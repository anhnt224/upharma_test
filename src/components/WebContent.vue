<template>
  <div class="container" style="margin-top: 32px">
    <div class="row">
      <div class="col-1 col-md-2 col-lg-3 d-none d-lg-block" id="nav">
        <button id="nav-button" @click="scrollTo" :style="navStyle">
          Scroll
        </button>
      </div>
      <div class="col-11 col-md-10 col-lg-9" id="content">
        <h1 data-v-669ee492="" class="color-green-light font-size-h1">
          THƯƠNG HIỆU UPHARMA
        </h1>
        <img
          data-v-669ee492=""
          src="https://upharma.vn/img/image-introduction-upharma.7a1392e1.png"
          alt="iamge-introduction"
          class="mt-30"
          style="width: 100%; object-fit: contain"
        />
        <div data-v-669ee492="">
          <h3 data-v-669ee492="">Nền tảng &amp; Giá trị cốt lõi</h3>
          <p data-v-669ee492="">
            Tầm nhìn: Với định hướng: Phát triển các hệ thống chuỗi bán lẻ trên
            toàn quốc, Công ty luôn lấy sứ mệnh
            <span data-v-669ee492="" style="font-weight: 600"
              >“Pharma for you – Tư vấn chuyên sâu, chất lượng hàng đầu"</span
            >
            làm kim chỉ nam cho mọi hoạt động kinh doanh.
          </p>
        </div>
        <div id="product">
          <h3>Sản phẩm:</h3>
          <p>
            Upharma luôn cam kết, đảm bảo đưa sản phẩm trực tiếp từ nhà sản xuất
            đến tay người dùng và kiểm soát được chất lượng để đáp ứng được nhu
            cầu ngày càng cao của khách hàng. Tất cả các sản phẩm hàng hóa tại
            Upharma đều có nguồn gốc xuất xứ rõ ràng, chất lượng, đa dạng chủng
            loại với giá hợp lý. Chính vì vậy khách hàng hoàn toàn có thể an tâm
            và tin tưởng khi lựa chọn sử dụng sản phẩm tại Upharma.
          </p>
        </div>
        <div>
          <h3>Tiện lợi:</h3>
          <p>
            Upharma luôn đạt mức tăng trưởng cao hàng năm, Hệ thống nhà thuốc
            đang phủ sóng trên nhiều tỉnh thành Việt Nam. Trong đó, tại 3 tỉnh
            thành phố lớn nhất cả nước là Hà Nội, Đà Nẵng và Hồ Chí Minh có số
            lượng Nhà thuốc nhiều nhất. Trong tương lai, Upharma có kế hoạch sẽ
            phủ sóng thêm nhiều tỉnh thành như Thái Nguyên, Bắc Ninh, Hải Phòng,
            Quảng Nam với cam kết mang đến sự tiện lợi trong mua sắm, đảm bảo
            mang sức khỏe và niềm an tâm tới tận tay người tiêu dùng; sản phẩm
            nhập khẩu chính hãng, chất lượng, giá hợp lý và đa dạng chủng loại.
            Vì vậy, khách hàng có thể hoàn toàn yên tâm và cảm thấy được bảo đảm
            về sức khỏe khi đến với chúng tôi.
          </p>
        </div>
        <div>
          <h3>Công nghệ:</h3>
          <p>
            Upharma được xây dựng dựa trên nền tảng công nghệ thông tin hiện đại
            4.0. Công ty đầu tư hệ thống phần mềm quản lý, kiểm soát mọi hoạt
            động kinh doanh, từ điều hành, phân phối sản phẩm đến bán hàng, tối
            ưu hóa quy trình hoạt động mang lại trải nghiệm tuyệt vời và tiện
            lợi nhanh chóng nhất.
          </p>
        </div>
        <div id="element">
          <h3>Nhân sự:</h3>
          <p>
            Đội ngũ nhân viên giàu kinh nghiệm, tâm huyết, tư vấn tận tình luôn
            được đào tạo và cập nhật kiến thức chuyên môn liên tục. Bên cạnh đó,
            đời sống tinh thần của nhân viên cũng được quan tâm, chăm sóc cùng
            những chính sách đãi ngộ, nâng cao tinh thần làm việc và truyền cảm
            hứng để nhân viên cống hiến và mang lại những giá trị cho bản thân
            và cộng đồng.
          </p>
        </div>
        <div>
          <h3>Upharma qua các cột mốc...</h3>
          <p>
            Ngày ra đời nhà thuốc Upharma đầu tiên và chính thức đi vào hoạt
            động: 04/11/2020 theo giấy phép đủ điều kiện kinh doanh dược số
            03-7867/DDKKDDD-HNO
          </p>
        </div>
        <div>
          <h3>... và những con số ấn tượng:</h3>
          <p>
            42: con số mà các nhà thuốc Upharma đang hoạt động tính trên toàn cả
            nước <br />
            100: là tổng số nhà thuốc Upharma dự kiến hoạt động được tính đến
            cuối năm 2022
          </p>
        </div>
        <div>
          <h3>Thông tin Công ty Cổ phần Upharma</h3>
          <p>
            ĐKKD số: 0109313177 <br />
            Địa chỉ trụ sở chính: Cụm công nghiệp Hà Bình Phương, Xã Văn Bình,
            Huyện Thường Tín, TP Hà Nội <br />
            Điện thoại: 0866.681.899 <br />
            Email: phapcheupharma@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    var content = document.getElementById("content");
    var nav = document.getElementById("nav");
    console.log(content.offsetHeight, nav.offsetTop);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      contentY: 0,
    };
  },
  computed: {
    navStyle() {
      if (this.contentY > 600) {
        return {
          position: "absolute",
          bottom: "16px",
          "background-color": "blue",
        };
      } else if (this.contentY > 120 - 16) {
        return { position: "fixed", top: "16px" };
      } else {
        return {};
      }
    },
  },
  methods: {
    handleScroll() {
      this.contentY = window.scrollY;
      //   var content = document.getElementById("content");
      // var container = document.getElementById("content");
      console.log(window.innerHeight);
      // console.log(
      //   window.scrollY,
      //   container.clientTop,
      //   container.offsetHeight,
      //   container.parentElement.offsetTop
      // );
    },
    scrollTo() {
      var container = document.getElementById("product");
      var top = container.offsetTop;
      console.log("scroll to ", top);
      window.scrollTo(0, top);
    },
  },
};
</script>

<style lang="scss" scoped>
.container__1 {
  background-color: green;
  height: 100px;
}

.container__2 {
  background-color: blue;
  height: 100px;
}
</style>
