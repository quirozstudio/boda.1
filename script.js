const albumMeta = {
  names: "NOMBRES DE LOS NOVIOS",
  date: "FECHA",
  place: "LUGAR",
};

const photoRoot = {
  main: "01_FOTOS_DSC_00896-02689/",
  groom: "02_FOTOS_DSC_06836-06890/",
  variants: "03_VARIANTES_PARA_REVISAR/",
  previews: "._album_preview_assets/",
};

const previewMap = {
  "DSC00913.jpg": "DSC00913-preview.jpg",
  "DSC00896.jpg": "DSC00896-preview.jpg",
  "DSC01068.jpg": "DSC01068-preview.jpg",
  "DSC01026.jpg": "DSC01026-preview.jpg",
  "DSC00939.jpg": "DSC00939-preview.jpg",
  "Copia de DSC01037.jpg": "Copia de DSC01037-preview.jpg",
  "DSC01080.jpg": "DSC01080-preview.jpg",
  "DSC01926.jpg": "DSC01926-preview.jpg",
  "DSC02002.jpg": "DSC02002-preview.jpg",
  "DSC02096.jpg": "DSC02096-preview.jpg",
  "DSC02356.jpg": "DSC02356-preview.jpg",
  "DSC02506.jpg": "DSC02506-preview.jpg",
  "DSC02523.jpg": "DSC02523-preview.jpg",
  "DSC02541.jpg": "DSC02541-preview.jpg",
  "DSC06868.jpg": "DSC06868-preview.jpg",
};

const sourceFolder = {
  "Copia de DSC01037.jpg": photoRoot.variants,
  "DSC06838.jpg": photoRoot.groom,
  "DSC06849.jpg": photoRoot.groom,
  "DSC06864.jpg": photoRoot.groom,
  "DSC06869.jpg": photoRoot.groom,
  "DSC06868.jpg": photoRoot.groom,
};

const originalSourceFiles = new Set();

function imageFor(filename, alt, className = "") {
  if (originalSourceFiles.has(filename)) {
    return image(sourceFolder[filename] || photoRoot.main, filename, alt, className, filename);
  }
  const preview = previewMap[filename] || filename.replace(/\.jpg$/i, "-preview.jpg");
  return image(photoRoot.previews, preview, alt, className, filename);
}

