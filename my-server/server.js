const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 4410;

// Middleware pro zpracování JSONu
app.use(express.json());

// Zpracování POST requestu z formuláře
app.post('/', (req, res) => {
    const formData = req.body;

    // Vytvoříme soubor pro ukládání dat
    const filePath = path.join(__dirname, 'form-data.json');

    // Uložíme data do souboru jako JSON
    fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Chyba při ukládání dat:', err);
            return res.status(500).json({ message: 'Chyba při ukládání dat' });
        }

        console.log('Data byla úspěšně uložena.');
        res.status(200).json({ message: 'Data byla úspěšně odeslána a uložena.' });
    });
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
