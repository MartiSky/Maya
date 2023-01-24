const tabulka = document.querySelector('table');
const form = document.querySelector('form');

// proveď při odeslání formuláře
form.addEventListener('submit', (e) => {
    // načti hodnotu zadanou do inputu
    const inputJmeno = document.querySelector('#jmeno').value;
    const inputPrijmeni = document.querySelector('#prijmeni').value;
    const inputTelefon = document.querySelector('#telefon').value;
    const inputVek = document.querySelector('#vek').value;

    // vloží nakonec tabulky následující HTML kód
    tabulka.innerHTML += `<tr>
        <td>`+inputJmeno+`</td>
        <td>`+inputPrijmeni+`</td>
        <td>`+inputTelefon+`</td>
        <td>`+inputVek+`</td>
    </tr>`;
    
    // zabrání refreshi stránky po odeslání
    e.preventDefault()
})