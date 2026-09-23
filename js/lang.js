/* ============================================================
   LANGUE — Mission Apostolique de Pentecôte
   Bascule FR / EN pour l'interface, et accès à la Bible bilingue
   (Louis Segond 1910 en français, King James Version en anglais)
   ============================================================ */

let LANG = localStorage.getItem('mpa_lang') || 'fr';

const I18N = {
  fr: {
    nav_accueil: '🏠 Accueil',
    nav_rocher: '🏛 Rocher des Âges',
    nav_ebenezer: '⛪ Ebenezer',
    nav_affiches: '🎨 Affiches',
    nav_livres: '📚 Livres',
    nav_podcasts: '🎬 Podcasts',
    nav_audios: '🔊 Audios',
    nav_bible: '📖 Bible',
    nav_admin: '🔐 Admin',
    brand_line1: 'Mission Apostolique',
    brand_line2: 'de Pentecôte — M.P.A.',
    footer_text: 'Fondée sur la Parole de Dieu | Psaumes 18 : 1-2',
    footer_admin: '⚙ Espace Administration',

    home_hero_title: 'Bienvenue à la Mission Apostolique de Pentecôte',
    home_hero_subtitle: 'Deux temples, une même foi. Découvrez nos messages, nos événements et notre communauté.',
    home_stat_messages: 'Messages',
    home_stat_affiches: 'Affiches',
    home_stat_livres: 'Livres',
    home_stat_temples: 'Temples',
    home_mission_title: 'Notre Mission',
    home_latest_title: 'Derniers Messages',
    home_see_all: 'Voir tout',

    affiches_title: 'Nos Affiches',
    affiches_subtitle: 'Retrouvez toutes les annonces et affiches de nos événements.',
    affiches_empty: 'Aucune affiche pour le moment.',

    livres_title: 'Nos Livres',
    livres_subtitle: 'Une sélection de livres pour nourrir votre foi.',
    livres_empty: 'Aucun livre pour le moment.',

    podcasts_title: 'Podcasts MPA',
    podcasts_subtitle: "Notre série vidéo d'épisodes réguliers pour approfondir votre foi, où que vous soyez.",
    podcasts_empty: 'Aucun épisode pour l\'instant.',
    podcasts_coming: 'Vidéo à venir.',
    podcasts_watch: "▶ Regarder l'épisode",

    audios_title: 'Audios MPA',
    audios_subtitle: 'Écoutez les enregistrements de nos cultes et temps de prière.',
    audios_empty: 'Aucun audio pour le moment.',
    audios_coming: 'Audio à venir.',

    bible_title: 'La Bible',
    bible_subtitle: 'Louis Segond 1910 — lisez la Parole de Dieu, chapitre par chapitre.',
    bible_book: 'Livre',
    bible_chapter: 'Chapitre',
    bible_loading: 'Chargement du chapitre...',
    bible_error: 'Impossible de charger ce chapitre. Vérifiez votre connexion et réessayez.',
    bible_prev: '← Précédent',
    bible_next: 'Suivant →',

    admin_login_btn: 'Se connecter',
    lang_toggle: 'EN'
  },
  en: {
    nav_accueil: '🏠 Home',
    nav_rocher: '🏛 Rock of Ages',
    nav_ebenezer: '⛪ Ebenezer',
    nav_affiches: '🎨 Posters',
    nav_livres: '📚 Books',
    nav_podcasts: '🎬 Podcasts',
    nav_audios: '🔊 Audios',
    nav_bible: '📖 Bible',
    nav_admin: '🔐 Admin',
    brand_line1: 'Apostolic Mission',
    brand_line2: 'of Pentecost — M.A.P.',
    footer_text: 'Founded on the Word of God | Psalm 18:1-2',
    footer_admin: '⚙ Admin Area',

    home_hero_title: 'Welcome to the Apostolic Mission of Pentecost',
    home_hero_subtitle: 'Two temples, one faith. Discover our messages, events and community.',
    home_stat_messages: 'Messages',
    home_stat_affiches: 'Posters',
    home_stat_livres: 'Books',
    home_stat_temples: 'Temples',
    home_mission_title: 'Our Mission',
    home_latest_title: 'Latest Messages',
    home_see_all: 'See all',

    affiches_title: 'Our Posters',
    affiches_subtitle: 'Find all the announcements and posters for our events.',
    affiches_empty: 'No posters yet.',

    livres_title: 'Our Books',
    livres_subtitle: 'A selection of books to nourish your faith.',
    livres_empty: 'No books yet.',

    podcasts_title: 'MPA Podcasts',
    podcasts_subtitle: 'Our regular video series to deepen your faith, wherever you are.',
    podcasts_empty: 'No episodes yet.',
    podcasts_coming: 'Video coming soon.',
    podcasts_watch: '▶ Watch the episode',

    audios_title: 'MPA Audios',
    audios_subtitle: 'Listen to recordings of our services and prayer times.',
    audios_empty: 'No audio yet.',
    audios_coming: 'Audio coming soon.',

    bible_title: 'The Bible',
    bible_subtitle: 'King James Version — read the Word of God, chapter by chapter.',
    bible_book: 'Book',
    bible_chapter: 'Chapter',
    bible_loading: 'Loading chapter...',
    bible_error: 'Could not load this chapter. Check your connection and try again.',
    bible_prev: '← Previous',
    bible_next: 'Next →',

    admin_login_btn: 'Log in',
    lang_toggle: 'FR'
  }
};

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) || (I18N.fr[key]) || key;
}

