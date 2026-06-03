/**
 * UNIVERS CONSTRUCTION - Project Navigation Module
 * Gère la navigation vers les détails des projets
 */

/**
 * Rend les cartes de projet cliquables
 * À appeler après le rendu dynamique des projets
 */
function makeProjectsClickable() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Ajoute le style curseur
        card.style.cursor = 'pointer';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        // Récupère l'ID du projet depuis l'attribut data
        const projectId = card.getAttribute('data-project-id');
        
        if (!projectId) {
            console.warn('Project card sans data-project-id:', card);
            return;
        }
        
        // Ajoute l'événement au clic
        card.addEventListener('click', () => {
            navigateToProjectDetail(projectId);
        });
        
        // Ajoute l'effet hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow)';
        });
        
        // Ajoute l'accessibilité (Enter/Space sur clavier)
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigateToProjectDetail(projectId);
            }
        });
    });
}

/**
 * Navigue vers la page de détail du projet
 */
function navigateToProjectDetail(projectId) {
    // Valide l'ID
    if (!projectId || isNaN(parseInt(projectId))) {
        console.error('Invalid project ID:', projectId);
        return;
    }
    
    // Stocke l'ID du projet en session
    sessionStorage.setItem('currentProjectId', projectId);
    
    // Redirige vers la page de détail
    window.location.href = `project-detail.html?id=${projectId}`;
}

/**
 * Enregistre les projets à rendre cliquables
 * (à appeler après le rendu dynamique)
 */
function setupProjectNavigation() {
    // Attend un peu pour que le DOM soit complètement rendu
    setTimeout(() => {
        makeProjectsClickable();
    }, 100);
}

/**
 * Exporte les fonctions pour utilisation globale
 */
if (typeof window !== 'undefined') {
    window.makeProjectsClickable = makeProjectsClickable;
    window.navigateToProjectDetail = navigateToProjectDetail;
    window.setupProjectNavigation = setupProjectNavigation;
}
