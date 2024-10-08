// Funkce pro načtení obsahu jednotlivých stránek
async function fetchPageContent(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        // Odstraníme HTML tagy
        const plainText = text.replace(/<\/?[^>]+(>|$)/g, " ");
        return { url, plainText };
    } catch (error) {
        console.error(`Chyba při načítání ${url}:`, error);
        return { url, plainText: "" };
    }
}

onmessage = async function (event) {
    const { query, pages } = event.data;
    let results = [];

    for (const page of pages) {
        const { url, plainText } = await fetchPageContent(page);
        if (plainText.toLowerCase().includes(query)) {
            results.push({ url });
        }
    }

    // Pošleme výsledky zpět hlavnímu vláknu
    postMessage({ results, query });
};