function setLanguage(lang) {
  LANG = lang;
  localStorage.setItem('mpa_lang', lang);
  applyStaticTranslations();
  if (typeof App !== 'undefined') App.navigate(App.currentPage, false);
}

// Applique les traductions aux éléments fixes (hors zone SPA : navbar, footer)
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) langBtn.textContent = '🌐 ' + t('lang_toggle');
}

// ── Bible (Louis Segond 1910 / King James Version) ─────────────
const BIBLE_BOOKS = [
  {osis:'Gen',fr:'Genèse',en:'Genesis'},{osis:'Exod',fr:'Exode',en:'Exodus'},
  {osis:'Lev',fr:'Lévitique',en:'Leviticus'},{osis:'Num',fr:'Nombres',en:'Numbers'},
  {osis:'Deut',fr:'Deutéronome',en:'Deuteronomy'},{osis:'Josh',fr:'Josué',en:'Joshua'},
  {osis:'Judg',fr:'Juges',en:'Judges'},{osis:'Ruth',fr:'Ruth',en:'Ruth'},
  {osis:'1Sam',fr:'1 Samuel',en:'1 Samuel'},{osis:'2Sam',fr:'2 Samuel',en:'2 Samuel'},
  {osis:'1Kgs',fr:'1 Rois',en:'1 Kings'},{osis:'2Kgs',fr:'2 Rois',en:'2 Kings'},
  {osis:'1Chr',fr:'1 Chroniques',en:'1 Chronicles'},{osis:'2Chr',fr:'2 Chroniques',en:'2 Chronicles'},
  {osis:'Ezra',fr:'Esdras',en:'Ezra'},{osis:'Neh',fr:'Néhémie',en:'Nehemiah'},
  {osis:'Esth',fr:'Esther',en:'Esther'},{osis:'Job',fr:'Job',en:'Job'},
  {osis:'Ps',fr:'Psaumes',en:'Psalms'},{osis:'Prov',fr:'Proverbes',en:'Proverbs'},
  {osis:'Eccl',fr:'Ecclésiaste',en:'Ecclesiastes'},{osis:'Song',fr:'Cantique des cantiques',en:'Song of Solomon'},
  {osis:'Isa',fr:'Ésaïe',en:'Isaiah'},{osis:'Jer',fr:'Jérémie',en:'Jeremiah'},
  {osis:'Lam',fr:'Lamentations',en:'Lamentations'},{osis:'Ezek',fr:'Ézéchiel',en:'Ezekiel'},
  {osis:'Dan',fr:'Daniel',en:'Daniel'},{osis:'Hos',fr:'Osée',en:'Hosea'},
  {osis:'Joel',fr:'Joël',en:'Joel'},{osis:'Amos',fr:'Amos',en:'Amos'},
  {osis:'Obad',fr:'Abdias',en:'Obadiah'},{osis:'Jonah',fr:'Jonas',en:'Jonah'},
  {osis:'Mic',fr:'Michée',en:'Micah'},{osis:'Nah',fr:'Nahum',en:'Nahum'},
  {osis:'Hab',fr:'Habacuc',en:'Habakkuk'},{osis:'Zeph',fr:'Sophonie',en:'Zephaniah'},
  {osis:'Hag',fr:'Aggée',en:'Haggai'},{osis:'Zech',fr:'Zacharie',en:'Zechariah'},
  {osis:'Mal',fr:'Malachie',en:'Malachi'},{osis:'Matt',fr:'Matthieu',en:'Matthew'},
  {osis:'Mark',fr:'Marc',en:'Mark'},{osis:'Luke',fr:'Luc',en:'Luke'},
  {osis:'John',fr:'Jean',en:'John'},{osis:'Acts',fr:'Actes',en:'Acts'},
  {osis:'Rom',fr:'Romains',en:'Romans'},{osis:'1Cor',fr:'1 Corinthiens',en:'1 Corinthians'},
  {osis:'2Cor',fr:'2 Corinthiens',en:'2 Corinthians'},{osis:'Gal',fr:'Galates',en:'Galatians'},
  {osis:'Eph',fr:'Éphésiens',en:'Ephesians'},{osis:'Phil',fr:'Philippiens',en:'Philippians'},
  {osis:'Col',fr:'Colossiens',en:'Colossians'},{osis:'1Thess',fr:'1 Thessaloniciens',en:'1 Thessalonians'},
  {osis:'2Thess',fr:'2 Thessaloniciens',en:'2 Thessalonians'},{osis:'1Tim',fr:'1 Timothée',en:'1 Timothy'},
  {osis:'2Tim',fr:'2 Timothée',en:'2 Timothy'},{osis:'Titus',fr:'Tite',en:'Titus'},
  {osis:'Phlm',fr:'Philémon',en:'Philemon'},{osis:'Heb',fr:'Hébreux',en:'Hebrews'},
  {osis:'Jas',fr:'Jacques',en:'James'},{osis:'1Pet',fr:'1 Pierre',en:'1 Peter'},
  {osis:'2Pet',fr:'2 Pierre',en:'2 Peter'},{osis:'1John',fr:'1 Jean',en:'1 John'},
  {osis:'2John',fr:'2 Jean',en:'2 John'},{osis:'3John',fr:'3 Jean',en:'3 John'},
  {osis:'Jude',fr:'Jude',en:'Jude'},{osis:'Rev',fr:'Apocalypse',en:'Revelation'}
];

const _bibleCache = {};

// Récupère un livre entier (mis en cache) depuis la base publique
// "bible-data" (Louis Segond 1910 pour le français, King James pour l'anglais).
async function fetchBibleBook(osis) {
  const version = LANG === 'en' ? 'en/kjv' : 'fr/lsg';
  const cacheKey = version + '/' + osis;
  if (_bibleCache[cacheKey]) return _bibleCache[cacheKey];
  const url = `https://cdn.jsdelivr.net/gh/midvash/bible-data@main/versions/${version}/books/${osis}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Bible fetch failed: ' + res.status);
  const data = await res.json();
  _bibleCache[cacheKey] = data;
  return data;
}
