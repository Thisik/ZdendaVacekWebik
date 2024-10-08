// script.js
const searchInput = document.getElementById('search-input');
const placeholders = [
    'SUPER PŘEDNÁŠKA',
    'KNIHA O CESTOVÁNÍ',
    'NEJLEPŠÍ FILM A FOTO',
    'TÁBORY PRO DĚTI'
];

let index = 0;

function changePlaceholder() {
    searchInput.placeholder = placeholders[index];
    index = (index + 1) % placeholders.length;
}

// Change placeholder every 2 seconds
setInterval(changePlaceholder, 1200);



const pages324 = [
    'VZZ.html',
    'prednasky.html',
    'mob.html',
    'knihy.html',
    'KMSpre.html',
    'KMSkn.html',
    'JVIkn.html',
    'index.html',
    'hra.html',
    'form.html',
    'BBkn.html',
    'ZPSpre1.html'
];

// Vytvoření workeru pro asynchronní načítání stránek
const searchWorker = new Worker('searchWorker.js');

// Kontejner pro výsledky vyhledávání
const searchResultsContainer = document.createElement('div');
searchResultsContainer.id = 'search-results4410';
document.body.appendChild(searchResultsContainer);

// Při obdržení výsledků z workeru
searchWorker.onmessage = function (event) {
    const { results, query } = event.data;

    // Vyčistíme staré výsledky
    searchResultsContainer.innerHTML = '';

    // Zvýrazníme text na aktuální stránce
    searchAndHighlight(document.body, query);

    // Zobrazíme výsledky z ostatních stránek
    if (results.length > 0) {
        results.forEach(result => {
            const resultLink = document.createElement('a');
            resultLink.href = result.url;
            resultLink.target = '_blank';
            resultLink.textContent = `Výsledek nalezen na stránce: ${result.url}`;
            searchResultsContainer.appendChild(resultLink);
            searchResultsContainer.appendChild(document.createElement('br'));
        });
    } else {
        const noResult = document.createElement('p');
        noResult.textContent = `"${query}" nebylo nalezeno na žádné stránce.`;
        searchResultsContainer.appendChild(noResult);
    }
};

// Po kliknutí na tlačítko spustíme vyhledávání
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (!query) return; // Odejdi, pokud je vstup prázdný

    // Odstraníme předchozí zvýraznění
    clearHighlights();

    // Pošleme dotaz a seznam stránek workeru
    searchWorker.postMessage({ query, pages324 });
});

// Funkce pro zvýraznění textu na aktuální stránce
function searchAndHighlight(element, query) {
    const bodyContent = element.querySelectorAll('*:not(script):not(style):not(input)');
    bodyContent.forEach(el => {
        if (el.children.length === 0 && el.textContent.toLowerCase().includes(query)) {
            highlightText(el, query);
        }
    });
}

// Funkce pro zvýraznění shodného textu v prvku
function highlightText(element, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
}

// Funkce pro odstranění zvýraznění
function clearHighlights() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize(); // Sloučí sousední textové uzly
    });
}

// CSS pro zvýraznění
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: rgba(255, 255, 0, 0.5); /* Poloprůhledná žlutá */
        padding: 0 2px;
        border-radius: 2px;
    }
    #search-results4410 {
        margin-top: 20px;
        font-family: Arial, sans-serif;
        color: blue;
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
    const links = [
        { text: "KNIHY O DOBRODRUŽNÝCH CESTÁCH", url: "knihy.html" },
        { text: "SUPER FUNNY PŘEDNÁŠKY", url: "prednasky.html" },
        { text: "SUPER DĚTSKÉ TÁBORY", url: "https://example.com/tabory" },
        { text: "HRU, KTERÁ SE TU NĚKDE SKRÝVÁ", url: "hra.html" },
        { text: "SKVĚLÝ FILM, KTERÝ TI NASTŘÍHÁM", url: "filmy.html" }
    ];

    const element = document.getElementById("typewriter");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetween = 1000;

    // Definice funkce typeWriter v globálním kontextu
    window.typeWriter = function() {
        console.log("TYPEWRITER IS RUNNING")
        const currentLink = links[textIndex];
        const currentText = currentLink.text;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                element.innerHTML = `<a href="${currentLink.url}" style="text-decoration: none; color: orange; font-family: 'Courier New', Courier, monospace;">${currentText.substring(0, charIndex + 1)}</a>`;
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeWriter, pauseBetween);
            }
        } else {
            if (charIndex > 0) {
                element.innerHTML = `<a href="${currentLink.url}" style="text-decoration: none; color: orange; font-family: 'Courier New', Courier, monospace;">${currentText.substring(0, charIndex - 1)}</a>`;
                charIndex--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % links.length;
                setTimeout(typeWriter, 500);
            }
        }
    }

    typeWriter();
});





function zmenObrazek(obrazek) {
    obrazek.src = 'bejvizad.jpg';
}

