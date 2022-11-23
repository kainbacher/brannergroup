<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nuxt-link to="/" title="Startseite - Branner Gruppe" class="flex title-font font-bold items-center mb-4 md:mb-0">
        <Logo />
      </nuxt-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link to="/karriere" title="Karriere" class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
          Karriere
        </nuxt-link>
        <nuxt-link to="/lehre" title="Lehre" class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
          Lehre
        </nuxt-link>
        <nuxt-link to="/neuigkeiten" title="Neuigkeiten" class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
          >Neuigkeiten</nuxt-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    mailto(email) {
      window.location.href = 'mailto:' + email + '@branner.at';
    }
  },
};
</script>

<style scoped>
nav a.nuxt-link-active {
  @apply bg-red-600;
}
</style>
