import type { CampsiteConfig } from "../types";

const IMG = "/campsites/puercherhof";

const puercherhof: CampsiteConfig = {
  name: "Camping Pürcherhof",
  shortName: "Pürcherhof",
  slug: "puercherhof",
  ort: "Mitterberg-Sankt Martin",
  region: "Steiermark",
  brandKind: "Camping am Bauernhof",
  regionLong: "Schladming-Dachstein · Ennstal · Steiermark",

  heroVariant: "center",

  claim: "Camping am Bauernhof, auf 900 Metern Sonnenplateau",
  claimEmphasis: "am Bauernhof",
  emailDetail: "euer Campingplatz mitten am Bauernhof auf 900 Metern",
  intro:
    "Ob mit Zelt, Wohnwagen oder Wohnmobil: Am Pürcherhof stehst du auf weiten Hofwiesen in 900 m Seehöhe — rundherum das Leben eines großen Bauernhofs, davor das Dachstein-Panorama.",

  logo: { src: `${IMG}/logo-f9d286906e.png`, alt: "Pürcherhof — Urlaub am Bauernhof Logo" },

  statement: {
    text: "Bei uns campierst du mitten in einem lebendigen Bauernhof — Streichelzoo, Reitplatz und Bergpanorama gleich vor dem Vorzelt.",
    emphasis: "mitten in einem lebendigen Bauernhof",
  },

  pillars: [
    {
      title: "Stellplatz mit Weitblick",
      text: "Ebene Hofwiesen auf einem sonnigen Hochplateau — der Blick reicht weit über das Ennstal bis zu den Bergen.",
      image: { src: `${IMG}/gallery-ddbe872259.webp`, alt: "Wohnwagen und Zelte auf der Hofwiese des Pürcherhofs mit Bergpanorama" },
    },
    {
      title: "Ein echter Bauernhof",
      text: "Eigene Landwirtschaft, viele Tiere und ein Streichelzoo — hier lebst du den Alltag eines großen Hofs mit.",
      image: { src: `${IMG}/gallery-afd29356a0.webp`, alt: "Ziege vor dem Holzstall am Pürcherhof" },
    },
    {
      title: "Reiten & Hofprogramm",
      text: "Reitplatz, geführte Ausritte und Traktorfahrten gehören direkt zum Hof — Urlaub abseits von Straßen und Verkehr.",
      image: { src: `${IMG}/activity-e3b665a3d0.webp`, alt: "Reiten am Reitplatz des Pürcherhofs vor dem Dachstein-Massiv" },
    },
  ],

  usps: [
    "Sommercard inklusive",
    "Strom, WLAN & Sanitär",
    "Streichelzoo & Hoftiere",
    "Reitplatz & Ausritte",
    "70 km Wanderwege",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Warum Familien zum Pürcherhof zurückkommen",
    headingEmphasis: "zurückkommen",
    intro:
      "Ein lebendiger Bauernhof mit eigener Landwirtschaft: Tiere zum Anfassen, Reitplatz und ein Sonnenplateau auf 900 m — Urlaub abseits von Straßen und Verkehr, mitten im obersteirischen Ennstal.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-a8ef8393c6.webp`, alt: "Der Pürcherhof am Mitterberg mit Wiesen und Berggipfeln im Hintergrund" },
  },

  breather: {
    image: { src: `${IMG}/gallery-fe56ea6c11.webp`, alt: "Bergpanorama über den Wiesen am Mitterberg" },
    line: "900 Meter über dem Alltag — Wiesen, Wald und ein Panorama, das keine Wünsche offen lässt.",
  },

  camping: {
    heading: "Camping mitten am Bauernhof",
    intro:
      "Campingplatz oder Zeltplatz in wunderschöner Lage — mit Sommercard, Strom und WLAN inklusive und dem ganzen Hof als Spielplatz drumherum.",
    features: [
      {
        title: "Stellplätze auf der Hofwiese",
        text: "Weite, ruhige Wiesenplätze für Zelt, Wohnwagen und Wohnmobil — abends taucht die Sonne das Plateau in goldenes Licht.",
        image: { src: `${IMG}/gallery-a0e1557804.webp`, alt: "Stellplätze am Pürcherhof im Abendlicht mit Bergblick" },
      },
      {
        title: "Sommercard inklusive",
        text: "Über 100 Attraktionen in Schladming-Dachstein ab der ersten Nacht nutzen — Bäder und Seen ganz ohne Aufpreis.",
        image: { src: `${IMG}/gallery-34865311ae.webp`, alt: "Hofwiesen und Berge rund um den Pürcherhof" },
      },
      {
        title: "Streichelzoo & Hoftiere",
        text: "Ziegen, Schafe und Kleintiere zum Anfassen — der hofeigene Streichelzoo gehört für die Kinder zum Tagesprogramm.",
        image: { src: `${IMG}/gallery-877e5a54bf.webp`, alt: "Kinder beim Streichelzoo am Pürcherhof" },
      },
      {
        title: "Sonnenterrasse & Wintergarten",
        text: "Auf der Sonnenterrasse und im großen Wintergarten lässt sich der Tag in Ruhe ausklingen — mit Blick ins Grüne.",
        image: { src: `${IMG}/gallery-22dce4a90e.webp`, alt: "Überdachte Sonnenterrasse am Pürcherhof" },
      },
      {
        title: "Küche vom eigenen Hof",
        text: "Frühstücksbuffet, Menüwahl am Abend und Grillabende — die eigene Landwirtschaft liefert die Zutaten. Brötchenservice auf Wunsch.",
        image: { src: `${IMG}/gallery-a2a63d4ba9.webp`, alt: "Liebevoll angerichtetes Gericht aus der Pürcherhof-Küche" },
      },
      {
        title: "Hausmühle & Schnapsbrennerei",
        text: "Eine alte Hausmühle, eine eigene Fleischerei und eine Schnapsbrennerei — am Pürcherhof wird vieles noch selbst gemacht.",
        image: { src: `${IMG}/gallery-b0a4fb3007.webp`, alt: "Alte hölzerne Verarbeitungsmaschine am Pürcherhof" },
      },
    ],
  },

  kinder: {
    heading: "Kinder, hier wird's nie langweilig",
    intro:
      "Vom Heuhupfstadl bis zum Streichelzoo: Am Pürcherhof dürfen Kinder den ganzen Tag draußen sein und mitten am Hof mitleben.",
    features: [
      {
        title: "Heuhupfstadl & Spielhaus",
        text: "Im Heuhupfstadl wird gehüpft, geklettert und getobt — dazu ein Kinderspielplatz mit geräumigem Spielhaus.",
        image: { src: `${IMG}/kids-ddf22995ed.webp`, alt: "Kinder im Heuhupfstadl am Pürcherhof" },
      },
      {
        title: "Kleintiere zum Anfassen",
        text: "Hasen und Kleintiere wollen versorgt werden — beim Füttern und Streicheln vergeht der Vormittag wie im Flug.",
        image: { src: `${IMG}/kids-3698831da0.webp`, alt: "Zwei Mädchen halten Hasen vor dem Holzstadl am Pürcherhof" },
      },
      {
        title: "Kutschen- & Bummelzugfahrten",
        text: "Mit der Pferdekutsche oder dem Bummelzug geht es durchs Gröbminger Land — ein Highlight im Sommerprogramm.",
        image: { src: `${IMG}/kids-74bfb3006b.webp`, alt: "Familie auf einer Pferdekutschenfahrt am Pürcherhof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Hof",
    intro:
      "Reiten, Traktorfahren und Wandern — am Mitterberg liegt das Programm direkt vor der Tür, im Sommer wie im Winter.",
    items: [
      {
        title: "Reiten & Reitunterricht",
        text: "Reitplatz und schönes Reitgelände gehören zum Hof — vom ersten Ausritt bis zur Reitstunde.",
        image: { src: `${IMG}/activity-aac1a562c4.webp`, alt: "Reiterin auf dem Reitplatz des Pürcherhofs" },
      },
      {
        title: "Traktorfahren mit Oldtimern",
        text: "Auf den hofeigenen Oldtimer-Traktoren geht es geführt in die Berge — Urlaubsspaß für die ganze Familie.",
        image: { src: `${IMG}/activity-fc724b71a6.webp`, alt: "Oldtimer-Traktor mit Anhänger voller Kinder am Pürcherhof" },
      },
      {
        title: "Geführte Ausritte",
        text: "Über Wiesen und durch den Wald führen die Ausritte ins ruhige Gelände rund um den Mitterberg.",
        image: { src: `${IMG}/gallery-729b2e04a5.webp`, alt: "Geführter Ausritt im Gelände am Pürcherhof" },
      },
      {
        title: "Wandern am Mitterberg",
        text: "70 km Wanderwege starten direkt am Hof — über ausgedehnte Wiesen und Wälder mit Blick auf den Dachstein.",
        image: { src: `${IMG}/gallery-3ea7fbbda4.webp`, alt: "Wanderwiese am Mitterberg mit Dachstein-Panorama" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg auf den Mitterberg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 Pyhrnautobahn bis Liezen oder die Tauernautobahn bis Radstadt, dann auf der B 320 bis Gröbming — von dort hinauf nach Mitterberg.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhöfe in Gröbming und Öblarn, internationale Züge halten in Schladming oder Stainach — kostenloser Abholservice ab Öblarn.",
      },
    ],
  },

  galerie: {
    heading: "Vom Sommer bis in den Schnee",
    headingEmphasis: "Sommer",
    intro: "Hofwiesen, Tiere und das Bergpanorama — ein paar Eindrücke vom Pürcherhof durch das Jahr.",
    tag: "Mai bis Oktober",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-5ed285217e.webp`, alt: "Reitplatz des Pürcherhofs vor dem Grimming" },
      { src: `${IMG}/gallery-27a3ad9523.webp`, alt: "Schafe im Gehege am Pürcherhof" },
      { src: `${IMG}/gallery-c3e1500ebf.webp`, alt: "Pferdeschlittenfahrt im winterlichen Mitterberg" },
      { src: `${IMG}/gallery-01f1639ab2.webp`, alt: "Verwitterte Holzwand eines alten Hofgebäudes" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Hof",
    headingEmphasis: "deinen Platz",
    intro: "Wähle Zeitraum und Personen — Familie Lemmerer meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise 2026 pro Nacht, inkl. 1 Erwachsener und Sommercard · jede weitere Person € 26 · zzgl. Kur- & Nächtigungsabgabe € 2,75 pro Person/Nacht ab 15 Jahren.",
    highlight: {
      title: "Sommercard inklusive",
      text: "Ab der ersten Übernachtung über 100 Ausflugsziele in Schladming-Dachstein gratis.",
    },
    categories: [
      { id: "wohnwagen", label: "Wohnwagen / Wohnmobil", perNight: 29, perExtraGuest: 26 },
      { id: "zelt-gross", label: "Zeltplatz groß (mit Auto)", perNight: 29, perExtraGuest: 26 },
      { id: "zelt-klein", label: "Zeltplatz klein (Rad/Bike)", perNight: 27, perExtraGuest: 26 },
    ],
  },

  kontakt: {
    tel: "+43 3684 6036",
    telHref: "tel:+4336846036",
    mail: "info@puercherhof.at",
    facebook: "https://www.facebook.com/Puercherhof",
    adresse: "Berg 21 · 8960 Mitterberg-Sankt Martin · Steiermark",
    coords: { lat: 47.460942, lng: 13.964223 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Hof & Küche", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default puercherhof;