const pages = [
  {
    kind: "cover",
    label: "PORTADA",
    progress: "PORTADA",
    render: () => `
      <article class="spread cover-screen" data-spread="cover">
        <section class="cover-page" aria-label="Portada del álbum">
          <figure class="image-frame cover-image image-frame--impact">
            ${imageFor("DSC01773.jpg", "Portada del álbum — retrato de la pareja", "cover-image-element")}
          </figure>
          <div class="cover-meta">
            <p class="cover-title">${albumMeta.names}</p>
            <p>${albumMeta.date}</p>
          </div>
        </section>
      </article>
    `,
  },
  {
    range: "01—02",
    label: "APERTURA",
    progress: "01",
    type: "opening",
    render: () => `
      <article class="spread spread-opening" data-spread="01-02">
        <section class="page page--left" aria-label="Página 01 — retrato de apertura">
          <figure class="image-frame opening-portrait">
            ${imageFor("DSC00913.jpg", "Retrato de apertura de la novia", "opening-portrait-image")}
          </figure>
          <div class="opening-meta">
            <p class="opening-title">${albumMeta.names}</p>
            <span class="opening-line" aria-hidden="true"></span>
            <p>${albumMeta.date}</p>
            <p>${albumMeta.place}</p>
          </div>
        </section>
        <section class="page page--right" aria-label="Página 02 — detalle de los zapatos">
          <figure class="image-frame opening-detail">
            ${imageFor("DSC00896.jpg", "Detalle de los zapatos de la novia", "opening-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "03—04",
    label: "REVELACIÓN",
    progress: "03",
    type: "discovery",
    render: () => `
      <article class="spread spread-discovery" data-spread="03-04">
        <section class="page page--left" aria-label="Página 03 — revelación del vestido">
          <figure class="image-frame image-frame--impact discovery-hero">
            ${imageFor("DSC01068.jpg", "La novia mostrando el vestido", "discovery-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 04 — detalles de los preparativos">
          <figure class="image-frame discovery-secondary">
            ${imageFor("DSC01026.jpg", "Detalle de la novia y los pendientes", "discovery-secondary-image")}
          </figure>
          <figure class="image-frame discovery-detail">
            ${imageFor("DSC00939.jpg", "Detalle del maquillaje", "discovery-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "05—06",
    label: "EMOCIÓN",
    progress: "05",
    type: "emotion",
    render: () => `
      <article class="spread spread-emotion" data-spread="05-06">
        <section class="page page--left" aria-label="Página 05 — momento íntimo">
          <figure class="image-frame image-frame--impact emotion-hero">
            ${imageFor("Copia de DSC01037.jpg", "Momento íntimo durante los preparativos", "emotion-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 06 — contrapunto artístico">
          <figure class="image-frame emotion-counterpoint">
            ${imageFor("DSC01080.jpg", "Retrato artístico de la novia", "emotion-counterpoint-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "07—08",
    label: "PREPARATIVOS DEL NOVIO",
    progress: "07",
    type: "groom",
    phrase: "Todo lo que estaba por suceder cabía en una mañana.",
    render: () => `
      <article class="spread spread-groom" data-spread="07-08">
        <section class="page page--left" aria-label="Página 07 — preparativos del novio">
          <figure class="image-frame groom-hero image-frame--impact">
            ${imageFor("DSC06849.jpg", "Retrato principal del novio durante los preparativos", "groom-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 08 — escenas de los preparativos del novio">
          <figure class="image-frame groom-secondary">
            ${imageFor("DSC06838.jpg", "Escena de los preparativos del novio", "groom-secondary-image")}
          </figure>
          <figure class="image-frame groom-detail">
            ${imageFor("DSC06864.jpg", "Detalle de los preparativos del novio", "groom-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "09—10",
    label: "ENCUENTRO / LLEGADA",
    progress: "09",
    type: "arrival",
    phrase: "Y entonces, el día empezó a moverse.",
    render: () => `
      <article class="spread spread-arrival" data-spread="09-10">
        <section class="page page--left" aria-label="Página 09 — llegada">
          <figure class="image-frame arrival-left image-frame--impact">
            ${imageFor("DSC01267.jpg", "Llegada y movimiento hacia la ceremonia", "arrival-left-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 10 — encuentro">
          <figure class="image-frame arrival-right">
            ${imageFor("DSC01249.jpg", "Encuentro antes de la ceremonia", "arrival-right-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "11—12",
    label: "CEREMONIA",
    progress: "11",
    type: "fullImpact",
    phrase: "Frente a todos, comenzó lo esencial.",
    render: () => `
      <article class="spread spread-full-impact" data-spread="11-12">
        <figure class="image-frame full-impact-image image-frame--impact">
          ${imageFor("DSC01325.jpg", "Gran imagen de la ceremonia", "full-impact-image-element")}
        </figure>
      </article>
    `,
  },
  {
    range: "13—14",
    label: "ANILLOS Y FIRMA",
    progress: "13",
    type: "rings",
    phrase: "Las promesas también se escriben con las manos.",
    render: () => `
      <article class="spread spread-rings" data-spread="13-14">
        <section class="page page--left" aria-label="Página 13 — anillos">
          <figure class="image-frame rings-hero image-frame--impact">
            ${imageFor("DSC01348.jpg", "Anillos de los novios", "rings-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 14 — firma de la ceremonia">
          <figure class="image-frame rings-secondary">
            ${imageFor("DSC01435.jpg", "Firma durante la ceremonia", "rings-secondary-image")}
          </figure>
          <figure class="image-frame rings-detail">
            ${imageFor("DSC01396.jpg", "Detalle de la firma", "rings-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "15—16",
    label: "FINAL DE CEREMONIA",
    progress: "15",
    type: "ceremonyEnd",
    phrase: "La emoción encontró su propio silencio.",
    render: () => `
      <article class="spread spread-ceremony-end" data-spread="15-16">
        <section class="page page--left" aria-label="Página 15 — final de la ceremonia">
          <figure class="image-frame ceremony-end-hero image-frame--impact">
            ${imageFor("DSC01480.jpg", "Final de la ceremonia", "ceremony-end-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 16 — momento cercano">
          <figure class="image-frame ceremony-end-detail">
            ${imageFor("DSC01419.jpg", "Momento humano al final de la ceremonia", "ceremony-end-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "17—18",
    label: "RETRATO DE LOS NOVIOS",
    progress: "17",
    type: "portrait",
    phrase: "El tiempo se detuvo justo aquí.",
    render: () => `
      <article class="spread spread-portrait" data-spread="17-18">
        <section class="page page--left" aria-label="Página 17 — retrato principal de los novios">
          <figure class="image-frame portrait-hero image-frame--impact">
            ${imageFor("DSC01285.jpg", "Retrato principal de los novios", "portrait-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 18 — retrato secundario">
          <figure class="image-frame portrait-secondary">
            ${imageFor("DSC01528.jpg", "Retrato secundario de los novios", "portrait-secondary-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "19—20",
    label: "INTIMIDAD",
    progress: "19",
    type: "intimacy",
    phrase: "Hay gestos que dicen más que cualquier palabra.",
    render: () => `
      <article class="spread spread-intimacy" data-spread="19-20">
        <section class="page page--left" aria-label="Página 19 — intimidad">
          <figure class="image-frame intimacy-hero image-frame--impact">
            ${imageFor("DSC01537.jpg", "Momento íntimo de los novios", "intimacy-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 20 — detalle del bouquet">
          <figure class="image-frame intimacy-detail">
            ${imageFor("DSC01747.jpg", "Detalle del bouquet y las manos", "intimacy-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "21—22",
    label: "TRASLADO",
    progress: "21",
    type: "transfer",
    phrase: "Entre un lugar y otro, la historia siguió sucediendo.",
    render: () => `
      <article class="spread spread-transfer" data-spread="21-22">
        <section class="page page--left" aria-label="Página 21 — coche">
          <figure class="image-frame transfer-hero image-frame--impact">
            ${imageFor("DSC01598.jpg", "Coche durante el traslado", "transfer-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 22 — gesto y mirada">
          <figure class="image-frame transfer-secondary">
            ${imageFor("DSC01675.jpg", "Gesto durante el traslado", "transfer-secondary-image")}
          </figure>
          <figure class="image-frame transfer-detail">
            ${imageFor("DSC01686.jpg", "Mirada durante el traslado", "transfer-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "23—24",
    label: "SESIÓN EXTERIOR",
    progress: "23",
    type: "fullImpact",
    phrase: "Fuera del ruido, solo quedaban ellos.",
    render: () => `
      <article class="spread spread-full-impact exterior-impact" data-spread="23-24">
        <figure class="image-frame full-impact-image image-frame--impact">
          ${imageFor("DSC01703.jpg", "Gran retrato exterior de los novios", "exterior-impact-image")}
        </figure>
      </article>
    `,
  },
  {
    range: "25—26",
    label: "SESIÓN EMOCIONAL",
    progress: "25",
    type: "sessionEmotion",
    phrase: "La felicidad también tiene una forma de mirarse.",
    render: () => `
      <article class="spread spread-session-emotion" data-spread="25-26">
        <section class="page page--left" aria-label="Página 25 — sesión emocional">
          <figure class="image-frame session-emotion-hero image-frame--impact">
            ${imageFor("DSC01773.jpg", "Retrato emocional de los novios", "session-emotion-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 26 — intimidad">
          <figure class="image-frame session-emotion-detail">
            ${imageFor("DSC01738.jpg", "Detalle íntimo de la sesión", "session-emotion-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "27—28",
    label: "FAMILIA",
    progress: "27",
    type: "family",
    phrase: "El amor se reconoce en las personas que nos acompañan.",
    render: () => `
      <article class="spread spread-family" data-spread="27-28">
        <section class="page page--left" aria-label="Página 27 — fotografía familiar">
          <figure class="image-frame family-primary">
            ${imageFor("DSC01575.jpg", "Fotografía familiar", "family-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 28 — familia e invitados">
          <figure class="image-frame family-secondary">
            ${imageFor("DSC06869.jpg", "Familia e invitados", "family-secondary-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "29—30",
    label: "FAMILIA / INVITADOS",
    progress: "29",
    type: "familyExtended",
    phrase: "La celebración también se cuenta en los rostros que la hacen posible.",
    render: () => `
      <article class="spread spread-family-extended" data-spread="29-30">
        <section class="page page--left" aria-label="Páginas 29 y 30 — familia e invitados">
          <figure class="image-frame family-extended-primary image-frame--impact">
            ${imageFor("DSC01926.jpg", "Familia y amigos alrededor de los novios", "family-extended-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Páginas 29 y 30 — retratos familiares">
          <figure class="image-frame family-extended-secondary">
            ${imageFor("DSC02002.jpg", "Grupo de invitados junto a la novia", "family-extended-secondary-image")}
          </figure>
          <figure class="image-frame family-extended-detail">
            ${imageFor("DSC06868.jpg", "Retrato familiar de los invitados", "family-extended-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    label: "CÓCTEL",
    range: "31—32",
    progress: "31",
    type: "cocktail",
    phrase: "La alegría siempre encuentra un abrazo.",
    render: () => `
      <article class="spread spread-cocktail" data-spread="31-32">
        <section class="page page--left" aria-label="Página 29 — ambiente del cóctel">
          <figure class="image-frame cocktail-hero image-frame--impact">
            ${imageFor("DSC01919.jpg", "Ambiente social del cóctel", "cocktail-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 30 — abrazo y detalle">
          <figure class="image-frame cocktail-secondary">
            ${imageFor("DSC02046.jpg", "Abrazo durante el cóctel", "cocktail-secondary-image")}
          </figure>
          <figure class="image-frame cocktail-detail">
            ${imageFor("DSC01896.jpg", "Detalle del cóctel", "cocktail-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "33—34",
    label: "BANQUETE",
    progress: "33",
    type: "banquet",
    phrase: "La noche abrió sus puertas a la celebración.",
    render: () => `
      <article class="spread spread-banquet" data-spread="33-34">
        <section class="page page--left" aria-label="Página 31 — detalle de mesa">
          <figure class="image-frame banquet-detail">
            ${imageFor("DSC02137.jpg", "Detalle de la mesa del banquete", "banquet-detail-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 32 — espacio y celebración">
          <figure class="image-frame banquet-hero image-frame--impact">
            ${imageFor("DSC02225.jpg", "Banquete y espacio de celebración", "banquet-hero-image")}
          </figure>
          <figure class="image-frame banquet-energy">
            ${imageFor("DSC02245.jpg", "Energía de la celebración", "banquet-energy-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "35—36",
    label: "PALABRAS / BANQUETE",
    progress: "35",
    type: "speeches",
    phrase: "Algunas palabras se quedan para siempre en la memoria.",
    render: () => `
      <article class="spread spread-speeches" data-spread="35-36">
        <section class="page page--left" aria-label="Páginas 35 y 36 — palabras durante el banquete">
          <figure class="image-frame speeches-primary image-frame--impact">
            ${imageFor("DSC02096.jpg", "Palabras durante la celebración", "speeches-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Páginas 35 y 36 — detalle del banquete">
          <figure class="image-frame speeches-detail">
            ${imageFor("DSC02356.jpg", "Detalle de la mesa del banquete", "speeches-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "37—38",
    label: "RAMO / BRINDIS",
    progress: "37",
    type: "bouquet",
    phrase: "Y todo lo que quedaba por decir se brindó.",
    render: () => `
      <article class="spread spread-bouquet" data-spread="37-38">
        <section class="page page--left" aria-label="Página 33 — ramo y celebración">
          <figure class="image-frame bouquet-hero image-frame--impact">
            ${imageFor("DSC02280.jpg", "Ramo durante la celebración", "bouquet-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 34 — brindis y continuación">
          <figure class="image-frame bouquet-secondary">
            ${imageFor("DSC02329.jpg", "Brindis de los invitados", "bouquet-secondary-image")}
          </figure>
          <figure class="image-frame bouquet-detail">
            ${imageFor("DSC02457.jpg", "Continuación de la celebración", "bouquet-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "39—40",
    label: "PRIMER BAILE",
    progress: "39",
    type: "firstDance",
    phrase: "Por un instante, todo el mundo bailó a su alrededor.",
    render: () => `
      <article class="spread spread-first-dance" data-spread="39-40">
        <section class="page page--left" aria-label="Páginas 39 y 40 — primer baile">
          <figure class="image-frame first-dance-primary image-frame--impact">
            ${imageFor("DSC02523.jpg", "Primer baile de los novios", "first-dance-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Páginas 39 y 40 — fiesta y movimiento">
          <figure class="image-frame first-dance-secondary">
            ${imageFor("DSC02541.jpg", "Momento cercano durante el baile", "first-dance-secondary-image")}
          </figure>
          <figure class="image-frame first-dance-detail">
            ${imageFor("DSC02506.jpg", "Movimiento de la fiesta", "first-dance-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "41—42",
    label: "PRIMER BAILE / FIESTA",
    progress: "41",
    type: "finale",
    phrase: "Que nunca falte una razón para volver a bailar.",
    render: () => `
      <article class="spread spread-finale" data-spread="41-42">
        <section class="page page--left" aria-label="Página 35 — primer baile y cercanía">
          <figure class="image-frame finale-intro image-frame--impact">
            ${imageFor("DSC02481.jpg", "Primer baile", "finale-intro-image")}
          </figure>
          <figure class="image-frame finale-close">
            ${imageFor("DSC02538.jpg", "Momento cercano durante el baile", "finale-close-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 36 — fiesta y cierre">
          <figure class="image-frame finale-last image-frame--impact">
            ${imageFor("DSC02631.jpg", "Fiesta y cierre del álbum", "finale-last-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    kind: "closing",
    label: "CIERRE",
    progress: "CIERRE",
    render: () => `
      <article class="spread closing-screen" data-spread="closing">
        <section class="closing-page" aria-label="Cierre digital del álbum">
          <p class="closing-names">${albumMeta.names}</p>
          <p>${albumMeta.date}</p>
        </section>
      </article>
    `,
  },
];

const spreadMount = document.querySelector("#spreadMount");
const readerStatus = document.querySelector("#readerStatus");
const progressCurrent = document.querySelector("#progressCurrent");
const progressTotal = document.querySelector("#progressTotal");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const previousHotspot = document.querySelector("#previousHotspot");
const nextHotspot = document.querySelector("#nextHotspot");

const referenceMode = new URLSearchParams(window.location.search).has("reference");
document.body.classList.toggle("reference-album", referenceMode);

let currentSpread = 0;

function image(folder, filename, alt, className = "", sourceName = filename) {
  const src = `${folder}${encodeURIComponent(filename).replace(/%2F/g, "/")}`;
  return `<img class="${className}" src="${src}" data-source="${sourceName}" alt="${alt}" decoding="sync" />`;
}

function renderSpread(index, direction = 1) {
  const selected = pages[index];
  if (!selected) return;

  spreadMount.innerHTML = selected.render();
  readerStatus.textContent = selected.label;
  progressCurrent.textContent = selected.progress;
  progressTotal.textContent = "42";
  previousButton.disabled = index === 0;
  nextButton.disabled = index === pages.length - 1;

  const spread = spreadMount.querySelector(".spread");
  if (selected.phrase) {
    const phrase = document.createElement("p");
    phrase.className = "spread-phrase";
    phrase.textContent = selected.phrase;
    spread.appendChild(phrase);
  }
  spread.style.transform = `translateY(${direction > 0 ? "0.75rem" : "-0.75rem"})`;
  requestAnimationFrame(() => requestAnimationFrame(() => spread.classList.add("is-visible")));
}

function moveSpread(direction) {
  const nextIndex = Math.max(0, Math.min(pages.length - 1, currentSpread + direction));
  if (nextIndex === currentSpread) return;
  currentSpread = nextIndex;
  renderSpread(currentSpread, direction);
}

previousButton.addEventListener("click", () => moveSpread(-1));
nextButton.addEventListener("click", () => moveSpread(1));
previousHotspot.addEventListener("click", () => moveSpread(-1));
nextHotspot.addEventListener("click", () => moveSpread(1));

let controlsTimer;

function revealControls() {
  document.body.classList.add("is-ui-visible");
  window.clearTimeout(controlsTimer);
  controlsTimer = window.setTimeout(() => document.body.classList.remove("is-ui-visible"), 1800);
}

window.addEventListener("keydown", (event) => {
  revealControls();
  if (event.key === "ArrowLeft") moveSpread(-1);
  if (event.key === "ArrowRight" || event.key === " ") moveSpread(1);
});

let touchStartX = 0;
window.addEventListener("mousemove", revealControls, { passive: true });
window.addEventListener("touchstart", (event) => {
  revealControls();
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

window.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) < 45) return;
  moveSpread(distance < 0 ? 1 : -1);
}, { passive: true });

renderSpread(currentSpread);
