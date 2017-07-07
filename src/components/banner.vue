<template>
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide><img src="./static/images3/banner2.png"></swiper-slide>
    <swiper-slide><img src="./static/images3/banner.png"></swiper-slide>
    <swiper-slide><img src="./static/images3/banner2.png"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    </div>
  </swiper>
</template>

<style lang="scss" scoped>
  img{
    width:100%;
  }
</style>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction : 'horizontal',
          setWrapperSize :true,
          autoHeight: false,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
