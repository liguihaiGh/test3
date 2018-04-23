import Vue from "vue";
import VeeValidate from "vee-validate";
import VueI18n from "vue-i18n";
import  { Validator } from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh_CN"
});
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: "validation",
  dictionary: {
    zh_CN
  }
});
/*自定义方法*/
Validator.extend("mobile", {
  getMessage: field => "手机格式不正确",
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
});

// 自定义validate
const Dictionary = {
  zh_CN: {
    messages: {
       required: (field) => field + '不能为空'
    },
    attributes: {
      mobile:'电话号码',
      passWd:'密码'
    }
  }
};
// 自定义validate error 信息
Validator.localize(Dictionary);
