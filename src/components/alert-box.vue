<template>
  <transition name="alert-fade">
    <div class="sb-alert_wrapper">
      <div class="sb-alert">
        <div class="sb-alert_header">
          <div class="sb-alert_title">
            {{title}}
          </div>
          <i class="sb-alert_close"></i>
        </div>
        <div class="sb-alert_content">
          <div class="sb-alert_status"></div>
          <div class="ab-alert_message">
            <slot><p>{{message}}</p></slot>
          </div>
          <div class="sb-alert_input">
            <div class="sb-alert_errmsg">
              {{editErrMsg}}
            </div>
          </div>
        </div>
        <div class="sb-alert_btns">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped></style>
<script>
  export default{
    data(){
      return {}
    },
    props:{

    }
  }
</script>
