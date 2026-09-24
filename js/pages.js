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
          <p class="hero-tagline">${t('hero_welcome')}</p>
          <h1>${LANG === 'en' ? 'Apostolic Mission<br>of Pentecost' : 'Mission Apostolique<br>de Pentecôte'}</h1>
          <div class="hero-verse">
            ${t('hero_verse')}
            <cite>${t('hero_verse_cite')}</cite>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="App.navigate('rocher')">${t('hero_btn_rocher')}</button>
            <button class="btn btn-ghost" onclick="App.navigate('ebenezer')">${t('hero_btn_ebenezer')}</button>
            <button class="btn btn-gold" onclick="App.navigate('bible')">${t('nav_bible')}</button>
            <button class="btn btn-gold" onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'})">${t('hero_btn_contact')}</button>
          </div>
        </div>
        <div class="hero-scroll">
          <span>${t('hero_scroll')}</span>
          <div class="scroll-arrow"></div>
        </div>
      </section>

      <!-- STATS -->
      <div class="stats-bar">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">${t('home_stat_temples')}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalMessages}</div>
            <div class="stat-label">${t('home_stat_messages')}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalAffiches}</div>
            <div class="stat-label">${t('home_stat_affiches')}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${totalLivres}</div>
            <div class="stat-label">${t('home_stat_livres')}</div>
          </div>
        </div>
      </div>

      <!-- PRÉSENTATION -->
      <section class="section" id="presentation">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">${t('mission_tag')}</span>
            <h2>${t('mission_title')}</h2>
            <div class="section-divider"></div>
            <p class="lead mt-2" style="max-width:660px;margin:0 auto;">
              ${t('mission_lead')}
            </p>
          </div>
          <div class="mission-grid mt-4">
            <div class="mission-card fade-in">
              <div class="mission-icon">📖</div>
              <h4>${t('mission_word_title')}</h4>
              <p>${t('mission_word_text')}</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🕊️</div>
              <h4>${t('mission_spirit_title')}</h4>
              <p>${t('mission_spirit_text')}</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🌍</div>
              <h4>${t('mission_mission_title')}</h4>
              <p>${t('mission_mission_text')}</p>
            </div>
            <div class="mission-card fade-in">
              <div class="mission-icon">🤝</div>
              <h4>${t('mission_community_title')}</h4>
              <p>${t('mission_community_text')}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- NOS TEMPLES -->
      <section class="section section-alt" id="temples-section">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">${t('temples_tag')}</span>
            <h2>${t('temples_title')}</h2>
            <div class="section-divider"></div>
          </div>
          <div class="temples-grid mt-4">
            <div class="temple-card fade-in">
              <div class="temple-card-img">
                <span class="temple-emoji">🏛</span>
              </div>
              <div class="temple-card-body">
                <h3>${t('temple_rocher_name')}</h3>
                <p>${t('temple_rocher_desc')}</p>
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
                  ${t('temple_discover_btn')}
                </button>
              </div>
            </div>
            <div class="temple-card fade-in">
              <div class="temple-card-img" style="background:linear-gradient(135deg,#7B1A1A,#C0392B);">
                <span class="temple-emoji">⛪</span>
              </div>
              <div class="temple-card-body">
                <h3>${t('temple_ebenezer_name')}</h3>
                <p>${t('temple_ebenezer_desc')}</p>
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
                  ${t('temple_discover_btn')}
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
            <span class="section-tag">${t('latest_tag')}</span>
            <h2>${t('home_latest_title')}</h2>
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
            <span class="section-tag">${t('affiches_upcoming_tag')}</span>
            <h2>${t('affiches_latest_title')}</h2>
            <div class="section-divider left"></div>
          </div>
          <div class="affiches-grid mt-4">
            ${latestAffiches.map(a => Pages.renderAfficheCard(a, true)).join('')}
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-outline" onclick="App.navigate('affiches')">${t('affiches_see_all')}</button>
          </div>
        </div>
      </section>
      ` : ''}

      <!-- APPEL À L'ACTION -->
      <div class="cta-section">
        <div class="container">
          <h2>${t('cta_title')}</h2>
          <p>${t('cta_text')}</p>
          <div class="cta-actions">
            <button class="btn btn-white" onclick="document.getElementById('contact-section').scrollIntoView({behavior:'smooth'})">
              ${t('hero_btn_contact')}
            </button>
            <button class="btn btn-ghost" onclick="App.navigate('rocher')">
              ${t('hero_btn_rocher')}
            </button>
            <button class="btn btn-ghost" onclick="App.navigate('ebenezer')">
              ${t('hero_btn_ebenezer')}
            </button>
          </div>
        </div>
      </div>

      <!-- CONTACT -->
      <section class="section" id="contact-section">
        <div class="container">
          <div class="section-header text-center fade-in">
            <span class="section-tag">${t('contact_tag')}</span>
            <h2>${t('contact_title')}</h2>
            <div class="section-divider"></div>
          </div>
          <div class="contact-grid mt-4">
            ${(() => {
              const temples = DB.getTemples();
              const rocher = temples.rocher || {};
              const ebenezer = temples.ebenezer || {};
              const social = DB.getSocial();
              const fb = rocher.facebook || ebenezer.facebook || social.facebook || '';
              const yt = rocher.youtube || ebenezer.youtube || social.youtube || '';
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
                  <h4 style="color:var(--navy);margin-bottom:.5rem;">${t('contact_direct_title')}</h4>
                  <p><strong>Rocher :</strong> ${escapeHtml(rocher.tel || t('contact_not_provided'))}<br><strong>Ebenezer :</strong> ${escapeHtml(ebenezer.tel || t('contact_not_provided'))}</p>
                  <div class="social-links">
                    ${fb ? `<a href="${escapeHtml(fb)}" target="_blank" class="social-link" title="Facebook">f</a>` : ''}
                    ${yt ? `<a href="${escapeHtml(yt)}" target="_blank" class="social-link" title="YouTube" style="background:#FF0000;">▶</a>` : ''}
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
            ${(c.facebook || c.youtube) ? `
            <div class="temple-info-card">
              <div class="info-icon">🌐</div>
              <div class="info-label">Réseaux sociaux</div>
              <div class="info-value" style="display:flex;gap:.75rem;justify-content:center;">
                ${c.facebook ? `<a href="${escapeHtml(c.facebook)}" target="_blank" style="color:var(--gold);" aria-label="Facebook">📘 Facebook</a>` : ''}
                ${c.youtube ? `<a href="${escapeHtml(c.youtube)}" target="_blank" style="color:var(--gold);" aria-label="YouTube">▶ YouTube</a>` : ''}
              </div>
            </div>
            ` : ''}
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
          <h1 data-i18n-inline="affiches_title">${t('affiches_title')}</h1>
          <p>${t('affiches_subtitle')}</p>
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
                <h3>${t('affiches_empty')}</h3>
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
          <h1>${t('livres_title')}</h1>
          <p>${t('livres_subtitle')}</p>
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
                <h3>${t('livres_empty')}</h3>
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
          <h1>${t('podcasts_title')}</h1>
          <p>${t('podcasts_subtitle')}</p>
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
                <h3>${t('podcasts_empty')}</h3>
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
          <h1>${t('audios_title')}</h1>
          <p>${t('audios_subtitle')}</p>
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
                <h3>${t('audios_empty')}</h3>
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

  // ── PAGE BIBLE (bilingue FR/EN) ──────────────────────────────
  renderBible() {
    const savedBook = localStorage.getItem('mpa_bible_book') || 'John';
    const savedChap = parseInt(localStorage.getItem('mpa_bible_chapter') || '1', 10);

    const bookOptions = BIBLE_BOOKS.map(b =>
      `<option value="${b.osis}" ${b.osis === savedBook ? 'selected' : ''}>${LANG === 'en' ? b.en : b.fr}</option>`
    ).join('');

    return `
      <div class="breadcrumb">
        <a href="#" onclick="App.navigate('accueil');return false;">🏠 ${LANG === 'en' ? 'Home' : 'Accueil'}</a>
        <span class="sep">›</span>
        <span class="current">${t('bible_title')}</span>
      </div>
      <section class="temple-page-hero" style="background:linear-gradient(135deg,#4a1a1a,#8b2d2d);">
        <div class="container">
          <div style="font-size:3rem;margin-bottom:1rem;">📖</div>
          <h1>${t('bible_title')}</h1>
          <p>${t('bible_subtitle')}</p>
        </div>
      </section>
      <section class="section" id="bible-content">
        <div class="container" style="max-width:800px;">
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem;">
            <div class="form-group" style="flex:2;min-width:180px;margin:0;">
              <label class="form-label">${t('bible_book')}</label>
              <select id="bibleBookSelect" class="form-control" onchange="Pages.loadBibleChapter(this.value, 1)">
                ${bookOptions}
              </select>
            </div>
            <div class="form-group" style="flex:1;min-width:100px;margin:0;">
              <label class="form-label">${t('bible_chapter')}</label>
              <select id="bibleChapterSelect" class="form-control" onchange="Pages.loadBibleChapter(document.getElementById('bibleBookSelect').value, this.value)">
                <option>${savedChap}</option>
              </select>
            </div>
          </div>
          <div id="bibleChapterView" style="min-height:300px;">
            <div style="text-align:center;padding:3rem 0;color:var(--text-muted);">
              <div style="font-size:2rem;margin-bottom:1rem;">📖</div>
              ${t('bible_loading')}
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:1.5rem;">
            <button class="btn btn-outline btn-sm" onclick="Pages.shiftBibleChapter(-1)">${t('bible_prev')}</button>
            <button class="btn btn-outline btn-sm" onclick="Pages.shiftBibleChapter(1)">${t('bible_next')}</button>
          </div>
        </div>
      </section>
    `;
  },

  initBible() {
    const book = localStorage.getItem('mpa_bible_book') || 'John';
    const chap = parseInt(localStorage.getItem('mpa_bible_chapter') || '1', 10);
    Pages.loadBibleChapter(book, chap);
  },

  async loadBibleChapter(osis, chapterNum) {
    chapterNum = parseInt(chapterNum, 10) || 1;
    localStorage.setItem('mpa_bible_book', osis);
    localStorage.setItem('mpa_bible_chapter', chapterNum);

    const view = document.getElementById('bibleChapterView');
    if (view) view.innerHTML = `<div style="text-align:center;padding:3rem 0;color:var(--text-muted);">${t('bible_loading')}</div>`;

    try {
      const book = await fetchBibleBook(osis);
      const chapters = book.chapters || [];
      const chapIndex = Math.min(Math.max(chapterNum, 1), chapters.length) - 1;
      const chapter = chapters[chapIndex];

      // Met à jour le sélecteur de chapitres selon le nombre réel de chapitres du livre
      const chapSelect = document.getElementById('bibleChapterSelect');
      if (chapSelect) {
        chapSelect.innerHTML = chapters.map((c, i) =>
          `<option value="${i+1}" ${i === chapIndex ? 'selected' : ''}>${i+1}</option>`
        ).join('');
      }

      const bookMeta = BIBLE_BOOKS.find(b => b.osis === osis);
      const bookLabel = bookMeta ? (LANG === 'en' ? bookMeta.en : bookMeta.fr) : osis;

      if (view) {
        view.innerHTML = `
          <h2 style="margin-bottom:1rem;">${bookLabel} ${chapIndex + 1}</h2>
          <div class="bible-verses">
            ${(chapter.verses || []).map(v => `<p style="margin-bottom:.6rem;line-height:1.7;"><sup style="color:var(--gold);font-weight:600;margin-right:.3rem;">${v.number}</sup>${escapeHtml(v.text)}</p>`).join('')}
          </div>
        `;
      }
    } catch (e) {
      console.error(e);
      if (view) view.innerHTML = `<div class="empty-state"><div class="empty-icon">⚠</div><h3>${t('bible_error')}</h3></div>`;
    }
  },

  shiftBibleChapter(delta) {
    const chapSelect = document.getElementById('bibleChapterSelect');
    const bookSelect = document.getElementById('bibleBookSelect');
    if (!chapSelect || !bookSelect) return;
    const current = parseInt(chapSelect.value, 10) || 1;
    const max = chapSelect.options.length;
    let next = current + delta;
    if (next < 1) next = 1;
    if (next > max) next = max;
    Pages.loadBibleChapter(bookSelect.value, next);
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
    const videoHtml = p.videoUrl ? Pages.renderVideoEmbed(p.videoUrl) : `<p style="font-size:.85rem;color:var(--text-muted);">${t('podcasts_coming')}</p>`;
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
    return `<a href="${safeUrl}" target="_blank" class="video-link">${t('podcasts_watch')}</a>`;
  },

  renderAudioCard(a, isAdmin = false) {
    const audioHtml = a.audioUrl ? `
      <div class="audio-player-wrap">
        <audio controls preload="none">
          <source src="${escapeHtml(a.audioUrl)}" type="audio/mpeg">
        </audio>
      </div>` : `<p style="font-size:.85rem;color:var(--text-muted);">${t('audios_coming')}</p>`;
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
