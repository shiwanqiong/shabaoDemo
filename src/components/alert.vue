<template>
  <transition name="alert-fade">
    <div class="alert" :class="[typeClass]" v-show="visible">
      <i class="alert_icon" :class="[iconClass,isBigIcon]" v-if="showIcon"></i>
      <div class="alert_content">
        <span class="alert_title" :class="[isBoldTitle]" v-if="title">{{title}}</span>
        <slot>
          <p class="alert_description" v-if="description">{{description}}</p>
        </slot>
        <i class="alert_close" :class="{'is-customed':closeText!=='','icon-close':closeText===''}" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
  .alert{
    line-height:0.9rem;
    font-size: 0.28rem;
    color:#ffffff;
  }
  .alert--success{
    background-color:green;
  }
</style>
<script>
    const TYPE_CLASS_MAP={
      'success':'icon-circle-check',
      'warninig':'icon-warning',
      'error':'icon-circle-cros'
    };
    export default{
        name:'sbAlert',
        data(){
            return {
              visible:false
            }
        },
        props:{
          type:{
            type:String,
            default:'info'
          },
          title:{
            type:String,
            default:'',
            require:true
          },
          description:{
            type:String,
            default:''
          },
          closable:{
            type:Boolean,
            default:true
          },
          closeText:{
            type:String,
            default:''
          },
          showIcon:{
            type:Boolean,
            default:false
          }
         },
        methods:{
          close(){
            this.visible=false;
            this.$emit('close');//触发自定义事件
          }
        },
        computed:{
          typeClass(){
            return `alert--${this.type}`;
          },
          iconClass(){
            return TYPE_CLASS_MAP[this.type]||'icon-information';
          },
          isBigIcon(){
            return this.description?'is-big':'';
          },
          isBoldTitle(){
            return this.description?'is-bold':'';
          }
        }
    }
</script>
