<template>
  <footer
    class="p-4 bg-red-500 text-white mt-32 md:p-8 lg:p-10 dark:bg-gray-800 relative"
  >
    <div class="footer mx-auto max-w-screen-xl text-center">
      <div>
        <p class="my-6 text-md">
          <span class="text-lg">Unternehmensgruppe Branner</span><br />
          <a
            class="hover:underline"
            href="https://www.google.com/maps/place/Branner+GmbH/@47.308887,9.6224894,17z/data=!3m2!4b1!5s0x479b3efcaaa4017b:0xdbf2444c70fe87a0!4m5!3m4!1s0x479b3e92c77687bf:0x9f8fc5e010ebf4c2!8m2!3d47.308887!4d9.6246781"
            rel="nofollow"
            title="Google Maps"
            target="_blank"
          >
            Treietstraße 2 • 6833 Klaus • Österreich
          </a>
        </p>
        <ul
          class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
        >
          <li>
            <nuxt-link to="/karriere" class="mr-4 text-white hover:underline md:mr-6"
              >Karriere</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/lehre" class="mr-4 text-white hover:underline md:mr-6"
              >Lehre</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/neuigkeiten" class="mr-4 text-white hover:underline md:mr-6"
              >Neuigkeiten</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/impressum" class="mr-4 text-white hover:underline md:mr-6"
              >Impressum</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/datenschutz" class="mr-4 text-white hover:underline md:mr-6"
              >Datenschutz</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.footer::before {
  border-right: 100vw solid #D6242B;
  border-top: 100px solid rgb(243, 244, 246);
  content: "";
  display: block;
  left: 0;
  position: absolute;
  top: -60px;
}
</style>
