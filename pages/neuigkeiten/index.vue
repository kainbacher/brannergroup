<template>
  <main>
    <section
      v-if="posts"
      class="text-gray-600 body-font overflow-hidden pt-24 max-w-6xl ml-auto mr-auto"
    >
      <div class="container px-5 mb-16 border-b-b p4-4 pb-8 md:w-3/5 mx-auto">
        <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-8">
          Neuigkeiten
        </h1>
        <news-list post-type="blog" :amount="10" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: "Neuigkeiten | Branner Gruppe GmbH",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Neuigkeiten aus der Branner Gruppe GmbH - Mobility, Fitness, Erdenwerk, Entsorgung, OberflĂ¤chenbehandlung",
      },
    ],
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").where({ visible: true }).fetch();
    } catch (e) {
      error({ message: "Keine Neuigkeiten vorhanden" });
    }
    return { posts };
  },
};
</script>
