const albumData = window.WEDDING_ALBUM_DATA;

if (!albumData) {
  throw new Error("No se pudo cargar la información del álbum.");
}

const albumMeta = albumData.meta;
const interiorPageTotal = String(albumData.interiorPages);

function pathToUrl(path) {
  const assetBase = document.documentElement.dataset.assetBase ?? "";
  return `${assetBase}${path.split("/").map(encodeURIComponent).join("/")}`;
}

function imageFor(filename, alt, className = "") {
  const photo = albumData.photos[filename];
  if (!photo) throw new Error(`Fotografía no registrada en album-data.js: ${filename}`);

  return `<img class="${className}" src="${pathToUrl(photo.preview)}" data-filename="${filename}" data-source="${photo.original}" alt="${alt}" loading="eager" decoding="async" />`;
}

const pageTemplates = [
  {
    kind: "cover",
    label: "PORTADA",
    progress: "PORTADA",
    render: () => `
      <article class="spread cover-screen" data-spread="cover">
        <section class="cover-page" aria-label="Portada del álbum">
          <figure class="image-frame cover-image">
            ${imageFor("DSC01773.jpg", "Portada del álbum — abrazo de la pareja con el ramo", "cover-image-element")}
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
    render: () => `
      <article class="spread spread-opening" data-spread="01-02">
        <section class="page page--left" aria-label="Página 01 — retrato de apertura">
          <figure class="image-frame opening-portrait">
            ${imageFor("DSC00913.jpg", "Retrato de apertura de la novia en el espejo", "opening-portrait-image")}
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
    render: () => `
      <article class="spread spread-discovery" data-spread="03-04">
        <section class="page page--left" aria-label="Página 03 — revelación del vestido">
          <figure class="image-frame discovery-hero">
            ${imageFor("DSC01068.jpg", "La novia mostrando la silueta del vestido", "discovery-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 04 — detalles de los preparativos">
          <figure class="image-frame discovery-secondary">
            ${imageFor("DSC01026.jpg", "Retrato de la novia con sus pendientes", "discovery-secondary-image")}
          </figure>
          <figure class="image-frame discovery-detail">
            ${imageFor("DSC00939.jpg", "Detalle del maquillaje de la novia", "discovery-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "05—06",
    label: "EMOCIÓN",
    progress: "05",
    render: () => `
      <article class="spread spread-emotion" data-spread="05-06">
        <section class="page page--left" aria-label="Página 05 — momento íntimo">
          <figure class="image-frame emotion-hero">
            ${imageFor("Copia de DSC01037.jpg", "Momento íntimo durante los preparativos", "emotion-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 06 — retrato artístico">
          <figure class="image-frame emotion-counterpoint">
            ${imageFor("DSC01080.jpg", "Retrato cenital y artístico de la novia", "emotion-counterpoint-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "07—08",
    label: "PREPARATIVOS DEL NOVIO",
    progress: "07",
    phrase: "Todo lo que estaba por suceder cabía en una mañana.",
    render: () => `
      <article class="spread spread-groom" data-spread="07-08">
        <section class="page page--left" aria-label="Página 07 — retrato del novio">
          <figure class="image-frame groom-hero">
            ${imageFor("DSC06849.jpg", "Retrato en blanco y negro del novio", "groom-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 08 — preparativos y familia del novio">
          <figure class="image-frame groom-secondary">
            ${imageFor("DSC06838.jpg", "Ayudando al novio durante los preparativos", "groom-secondary-image")}
          </figure>
          <figure class="image-frame groom-tie">
            ${imageFor("DSC06836.jpg", "El novio ajustándose la corbata", "groom-tie-image")}
          </figure>
          <figure class="image-frame groom-family">
            ${imageFor("DSC06864.jpg", "El novio junto a un familiar", "groom-family-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "09—10",
    label: "ENCUENTRO / LLEGADA",
    progress: "09",
    render: () => `
      <article class="spread spread-arrival" data-spread="09-10">
        <section class="page page--left" aria-label="Página 09 — camino hacia la ceremonia">
          <figure class="image-frame arrival-hero">
            ${imageFor("DSC01267.jpg", "La pareja caminando hacia la ceremonia", "arrival-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 10 — espera y bienvenida">
          <figure class="image-frame arrival-greeting">
            ${imageFor("DSC01223.jpg", "La novia abrazando a un familiar a su llegada", "arrival-greeting-image")}
          </figure>
          <figure class="image-frame arrival-waiting">
            ${imageFor("DSC01249.jpg", "El novio esperando antes de la ceremonia", "arrival-waiting-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "11—12",
    label: "CEREMONIA",
    progress: "11",
    phrase: "Frente a todos, comenzó lo esencial.",
    render: () => `
      <article class="spread spread-full-impact ceremony-impact" data-spread="11-12">
        <figure class="image-frame full-impact-image">
          ${imageFor("DSC01325.jpg", "Vista completa de la ceremonia", "ceremony-impact-image")}
        </figure>
      </article>
    `,
  },
  {
    range: "13—14",
    label: "ANILLOS Y FIRMA",
    progress: "13",
    render: () => `
      <article class="spread spread-rings" data-spread="13-14">
        <section class="page page--left" aria-label="Página 13 — intercambio de anillos">
          <figure class="image-frame rings-hero">
            ${imageFor("DSC01342.jpg", "Intercambio de anillos durante la ceremonia", "rings-hero-image")}
          </figure>
          <figure class="image-frame rings-detail">
            ${imageFor("DSC01348.jpg", "Primer plano de las manos y los anillos", "rings-detail-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 14 — firma de la ceremonia">
          <figure class="image-frame rings-signature">
            ${imageFor("DSC01435.jpg", "Firma durante la ceremonia", "rings-signature-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "15—16",
    label: "FINAL DE CEREMONIA",
    progress: "15",
    phrase: "Después de las promesas, llegó el abrazo.",
    render: () => `
      <article class="spread spread-ceremony-end" data-spread="15-16">
        <section class="page page--left" aria-label="Página 15 — celebración al final de la ceremonia">
          <figure class="image-frame ceremony-end-hero">
            ${imageFor("DSC01480.jpg", "Los novios celebrando el final de la ceremonia", "ceremony-end-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 16 — emoción y primer beso tras la ceremonia">
          <figure class="image-frame ceremony-end-emotion">
            ${imageFor("DSC01394.jpg", "La novia compartiendo un momento emotivo", "ceremony-end-emotion-image")}
          </figure>
          <figure class="image-frame ceremony-end-kiss">
            ${imageFor("DSC01522.jpg", "Beso de los novios tras la ceremonia", "ceremony-end-kiss-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "17—18",
    label: "RETRATO DE LOS NOVIOS",
    progress: "17",
    render: () => `
      <article class="spread spread-portrait" data-spread="17-18">
        <section class="page page--left" aria-label="Página 17 — retrato de los novios">
          <figure class="image-frame portrait-hero">
            ${imageFor("DSC01285.jpg", "Los novios sentados durante la ceremonia", "portrait-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 18 — retrato vertical de la pareja">
          <figure class="image-frame portrait-secondary">
            ${imageFor("DSC01528.jpg", "Retrato vertical de los novios", "portrait-secondary-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "19—20",
    label: "INTIMIDAD",
    progress: "19",
    phrase: "Hay gestos que dicen más que cualquier palabra.",
    render: () => `
      <article class="spread spread-intimacy" data-spread="19-20">
        <section class="page page--left" aria-label="Página 19 — complicidad de la pareja">
          <figure class="image-frame intimacy-hero">
            ${imageFor("DSC01537.jpg", "Momento de complicidad entre los novios", "intimacy-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 20 — detalle del ramo">
          <figure class="image-frame intimacy-detail">
            ${imageFor("DSC01747.jpg", "Detalle del ramo y las manos", "intimacy-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "21—22",
    label: "TRASLADO",
    progress: "21",
    render: () => `
      <article class="spread spread-transfer" data-spread="21-22">
        <section class="page page--left" aria-label="Página 21 — camino a la celebración">
          <figure class="image-frame transfer-hero">
            ${imageFor("DSC01598.jpg", "La novia con el ramo dentro del coche", "transfer-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 22 — gestos durante el traslado">
          <figure class="image-frame transfer-secondary">
            ${imageFor("DSC01675.jpg", "La novia besando la mano del novio", "transfer-secondary-image")}
          </figure>
          <figure class="image-frame transfer-detail">
            ${imageFor("DSC01686.jpg", "La mirada del novio reflejada en el retrovisor", "transfer-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "23—24",
    label: "SESIÓN EXTERIOR",
    progress: "23",
    phrase: "Fuera del ruido, solo quedaban ellos.",
    render: () => `
      <article class="spread spread-full-impact exterior-impact" data-spread="23-24">
        <figure class="image-frame full-impact-image">
          ${imageFor("DSC01703.jpg", "Retrato exterior de los novios", "exterior-impact-image")}
        </figure>
      </article>
    `,
  },
  {
    range: "25—26",
    label: "SESIÓN EMOCIONAL",
    progress: "25",
    render: () => `
      <article class="spread spread-session-emotion" data-spread="25-26">
        <section class="page page--left" aria-label="Página 25 — retrato exterior de impacto">
          <figure class="image-frame session-hero">
            ${imageFor("DSC01768.jpg", "El novio levantando a la novia bajo los árboles", "session-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 26 — paseo y retrato íntimo">
          <figure class="image-frame session-walk">
            ${imageFor("DSC01785.jpg", "Los novios caminando juntos", "session-walk-image")}
          </figure>
          <figure class="image-frame session-close">
            ${imageFor("DSC01738.jpg", "Retrato íntimo de los novios sentados", "session-close-image")}
          </figure>
          <figure class="image-frame session-transition">
            ${imageFor("DSC01797.jpg", "Los novios caminando juntos en blanco y negro", "session-transition-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "27—28",
    label: "FAMILIA",
    progress: "27",
    phrase: "El amor también es la gente que camina a nuestro lado.",
    render: () => `
      <article class="spread spread-family" data-spread="27-28">
        <section class="page page--left" aria-label="Página 27 — familia de la pareja">
          <figure class="image-frame family-primary">
            ${imageFor("DSC01575.jpg", "Retrato de familia junto a la pareja", "family-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 28 — retrato familiar del novio">
          <figure class="image-frame family-secondary">
            ${imageFor("DSC06869.jpg", "Retrato familiar del novio", "family-secondary-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "29—30",
    label: "FAMILIA / INVITADOS",
    progress: "29",
    render: () => `
      <article class="spread spread-family-extended" data-spread="29-30">
        <section class="page page--left" aria-label="Página 29 — momento familiar espontáneo">
          <figure class="image-frame family-extended-primary">
            ${imageFor("DSC01955.jpg", "Momento espontáneo de los novios con una niña", "family-extended-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 30 — grupos de invitados">
          <figure class="image-frame family-extended-secondary">
            ${imageFor("DSC01926.jpg", "La novia celebrando con sus invitadas", "family-extended-secondary-image")}
          </figure>
          <figure class="image-frame family-extended-detail">
            ${imageFor("DSC02002.jpg", "Retrato de los novios con un grupo de invitadas", "family-extended-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "31—32",
    label: "CÓCTEL",
    progress: "31",
    phrase: "La alegría siempre encuentra un abrazo.",
    render: () => `
      <article class="spread spread-cocktail" data-spread="31-32">
        <section class="page page--left" aria-label="Página 31 — ambiente del cóctel">
          <figure class="image-frame cocktail-hero">
            ${imageFor("DSC01919.jpg", "Grupo de familiares y amigos durante el cóctel", "cocktail-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 32 — abrazo y detalle del cóctel">
          <figure class="image-frame cocktail-secondary">
            ${imageFor("DSC02046.jpg", "Abrazo durante el cóctel", "cocktail-secondary-image")}
          </figure>
          <figure class="image-frame cocktail-detail">
            ${imageFor("DSC01896.jpg", "Detalle de las bebidas preparadas para los invitados", "cocktail-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "33—34",
    label: "BANQUETE",
    progress: "33",
    render: () => `
      <article class="spread spread-banquet" data-spread="33-34">
        <section class="page page--left" aria-label="Página 33 — detalle de la mesa">
          <figure class="image-frame banquet-detail">
            ${imageFor("DSC02137.jpg", "Minuta y cubertería del banquete", "banquet-detail-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 34 — ambiente del banquete">
          <figure class="image-frame banquet-hero">
            ${imageFor("DSC02225.jpg", "Invitados compartiendo la mesa del banquete", "banquet-hero-image")}
          </figure>
          <figure class="image-frame banquet-energy">
            ${imageFor("DSC02245.jpg", "Invitados celebrando con las servilletas en alto", "banquet-energy-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "35—36",
    label: "PALABRAS / BANQUETE",
    progress: "35",
    phrase: "Algunas palabras se quedan para siempre.",
    render: () => `
      <article class="spread spread-speeches" data-spread="35-36">
        <section class="page page--left" aria-label="Página 35 — palabras del novio">
          <figure class="image-frame speeches-primary">
            ${imageFor("DSC02096.jpg", "El novio leyendo unas palabras durante la celebración", "speeches-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 36 — familia y palabras durante el banquete">
          <figure class="image-frame speeches-secondary">
            ${imageFor("DSC02356.jpg", "Los novios acompañados por un familiar en la mesa", "speeches-secondary-image")}
          </figure>
          <figure class="image-frame speeches-detail">
            ${imageFor("DSC02437.jpg", "Los novios escuchando unas palabras durante el banquete", "speeches-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "37—38",
    label: "RAMO / BRINDIS",
    progress: "37",
    render: () => `
      <article class="spread spread-bouquet" data-spread="37-38">
        <section class="page page--left" aria-label="Página 37 — entrada con el ramo">
          <figure class="image-frame bouquet-hero">
            ${imageFor("DSC02280.jpg", "La novia entrando al banquete con el ramo en alto", "bouquet-hero-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 38 — abrazo y brindis">
          <figure class="image-frame bouquet-secondary">
            ${imageFor("DSC02310.jpg", "La novia abrazando a una invitada durante la entrega del ramo", "bouquet-secondary-image")}
          </figure>
          <figure class="image-frame bouquet-detail">
            ${imageFor("DSC02462.jpg", "Los novios brindando con sus copas en alto", "bouquet-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "39—40",
    label: "PRIMER BAILE",
    progress: "39",
    phrase: "Por un instante, el mundo bailó a su alrededor.",
    render: () => `
      <article class="spread spread-first-dance" data-spread="39-40">
        <section class="page page--left" aria-label="Página 39 — primer baile de los novios">
          <figure class="image-frame first-dance-primary">
            ${imageFor("DSC02481.jpg", "Primer baile de los novios", "first-dance-primary-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 40 — baile y emoción">
          <figure class="image-frame first-dance-secondary">
            ${imageFor("DSC02532 (1).jpg", "La novia bailando y sonriendo con una invitada", "first-dance-secondary-image")}
          </figure>
          <figure class="image-frame first-dance-detail">
            ${imageFor("DSC02538.jpg", "Los novios bailando juntos durante la fiesta", "first-dance-detail-image")}
          </figure>
        </section>
      </article>
    `,
  },
  {
    range: "41—42",
    label: "FIESTA",
    progress: "41",
    phrase: "Que nunca falte una razón para volver a bailar.",
    render: () => `
      <article class="spread spread-finale" data-spread="41-42">
        <section class="page page--left" aria-label="Página 41 — baile y celebración">
          <figure class="image-frame finale-intro">
            ${imageFor("DSC02563.jpg", "La novia cantando y celebrando con sus amigas", "finale-intro-image")}
          </figure>
        </section>
        <section class="page page--right" aria-label="Página 42 — fiesta con amigos">
          <figure class="image-frame finale-close">
            ${imageFor("DSC02578.jpg", "Amigos celebrando juntos en el photocall", "finale-close-image")}
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
        <section class="closing-page" aria-label="Cierre del álbum">
          <figure class="image-frame closing-image">
            ${imageFor("DSC02523.jpg", "Los novios abrazados y sonriendo durante la fiesta", "closing-image-element")}
          </figure>
          <div class="closing-meta">
            <p class="closing-names">${albumMeta.names}</p>
            <p>${albumMeta.date}</p>
          </div>
          <p class="closing-phrase">Y esto no hizo más que empezar.</p>
        </section>
      </article>
    `,
  },
];

if (pageTemplates.length !== albumData.storyboard.length) {
  throw new Error("El storyboard y las plantillas visuales no tienen la misma longitud.");
}

const pages = albumData.storyboard.map((story, index) => {
  const template = pageTemplates[index];
  const renderedFiles = [...template.render().matchAll(/data-filename="([^"]+)"/g)].map(
    (match) => match[1],
  );

  if (renderedFiles.join("|") !== story.photos.join("|")) {
    throw new Error(`Las fotografías del pliego ${story.id} no coinciden con el storyboard.`);
  }

  return {
    ...template,
    ...story,
    label: story.moment,
    phrase: story.phrase ?? "",
  };
});

const spreadMount = document.querySelector("#spreadMount");
const readerStage = document.querySelector(".reader-stage");
const readerStatus = document.querySelector("#readerStatus");
const progressCurrent = document.querySelector("#progressCurrent");
const progressTotal = document.querySelector("#progressTotal");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const previousHotspot = document.querySelector("#previousHotspot");
const nextHotspot = document.querySelector("#nextHotspot");

let currentSpread = 0;
const preloadedPreviews = new Set();

function preloadSpread(index) {
  const spread = albumData.storyboard[index];
  if (!spread) return;

  spread.photos.forEach((filename) => {
    const source = pathToUrl(albumData.photos[filename].preview);
    if (preloadedPreviews.has(source)) return;
    preloadedPreviews.add(source);

    const preload = new Image();
    preload.decoding = "async";
    preload.src = source;
  });
}

function waitForMedia(spread) {
  const images = [...spread.querySelectorAll("img")];
  const mediaReady = images.map(
    (image) =>
      new Promise((resolve) => {
        const finish = () => {
          if (typeof image.decode === "function" && image.naturalWidth) {
            image.decode().catch(() => {}).finally(resolve);
            return;
          }
          resolve();
        };

        if (image.complete) {
          finish();
          return;
        }

        image.addEventListener("load", finish, { once: true });
        image.addEventListener("error", resolve, { once: true });
      }),
  );

  return Promise.race([
    Promise.allSettled(mediaReady),
    new Promise((resolve) => window.setTimeout(resolve, 1800)),
  ]);
}

function renderSpread(index, direction = 1) {
  const selected = pages[index];
  if (!selected) return;

  document.body.classList.toggle(
    "is-single-page",
    selected.kind === "cover" || selected.kind === "closing",
  );
  document.body.classList.toggle("is-cinematic-spread", selected.layout === "double-page");
  spreadMount.innerHTML = selected.render();
  if (window.matchMedia("(max-width: 800px)").matches) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  readerStatus.textContent = selected.label;
  progressCurrent.textContent = selected.progress;
  progressTotal.textContent = interiorPageTotal;
  previousButton.disabled = index === 0;
  nextButton.disabled = index === pages.length - 1;

  const spread = spreadMount.querySelector(".spread");
  if (selected.phrase) {
    const phrase = document.createElement("p");
    phrase.className = "spread-phrase";
    phrase.textContent = selected.phrase;
    spread.appendChild(phrase);
  }

  spread.style.setProperty("--entry-offset", direction > 0 ? "0.65rem" : "-0.65rem");
  waitForMedia(spread).then(() => {
    if (!spread.isConnected) return;
    requestAnimationFrame(() => requestAnimationFrame(() => spread.classList.add("is-visible")));
  });
  preloadSpread(index + 1);
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
  controlsTimer = window.setTimeout(() => document.body.classList.remove("is-ui-visible"), 1050);
}

window.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", " "].includes(event.key)) return;
  event.preventDefault();
  revealControls();
  if (event.key === "ArrowLeft") moveSpread(-1);
  if (event.key === "ArrowRight" || event.key === " ") moveSpread(1);
});

let pointerStartX = 0;
let pointerStartY = 0;
let isTrackingSwipe = false;
window.addEventListener("pointermove", revealControls, { passive: true });
document.addEventListener("mouseleave", () => document.body.classList.remove("is-ui-visible"));
document.addEventListener("focusin", revealControls);
readerStage.addEventListener(
  "pointerdown",
  (event) => {
    if (!window.matchMedia("(max-width: 800px)").matches) return;
    pointerStartX = event.screenX;
    pointerStartY = event.screenY;
    isTrackingSwipe = true;
  },
  { passive: true },
);

window.addEventListener(
  "pointerup",
  (event) => {
    if (!isTrackingSwipe) return;
    isTrackingSwipe = false;
    const distanceX = event.screenX - pointerStartX;
    const distanceY = event.screenY - pointerStartY;
    if (Math.abs(distanceX) < 55 || Math.abs(distanceX) <= Math.abs(distanceY) * 1.15) return;
    moveSpread(distanceX < 0 ? 1 : -1);
  },
  { passive: true },
);
window.addEventListener("pointercancel", () => {
  isTrackingSwipe = false;
});

let wheelNavigationLocked = false;
readerStage.addEventListener(
  "wheel",
  (event) => {
    if (!window.matchMedia("(max-width: 800px)").matches || wheelNavigationLocked) return;
    if (Math.abs(event.deltaX) < 45 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    wheelNavigationLocked = true;
    moveSpread(event.deltaX > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelNavigationLocked = false;
    }, 450);
  },
  { passive: false },
);

renderSpread(currentSpread);
