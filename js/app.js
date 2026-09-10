/* ============================================================
   APP ROUTER — Mission Apostolique de Pentecôte
   SPA Router + Navigation + Initialisation
   ============================================================ */

const App = {
  currentPage: 'accueil',
  isAdmin: false,

  init() {
    // Vérifier session admin
    if (sessionStorage.getItem('mpa_admin') === '1') {
      this.isAdmin = true;
    }

    // Navigation initiale depuis hash
    const hash = window.location.hash.replace('#', '') || 'accueil';
    this.navigate(hash, false);

    // Événements
    window.addEventListener('hashchange', () => {
      const page = window.location.hash.replace('#', '') || 'accueil';
      this.navigate(page, false);
    });

    // Hamburger menu
    document.getElementById('hamburger')?.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      menu.classList.toggle('open');
    });

    // Fermer menu mobile au clic lien
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navMenu')?.classList.remove('open');
      });
    });

    // Fermer lightbox au clic fond
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') Pages.closeLightbox();
    });

    // Fermer modal livre au clic fond
    document.getElementById('livreModalOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'livreModalOverlay') {
        e.currentTarget.classList.remove('open');
      }
    });

    // Scroll to top
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('scrollTop');
      if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    });

    // Observer pour animations fade-in
    this.initFadeObserver();
  },

  navigate(page, pushHash = true) {
    this.currentPage = page;

    // Mettre à jour hash URL
    if (pushHash) {
      window.location.hash = page;
    }

    // Mettre à jour nav active
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    // Mettre à jour bouton admin dans nav
    const adminBtn = document.getElementById('navAdminBtn');
    if (adminBtn) {
      if (this.isAdmin) {
        adminBtn.textContent = '🛡 Admin';
        adminBtn.onclick = () => this.navigate('admin-panel');
      }
    }

    // Rendu du contenu
    const main = document.getElementById('main-content');
    if (!main) return;

    let html = '';

    switch (page) {
      case 'accueil':
        html = Pages.renderAccueil();
        break;
      case 'rocher':
        html = Pages.renderTemple('rocher');
        break;
      case 'ebenezer':
        html = Pages.renderTemple('ebenezer');
        break;
      case 'affiches':
        html = Pages.renderAffiches();
        break;
      case 'livres':
        html = Pages.renderLivres();
        break;
      case 'admin':
        if (this.isAdmin) {
          this.navigate('admin-panel', pushHash);
          return;
        }
        html = Admin.renderLoginPage();
        break;
      case 'admin-panel':
        if (!this.isAdmin) {
          this.navigate('admin', pushHash);
          return;
        }
        html = Admin.renderPanel();
        break;
      default:
        html = Pages.renderAccueil();
        this.currentPage = 'accueil';
    }

    main.innerHTML = `<div class="page-transition">${html}</div>`;

    // Scroll en haut (sauf page d'accueil pour garder l'animation)
    if (page !== 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Réinitialiser observer fade-in
    setTimeout(() => this.initFadeObserver(), 50);
  },

  initFadeObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
};

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => App.init());
