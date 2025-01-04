function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active")
        ? "hidden"
        : "";
}

const addons = [
    {
        name: "TorBox",
        link: "https://stremio.torbox.app/manifest.json",
        icon: "addonicons/torbox.png",
        category: "Featured",
        configureUrl: "https://torbox.app/settings",
        description: "The New Up and Coming Debrid Link Addon",
        features: [
            "Access to SubSource's vast library of subtitles",
            "Support for multiple languages",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your SubSource account. <a href='torbox-guide.html' class='text-blue-500'>Read More</a>"
    },
    {
        name: "Cinemeta",
        link: "vidi://v3-cinemeta.strem.io/manifest.json",
        icon: "addonicons/cine.jpeg",
        category: "Metadata",
        label: "Must have",
        installUrl: "vidi://v3-cinemeta.strem.io/manifest.json",
        description: "The official addon for movie, series, and anime metadata. Essential for basic functionality, providing comprehensive information about titles.",
        features: [
            "Detailed movie and TV show information",
            "Cast and crew details",
            "IMDb ratings integration",
            "Episode descriptions",
            "Release dates and runtime information"
        ],
        installation: "Click the Install button to add this addon to your Vidi player. No configuration required."
    },
    {
        name: "Torrentio",
        link: "https://torrentio.strem.fun/manifest.json",
        icon: "addonicons/torrentio.png",
        category: "Debrid Links",
        label: "Must have",
        configureUrl: "https://torrentio.strem.fun/configure",
        description: "Essential debrid link addon that provides access to a vast library of high-quality streams.",
        features: [
            "Access to a large library of torrent files",
            "Support for multiple debrid services",
            "High-quality streams",
            "Extensive content coverage"
        ],
        installation: "Click the Configure button to set up this addon with your debrid service."
    },
    {
        name: "IMDb Catalogs",
        link: "https://1fe84bc728af-imdb-catalogs.baby-beamup.club/manifest.json",
        icon: "addonicons/imdb.png",
        category: "Catalogs",
        label: "Top pick",
        installUrl: "vidi://1fe84bc728af-imdb-catalogs.baby-beamup.club/manifest.json",
        description: "A top-rated catalog addon providing access to IMDb's vast library of movie and TV show information.",
        features: [
            "Access to IMDb's vast library",
            "Curated lists and collections",
            "Popular and trending content",
            "Comprehensive movie data"
        ],
        installation: "Click the Install button to add this addon to your Vidi player. No configuration required."
    },
    {
        name: "MediaFusion",
        link: "https://mediafusion.elfhosted.com/manifest.json",
        icon: "addonicons/elf.jpeg",
        category: "Debrid Links",
        configureUrl: "https://mediafusion.elfhosted.com/configure",
        description: "A reliable debrid link addon for accessing a wide range of media content.",
        features: [
            "Access to a large library of media files",
            "Support for multiple debrid services",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your debrid service."
    },
    {
        name: "Comet",
        link: "https://comet.elfhosted.com/manifest.json",
        icon: "addonicons/comet-modified.png",
        category: "Debrid Links",
        label: "Must have",
        configureUrl: "https://comet.elfhosted.com/configure",
        description: "A must-have debrid link addon known for its reliability and extensive content coverage.",
        features: [
            "High-quality streams",
            "Reliable content sources",
            "Support for multiple debrid services",
            "Regular updates"
        ],
        installation: "Click the Configure button to set up this addon with your debrid service."
    },
    {
        name: "Streaming Catalogs",
        link: "https://7a82163c306e-stremio-netflix-catalog-addon.baby-beamup.club/manifest.json",
        icon: "addonicons/disney.png",
        category: "Catalogs",
        label: "Top pick",
        configureUrl: "https://7a82163c306e-stremio-netflix-catalog-addon.baby-beamup.club/configure",
        description: "A top-rated catalog addon that provides organized access to streaming service content.",
        features: [
            "Organized streaming catalogs",
            "Multiple service integration",
            "Updated content listings",
            "Easy navigation"
        ],
        installation: "Click the Configure button to set up this addon with your streaming services."
    },
    {
        name: "The Movie Database Addon",
        link: "https://422c10ef7d4f-tmdb.baby-beamup.club/manifest.json",
        icon: "addonicons/tmdb.jpeg",
        category: "Metadata",
        label: "Top pick",
        note: "Preferably for foreign languages",
        installUrl: "vidi://422c10ef7d4f-tmdb.baby-beamup.club/manifest.json",
        description: "A comprehensive metadata addon particularly excellent for foreign language content.",
        features: [
            "Extensive foreign language support",
            "Detailed movie and TV information",
            "International ratings and reviews",
            "Multi-language metadata"
        ],
        installation: "Click the Install button to add this addon to your Vidi player. No configuration required."
    },
    {
        name: "Trakt.tv",
        link: "https://2ecbbd610840-trakt.baby-beamup.club/manifest.json",
        icon: "addonicons/trakt.png",
        category: "Catalogs",
        configureUrl: "https://2ecbbd610840-trakt.baby-beamup.club/configure",
        description: "A catalog addon that provides access to Trakt.tv's vast library of movie and TV show information.",
        features: [
            "Access to Trakt's vast library of movie and TV show lists and catalogs",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your Trakt.tv account."
    },
    {
        name: "OpenSubtitles",
        link: "https://2ecbbd610840-opensubtitles.baby-beamup.club/manifest.json",
        icon: "addonicons/opensub.png",
        category: "Subtitles",
        configureUrl: "https://opensubtitlesv3-pro.dexter21767.com/configure/",
        description: "A subtitle addon that provides access to OpenSubtitles' vast library of subtitles.",
        features: [
            "Access to OpenSubtitles' vast library of subtitles",
            "Support for multiple languages",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your OpenSubtitles account."
    },
    {
        name: "Anime Kitsu",
        link: "https://anime-kitsu.strem.fun/manifest.json",
        icon: "addonicons/anime-modified.png",
        category: "Catalogs",
        installUrl: "vidi://anime-kitsu.strem.fun/manifest.json",
        description: "A catalog addon that provides access to Anime Kitsu's vast library of anime information.",
        features: [
            "Access to Anime Kitsu's vast library of anime information",
            "Detailed information about titles, including cast, crew, and ratings",
            "Easy to use interface"
        ],
        installation: "Click the Install button to add this addon to your Vidi player. No configuration required."
    },
    {
        name: "Easy News+",
        link: "https://b89262c192b0-stremio-easynews-addon.baby-beamup.club/manifest.json",
        icon: "addonicons/easynews.jpeg",
        category: "Other",
        configureUrl: "https://b89262c192b0-stremio-easynews-addon.baby-beamup.club/configure",
        description: "An addon that provides access to Easy News+.",
        features: [
            "Access to Easy News+",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your Easy News+ account."
    },
    {
        name: "Cyberflix Catalogs",
        link: "https://cyberflix.elfhosted.com/manifest.json",
        icon: "addonicons/cyber.png",
        category: "Catalogs",
        installUrl: "vidi://cyberflix.elfhosted.com/manifest.json",
        description: "A catalog addon that provides access to Cyberflix's vast library of movie and TV show information.",
        features: [
            "Access to Cyberflix's vast library of movie and TV show information",
            "Detailed information about titles, including cast, crew, and ratings",
            "Easy to use interface"
        ],
        installation: "Click the Install button to add this addon to your Vidi player. No configuration required."
    },
    {
        name: "Letterboxd",
        link: "https://letterboxd.almosteffective.com/manifest.json",
        icon: "addonicons/letterboxd.png",
        category: "Catalogs",
        configureUrl: "https://letterboxd.almosteffective.com/configure",
        description: "A catalog addon that provides access to Letterboxd's vast library of movie information.",
        features: [
            "Access to Letterboxd's vast library of movie information",
            "Detailed information about titles, including cast, crew, and ratings",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your Letterboxd account."
    },
    {
        name: "Jackettio",
        link: "https://jackettio.elfhosted.com/manifest.json",
        icon: "addonicons/jackett.png",
        category: "Debrid Links",
        configureUrl: "https://jackettio.elfhosted.com/configure",
        description: "A debrid link addon that provides access to a wide range of media files.",
        features: [
            "Access to a large library of media files",
            "Support for multiple debrid services",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your debrid service."
    },
    {
        name: "SubSource Subtitles",
        link: "https://subsource.strem.bar/manifest.json",
        icon: "addonicons/subsource.png",
        category: "Subtitles",
        configureUrl: "https://subsource.strem.bar/configure",
        description: "A subtitle addon that provides access to SubSource's vast library of subtitles.",
        features: [
            "Access to SubSource's vast library of subtitles",
            "Support for multiple languages",
            "Easy to use interface"
        ],
        installation: "Click the Configure button to set up this addon with your SubSource account."
    },
    {
        name: "MdbList",
        link: "https://1fe84bc728af-stremio-mdblist.baby-beamup.club/manifest.json",
        icon: "addonicons/mdblist.png",
        category: "Catalogs",
        configureUrl: "https://1fe84bc728af-stremio-mdblist.baby-beamup.club/configure",
        description: "A catalog addon that provides access to MdbList's vast library of movie and TV show information.",
        features: [
            "Access to MdbList's vast library of movie and TV show information",
            "Detailed information about titles, including cast, crew, and ratings",
            "Easy to use interface"
        ],
        
    },
    
];

function showModal(addon) {
    const modal = document.getElementById('addonModal');
    const modalContent = modal.querySelector('#modalContent');
    
    // Set modal content
    document.getElementById('modalIcon').src = addon.icon;
    document.getElementById('modalIcon').alt = addon.name;
    document.getElementById('modalTitle').textContent = addon.name;
    document.getElementById('modalCategory').textContent = addon.category;
    document.getElementById('modalDescription').textContent = addon.description;
    
    // Set features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    addon.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    document.getElementById('modalInstallation').innerHTML = addon.installation;
    
    // Setup buttons
    const copyBtn = document.getElementById('modalCopyBtn');
    const configureBtn = document.getElementById('modalConfigureBtn');
    const installBtn = document.getElementById('modalInstallBtn');
    
    copyBtn.dataset.link = addon.link;
    
    if (addon.configureUrl) {
        configureBtn.dataset.url = addon.configureUrl;
        configureBtn.classList.remove('hidden');
    } else {
        configureBtn.classList.add('hidden');
    }
    
    if (addon.installUrl) {
        installBtn.dataset.url = addon.installUrl;
        installBtn.classList.remove('hidden');
    } else {
        installBtn.classList.add('hidden');
    }
    
    // Show modal with animation
    modal.classList.add('active');
    modalContent.classList.add('modal-enter');
}

function closeModal() {
    const modal = document.getElementById('addonModal');
    const modalContent = modal.querySelector('#modalContent');
    
    modalContent.classList.remove('modal-enter');
    modalContent.classList.add('modal-leave');
    
    setTimeout(() => {
        modal.classList.remove('active');
        modalContent.classList.remove('modal-leave');
    }, 300);
}

function renderAddons(filter = "", category = "") {
    const container = document.getElementById("addons");
    container.innerHTML = "";

    addons
        .filter((addon) => {
            const matchesFilter = addon.name
                .toLowerCase()
                .includes(filter.toLowerCase());
            const matchesCategory = !category || addon.category === category;
            return matchesFilter && matchesCategory;
        })
        .forEach((addon) => {
            const card = document.createElement("div");
            card.className =
                "card bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center cursor-pointer";
            
            // Add click handler for the entire card
            card.onclick = (e) => {
                // Don't show modal if clicking buttons
                if (!e.target.closest('button')) {
                    showModal(addon);
                }
            };

            card.innerHTML = `
                <img src="${addon.icon}" alt="${addon.name}" class="w-16 h-16 mb-4 rounded-lg">
                <h3 class="text-xl mb-2">${addon.name}</h3>
                <p class="text-gray-400 mb-2">${addon.category}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${addon.label ? `
                        <span class="px-2.5 py-1 text-xs font-medium rounded-full inline-flex items-center gap-1
                        ${addon.label === 'Must have' ? 'bg-red-400 text-white' : 
                        addon.label === 'Top pick' ? 'bg-blue-400 text-white' : 
                        'bg-gray-400 text-white'}">
                            <i class="fas ${addon.label === 'Must have' ? 'fa-fire' : 'fa-star'} text-xs"></i>
                            ${addon.label}
                        </span>
                    ` : ''}
                    ${addon.note === 'Preferably for foreign languages' ? `
                        <span class="px-2.5 py-1 text-xs font-medium rounded-full inline-flex items-center gap-1 bg-purple-400 text-white">
                            <i class="fas fa-globe text-xs"></i>
                            Languages
                        </span>
                    ` : ''}
                </div>
                ${addon.name === 'TorBox' ? `
                <div class="mt-4">
                    <a href="torbox-guide.html" class="text-blue-500 hover:underline">Read More</a>
                </div>
                ` : ''}
                <div class="button-group">
                    <button onclick="copyLink('${addon.link}', event, this)" 
                            class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Copy
                    </button>
                    ${addon.configureUrl ? `
                    <button onclick="window.open('${addon.configureUrl}', '_blank')" 
                            class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Configure
                    </button>
                    ` : ''}
                    ${addon.installUrl ? `
                    <button onclick="window.open('${addon.installUrl}', '_self')" 
                            class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Install
                    </button>
                    ` : ''}
                </div>
            `;

            container.appendChild(card);
        });
}

// Close modal when clicking outside
document.getElementById('addonModal').addEventListener('click', (e) => {
    if (e.target.id === 'addonModal') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Enhanced search functionality
let searchTimeout;
const searchInput = document.getElementById("search");
const searchClear = document.getElementById("searchClear");

function debounceSearch(func, wait) {
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(searchTimeout);
            func(...args);
        };
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(later, wait);
    };
}

// Set up search event listeners
searchInput.addEventListener("input", debounceSearch(e => {
    const searchTerm = e.target.value;
    searchClear.classList.toggle("visible", searchTerm.length > 0);
    renderAddons(searchTerm, currentCategory);
}, 300));

searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.remove("visible");
    renderAddons("", currentCategory);
    searchInput.focus();
});

// Track current category
let currentCategory = "";

function filterCategory(category) {
    currentCategory = category;
    const searchInput = document.getElementById("search");
    renderAddons(searchInput.value, category);
}

function copyLink(link, event, element) {
    event.preventDefault();
    navigator.clipboard.writeText(link).then(() => {
        const alert = document.getElementById("copyAlert");
        element.textContent = "Copied!";
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
            element.textContent = "Copy";
        }, 2000);
    });
}

// Initial render
renderAddons();