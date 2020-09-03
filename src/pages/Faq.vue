<template>
  <div class="mx-4 md:ml-24 md:mr-40 pt-24 pb-12">
    <Logo classes="my-8" />
    <TabNavigation :page="page" />
    <SearchForm />
    <div class="p-10 lg:p-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg">
      <!-- <router-view></router-view> -->
      <div class="py-6 md:py-10 px-0 md:px-12">
        <FaqItem
          v-for="(faq, index) in faqs"
          :pregunta="faq.pregunta"
          :respuesta="faq.respuesta"
          :id="index"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/ui/Logo.vue";
import TabNavigation from "@/components/faq/TabNavigation.vue";
import SearchForm from "@/components/faq/SearchForm.vue";
import FaqItem from "@/components/faq/FaqItem.vue";
export default {
  components: {
    Logo,
    TabNavigation,
    SearchForm,
    FaqItem,
  },
  data() {
    return {
      page: "faq",
      faqs: [
        {
          pregunta:
            "¿Qué hacer cuando agoto mis intentos para rendir la evaluación?",
          respuesta:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!",
        },
        {
          pregunta: "¿Porque no puedo puedo abrir una evaluación?",
          respuesta:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!",
        },
        {
          pregunta: "¿Porque no puedo puedo abrir una evaluación?",
          respuesta:
            "Verifica si es necesario realizar primero la encuesta. Caso contrario comunícate con soporte a soporte@lamediadl.com",
        },
        {
          pregunta:
            "¿Qué hacer cuando agoto mis intentos para rendir la evaluación?",
          respuesta:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!",
        },
        {
          pregunta: "¿Porque no puedo puedo abrir una evaluación?",
          respuesta:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit perferendis fugiat neque, necessitatibus odio possimus non obcaecati corporis eaque ducimus nihil culpa porro facilis autem tenetur voluptas et ad!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>