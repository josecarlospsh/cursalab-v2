<template>
  <div class="mx-4 md:ml-24 md:mr-40 pt-24 pb-12">
    <Logo classes="my-8" />
    <TabNavigation :page="page" />
    <div class="p-10 lg:p-12 w-full lg:max-w-full bg-white rounded-t-xxl rounded-b-xxl shadow-lg">
      <!-- <router-view></router-view> -->
      <div class="py-6 md:py-10 px-0 md:px-12">
        <AyudaForm />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/ui/Logo.vue";
import TabNavigation from "@/components/faq/TabNavigation.vue";
import AyudaForm from "@/components/faq/AyudaForm.vue";
export default {
  components: {
    Logo,
    TabNavigation,
    AyudaForm,
  },
  data() {
    return {
      page: "ayuda",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>