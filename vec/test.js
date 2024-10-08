document.addEventListener("DOMContentLoaded", function () {
    const links = [
        { text: "KNIHY O DOBRODRUŽNÝCH CESTÁCH", url: "knihy.html" },
        { text: "SUPER FUNNY PŘEDNÁŠKY", url: "prednasky.html" },
        { text: "SUPER DĚTSKÉ TÁBORY", url: "https://example.com/tabory" },
        { text: "HRU, KTERÁ SE TU NĚKDE SKRÝVÁ", url: "hra.html" },
        { text: "SKVĚLÝ FILM, KTERÝ TI NASTŘÍHÁM", url: "https://example.com/film" }
    ];

    const element = document.getElementById("typewriter");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetween = 1000;

    
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
