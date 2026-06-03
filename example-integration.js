/**
 * UNIVERS CONSTRUCTION - Example Integration
 * Exemple de code pour intégrer les projets cliquables
 * Remplacez cette logique dans votre code de rendu existant
 */

/**
 * EXEMPLE : Fonction de rendu des projets (à adapter à votre code actuel)
 */
function renderProjectsExample() {
    // Récupère tous les projets
    const projects = getAllProjects();
    const currentLang = getCurrentLanguage(); // À adapter selon votre implémentation
    
    // Génère le HTML
    let projectsHTML = '';
    
    projects.forEach(project => {
        // 🔑 IMPORTANT : Ajouter data-project-id pour la navigation
        projectsHTML += `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-img" style="background-image: url('${project.image}')"></div>
                <div class="project-info">
                    <span class="project-tag">${getTranslatedText(project.category, currentLang)}</span>
                    <h3>${getTranslatedText(project.title, currentLang)}</h3>
                    <p>${getTranslatedText(project.shortDesc, currentLang)}</p>
                </div>
            </div>
        `;
    });
    
    // Insère dans le DOM
    const container = document.getElementById('dynamicProjectsContainer');
    if (container) {
        container.innerHTML = projectsHTML;
        
        // 🔑 IMPORTANT : Activer la navigation après le rendu
        setupProjectNavigation();
    }
}

/**
 * EXEMPLE : Fonction pour obtenir la langue actuelle
 * Adaptez selon votre implémentation existante
 */
function getCurrentLanguage() {
    // Option 1 : Depuis localStorage
    const lang = localStorage.getItem('language');
    if (lang) return lang;
    
    // Option 2 : Depuis l'attribut HTML
    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang) return htmlLang;
    
    // Défaut
    return 'fr';
}

/**
 * EXEMPLE : Intégration avec un changement de langue
 * Appelez cette fonction quand la langue change
 */
function onLanguageChange(newLang) {
    // Mettez à jour la langue globale
    localStorage.setItem('language', newLang);
    
    // Re-rendez les projets
    renderProjectsExample();
}

/**
 * EXEMPLE : Intégration avec un changement de thème
 * Appelez cette fonction quand le thème change
 */
function onThemeChange(newTheme) {
    // Le thème est géré par les CSS variables
    // Aucun re-rendu nécessaire, mais vous pouvez ajouter une logique ici
    console.log('Theme changed to:', newTheme);
}

/**
 * EXEMPLE : Initialisation au chargement de la page
 */
function initializeProjects() {
    // Attendre le chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderProjectsExample);
    } else {
        renderProjectsExample();
    }
}

// Appelez cette fonction au chargement
// initializeProjects();

/**
 * ============================================================
 * INTÉGRATION DANS VOTRE CODE EXISTANT
 * ============================================================
 * 
 * 1. AVANT : Votre code actuel
 * 
 * function renderProjects() {
 *     let projectsHTML = '';
 *     // ... votre logique actuelle ...
 *     container.innerHTML = projectsHTML;
 * }
 * 
 * 2. APRÈS : Code modifié
 * 
 * function renderProjects() {
 *     let projectsHTML = '';
 *     
 *     // Utilisez project-data.js
 *     getAllProjects().forEach(project => {
 *         projectsHTML += `
 *             <div class="project-card" data-project-id="${project.id}">
 *                 <div class="project-img" 
 *                      style="background-image: url('${project.image}')"></div>
 *                 <div class="project-info">
 *                     <span class="project-tag">
 *                         ${getTranslatedText(project.category, currentLang)}
 *                     </span>
 *                     <h3>${getTranslatedText(project.title, currentLang)}</h3>
 *                     <p>${getTranslatedText(project.shortDesc, currentLang)}</p>
 *                 </div>
 *             </div>
 *         `;
 *     });
 *     
 *     container.innerHTML = projectsHTML;
 *     
 *     // ✅ AJOUTER CETTE LIGNE
 *     setupProjectNavigation();
 * }
 * 
 * ============================================================
 */

/**
 * EXEMPLE : Gestion des événements de changement de langue
 * À adapter selon votre système de langue existant
 */
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            const newLang = e.target.value;
            onLanguageChange(newLang);
        });
    }
});

/**
 * ============================================================
 * CHECKLIST D'INTÉGRATION
 * ============================================================
 * 
 * ✓ Fichiers ajoutés :
 *   - project-data.js
 *   - project-detail.html
 *   - project-navigation.js
 * 
 * ✓ Modifications dans index.html :
 *   - [ ] Ajouter <script src="project-data.js"></script>
 *   - [ ] Ajouter <script src="project-navigation.js"></script>
 *   - [ ] Ajouter data-project-id aux cartes
 *   - [ ] Appeler setupProjectNavigation() après rendu
 * 
 * ✓ Tests :
 *   - [ ] Vérifier que les cartes sont cliquables
 *   - [ ] Tester la navigation
 *   - [ ] Tester la galerie
 *   - [ ] Tester sur mobile
 * 
 * ============================================================
 */

/**
 * Exporte les fonctions
 */
if (typeof window !== 'undefined') {
    window.renderProjectsExample = renderProjectsExample;
    window.getCurrentLanguage = getCurrentLanguage;
    window.onLanguageChange = onLanguageChange;
    window.onThemeChange = onThemeChange;
    window.initializeProjects = initializeProjects;
}
