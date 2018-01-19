//chip-empty-born 加载+ 会有震颤的效果
//chip-empty 是 + 效果
//chip-focuc 是输入框效果（完成后的）
//无以上三者的效果输入正常的状态
Vue.component('ms-chip',{
    template:'<div :class="classObject" @click="focusIn($event)">' +
    '<div class="chipLabel">{{ip_value}}</div>' +
    '<input class="chipInput" :placeholder="placeholdervalue" v-model="ip_value">' +
    '<div class="chipXbutton"></div></div>',
    props: ['phvalue'],
    data:function(){
        return {
            classObject: {
                'chip':true,
                'chip-focuc': true,
                'chip-empty': true,
                'chip-empty-born':true
            },
            ip_value:'',
            placeholdervalue:this.phvalue
        }
    },
    methods:{
        focusIn:function(event){
            var $el = this.$el;
            $el.className = "";
            $el.className = "chip chip-focus";
            $el.getElementsByTagName('input')[0].focus();
            this.containerClicked(event.target);
        },
        focusOut:function(){
            this.$el.className = "";
            this.$el.className = "chip";
            this.placeholdervalue = this.ip_value
        },
        containerClicked:function(target){
            var _t = this;
            var clickedHandler = function(e){
                if(e.target==_t.$el.parentNode){
                    _t.focusOut()
                }
//                        document.removeEventListener('click',clickedHandler,false);
            }
            document.addEventListener('click',clickedHandler,false);
        }
    }
})