<template>
  <main>
    <section
      v-if="jobs"
      class="text-gray-600 body-font overflow-hidden pt-24 max-w-6xl ml-auto mr-auto"
    >
      <div class="container px-5 mb-16 border-b-b p4-4 pb-8 md:w-3/5 mx-auto">
        <div class="mb-8 flex flex-row justify-between items-center">
          <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-2">
            Stellenausscrhreibungen<br />
            <span class="text-gray-500">Wir suchen dich!</span>
          </h1>
          <div>
            <a
              href="mailto:info@branner.at"
              title="Initiativbewerbung per E-Mail"
              class="bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
            >
              Initiativbewerbung
            </a>
          </div>
        </div>
        <jobs-list :amount="10" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: "Karrriere | Branner Gruppe GmbH",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Wir suchen dich! Wir sind ein dynamisches Unternehmen mit einem breiten Spektrum an Dienstleistungen. Wir suchen Mitarbeiter, die mit uns gemeinsam an der Zukunft unserer Branche arbeiten wollen.",
      },
    ],
  },
  async asyncData({ $content, error }) {
    let jobs;
    try {
      jobs = await $content("jobs").fetch();
    } catch (e) {
      error({ message: "Keine Jobs gefunden" });
    }
    return { jobs };
  },
};
</script>