function obnovObrazek(obrazek) {
    obrazek.src = 'bejvifr.jpg';
}
function bejvichci() {
    location.replace("#")
}
window.onload = function() {
    const btn1 = document.getElementById('b1');
    const btn2 = document.getElementById('prveka');
    const btn3 = document.getElementById('b3');

    function setupButtonAnimation(buttonToHide, buttonToRedirect, redirectPage) {
        // Přidání animace na tlačítko, které se má skrýt
        buttonToHide.classList.add('animate__animated', 'animate__fadeOut', 'animate__faster');

        // Po skončení animace skrytí tlačítka
        buttonToHide.addEventListener('animationend', () => {
            buttonToHide.style.display = 'none';
        });

        // Přidání animace na tlačítko, které se má také skrýt
        buttonToRedirect.classList.add('animate__animated', 'animate__fadeOut', 'animate__faster');

        // Po skončení animace na druhém tlačítku přesměrování
        buttonToRedirect.addEventListener('animationend', () => {
            buttonToRedirect.style.display = 'none';
            location.replace(redirectPage);
        });
    }

    btn1.addEventListener('click', function() {
        console.log("Funkce byla volána pro tlačítko 1");
        setupButtonAnimation(btn2, btn3, "knihy.html");
    });

    btn2.addEventListener('click', function() {
        console.log("Funkce byla volána pro tlačítko 2");
        setupButtonAnimation(btn1, btn3, "filmy.html");
    });

    btn3.addEventListener('click', function() {
        console.log("Funkce byla volána pro tlačítko 3");
        setupButtonAnimation(btn1, btn2, "prednasky.html");
    });
};

  
  
function zmenObrazek2(obrazek) {
    obrazek.src = 'ksmz.jpg';
}

function obnovObrazek2(obrazek) {
    obrazek.src = 'kmsfr.jpg';
}
function zmenObrazek3(obrazek) {
    obrazek.src = 'z.jpg'

}
function obnovObrazek3(obrazek) {
    obrazek.src = 'fr.jpg';
}


function KMSPREchci() {
    location.replace("KMSpre.html")

}

function formxd(vec) {
    // Zkontroluj, jak vypadá URL při přesměrování
    console.log("Přesměrování na:", "form.html?vec=" + encodeURIComponent(vec));
    window.location.href = "form.html?vec=" + encodeURIComponent(vec);
  }
function KMSknchci() {
    location.replace("KMSkn.html")
}
function bejvichcikn2() {
location.replace("BBkn.html")

}
function JVIchcikn() {
    location.replace("JVIkn.html")
}
function VZZchci() {
    location.replace("VZZ.html")
}
const pages = [
    'VZZ.html',
    'prednasky.html',
    'mob.html',
    'knihy.html',
    'KMSpre.html',
    'KMSkn.html',
    'JVIkn.html',
    'index.html',
    'hra.html',
    'form.html',
    'BBkn.html',
    'index.html',
    'VZZ.html',
    'ZPSpre1.html'
];

async function fetchPageContent(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        // Odstraníme HTML tagy pomocí regulárního výrazu
        const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");
        return { url, plainText };
    } catch (error) {
        console.error(`Chyba při načítání ${url}:`, error);
        return { url, plainText: "" };
    }
}

async function search123() {
    const term = prompt("Zadejte hledaný výraz:");
    if (!term) {
        alert("Vyhledávací výraz je prázdný.");
        return;
    }

    // Zobrazíme modální okno a informujeme o probíhajícím vyhledávání
    const modal = document.getElementById('modal123');
    const modalBody = document.getElementById('modal-body123');
    modalBody.innerHTML = '<p>Vyhledávání probíhá, prosím čekejte...</p>';
    modal.style.display = 'block';

    let allResults = [];

    for (const page of pages) {
        const { url, plainText } = await fetchPageContent(page);

        if (plainText.includes(term)) {
            allResults.push(`Byl nalezen výsledek(pro zobrazení na něj klikni): <a href="${url}" target="_blank">${url}</a>`);
        }
    }

    // Zobrazíme výsledky po skončení vyhledávání
    if (allResults.length > 0) {
        modalBody.innerHTML = allResults.join("<br>");
    } else {
        modalBody.innerHTML = '<p>Nebyly nalezeny žádné výsledky.</p>';
    }

    // Zavření modálního okna
    const closeModal = document.getElementsByClassName('close123')[0];
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
function ZPSprechci() {
    location.replace("ZPSpre1.html")


}


// Funkce pro vyhledávání
function searchMS() {
    let query = document.getElementById('search-input').value.toLowerCase();
    let resultsDiv = document.getElementById('search-resultsBB');
    let clearBtn = document.getElementById('clear-search');
    resultsDiv.innerHTML = ''; // Vymazat předchozí výsledky

    if (query === '') {
        clearBtn.style.display = 'none'; // Schovat tlačítko pro zavření, pokud není žádný dotaz
        return;
    }

    // Seznam stránek, které se budou prohledávat
    let pages = [
        'VZZ.html',
        'prednasky.html',
        'mob.html',
        'knihy.html',
        'KMSpre.html',
        'KMSkn.html',
        'JVIkn.html',
        'index.html',
        'hra.html',
        'form.html',
        'BBkn.html',
        'ZPSpre1.html'
    ];

    // Vyhledávání napříč stránkami
    pages.forEach(page => {
        fetch(page)
            .then(response => response.text())
            .then(text => {
                // Odstranění HTML tagů
                let plainText = text.replace(/<[^>]*>/g, '').toLowerCase();

                // Vyhledání dotazu
                if (plainText.includes(query)) {
                    let result = document.createElement('div');
                    result.innerHTML = `Výsledek nalezen na stránce: <a href="${page}" target="_blank">${page}</a>`;
                    result.style.borderBottom = '1px solid black';
                    resultsDiv.appendChild(result);
                }
            })
            .catch(error => {
                console.error('Chyba při načítání stránky:', page, error);
            });
    });

    // Zobrazit tlačítko pro zavření výsledků
    clearBtn.style.display = 'inline';
    
}

// Event listener pro Live Search
document.getElementById('search-input').addEventListener('input', searchMS);

// Tlačítko pro zavření výsledků
document.getElementById('clear-search').addEventListener('click', function() {
    document.getElementById('search-resultsBB').innerHTML = '';
    document.getElementById('clear-search').style.display = 'none';
    document.getElementById('search-input').value = ''; // Vyčistit vstupní pole
});

