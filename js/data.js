/* ============================================================
   DATA MANAGEMENT — Mission Apostolique de Pentecôte
   Gestion des données avec localStorage
   ============================================================ */

const DB_KEY = 'mpa_data_v2';

// ── Base de données partagée (Supabase) ────────────────────────
// Toutes les modifications faites depuis l'espace Admin sont
// synchronisées ici, pour que TOUS les visiteurs voient les mêmes
// données, quel que soit leur appareil.
const SUPABASE_URL = 'https://fcoevwmcqeycxkjoqihz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjb2V2d21jcWV5Y3hram9xaWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNDcwMTMsImV4cCI6MjEwNDYyMzAxM30.KWuwMl3UKLuGs6kNWqYJa61C0Mpnox6WqB1GdsUipIU';

// ── Données initiales (démo) ─────────────────────────────────
const INITIAL_DATA = {
  messages: [
    {
      id: 1,
      temple: 'rocher',
      titre: 'La puissance de la foi en temps d\'épreuve',
      predicateur: 'Pasteur Kofi Mensah',
      lecteur: 'Frère Emmanuel Adéba',
      date: '2026-09-07',
      audioUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Un message puissant sur la foi qui déplace les montagnes, tiré de Hébreux 11.'
    },
    {
      id: 2,
      temple: 'rocher',
      titre: 'Marcher dans la lumière de l\'Éternel',
      predicateur: 'Évangéliste Sœur Abla Koffi',
      lecteur: 'Frère Jonas Agbeko',
      date: '2026-08-31',
      audioUrl: '',
      videoUrl: '',
      description: 'Méditation sur Psaumes 27 : l\'Éternel est ma lumière et mon salut.'
    },
    {
      id: 3,
      temple: 'rocher',
      titre: 'La grâce suffisante de Dieu',
      predicateur: 'Pasteur Kofi Mensah',
      lecteur: 'Sœur Mawuli Sénam',
      date: '2026-08-24',
      audioUrl: '',
      videoUrl: '',
      description: 'Enseignement tiré de 2 Corinthiens 12:9 sur la suffisance de la grâce divine.'
    },
    {
      id: 4,
      temple: 'rocher',
      titre: 'Être des témoins de Christ',
      predicateur: 'Frère Théophile Djossou',
      lecteur: 'Frère Emmanuel Adéba',
      date: '2026-08-17',
      audioUrl: '',
      videoUrl: '',
      description: 'Appel à témoigner de l\'Évangile dans notre quotidien — Actes 1:8.'
    },
    {
      id: 5,
      temple: 'rocher',
      titre: 'Le Saint-Esprit, notre consolateur',
      predicateur: 'Pasteur Kofi Mensah',
      lecteur: 'Frère Jonas Agbeko',
      date: '2026-08-10',
      audioUrl: '',
      videoUrl: '',
      description: 'Découvrir le rôle du Saint-Esprit dans notre vie quotidienne — Jean 14:16-17.'
    },
    {
      id: 6,
      temple: 'ebenezer',
      titre: 'Jusqu\'ici l\'Éternel nous a aidés',
      predicateur: 'Pasteur Amédée Dossou',
      lecteur: 'Sœur Yawa Adétu',
      date: '2026-09-07',
      audioUrl: '',
      videoUrl: '',
      description: 'Message de reconnaissance basé sur 1 Samuel 7:12 — Ebenezer, l\'Éternel nous secourt.'
    },
    {
      id: 7,
      temple: 'ebenezer',
      titre: 'Prier sans se lasser',
      predicateur: 'Sœur Abla Koffi',
      lecteur: 'Frère Kodjo Fiamé',
      date: '2026-08-31',
      audioUrl: '',
      videoUrl: '',
      description: 'Exhortation à la persévérance dans la prière — Luc 18:1-8.'
    },
    {
      id: 8,
      temple: 'ebenezer',
      titre: 'La sainteté, chemin vers Dieu',
      predicateur: 'Pasteur Amédée Dossou',
      lecteur: 'Frère Kodjo Fiamé',
      date: '2026-08-24',
      audioUrl: '',
      videoUrl: '',
      description: 'Appel à la sanctification selon Hébreux 12:14.'
    },
    {
      id: 9,
      temple: 'ebenezer',
      titre: 'L\'amour de Dieu qui surpasse tout',
      predicateur: 'Évangéliste Paul Séna',
      lecteur: 'Sœur Yawa Adétu',
      date: '2026-08-17',
      audioUrl: '',
      videoUrl: '',
      description: 'Méditation sur l\'amour inconditionnel de Dieu — Jean 3:16.'
    },
    {
      id: 10,
      temple: 'ebenezer',
      titre: 'Dieu est notre refuge',
      predicateur: 'Pasteur Amédée Dossou',
      lecteur: 'Frère Kodjo Fiamé',
      date: '2026-08-10',
      audioUrl: '',
      videoUrl: '',
      description: 'Psaumes 46 — Dieu est notre refuge et notre force.'
    }
  ],
  affiches: [
    {
      id: 1,
      temple: 'general',
      titre: 'Culte de Pentecôte 2026',
      date: '2026-06-08',
      description: 'Grand culte de Pentecôte réunissant tous les temples de la MPA. Venez nombreux vivre une expérience spirituelle inoubliable !',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      id: 2,
      temple: 'rocher',
      titre: 'Séminaire sur la Prière',
      date: '2026-09-20',
      description: 'Séminaire de formation sur la prière efficace. Inscription obligatoire. Contact : Temple du Rocher des Âges.',
      imageUrl: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400&q=80'
    },
    {
      id: 3,
      temple: 'ebenezer',
      titre: 'Conférence des Femmes',
      date: '2026-10-05',
      description: 'Conférence annuelle des femmes du Temple Ebenezer. Thème : "La femme forte de l\'Éternel".',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80'
    },
    {
      id: 4,
      temple: 'general',
      titre: 'Nuit de Louange et d\'Adoration',
      date: '2026-09-27',
      description: 'Nuit de louange tous temples confondus. Venez célébrer l\'Éternel de 21h à l\'aube !',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80'
    }
  ],
  livres: [
    {
      id: 1,
      titre: 'La Marche de la Foi',
      auteur: 'Pasteur Kofi Mensah',
      resume: 'Un guide pratique pour vivre une vie de foi authentique au quotidien. Ce livre vous accompagnera à travers les défis et les victoires de la vie chrétienne.',
      coverUrl: '',
      downloadUrl: '',
      commandeUrl: ''
    },
    {
      id: 2,
      titre: 'Pentecôte : Le Feu du Saint-Esprit',
      auteur: 'Évangéliste Sœur Abla Koffi',
      resume: 'Une exploration profonde du baptême du Saint-Esprit et de ses manifestations dans l\'Église contemporaine. Fondé sur les Actes des Apôtres.',
      coverUrl: '',
      downloadUrl: '',
      commandeUrl: ''
    },
    {
      id: 3,
      titre: 'Psaumes 18 : Mon Rocher, Ma Forteresse',
      auteur: 'Pasteur Amédée Dossou',
      resume: 'Commentaire verset par verset du Psaume 18, verset fondateur de la MPA. Un trésor spirituel pour chaque croyant.',
      coverUrl: '',
      downloadUrl: '',
      commandeUrl: ''
    }
  ],
  temples: {
    rocher: {
      id: 'rocher',
      nom: 'Temple du Rocher des Âges',
      emoji: '🏛',
      logo: 'logo-rocher.jpg',
      couleur: '#1E1F6B',
      couleur2: '#2E2F8B',
      responsable: 'Pasteur Kofi Mensah',
      adresse: 'Lomé, Togo — Quartier à préciser',
      horaires: ['Dimanche : 8h00 | 10h00 | 18h00', 'Mercredi (prière) : 18h30', 'Vendredi (jeunesse) : 18h00'],
      tel: '+228 XX XX XX XX',
      description: 'Le Temple du Rocher des Âges est le temple fondateur de la Mission Apostolique de Pentecôte au Togo. Fondé sur la Roche éternelle qu’est Jésus-Christ, ce lieu de culte accueille chaque semaine des centaines de fidèles avides de la Parole de Dieu et de la présence du Saint-Esprit.'
    },
    ebenezer: {
      id: 'ebenezer',
      nom: 'Temple Ebenezer',
      emoji: '⛪',
      logo: 'logo-ebenezer.jpg',
      couleur: '#13145A',
      couleur2: '#8B1A1A',
      responsable: 'Pasteur Amédée Dossou',
      adresse: 'Lomé, Togo — Quartier à préciser',
      horaires: ['Dimanche : 8h00 | 10h30 | 17h00', 'Mardi (prière) : 18h00', 'Jeudi (culte semaine) : 18h30'],
      tel: '+228 XX XX XX XX',
      description: 'Le Temple Ebenezer porte le nom de l’autel que Samuel érigea en disant : « Jusqu’ici l’Éternel nous a secourus » (1 Samuel 7:12). Ce temple est un lieu de reconnaissance, de prière fervente et d’adoration sincère. La communauté Ebenezer est connue pour sa chaleur fraternelle et sa ferveur spirituelle.'
    }
  }
};

