/* ============================================================
   PAGES RENDERER — Mission Apostolique de Pentecôte
   Rendu de chaque section/page
   ============================================================ */

const Pages = {

  // ── PAGE D'ACCUEIL ──────────────────────────────────────────
  renderAccueil() {
    const latestMessages = DB.getLatestMessages(3);
    const latestAffiches = DB.getLatestAffiches(3);
    const totalMessages = DB.getMessages().length;
    const totalAffiches = DB.getAffiches().length;
    const totalLivres = DB.getLivres().length;

    return `
      <!-- HERO -->
      <section id="hero">
        <div class="hero-content">
          <img src="logo.jpg" alt="Logo MPA" class="hero-logo">
          <p class="hero-tagline">Bienvenue à la</p>
          <h1>Mission Apostolique<br>de Pentecôte</h1>
          <div class="hero-verse">
            « Je t'aime, ô Éternel, ma force ! L'Éternel est mon rocher, ma forteresse et mon libérateur ; mon Dieu, mon rocher où je me réfugie, mon bouclier, la force qui me sauve, ma haute retraite. »
            <cite>Psaumes 18 : 1-2</cite>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="App.navigate('rocher')">🏛 Temple Rocher des Âges</button>
            <button class="btn btn-ghost" onclick="App.navigate('ebenezer')">⛪ Temple Ebenezer</button>
            <button class="btn btn-gold" onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'})">📞 Nous contacter</button>
          </div>
        </div>
        <div class="hero-scroll">
          <span>Défiler</span>
          <div class="scroll-arrow"></div>
        </div>
      </section>

      <!-- STATS -->
      <div class="stats-bar">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">Temples</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalMessages}</div>
            <div class="stat-label">Prédications</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalAffiches}</div>
            <div class="stat-label">Événements</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalLivres}</div>
            <div class="stat-label">Livres</div>
          </div>
        </div>
      </div>

      <!-- PRÉSENTATION -->
      <section class="section" id="presentation">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">Notre Mission</span>
            <h2>Une Église ancrée dans la Foi</h2>
            <div class="section-divider"></div>
            <p class="lead mt-2" style="max-width:660px;margin:0 auto;">
              La Mission Apostolique de Pentecôte (MPA) est une église chrétienne évangélique implantée au Togo,
              fondée sur la Parole de Dieu et animée par le Saint-Esprit. Notre vocation : annoncer l'Évangile
              de Jésus-Christ et former des disciples.
            </p>
          </div>
          <div class="mission-grid mt-4">
            <div class="mission-card fade-in">
              <div class="mission-icon">📖</div>
              <h4>La Parole</h4>
              <p>Fondés sur la Bible, la Parole infaillible de Dieu, nous enseignons avec fidélité la vérité scripturaire.</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🕊️</div>
              <h4>Le Saint-Esprit</h4>
              <p>Nous croyons aux dons du Saint-Esprit et à son œuvre puissante dans la vie de chaque croyant.</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🌍</div>
              <h4>La Mission</h4>
              <p>Évangéliser les nations et implanter des églises selon le commandement du Seigneur Jésus-Christ.</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🤝</div>
              <h4>La Communauté</h4>
              <p>Vivre en fraternité, se soutenir mutuellement et croître ensemble dans la foi et l'amour.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- NOS TEMPLES -->
      <section class="section section-alt" id="temples-section">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">Nos Lieux de Culte</span>
            <h2>Deux Temples, Une Foi</h2>
            <div class="section-divider"></div>
          </div>
          <div class="temples-grid mt-4">
            <div class="temple-card fade-in">
              <div class="temple-card-img">
                <span class="temple-emoji">🏛</span>
              </div>
              <div class="temple-card-body">
                <h3>Temple du Rocher des Âges</h3>
                <p>Notre premier temple, pilier de la MPA au Togo. Un lieu de rencontre avec Dieu où des centaines de fidèles se réunissent chaque semaine.</p>
                <div class="temple-meta">
                  <div class="temple-meta-item">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    Lomé, Togo
                  </div>
                  <div class="temple-meta-item">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Dim. 8h • 10h • 18h
                  </div>
                </div>
                <button class="btn btn-primary" onclick="App.navigate('rocher')">
                  Découvrir ce temple →
                </button>
              </div>
            </div>
            <div class="temple-card fade-in">
              <div class="temple-card-img" style="background:linear-gradient(135deg,#7B1A1A,#C0392B);">
                <span class="temple-emoji">⛪</span>
              </div>
              <div class="temple-card-body">
                <h3>Temple Ebenezer</h3>
                <p>Notre second temple, portant le nom de l'autel de la gratitude. Un espace de prière, de louange et d'enseignement de la Parole.</p>
                <div class="temple-meta">
                  <div class="temple-meta-item">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    Lomé, Togo
                  </div>
                  <div class="temple-meta-item">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Dim. 8h • 10h30 • 17h
                  </div>
                </div>
                <button class="btn btn-primary" style="background:var(--red)" onclick="App.navigate('ebenezer')">
                  Découvrir ce temple →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DERNIERS MESSAGES -->
      <section class="section" id="derniers-messages">
        <div class="container">
          <div class="section-header fade-in">
            <span class="section-tag">Prédications Récentes</span>
            <h2>Derniers Messages</h2>
            <div class="section-divider left"></div>
          </div>
          <div class="messages-grid mt-4">
            ${latestMessages.length > 0 ? latestMessages.map(m => Pages.renderMessageCard(m)).join('') : `
              <div class="empty-state" style="grid-column:1/-1">
                <div class="empty-icon">🎙</div>
                <h3>Aucun message disponible</h3>
                <p>Les prédications seront bientôt disponibles.</p>
              </div>
            `}
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-outline" onclick="App.navigate('rocher')">Voir tous les messages →</button>
          </div>
        </div>
      </section>

      <!-- DERNIÈRES AFFICHES -->
      ${latestAffiches.length > 0 ? `
      <section class="section section-alt" id="dernières-affiches">
        <div class="container">
          <div class="section-header fade-in">
            <span class="section-tag">Événements à venir</span>
            <h2>Dernières Affiches</h2>
            <div class="section-divider left"></div>
          </div>
          <div class="affiches-grid mt-4">
            ${latestAffiches.map(a => Pages.renderAfficheCard(a, true)).join('')}
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-outline" onclick="App.navigate('affiches')">Voir toutes les affiches →</button>
          </div>
        </div>
      </section>
      ` : ''}

      <!-- APPEL À L'ACTION -->
      <div class="cta-section">
        <div class="container">
          <h2>Rejoignez notre communauté</h2>
          <p>Que vous soyez croyant depuis longtemps ou en chemin vers la foi, la MPA vous accueille avec joie. Venez tel que vous êtes !</p>
          <div class="cta-actions">
            <button class="btn btn-white" onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'})">
              📞 Nous contacter
            </button>
            <button class="btn btn-ghost" onclick="App.navigate('rocher')">
              🏛 Rocher des Âges
            </button>
            <button class="btn btn-ghost" onclick="App.navigate('ebenezer')">
              ⛪ Temple Ebenezer
            </button>
          </div>
        </div>
      </div>

      <!-- CONTACT -->
      <section class="section" id="contact-section">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">Contact</span>
            <h2>Nous Rejoindre</h2>
            <div class="section-divider"></div>
          </div>
          <div class="contact-grid mt-4">
            ${(() => {
              const t = DB.getTemples();
              const rocher = t.rocher || {};
              const ebenezer = t.ebenezer || {};
              return `
                <div class="contact-card fade-in">
                  <div class="contact-icon">🏛</div>
                  <h4 style="color:var(--navy);margin-bottom:.5rem;">${escapeHtml(rocher.nom || 'Temple du Rocher des Âges')}</h4>
                  <p>${escapeHtml(rocher.adresse || 'Lomé, Togo')}</p>
                  <p style="font-size:.85rem;color:var(--gold);margin-top:.35rem;font-weight:600;">📞 ${escapeHtml(rocher.tel || '')}</p>
                  <a href="https://maps.google.com" target="_blank" class="btn btn-outline btn-sm mt-2">🗺 Itinéraire</a>
                </div>
                <div class="contact-card fade-in">
                  <div class="contact-icon">⛪</div>
                  <h4 style="color:var(--navy);margin-bottom:.5rem;">${escapeHtml(ebenezer.nom || 'Temple Ebenezer')}</h4>
                  <p>${escapeHtml(ebenezer.adresse || 'Lomé, Togo')}</p>
                  <p style="font-size:.85rem;color:var(--gold);margin-top:.35rem;font-weight:600;">📞 ${escapeHtml(ebenezer.tel || '')}</p>
                  <a href="https://maps.google.com" target="_blank" class="btn btn-outline btn-sm mt-2">🗺 Itinéraire</a>
                </div>
                <div class="contact-card fade-in">
                  <div class="contact-icon">📞</div>
                  <h4 style="color:var(--navy);margin-bottom:.5rem;">Contacts Directs</h4>
                  <p><strong>Rocher :</strong> ${escapeHtml(rocher.tel || 'Non renseigné')}<br><strong>Ebenezer :</strong> ${escapeHtml(ebenezer.tel || 'Non renseigné')}</p>
                  <div class="social-links">
                    <a href="#" class="social-link" title="Facebook">f</a>
                    <a href="#" class="social-link" title="WhatsApp" style="background:#25D366;">💬</a>
                    <a href="#" class="social-link" title="YouTube" style="background:#FF0000;">▶</a>
                  </div>
                </div>
              `;
            })()}
          </div>
        </div>
      </section>
    `;
  },

  // ── PAGE TEMPLE ─────────────────────────────────────────────
  renderTemple(templeId) {
    const isRocher = templeId === 'rocher';
    const c = DB.getTemple(templeId);
    const horairesArr = Array.isArray(c.horaires) ? c.horaires : (c.horaires || '').split('\n').filter(Boolean);
    const messages = DB.getMessages(templeId).sort((a,b) => new Date(b.date) - new Date(a.date));
    const isAdmin = App.isAdmin;

    return `
      <!-- HERO TEMPLE -->
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 Accueil</a>
        <span class="sep">›</span>
        <span class="current">${escapeHtml(c.nom)}</span>
      </div>
      <section class="temple-page-hero" style="background:linear-gradient(135deg,${c.couleur||'#1E1F6B'},${c.couleur2||'#2E2F8B'});">
        <div class="container">
          <img src="${c.logo}" alt="Logo ${escapeHtml(c.nom)}" style="width:120px;height:120px;border-radius:50%;border:4px solid rgba(255,255,255,.3);margin:0 auto 1.25rem;display:block;box-shadow:0 0 40px rgba(0,0,0,.3);object-fit:cover;">
          <h1>${escapeHtml(c.nom)}</h1>
          <p>${escapeHtml(c.description)}</p>
          <div class="temple-info-grid">
            <div class="temple-info-card">
              <div class="info-icon">👤</div>
              <div class="info-label">Responsable</div>
              <div class="info-value">${escapeHtml(c.responsable)}</div>
            </div>
            <div class="temple-info-card">
              <div class="info-icon">📍</div>
              <div class="info-label">Adresse</div>
              <div class="info-value">${escapeHtml(c.adresse)}</div>
            </div>
            <div class="temple-info-card">
              <div class="info-icon">📞</div>
              <div class="info-label">Téléphone</div>
              <div class="info-value">${escapeHtml(c.tel)}</div>
            </div>
            <div class="temple-info-card">
              <div class="info-icon">🗺</div>
              <div class="info-label">Itinéraire</div>
              <div class="info-value">
                <a href="https://maps.google.com" target="_blank" style="color:var(--gold);text-decoration:underline;">Voir sur la carte</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HORAIRES -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <span class="section-tag">Organisation</span>
            <h2>Horaires des Cultes</h2>
            <div class="section-divider left"></div>
          </div>
          <div class="mission-grid mt-3">
            ${horairesArr.map(h => `
              <div class="mission-card fade-in" style="text-align:left;">
                <div style="font-size:1.8rem;margin-bottom:.75rem;">🕊</div>
                <p style="color:var(--text);font-weight:500;font-size:.95rem;">${escapeHtml(h)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- MESSAGES / PRÉDICATIONS -->
      <section class="section" id="messages-${templeId}">
        <div class="container">
          <div class="section-header fade-in" style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <div>
              <span class="section-tag">Enseignements</span>
              <h2>Prédications & Messages</h2>
              <div class="section-divider left"></div>
            </div>
            ${isAdmin ? `
              <button class="btn btn-primary btn-sm" onclick="Admin.openMessageForm('${templeId}')">
                + Ajouter un message
              </button>
            ` : ''}
          </div>

          ${messages.length > 0 ? `
          <div class="messages-grid mt-4" id="messages-grid-${templeId}">
            ${messages.map(m => Pages.renderMessageCard(m, isAdmin)).join('')}
          </div>
          ` : `
          <div class="empty-state mt-4">
            <div class="empty-icon">🎙</div>
            <h3>Aucun message pour l'instant</h3>
            <p>Les prédications de ce temple seront bientôt disponibles.</p>
            ${isAdmin ? `<button class="btn btn-primary mt-2" onclick="Admin.openMessageForm('${templeId}')">+ Ajouter le premier message</button>` : ''}
          </div>
          `}
        </div>
      </section>
    `;
  },

  // ── PAGE AFFICHES ───────────────────────────────────────────
  renderAffiches() {
    const isAdmin = App.isAdmin;
    const affiches = DB.getAffiches();

    return `
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 Accueil</a>
        <span class="sep">›</span>
        <span class="current">Affiches</span>
      </div>
      <section class="temple-page-hero">
        <div class="container">
          <div style="font-size:3rem;margin-bottom:1rem;">🎨</div>
          <h1>Galerie d'Affiches</h1>
          <p>Retrouvez toutes les affiches de nos événements, cultes spéciaux et conférences.</p>
        </div>
      </section>
      <section class="section" id="affiches-content">
        <div class="container">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
            <div class="affiches-filters" id="affiche-filters">
              <button class="filter-btn active" onclick="Pages.filterAffiches('all',this)">Tous</button>
              <button class="filter-btn" onclick="Pages.filterAffiches('general',this)">Général</button>
              <button class="filter-btn" onclick="Pages.filterAffiches('rocher',this)">Rocher des Âges</button>
              <button class="filter-btn" onclick="Pages.filterAffiches('ebenezer',this)">Ebenezer</button>
            </div>
            ${isAdmin ? `<button class="btn btn-primary btn-sm" onclick="Admin.openAfficheForm()">+ Ajouter une affiche</button>` : ''}
          </div>
          <div class="affiches-grid" id="affiches-grid">
            ${affiches.length > 0 ? affiches.map(a => Pages.renderAfficheCard(a, false, isAdmin)).join('') : `
              <div class="empty-state" style="grid-column:1/-1">
                <div class="empty-icon">🎨</div>
                <h3>Aucune affiche disponible</h3>
                <p>Les affiches seront bientôt disponibles.</p>
              </div>
            `}
          </div>
        </div>
      </section>
    `;
  },

  filterAffiches(temple, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const affiches = DB.getAffiches(temple);
    const grid = document.getElementById('affiches-grid');
    if (!grid) return;
    grid.innerHTML = affiches.length > 0
      ? affiches.map(a => Pages.renderAfficheCard(a, false, App.isAdmin)).join('')
      : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🎨</div><h3>Aucune affiche pour ce filtre</h3></div>`;
  },

  // ── PAGE LIVRES ─────────────────────────────────────────────
  renderLivres() {
    const isAdmin = App.isAdmin;
    const livres = DB.getLivres();

    return `
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 Accueil</a>
        <span class="sep">›</span>
        <span class="current">Livres</span>
      </div>
      <section class="temple-page-hero" style="background:linear-gradient(135deg,#1a3a1a,#2d6a2d);">
        <div class="container">
          <div style="font-size:3rem;margin-bottom:1rem;">📚</div>
          <h1>Bibliothèque MPA</h1>
          <p>Découvrez les ouvrages spirituels publiés par les pasteurs et évangélistes de la Mission Apostolique de Pentecôte.</p>
        </div>
      </section>
      <section class="section" id="livres-content">
        <div class="container">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
            <div>
              <span class="section-tag">Publications</span>
              <h2>Nos Livres</h2>
            </div>
            ${isAdmin ? `<button class="btn btn-primary btn-sm" onclick="Admin.openLivreForm()">+ Ajouter un livre</button>` : ''}
          </div>
          <div class="livres-grid">
            ${livres.length > 0 ? livres.map(l => Pages.renderLivreCard(l, isAdmin)).join('') : `
              <div class="empty-state" style="grid-column:1/-1">
                <div class="empty-icon">📚</div>
                <h3>Aucun livre disponible</h3>
                <p>Le catalogue sera bientôt disponible.</p>
              </div>
            `}
          </div>
        </div>
      </section>
    `;
  },

  // ── PAGE PODCASTS ────────────────────────────────────────────
  renderPodcasts() {
    const isAdmin = App.isAdmin;
    const podcasts = DB.getPodcasts();

    return `
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 Accueil</a>
        <span class="sep">›</span>
        <span class="current">Podcasts</span>
      </div>
      <section class="temple-page-hero" style="background:linear-gradient(135deg,#3a1a4a,#6a2d8b);">
        <div class="container">
          <div style="font-size:3rem;margin-bottom:1rem;">🎬</div>
          <h1>Podcasts MPA</h1>
          <p>Notre série vidéo d'épisodes réguliers pour approfondir votre foi, où que vous soyez.</p>
        </div>
      </section>
      <section class="section" id="podcasts-content">
        <div class="container">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
            <div>
              <span class="section-tag">Épisodes</span>
              <h2>Tous les épisodes</h2>
            </div>
            ${isAdmin ? `<button class="btn btn-primary btn-sm" onclick="Admin.openPodcastForm()">+ Nouvel épisode</button>` : ''}
          </div>
          <div class="livres-grid">
            ${podcasts.length > 0 ? podcasts.map(p => Pages.renderPodcastCard(p, isAdmin)).join('') : `
              <div class="empty-state" style="grid-column:1/-1">
                <div class="empty-icon">🎬</div>
                <h3>Aucun épisode pour l'instant</h3>
                <p>Le premier épisode sera bientôt disponible.</p>
              </div>
            `}
          </div>
        </div>
      </section>
    `;
  },

  // ── PAGE AUDIOS ──────────────────────────────────────────────
  renderAudios() {
    const isAdmin = App.isAdmin;
    const audios = DB.getAudios();

    return `
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 Accueil</a>
        <span class="sep">›</span>
        <span class="current">Audios</span>
      </div>
      <section class="temple-page-hero" style="background:linear-gradient(135deg,#1a2a4a,#2d5a8b);">
        <div class="container">
          <div style="font-size:3rem;margin-bottom:1rem;">🔊</div>
          <h1>Enregistrements Audio</h1>
          <p>Retrouvez les enregistrements de nos cultes, temps de louange et moments forts.</p>
        </div>
      </section>
      <section class="section" id="audios-content">
        <div class="container">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
            <div class="affiches-filters" id="audio-filters">
              <button class="filter-btn active" onclick="Pages.filterAudios('all',this)">Tous</button>
              <button class="filter-btn" onclick="Pages.filterAudios('rocher',this)">Rocher des Âges</button>
              <button class="filter-btn" onclick="Pages.filterAudios('ebenezer',this)">Ebenezer</button>
            </div>
            ${isAdmin ? `<button class="btn btn-primary btn-sm" onclick="Admin.openAudioForm()">+ Ajouter un audio</button>` : ''}
          </div>
          <div id="audios-list">
            ${audios.length > 0 ? audios.map(a => Pages.renderAudioCard(a, isAdmin)).join('') : `
              <div class="empty-state">
                <div class="empty-icon">🔊</div>
                <h3>Aucun enregistrement disponible</h3>
                <p>Les enregistrements seront bientôt disponibles.</p>
              </div>
            `}
          </div>
        </div>
      </section>
    `;
  },

  filterAudios(temple, btn) {
    document.querySelectorAll('#audio-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const audios = DB.getAudios(temple);
    const list = document.getElementById('audios-list');
    if (!list) return;
    list.innerHTML = audios.length > 0
      ? audios.map(a => Pages.renderAudioCard(a, App.isAdmin)).join('')
      : `<div class="empty-state"><div class="empty-icon">🔊</div><h3>Aucun enregistrement pour ce filtre</h3></div>`;
  },

  // ── COMPOSANTS ──────────────────────────────────────────────
  renderMessageCard(m, isAdmin = false) {
    const audioHtml = m.audioUrl ? `
      <div class="audio-player-wrap">
        <audio controls preload="none">
          <source src="${escapeHtml(m.audioUrl)}" type="audio/mpeg">
        </audio>
      </div>` : '';
    const videoHtml = m.videoUrl ? `
      <a href="${escapeHtml(m.videoUrl)}" target="_blank" class="video-link">
        ▶ Regarder la vidéo
      </a>` : '';
    const adminBtns = isAdmin ? `
      <div class="action-btns mt-2">
        <button class="btn-edit" onclick="Admin.openMessageForm('${m.temple}',${m.id})">✏ Modifier</button>
        <button class="btn-delete" onclick="Admin.deleteMessage(${m.id})">🗑 Supprimer</button>
      </div>` : '';

    return `
      <div class="message-card fade-in">
        <div class="message-card-header">
          <h4>${escapeHtml(m.titre)}</h4>
          <span class="message-badge">${templeLabel(m.temple)}</span>
        </div>
        <div class="message-card-body">
          <div class="message-info">
            <div class="message-info-row">🎤 <strong>Prédicateur :</strong> ${escapeHtml(m.predicateur)}
            </div>
            ${m.lecteur ? `<div class="message-info-row">📖 <strong>Lecteur :</strong> ${escapeHtml(m.lecteur)}</div>` : ''}
            <div class="message-info-row">📅 <strong>Date :</strong> ${formatDate(m.date)}</div>
            ${m.description ? `<div class="message-info-row" style="align-items:flex-start;">💬 <span>${escapeHtml(m.description)}</span></div>` : ''}
          </div>
          ${audioHtml}
          ${videoHtml}
          ${adminBtns}
        </div>
      </div>`;
  },

  renderAfficheCard(a, preview = false, isAdmin = false) {
    const tagClass = templeTagClass(a.temple);
    const adminBtns = isAdmin ? `
      <div class="action-btns mt-1">
        <button class="btn-edit" onclick="event.stopPropagation();Admin.openAfficheForm(${a.id})">✏</button>
        <button class="btn-delete" onclick="event.stopPropagation();Admin.deleteAffiche(${a.id})">🗑</button>
      </div>` : '';

    return `
      <div class="affiche-card fade-in" onclick="Pages.openLightbox(${a.id})">
        <div class="affiche-img">
          ${a.imageUrl ? `<img src="${escapeHtml(a.imageUrl)}" alt="${escapeHtml(a.titre)}" loading="lazy">` : '<span>🎨</span>'}
        </div>
        <div class="affiche-body">
          <span class="affiche-temple-tag ${tagClass}">${templeLabel(a.temple)}</span>
          <h4>${escapeHtml(a.titre)}</h4>
          <div class="affiche-meta">📅 ${formatDate(a.date)}</div>
          ${adminBtns}
        </div>
      </div>`;
  },

  renderLivreCard(l, isAdmin = false) {
    const emojis = ['📖','📗','📘','📙','📕','📚'];
    const emoji = emojis[l.id % emojis.length];
    const adminBtns = isAdmin ? `
      <div class="action-btns mt-1">
        <button class="btn-edit" onclick="event.stopPropagation();Admin.openLivreForm(${l.id})">✏ Modifier</button>
        <button class="btn-delete" onclick="event.stopPropagation();Admin.deleteLivre(${l.id})">🗑 Supprimer</button>
      </div>` : '';

    return `
      <div class="livre-card fade-in" onclick="Pages.openLivreModal(${l.id})">
        <div class="livre-cover">
          ${l.coverUrl ? `<img src="${escapeHtml(l.coverUrl)}" alt="${escapeHtml(l.titre)}" loading="lazy">` : `<span style="font-size:4rem">${emoji}</span>`}
        </div>
        <div class="livre-body">
          <h4>${escapeHtml(l.titre)}</h4>
          <div class="livre-author">par ${escapeHtml(l.auteur)}</div>
          <p class="livre-summary">${escapeHtml(l.resume)}</p>
          ${adminBtns}
        </div>
      </div>`;
  },

  renderPodcastCard(p, isAdmin = false) {
    const videoHtml = p.videoUrl ? Pages.renderVideoEmbed(p.videoUrl) : `<p style="font-size:.85rem;color:var(--text-muted);">Vidéo à venir.</p>`;
    const adminBtns = isAdmin ? `
      <div class="action-btns mt-1">
        <button class="btn-edit" onclick="Admin.openPodcastForm(${p.id})">✏ Modifier</button>
        <button class="btn-delete" onclick="Admin.deletePodcast(${p.id})">🗑 Supprimer</button>
      </div>` : '';

    return `
      <div class="livre-card fade-in">
        <div class="livre-cover" style="background:linear-gradient(135deg,#3a1a4a,#6a2d8b);">
          <span style="font-size:3.5rem;">🎬</span>
        </div>
        <div class="livre-body">
          <span class="affiche-temple-tag tag-general">Épisode ${p.numero || '—'}</span>
          <h4>${escapeHtml(p.titre)}</h4>
          <div class="livre-author">📅 ${formatDate(p.date)}</div>
          <p class="livre-summary">${escapeHtml(p.description||'')}</p>
          ${videoHtml}
          ${adminBtns}
        </div>
      </div>`;
  },

  // Intègre une vidéo YouTube/Vimeo si reconnue, sinon affiche un lecteur
  // vidéo natif (fichier direct .mp4 etc.), sinon un simple lien.
  renderVideoEmbed(url) {
    const safeUrl = escapeHtml(url);
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (yt) {
      return `<div class="video-embed-wrap">
        <iframe src="https://www.youtube.com/embed/${yt[1]}" title="Vidéo" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>`;
    }
    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo) {
      return `<div class="video-embed-wrap">
        <iframe src="https://player.vimeo.com/video/${vimeo[1]}" title="Vidéo" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>`;
    }
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
      return `<div class="video-embed-wrap"><video controls preload="none" src="${safeUrl}"></video></div>`;
    }
    return `<a href="${safeUrl}" target="_blank" class="video-link">▶ Regarder l'épisode</a>`;
  },

  renderAudioCard(a, isAdmin = false) {
    const audioHtml = a.audioUrl ? `
      <div class="audio-player-wrap">
        <audio controls preload="none">
          <source src="${escapeHtml(a.audioUrl)}" type="audio/mpeg">
        </audio>
      </div>` : `<p style="font-size:.85rem;color:var(--text-muted);">Audio à venir.</p>`;
    const adminBtns = isAdmin ? `
      <div class="action-btns mt-2">
        <button class="btn-edit" onclick="Admin.openAudioForm(${a.id})">✏ Modifier</button>
        <button class="btn-delete" onclick="Admin.deleteAudio(${a.id})">🗑 Supprimer</button>
      </div>` : '';

    return `
      <div class="message-card fade-in">
        <div class="message-card-header">
          <h4>${escapeHtml(a.titre)}</h4>
          <span class="message-badge">${templeLabel(a.temple)}</span>
        </div>
        <div class="message-card-body">
          <div class="message-info">
            <div class="message-info-row">📅 <strong>Date :</strong> ${formatDate(a.date)}</div>
            ${a.description ? `<div class="message-info-row" style="align-items:flex-start;">💬 <span>${escapeHtml(a.description)}</span></div>` : ''}
          </div>
          ${audioHtml}
          ${adminBtns}
        </div>
      </div>`;
  },

  // ── LIGHTBOX AFFICHE ─────────────────────────────────────────
  openLightbox(afficheId) {
    const a = DB.getAffiches().find(x => x.id === afficheId);
    if (!a) return;
    const lb = document.getElementById('lightbox');
    lb.innerHTML = `
      <div class="lightbox-content">
        ${a.imageUrl ? `<img class="lightbox-img" src="${escapeHtml(a.imageUrl)}" alt="${escapeHtml(a.titre)}">` : `<div style="height:200px;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:5rem;">🎨</div>`}
        <div class="lightbox-body">
          <span class="affiche-temple-tag ${templeTagClass(a.temple)}">${templeLabel(a.temple)}</span>
          <h3 style="color:var(--navy);margin:.5rem 0;">${escapeHtml(a.titre)}</h3>
          <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:.75rem;">📅 ${formatDate(a.date)}</p>
          <p>${escapeHtml(a.description)}</p>
        </div>
      </div>
      <button class="lightbox-close" onclick="Pages.closeLightbox()">✕</button>
    `;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
  },

  // ── MODAL LIVRE ──────────────────────────────────────────────
  openLivreModal(livreId) {
    const l = DB.getLivres().find(x => x.id === livreId);
    if (!l) return;
    const emojis = ['📖','📗','📘','📙','📕','📚'];
    const emoji = emojis[l.id % emojis.length];
    const modal = document.getElementById('livreModal');
    modal.querySelector('.modal-header h3').textContent = l.titre;
    modal.querySelector('.modal-body').innerHTML = `
      <div style="display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:120px;height:160px;border-radius:8px;overflow:hidden;flex-shrink:0;background:linear-gradient(135deg,var(--navy),var(--navy-light));display:flex;align-items:center;justify-content:center;">
          ${l.coverUrl ? `<img src="${escapeHtml(l.coverUrl)}" style="width:100%;height:100%;object-fit:cover;" alt="Couverture">` : `<span style="font-size:3.5rem;">${emoji}</span>`}
        </div>
        <div style="flex:1;min-width:160px;">
          <h3 style="color:var(--navy);margin-bottom:.25rem;">${escapeHtml(l.titre)}</h3>
          <p style="font-size:.9rem;color:var(--text-muted);margin-bottom:1rem;">par <strong>${escapeHtml(l.auteur)}</strong></p>
          <p style="font-size:.9rem;line-height:1.6;">${escapeHtml(l.resume)}</p>
          <div style="display:flex;gap:.5rem;margin-top:1.25rem;flex-wrap:wrap;">
            ${l.downloadUrl ? `<a href="${escapeHtml(l.downloadUrl)}" target="_blank" class="btn btn-primary btn-sm">⬇ Télécharger</a>` : ''}
            ${l.commandeUrl ? `<a href="${escapeHtml(l.commandeUrl)}" target="_blank" class="btn btn-gold btn-sm">🛒 Commander</a>` : ''}
            ${!l.downloadUrl && !l.commandeUrl ? `<span style="font-size:.85rem;color:var(--text-muted);">Contactez l'église pour obtenir ce livre.</span>` : ''}
          </div>
        </div>
      </div>
    `;
    document.getElementById('livreModalOverlay').classList.add('open');
  }
};
