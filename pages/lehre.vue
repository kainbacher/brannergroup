<template>
  <main>
    <section
      class="text-gray-600 body-font overflow-hidden pt-24 max-w-6xl ml-auto mr-auto"
    >
      <div class="container px-5 mb-16 border-b-b p4-4 pb-8 md:w-3/5 mx-auto">
        <div class="mb-24">
          <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-4">
            Lehre mit Zukunft
          </h1>
          <p class="mb-8">
            Wir bilden in der gesamten Branner Unternehmensgruppe derzeit sieben Lehrlinge
            in vier verschiedenen Lehrberufen aus. Eine Lehrausbildung bei uns sichert dir
            eine fundierte Ausbildung und einen guten Start in dein Berufsleben. Frag bei
            Interesse einfach genauer beim jeweiligen Standort nach & vereinbare gleich
            einen Schnuppertermin.
          </p>
          <a
            href="mailto:dispo@branner.at"
            class="mr-5 bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 inline-flex items-center"
          >
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Schnuppertermin vereinbaren
          </a>
        </div>
        <h2 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-8">
          Fitness, Wellness und Physiotherapie<br />
          <span class="text-gray-500">Rankweil oder Feldkirch</span>
        </h2>
        <apprenticeship-card
          class="mb-8"
          title="Fitnessbetreuer/in"
          text="Fitness ist deine Leidenschaft, du bist aufgeschlossen und interessierst dich für Gesundheit? Dann mach doch einfach deine Leidenschaft zu deinem Traumberuf und absolviere eine 3-jährige Lehrausbildung als Fitnessbetreuer/in bei uns. Dabei lernst du unteranderem wie du Fitnesskonzepte erstellst, unterstützt unsere Kunden bei ihren Zielen und lernst alle Abläufe in unseren Studios kennen."
          duration="3"
          school="Feldkirch"
        />
        <h2 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-8">
          Mobility<br />
          <span class="text-gray-500">Klaus</span>
        </h2>
        <apprenticeship-card
          class="mb-8"
          title="Lackiertechniker/in"
          text="Als Lackiertechinker/in behandelst du unterschiedlichste Materialien. Dabei lernst du bei uns verschiedenste Arbeitstechniken wie Grundieren, Streichen, Lackieren und Polieren von Grund auf. Du hast technisches Verständnis und bis motiviert mitanzupacken? Dann ist die Ausbildung zum Lackiertechniker/in bei uns vielleicht genau das richtige für dich!"
          duration="3"
          school="Dornbirn 1"
        />
        <apprenticeship-card
          class="mb-8"
          title="Kfz-Techniker/in"
          text="Damit andere sicher durch die Straßen fahren arbeitest du als KFZ-Techniker/in an wichtigen Wartungs- und Reparaturarbeiten. Wenn du dich fürs Schrauben, Technik und Autos begeisterst ist die 3,5-jährige Lehrausbildung zum KFZ-Techniker/in wie geschaffen für dich. Bei uns arbeitest du an mechanischen, elektrischen und elektronischen Bauteilen und lernst somit schnell die Abläufe in unserer Werkstatt kennen. "
          duration="3,5"
          school="Bludenz"
        />
        <apprenticeship-card
          class="mb-8"
          title="Bürokaufmann/frau"
          text="Organisation und Verwaltung begeistern dich? Du arbeitest gerne am Computer und bist offen für neues? Als Bürokaufmann/frau in unserem Autohaus arbeitest du eng in unserem Team zusammen und bist Kontakt zwischen Kunden und Werkstätte. Dabei lernst du die Basis für allgemeine Bürotätigkeiten mit Kundenkontakten, erstellst Werkstattaufträge und lernst mehr über die interne und externe Rechnungslegung. "
          duration="3"
          school="Feldkirch"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>
