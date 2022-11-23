<template>
  <main>
    <section class="text-gray-600 body-font py-24" v-if="post">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="md:w-3/5 mx-auto">
          <nuxt-link
            to="/neuigkeiten"
            title="Zurück zur Übersicht"
            class="
            inline-flex items-center bg-gray-100 text-gray-500 border py-1 px-3 rounded text-base mb-8
            focus:outline-none
            hover:bg-white"
          >
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Neuigkeiten
          </nuxt-link>
          <article class="my-8">
            <div class="flex flex-col md:flex-row justify-between items-baseline mb-4">
              <h5
                v-if="post.createdAt"
                class="inline-block py-1 bg-gray text-gray-400 text-sm font-medium rounded-sm whitespace-no-wrap"
              >
                {{ post.createdAt | formateDate }}
              </h5>
              <div>
                <span
                  v-if="post.section"
                  class="inline-block py-1 px-2 rounded bg-red-100 text-red-500 text-xs font-medium tracking-widest"
                >
                  {{ post.section }}</span
                >
              </div>
            </div>
            <h1 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ post.title }}
            </h1>
            <p class="mt-1 mb-8">
              {{ post.description }}
            </p>
            <nuxt-content :document="post" />
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    console.log(params);
    try {
      post = await $content("blog/" + params.neuigkeiten)
        .where({ visible: true })
        .fetch();
      console.log(post);
    } catch (e) {
      error({ message: "Neuigkeit nicht gefunden" });
    }
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
  },
};
</script>