// ── API de données ───────────────────────────────────────────
const DB = {
  _get() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!parsed.temples) parsed.temples = JSON.parse(JSON.stringify(INITIAL_DATA.temples));
        return parsed;
      }
    } catch(e) {}
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  },

  _save(data) {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(data));
    } catch(e) {
      console.error('Erreur sauvegarde:', e);
    }
    // Pousse aussi la modification vers la base partagée, pour que
    // tous les visiteurs (pas seulement cet appareil) voient le changement.
    pushToCloud(data);
  },

  // ── Messages ────────────────────────────────────────────────
  getMessages(temple = null) {
    const data = this._get();
    if (temple) return data.messages.filter(m => m.temple === temple);
    return data.messages;
  },

  getLatestMessages(count = 3) {
    return this.getMessages()
      .sort((a,b) => new Date(b.date) - new Date(a.date))
      .slice(0, count);
  },

  addMessage(msg) {
    const data = this._get();
    const id = Date.now();
    data.messages.push({ id, ...msg });
    this._save(data);
    return id;
  },

  updateMessage(id, updates) {
    const data = this._get();
    const idx = data.messages.findIndex(m => m.id === id);
    if (idx !== -1) {
      data.messages[idx] = { ...data.messages[idx], ...updates };
      this._save(data);
      return true;
    }
    return false;
  },

  deleteMessage(id) {
    const data = this._get();
    data.messages = data.messages.filter(m => m.id !== id);
    this._save(data);
  },

  // ── Affiches ────────────────────────────────────────────────
  getAffiches(temple = null) {
    const data = this._get();
    const affiches = data.affiches.sort((a,b) => new Date(b.date) - new Date(a.date));
    if (temple && temple !== 'all') return affiches.filter(a => a.temple === temple);
    return affiches;
  },

  getLatestAffiches(count = 3) {
    return this.getAffiches().slice(0, count);
  },

  addAffiche(aff) {
    const data = this._get();
    data.affiches.push({ id: Date.now(), ...aff });
    this._save(data);
  },

  updateAffiche(id, updates) {
    const data = this._get();
    const idx = data.affiches.findIndex(a => a.id === id);
    if (idx !== -1) {
      data.affiches[idx] = { ...data.affiches[idx], ...updates };
      this._save(data);
    }
  },

  deleteAffiche(id) {
    const data = this._get();
    data.affiches = data.affiches.filter(a => a.id !== id);
    this._save(data);
  },

  // ── Livres ──────────────────────────────────────────────────
  getLivres() {
    return this._get().livres;
  },

  addLivre(livre) {
    const data = this._get();
    data.livres.push({ id: Date.now(), ...livre });
    this._save(data);
  },

  updateLivre(id, updates) {
    const data = this._get();
    const idx = data.livres.findIndex(l => l.id === id);
    if (idx !== -1) {
      data.livres[idx] = { ...data.livres[idx], ...updates };
      this._save(data);
    }
  },

  deleteLivre(id) {
    const data = this._get();
    data.livres = data.livres.filter(l => l.id !== id);
    this._save(data);
  },

  // ── Temples ──────────────────────────────────────────────────
  getTemples() {
    const data = this._get();
    if (!data.temples) {
      data.temples = JSON.parse(JSON.stringify(INITIAL_DATA.temples));
      this._save(data);
    }
    return data.temples;
  },

  getTemple(id) {
    const temples = this.getTemples();
    return temples[id] || temples.rocher;
  },

  updateTemple(id, updates) {
    const data = this._get();
    if (!data.temples) data.temples = JSON.parse(JSON.stringify(INITIAL_DATA.temples));
    if (data.temples[id]) {
      data.temples[id] = { ...data.temples[id], ...updates };
      this._save(data);
      return true;
    }
    return false;
  },

  // ── Reset ────────────────────────────────────────────────────
  reset() {
    localStorage.removeItem(DB_KEY);
  }
};

