<template>
  <main>
    <section class="flex flex-col items-center z-10 relative">
      <div
        class="max-w-xl flex flex-col items-center text-center pt-8 pb-8 lg:pt-6 lg:pb-4 xl:pt-16 xl:pb-8"
      >
        <h1
          class="text-gray-800 text-3xl lg:text-4xl xl:text-6xl font-extrabold mb-8 md:mb-12 uppercase"
        >
          Entdecken Sie unsere Vielfalt
        </h1>
      </div>
    </section>
    <contact-list />
    <news-latest :posts="posts" v-if="posts" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").where({ visible: true }).limit(2).fetch();
    } catch (e) {
      error({ message: "Keine Neuigkeiten vorhanden." });
    }
    return { posts };
  },
};
</script>
