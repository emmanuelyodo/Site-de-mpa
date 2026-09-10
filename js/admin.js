/* ============================================================
   ADMINISTRATION — Mission Apostolique de Pentecôte
   Interface d'administration pour gérer messages, affiches, livres
   ============================================================ */

const ADMIN_PASSWORD = 'mpa2024';

const Admin = {

  // ── CONNEXION ADMIN ─────────────────────────────────────────
  renderLoginPage() {
    return `
      <div class="admin-lock">
        <div class="admin-lock-card fade-in">
          <div style="font-size:3rem;margin-bottom:.75rem;">🔐</div>
          <h2>Administration MPA</h2>
          <p>Accès réservé aux administrateurs de la Mission Apostolique de Pentecôte.</p>
          <div class="form-group">
            <label class="form-label" for="adminPwd">Mot de passe</label>
            <input type="password" id="adminPwd" class="form-control" placeholder="••••••••"
              onkeydown="if(event.key==='Enter')Admin.login()">
          </div>
          <button class="btn btn-primary w-full" style="justify-content:center;" onclick="Admin.login()">
            🔓 Se connecter
          </button>
          <p style="margin-top:1rem;font-size:.8rem;color:var(--text-muted);">
            <a href="#" onclick="App.navigate('accueil');return false;" style="color:var(--navy);">← Retour au site</a>
          </p>
        </div>
      </div>
    `;
  },

  login() {
    const pwd = document.getElementById('adminPwd')?.value;
    if (pwd === ADMIN_PASSWORD) {
      App.isAdmin = true;
      sessionStorage.setItem('mpa_admin', '1');
      showToast('Connexion réussie ! Bienvenue, administrateur.', 'success');
      App.navigate('admin-panel');
    } else {
      showToast('Mot de passe incorrect.', 'error');
      document.getElementById('adminPwd').classList.add('shake');
      setTimeout(() => document.getElementById('adminPwd')?.classList.remove('shake'), 500);
    }
  },

  logout() {
    App.isAdmin = false;
    sessionStorage.removeItem('mpa_admin');
    showToast('Déconnexion réussie.', 'info');
    App.navigate('accueil');
  },

  // ── PANNEAU ADMIN ────────────────────────────────────────────
  renderPanel() {
    const messages = DB.getMessages().sort((a,b) => new Date(b.date)-new Date(a.date));
    const affiches = DB.getAffiches();
    const livres = DB.getLivres();

    return `
      <div class="admin-panel">
        <div class="container">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
            <div>
              <span class="section-tag">Administration</span>
              <h2>Tableau de bord</h2>
            </div>
            <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
              <button class="btn btn-outline btn-sm" onclick="App.navigate('accueil')">← Voir le site</button>
              <button class="btn btn-sm" style="background:var(--red);color:white;" onclick="Admin.logout()">🔒 Déconnexion</button>
            </div>
          </div>

          <!-- STATS RAPIDES -->
          <div class="mission-grid mb-4">
            <div class="mission-card" style="text-align:center;">
              <div style="font-size:2.5rem;font-family:'Playfair Display',serif;color:var(--gold);">${messages.length}</div>
              <h4>Messages</h4>
            </div>
            <div class="mission-card" style="text-align:center;">
              <div style="font-size:2.5rem;font-family:'Playfair Display',serif;color:var(--gold);">${affiches.length}</div>
              <h4>Affiches</h4>
            </div>
            <div class="mission-card" style="text-align:center;">
              <div style="font-size:2.5rem;font-family:'Playfair Display',serif;color:var(--gold);">${livres.length}</div>
              <h4>Livres</h4>
            </div>
            <div class="mission-card" style="text-align:center;">
              <div style="font-size:2.5rem;font-family:'Playfair Display',serif;color:var(--gold);">2</div>
              <h4>Temples</h4>
            </div>
          </div>

          <!-- TABS -->
          <div class="admin-tabs" id="adminTabs">
            <button class="admin-tab active" onclick="Admin.switchTab('messages',this)">🎙 Messages (${messages.length})</button>
            <button class="admin-tab" onclick="Admin.switchTab('affiches',this)">🎨 Affiches (${affiches.length})</button>
            <button class="admin-tab" onclick="Admin.switchTab('livres',this)">📚 Livres (${livres.length})</button>
            <button class="admin-tab" onclick="Admin.switchTab('temples',this)">🏛 Temples & Contacts (2)</button>
          </div>

          <!-- TAB MESSAGES -->
          <div id="tab-messages" class="admin-tab-content">
            <div style="display:flex;justify-content:flex-end;margin-bottom:1rem;gap:.5rem;">
              <button class="btn btn-primary btn-sm" onclick="Admin.openMessageForm('rocher')">+ Rocher des Âges</button>
              <button class="btn btn-sm" style="background:var(--red);color:white;" onclick="Admin.openMessageForm('ebenezer')">+ Ebenezer</button>
            </div>
            ${messages.length > 0 ? `
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Temple</th>
                    <th>Prédicateur</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${messages.map(m => `
                    <tr>
                      <td><strong>${escapeHtml(m.titre)}</strong></td>
                      <td><span class="affiche-temple-tag ${templeTagClass(m.temple)}">${templeLabel(m.temple)}</span></td>
                      <td>${escapeHtml(m.predicateur)}</td>
                      <td>${formatDate(m.date)}</td>
                      <td>
                        <div class="action-btns">
                          <button class="btn-edit" onclick="Admin.openMessageForm('${m.temple}',${m.id})">✏ Modifier</button>
                          <button class="btn-delete" onclick="Admin.deleteMessage(${m.id})">🗑 Supprimer</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : `<div class="empty-state"><div class="empty-icon">🎙</div><h3>Aucun message</h3></div>`}
          </div>

          <!-- TAB AFFICHES -->
          <div id="tab-affiches" class="admin-tab-content hidden">
            <div style="display:flex;justify-content:flex-end;margin-bottom:1rem;">
              <button class="btn btn-primary btn-sm" onclick="Admin.openAfficheForm()">+ Nouvelle affiche</button>
            </div>
            ${affiches.length > 0 ? `
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr><th>Titre</th><th>Temple</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  ${affiches.map(a => `
                    <tr>
                      <td><strong>${escapeHtml(a.titre)}</strong></td>
                      <td><span class="affiche-temple-tag ${templeTagClass(a.temple)}">${templeLabel(a.temple)}</span></td>
                      <td>${formatDate(a.date)}</td>
                      <td>
                        <div class="action-btns">
                          <button class="btn-edit" onclick="Admin.openAfficheForm(${a.id})">✏ Modifier</button>
                          <button class="btn-delete" onclick="Admin.deleteAffiche(${a.id})">🗑 Supprimer</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : `<div class="empty-state"><div class="empty-icon">🎨</div><h3>Aucune affiche</h3></div>`}
          </div>

          <!-- TAB LIVRES -->
          <div id="tab-livres" class="admin-tab-content hidden">
            <div style="display:flex;justify-content:flex-end;margin-bottom:1rem;">
              <button class="btn btn-primary btn-sm" onclick="Admin.openLivreForm()">+ Nouveau livre</button>
            </div>
            ${livres.length > 0 ? `
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr><th>Titre</th><th>Auteur</th><th>Téléchargement</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  ${livres.map(l => `
                    <tr>
                      <td><strong>${escapeHtml(l.titre)}</strong></td>
                      <td>${escapeHtml(l.auteur)}</td>
                      <td>${l.downloadUrl ? `<a href="${escapeHtml(l.downloadUrl)}" target="_blank" style="color:var(--navy);">⬇ Lien</a>` : '—'}</td>
                      <td>
                        <div class="action-btns">
                          <button class="btn-edit" onclick="Admin.openLivreForm(${l.id})">✏ Modifier</button>
                          <button class="btn-delete" onclick="Admin.deleteLivre(${l.id})">🗑 Supprimer</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : `<div class="empty-state"><div class="empty-icon">📚</div><h3>Aucun livre</h3></div>`}
          </div>

          <!-- TAB TEMPLES -->
          <div id="tab-temples" class="admin-tab-content hidden">
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Temple</th>
                    <th>Pasteur Responsable</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.values(DB.getTemples()).map(t => `
                    <tr>
                      <td><strong>${escapeHtml(t.nom)}</strong></td>
                      <td>${escapeHtml(t.responsable)}</td>
                      <td>${escapeHtml(t.tel)}</td>
                      <td>${escapeHtml(t.adresse)}</td>
                      <td>
                        <div class="action-btns">
                          <button class="btn-edit" onclick="Admin.openTempleForm('${t.id}')">✏ Modifier l'église</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    `;
  },

  switchTab(tab, btn) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById('tab-' + tab)?.classList.remove('hidden');
  },

  // ── FORMULAIRE MESSAGE ───────────────────────────────────────
  openMessageForm(temple, editId = null) {
    const msg = editId ? DB.getMessages().find(m => m.id === editId) : null;
    const modal = document.getElementById('modalOverlay');
    modal.querySelector('.modal-header h3').textContent = msg ? '✏ Modifier le message' : '+ Nouveau message';
    modal.querySelector('.modal-body').innerHTML = `
      <form id="messageForm" onsubmit="Admin.saveMessage(event,${editId ? editId : 'null'},'${temple}')">
        <div class="form-group">
          <label class="form-label" for="msgTemple">Temple *</label>
          <select id="msgTemple" class="form-control" required>
            <option value="rocher" ${(!msg || msg.temple==='rocher')?'selected':''}>Rocher des Âges</option>
            <option value="ebenezer" ${(msg && msg.temple==='ebenezer')?'selected':''}>Temple Ebenezer</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="msgTitre">Titre du message *</label>
          <input type="text" id="msgTitre" class="form-control" placeholder="Ex: La puissance de la foi" required value="${msg ? escapeHtml(msg.titre) : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="msgPredicateur">Prédicateur *</label>
          <input type="text" id="msgPredicateur" class="form-control" placeholder="Ex: Pasteur Kofi Mensah" required value="${msg ? escapeHtml(msg.predicateur) : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="msgLecteur">Lecteur biblique</label>
          <input type="text" id="msgLecteur" class="form-control" placeholder="Ex: Frère Emmanuel Adéba" value="${msg ? escapeHtml(msg.lecteur||'') : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="msgDate">Date *</label>
          <input type="date" id="msgDate" class="form-control" required value="${msg ? msg.date : new Date().toISOString().slice(0,10)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="msgDescription">Description</label>
          <textarea id="msgDescription" class="form-control" placeholder="Brève description du message...">${msg ? escapeHtml(msg.description||'') : ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="msgAudio">Lien audio (MP3/URL)</label>
          <input type="url" id="msgAudio" class="form-control" placeholder="https://..." value="${msg ? escapeHtml(msg.audioUrl||'') : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="msgVideo">Lien vidéo (YouTube, etc.)</label>
          <input type="url" id="msgVideo" class="form-control" placeholder="https://youtube.com/..." value="${msg ? escapeHtml(msg.videoUrl||'') : ''}">
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="Admin.closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary btn-sm">${msg ? '💾 Mettre à jour' : '✅ Enregistrer'}</button>
        </div>
      </form>
    `;
    modal.classList.add('open');
  },

  saveMessage(e, editId, temple) {
    e.preventDefault();
    const data = {
      temple: document.getElementById('msgTemple').value,
      titre: document.getElementById('msgTitre').value.trim(),
      predicateur: document.getElementById('msgPredicateur').value.trim(),
      lecteur: document.getElementById('msgLecteur').value.trim(),
      date: document.getElementById('msgDate').value,
      description: document.getElementById('msgDescription').value.trim(),
      audioUrl: document.getElementById('msgAudio').value.trim(),
      videoUrl: document.getElementById('msgVideo').value.trim()
    };
    if (editId) {
      DB.updateMessage(editId, data);
      showToast('Message mis à jour !', 'success');
    } else {
      DB.addMessage(data);
      showToast('Message ajouté avec succès !', 'success');
    }
    this.closeModal();
    // Rafraîchir la vue courante
    const page = App.currentPage;
    App.navigate(page === 'admin-panel' ? 'admin-panel' : data.temple);
  },

  deleteMessage(id) {
    if (!confirm('Supprimer ce message ? Cette action est irréversible.')) return;
    DB.deleteMessage(id);
    showToast('Message supprimé.', 'info');
    App.navigate(App.currentPage);
  },

  // ── FORMULAIRE AFFICHE ───────────────────────────────────────
  openAfficheForm(editId = null) {
    const aff = editId ? DB.getAffiches().find(a => a.id === editId) : null;
    const modal = document.getElementById('modalOverlay');
    modal.querySelector('.modal-header h3').textContent = aff ? '✏ Modifier l\'affiche' : '+ Nouvelle affiche';
    modal.querySelector('.modal-body').innerHTML = `
      <form id="afficheForm" onsubmit="Admin.saveAffiche(event,${editId||'null'})">
        <div class="form-group">
          <label class="form-label" for="affTemple">Temple *</label>
          <select id="affTemple" class="form-control" required>
            <option value="general" ${(!aff||aff.temple==='general')?'selected':''}>Général (tous temples)</option>
            <option value="rocher" ${(aff&&aff.temple==='rocher')?'selected':''}>Rocher des Âges</option>
            <option value="ebenezer" ${(aff&&aff.temple==='ebenezer')?'selected':''}>Temple Ebenezer</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="affTitre">Titre de l'événement *</label>
          <input type="text" id="affTitre" class="form-control" placeholder="Ex: Nuit de Louange 2026" required value="${aff ? escapeHtml(aff.titre) : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="affDate">Date *</label>
          <input type="date" id="affDate" class="form-control" required value="${aff ? aff.date : new Date().toISOString().slice(0,10)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="affDescription">Description</label>
          <textarea id="affDescription" class="form-control" placeholder="Décrivez l'événement...">${aff ? escapeHtml(aff.description||'') : ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Photo / Affiche de l'événement</label>
          <div style="background:var(--bg-alt,#f8f9fa);padding:.75rem;border-radius:8px;border:1px dashed var(--border,#ddd);">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">📁 Choisir une photo sur mon ordinateur :</label>
            <input type="file" accept="image/*" class="form-control" style="margin-bottom:.5rem;" onchange="handleFileUpload(this, 'affImage', 'affImagePreview')">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">🌐 Ou coller l'URL d'une photo en ligne (https://...) :</label>
            <input type="text" id="affImage" class="form-control" placeholder="https://..." value="${aff ? escapeHtml(aff.imageUrl||'') : ''}">
          </div>
          <img id="affImagePreview" src="${aff ? escapeHtml(aff.imageUrl||'') : ''}" style="max-height:140px;margin-top:.75rem;border-radius:8px;display:${aff && aff.imageUrl ? 'block' : 'none'};object-fit:cover;border:1px solid #ddd;">
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="Admin.closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary btn-sm">${aff ? '💾 Mettre à jour' : '✅ Enregistrer'}</button>
        </div>
      </form>
    `;
    modal.classList.add('open');
  },

  saveAffiche(e, editId) {
    e.preventDefault();
    const data = {
      temple: document.getElementById('affTemple').value,
      titre: document.getElementById('affTitre').value.trim(),
      date: document.getElementById('affDate').value,
      description: document.getElementById('affDescription').value.trim(),
      imageUrl: document.getElementById('affImage').value.trim()
    };
    if (editId) {
      DB.updateAffiche(editId, data);
      showToast('Affiche mise à jour !', 'success');
    } else {
      DB.addAffiche(data);
      showToast('Affiche ajoutée !', 'success');
    }
    this.closeModal();
    App.navigate(App.currentPage);
  },

  deleteAffiche(id) {
    if (!confirm('Supprimer cette affiche ?')) return;
    DB.deleteAffiche(id);
    showToast('Affiche supprimée.', 'info');
    App.navigate(App.currentPage);
  },

  // ── FORMULAIRE LIVRE ─────────────────────────────────────────
  openLivreForm(editId = null) {
    const livre = editId ? DB.getLivres().find(l => l.id === editId) : null;
    const modal = document.getElementById('modalOverlay');
    modal.querySelector('.modal-header h3').textContent = livre ? '✏ Modifier le livre' : '+ Nouveau livre';
    modal.querySelector('.modal-body').innerHTML = `
      <form id="livreForm" onsubmit="Admin.saveLivre(event,${editId||'null'})">
        <div class="form-group">
          <label class="form-label" for="livTitre">Titre *</label>
          <input type="text" id="livTitre" class="form-control" placeholder="Titre du livre" required value="${livre ? escapeHtml(livre.titre) : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="livAuteur">Auteur *</label>
          <input type="text" id="livAuteur" class="form-control" placeholder="Nom de l'auteur" required value="${livre ? escapeHtml(livre.auteur) : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="livResume">Résumé *</label>
          <textarea id="livResume" class="form-control" placeholder="Résumé du livre..." required>${livre ? escapeHtml(livre.resume) : ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Couverture du livre</label>
          <div style="background:var(--bg-alt,#f8f9fa);padding:.75rem;border-radius:8px;border:1px dashed var(--border,#ddd);">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">📁 Choisir une photo sur mon ordinateur :</label>
            <input type="file" accept="image/*" class="form-control" style="margin-bottom:.5rem;" onchange="handleFileUpload(this, 'livCover', 'livCoverPreview')">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">🌐 Ou coller l'URL d'une photo en ligne (https://...) :</label>
            <input type="text" id="livCover" class="form-control" placeholder="https://..." value="${livre ? escapeHtml(livre.coverUrl||'') : ''}">
          </div>
          <img id="livCoverPreview" src="${livre ? escapeHtml(livre.coverUrl||'') : ''}" style="max-height:140px;margin-top:.75rem;border-radius:8px;display:${livre && livre.coverUrl ? 'block' : 'none'};object-fit:cover;border:1px solid #ddd;">
        </div>
        <div class="form-group">
          <label class="form-label" for="livDownload">Lien de téléchargement (PDF)</label>
          <input type="text" id="livDownload" class="form-control" placeholder="https://..." value="${livre ? escapeHtml(livre.downloadUrl||'') : ''}">
        </div>
        <div class="form-group">
          <label class="form-label" for="livCommande">Lien de commande</label>
          <input type="text" id="livCommande" class="form-control" placeholder="https://..." value="${livre ? escapeHtml(livre.commandeUrl||'') : ''}">
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="Admin.closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary btn-sm">${livre ? '💾 Mettre à jour' : '✅ Enregistrer'}</button>
        </div>
      </form>
    `;
    modal.classList.add('open');
  },

  saveLivre(e, editId) {
    e.preventDefault();
    const data = {
      titre: document.getElementById('livTitre').value.trim(),
      auteur: document.getElementById('livAuteur').value.trim(),
      resume: document.getElementById('livResume').value.trim(),
      coverUrl: document.getElementById('livCover').value.trim(),
      downloadUrl: document.getElementById('livDownload').value.trim(),
      commandeUrl: document.getElementById('livCommande').value.trim()
    };
    if (editId) {
      DB.updateLivre(editId, data);
      showToast('Livre mis à jour !', 'success');
    } else {
      DB.addLivre(data);
      showToast('Livre ajouté !', 'success');
    }
    this.closeModal();
    App.navigate(App.currentPage);
  },

  deleteLivre(id) {
    if (!confirm('Supprimer ce livre ?')) return;
    DB.deleteLivre(id);
    showToast('Livre supprimé.', 'info');
    App.navigate(App.currentPage);
  },

  // ── FORMULAIRE TEMPLE ────────────────────────────────────────
  openTempleForm(templeId) {
    const temple = DB.getTemple(templeId);
    const modal = document.getElementById('modalOverlay');
    modal.querySelector('.modal-header h3').textContent = '✏ Modifier : ' + temple.nom;
    const horairesTxt = Array.isArray(temple.horaires) ? temple.horaires.join('\n') : (temple.horaires || '');

    modal.querySelector('.modal-body').innerHTML = `
      <form id="templeForm" onsubmit="Admin.saveTemple(event, '${templeId}')">
        <div class="form-group">
          <label class="form-label" for="tmpNom">Nom du Temple *</label>
          <input type="text" id="tmpNom" class="form-control" required value="${escapeHtml(temple.nom)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="tmpResponsable">Pasteur Responsable / Dirigeant *</label>
          <input type="text" id="tmpResponsable" class="form-control" placeholder="Ex: Pasteur Kofi Mensah" required value="${escapeHtml(temple.responsable)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="tmpTel">Numéro de téléphone *</label>
          <input type="text" id="tmpTel" class="form-control" placeholder="Ex: +228 90 00 00 00" required value="${escapeHtml(temple.tel)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="tmpAdresse">Adresse du Temple *</label>
          <input type="text" id="tmpAdresse" class="form-control" placeholder="Ex: Lomé, Togo - Quartier Tokoin" required value="${escapeHtml(temple.adresse)}">
        </div>
        <div class="form-group">
          <label class="form-label" for="tmpHoraires">Horaires des cultes (1 horaire par ligne)</label>
          <textarea id="tmpHoraires" class="form-control" rows="4" placeholder="Dimanche : 8h00&#10;Mercredi : 18h30">${escapeHtml(horairesTxt)}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="tmpDescription">Description de la communauté</label>
          <textarea id="tmpDescription" class="form-control" rows="3">${escapeHtml(temple.description)}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Photo / Logo du Temple</label>
          <div style="background:var(--bg-alt,#f8f9fa);padding:.75rem;border-radius:8px;border:1px dashed var(--border,#ddd);">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">📁 Choisir une photo sur mon ordinateur :</label>
            <input type="file" accept="image/*" class="form-control" style="margin-bottom:.5rem;" onchange="handleFileUpload(this, 'tmpLogo', 'tmpLogoPreview')">
            <label style="font-size:.8rem;color:var(--navy);font-weight:600;display:block;margin-bottom:.35rem;">🌐 Ou coller l'URL d'une photo en ligne (https://...) :</label>
            <input type="text" id="tmpLogo" class="form-control" placeholder="https://..." value="${escapeHtml(temple.logo||'')}">
          </div>
          <img id="tmpLogoPreview" src="${escapeHtml(temple.logo||'')}" style="max-height:100px;margin-top:.75rem;border-radius:50%;display:${temple.logo ? 'block' : 'none'};object-fit:cover;border:2px solid var(--gold);">
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="Admin.closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary btn-sm">💾 Mettre à jour les infos</button>
        </div>
      </form>
    `;
    modal.classList.add('open');
  },

  saveTemple(e, templeId) {
    e.preventDefault();
    const data = {
      nom: document.getElementById('tmpNom').value.trim(),
      responsable: document.getElementById('tmpResponsable').value.trim(),
      tel: document.getElementById('tmpTel').value.trim(),
      adresse: document.getElementById('tmpAdresse').value.trim(),
      horaires: document.getElementById('tmpHoraires').value.split('\n').filter(Boolean),
      description: document.getElementById('tmpDescription').value.trim(),
      logo: document.getElementById('tmpLogo').value.trim()
    };
    DB.updateTemple(templeId, data);
    showToast('Informations du temple enregistrées avec succès !', 'success');
    this.closeModal();
    App.navigate('admin-panel');
  },

  closeModal() {
    document.getElementById('modalOverlay')?.classList.remove('open');
  }
};
