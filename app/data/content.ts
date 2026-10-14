// ------------------------------------------------------------------
//  CONTENIDO DEL SITIO
//  Todo lo que va entre [CORCHETES] es placeholder: confirmar con LOCO.
//  coverUrl / photoUrl: déjalos vacíos para usar el patrón generativo,
//  o pon una URL (Cloudinary, /public, etc.) cuando llegue el arte real.
// ------------------------------------------------------------------

export type Genre = "TECHNO" | "TECH HOUSE" | "MELODIC" | "PSYTRANCE" | "OTHER";

export type Release = {
  cat: string;
  title: string;
  artist: string;
  genre: Genre;
  genreLabel?: string;
  date: string;
  pattern: 1 | 2 | 3 | 4 | 5 | 6;
  coverUrl?: string;
  links: { beatport?: string; spotify?: string; traxsource?: string };
  latest?: boolean;
};

export const RELEASES: Release[] = [
  {
    cat: "LCR[##]",
    title: "Psytriangle Vol. 2",
    artist: "Olinka Music, Loop's, Sense",
    genre: "PSYTRANCE",
    date: "[FECHA]",
    pattern: 1,
    latest: true,
    links: { beatport: "https://www.beatport.com/label/loading-collective/118281" },
  },
  {
    cat: "LCR013",
    title: "Ann (The Remixes)",
    artist: "Silver Funk",
    genre: "MELODIC",
    date: "2025.11.22",
    pattern: 2,
    links: { beatport: "https://www.beatport.com/release/ann-remixes-ep/5582836" },
  },
  {
    cat: "LCR[##]",
    title: "Sarasvati",
    artist: "Rage (Mx)",
    genre: "OTHER",
    genreLabel: "[GÉNERO]",
    date: "[FECHA]",
    pattern: 3,
    links: {},
  },
  {
    cat: "LCR[##]",
    title: "La Musica Electronica",
    artist: "Dj Eddie (Mx)",
    genre: "OTHER",
    genreLabel: "[GÉNERO]",
    date: "[FECHA]",
    pattern: 4,
    links: {},
  },
  {
    cat: "LCR[##]",
    title: "Latin Lover Remixes EP",
    artist: "Oxxid, Ever Tapia, A M I L K a R",
    genre: "TECH HOUSE",
    date: "2025.07.21",
    pattern: 5,
    links: { traxsource: "https://www.traxsource.com/artist/394955/ever-tapia" },
  },
  {
    cat: "LCR006",
    title: "Psytriangle Vol. 1",
    artist: "Materialize, Oktokun, Moon Ra",
    genre: "PSYTRANCE",
    date: "2024.12.31",
    pattern: 6,
    links: { beatport: "https://www.beatport.com/release/psytriangle-vol-1/4869706" },
  },
  {
    cat: "LCR004",
    title: "Miedo (Ever Tapia Remix)",
    artist: "Maria Daniela y su Sonido Lasser",
    genre: "TECHNO",
    date: "2024.09.13",
    pattern: 3,
    links: { traxsource: "https://www.traxsource.com/title/2355634/miedo-ever-tapia-remix" },
  },
];

export const FILTERS: { id: Genre | "ALL"; label: string }[] = [
  { id: "ALL", label: "ALL" },
  { id: "TECHNO", label: "TECHNO" },
  { id: "TECH HOUSE", label: "TECH HOUSE" },
  { id: "MELODIC", label: "MELODIC" },
  { id: "PSYTRANCE", label: "PSYTRANCE" },
];

export type Artist = { id: string; name: string; city: string; genre: string; photoUrl?: string; href?: string };

export const ARTISTS: Artist[] = [
  { id: "A-01", name: "Ever Tapia", city: "CHIHUAHUA", genre: "TECHNO", href: "https://soundcloud.com/evertapialive" },
  { id: "A-02", name: "Silver Funk", city: "[CIUDAD]", genre: "MELODIC" },
  { id: "A-03", name: "Materialize", city: "CHIHUAHUA", genre: "PSYTRANCE" },
  { id: "A-04", name: "Oktokun", city: "CHIHUAHUA", genre: "PSYTRANCE" },
  { id: "A-05", name: "Moon Ra", city: "GUADALAJARA", genre: "PSYTRANCE" },
  { id: "A-06", name: "Rage (Mx)", city: "[CIUDAD]", genre: "[GÉNERO]" },
  { id: "A-07", name: "Mariana Revilla", city: "[CIUDAD]", genre: "[GÉNERO]" },
  { id: "A-08", name: "Subbart", city: "[CIUDAD]", genre: "[GÉNERO]" },
];

export type EventItem = { date: string; name: string; lineup: string; venue: string; ticketsUrl?: string };

export const EVENTS: EventItem[] = [
  { date: "[DD.MM]", name: "[NOMBRE DEL EVENTO]", lineup: "[LINE-UP]", venue: "[VENUE] · CHIHUAHUA" },
  { date: "[DD.MM]", name: "[NOMBRE DEL EVENTO]", lineup: "[LINE-UP]", venue: "[VENUE] · [CIUDAD]" },
  { date: "[DD.MM]", name: "[NOMBRE DEL EVENTO]", lineup: "[LINE-UP]", venue: "[VENUE] · [CIUDAD]" },
];

export type NewsItem = { cat: string; date: string; title: string; excerpt: string; imageUrl?: string; href?: string };

export const NEWS: NewsItem[] = [
  {
    cat: "ANUNCIO",
    date: "[FECHA]",
    title: "Loading Collective ahora es LOCO Records",
    excerpt: "Mismo colectivo, mismo catálogo, nuevo nombre. Por qué LO + CO y qué viene después.",
  },
  {
    cat: "RELEASE",
    date: "[FECHA]",
    title: "Psytriangle Vol. 2 ya está disponible",
    excerpt: "Olinka Music, Loop's y Sense continúan la serie psicodélica del sello.",
  },
  {
    cat: "RELEASE",
    date: "2025.11.22",
    title: "Ann (The Remixes): cuatro visiones",
    excerpt: "Alberth Cassava, Paul Vega, Guillermo Nevarez y Mendex reinterpretan el track de Silver Funk.",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/loadingcollective/" },
  { label: "SoundCloud", href: "#" },
  { label: "Beatport", href: "https://www.beatport.com/label/loading-collective/118281" },
  { label: "Spotify", href: "#" },
  { label: "YouTube", href: "#" },
];

export const STATS = [
  { value: "13+", label: "LANZAMIENTOS" },
  { value: "[##]", label: "ARTISTAS" },
  { value: "[##]", label: "EVENTOS" },
];

export const BOOKING_EMAIL = "[EMAIL DE BOOKING]";