// ── Synchronisation avec la base partagée (Supabase) ───────────
async function syncFromCloud() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000); // max 6s d'attente
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/site_data?id=eq.main&select=content`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        },
        signal: controller.signal
      }
    );
    clearTimeout(timeout);
    if (!res.ok) throw new Error('Réponse Supabase invalide: ' + res.status);
    const rows = await res.json();
    if (rows && rows[0] && rows[0].content) {
      localStorage.setItem(DB_KEY, JSON.stringify(rows[0].content));
      return true;
    }
  } catch (e) {
    console.error('Synchronisation cloud impossible, utilisation des données locales.', e);
  }
  return false;
}

async function pushToCloud(data) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/site_data?id=eq.main`,
      {
        method: 'PATCH',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ content: data })
      }
    );
    if (!res.ok) throw new Error('Échec sauvegarde cloud: ' + res.status);
  } catch (e) {
    console.error(e);
    if (typeof showToast === 'function') {
      showToast('Enregistré sur cet appareil, mais la synchronisation en ligne a échoué (vérifiez la connexion).', 'error');
    }
  }
}

// Initialiser si données absentes (secours local avant la synchronisation)
if (!localStorage.getItem(DB_KEY)) {
  localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_DATA));
}

// Charge les données à jour depuis la base partagée AVANT de démarrer
// l'application, pour que chaque visiteur voie les mêmes informations.
window.mpaDataReady = syncFromCloud().finally(() => {
  document.dispatchEvent(new Event('mpa-data-ready'));
});

// ── Helpers ──────────────────────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function templeLabel(temple) {
  const map = { rocher: 'Rocher des Âges', ebenezer: 'Temple Ebenezer', general: 'Tous temples' };
  return map[temple] || temple;
}

function templeTagClass(temple) {
  const map = { rocher: 'tag-rocher', ebenezer: 'tag-ebenezer', general: 'tag-general' };
  return map[temple] || 'tag-general';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer') || (() => {
    const el = document.createElement('div');
    el.id = 'toastContainer';
    el.className = 'toast-container';
    document.body.appendChild(el);
    return el;
  })();
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || '✅'}</span> ${escapeHtml(msg)}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// Helper pour uploader et compresser les images depuis l'ordinateur
function handleFileUpload(fileInput, targetInputId, previewImgId) {
  const file = fileInput.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('Veuillez sélectionner un fichier image valide.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 900;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
      const targetInput = document.getElementById(targetInputId);
      if (targetInput) targetInput.value = compressedDataUrl;

      const previewImg = document.getElementById(previewImgId);
      if (previewImg) {
        previewImg.src = compressedDataUrl;
        previewImg.style.display = 'block';
      }
      showToast('Image chargée depuis votre ordinateur !', 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
