const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 4410;
const host = '192.168.0.157'; // Zadejte IP adresu, na které chcete server spustit
const captcha = require('@exom-dev/captcha');


// Nastavení middleware pro parsování JSON těla požadavků
app.use(bodyParser.json());

// Statické soubory
app.use(express.static(path.join(__dirname)));

// Obsluha GET požadavku pro hlavní stránku
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Middleware pro zachycení každého GET requestu kromě statických souborů
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.url.includes('/css') && !req.url.includes('/js') && !req.url.includes('/images')) {
        console.log(`Nový GET request na URL: ${req.url} z IP: ${req.ip}`);
    }
    next(); // Pokračuj k dalším funkcím/funkcím handleru
});

// Slouží pro obsluhu statických souborů (včetně index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Zachytí požadavek na index.html
app.get('/index.html', (req, res) => {
    console.log(`Uživatel načetl index.html z IP: ${req.ip}`);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Obsluha POST požadavku
app.post('/', (req, res) => {
    const formData = req.body;
    console.log('Přijatá data:', formData);

    // Generování náhodného čísla
    const randomNumber = Math.floor(Math.random() * 10000);

    // Sestavení názvu souboru
    const firstName = formData.firstName || 'unknown';
    const lastName = formData.lastName || 'unknown';
    const productName = formData.productName || 'unknown';
    const fileName = `${firstName}_${lastName}_${productName}_FORM_${randomNumber}.txt`;

    // Cesta k souboru
    const filePath = path.join(__dirname, fileName);

    // Příprava obsahu souboru
    const fileContent = `Jméno: ${firstName}\nPřijmení: ${lastName}\nTelefonní číslo: ${formData.phone}\nEmail: ${formData.email}\n\nData:\n${JSON.stringify(formData, null, 2)}`;

    // Uložení dat do souboru
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error('Chyba při ukládání souboru:', err);
            res.status(500).json({ message: 'Chyba při ukládání souboru.' });
        } else {
            console.log(`Data byla uložena do souboru: ${filePath}`);
            res.json({ message: `Data byla úspěšně uložena do souboru: ${fileName}` });
        }
    });
});

const filePath324 = './visitedIPs.json'; // Načtení uložených IP adres při startu serveru 
let visitedIPs = new Set();
 let firstVisitCount = 0;
  // Zkontrolujeme, zda soubor existuje a načteme data
   if (fs.existsSync(filePath324)) {
     const data = fs.readFileSync(filePath324, 'utf8');
      visitedIPs = new Set(JSON.parse(data));
       firstVisitCount = visitedIPs.size;
     } // Middleware pro sledování návštěv
      app.use((req, res, next) => {
        const ip = req.ip;
        if (!visitedIPs.has(ip)) {
        visitedIPs.add(ip);
         firstVisitCount++; 
         // Uložení nových IP adres do souboru
          fs.writeFileSync(filePath324, JSON.stringify([...visitedIPs]));
           console.log(`Nová IP: ${ip}, první návštěvy: ${firstVisitCount}`);
         }
          next(); // Pokračuje na další middleware nebo endpoint
           });


// Start serveru
app.listen(port, host, () => {
    console.log(`Server běží na http://${host}:${port}`);
});
