<template>
  <div>
  <h1>{{i18n.t("message.welcome")}}</h1>

  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>

  <p-input-text v-model="text" />
  <p-button icon="pi pi-user" @click="greet" />{{i18n.t("message.greet")}}
  <p-toast />
  {{text}}
  
  </div>
</template>

<script >
import { defineComponent, ref } from "vue";
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n'

export default defineComponent ({
  setup(){
    const toast = useToast();
    const text = ref('');
    const i18n = useI18n();
    const greet = () => {
      toast.add({severity: 'info', summary: i18n.t("message.hello"), detail: text});
    }
    return {
      text,
      greet,
      i18n
    }
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
