console.log("asd")
const balElem = document.getElementById("bal");

balElem.innerHTML += `
    <img src="kepek/kecske2.png" alt="kecske" onclick="kecskeMozgatas()">
    <img src="kepek/kaposzta.png" alt="kaposzta" onclick="kaposztaMozgatas()">
    <img src="kepek/farkas.png" alt="farkas" onclick="farkasMozgatas()">
    `

let kecskeKep = document.querySelector('img[alt="kecske"]');
const kaposztaKep = document.querySelector('img[alt="kaposzta"');
const farkasKep = document.querySelector('img[alt = "farkas"');

const csonak = document.getElementById("csonak")
let asideElemek = [kecskeKep, kaposztaKep, farkasKep];
let csonakElemek = [];

const kecskeMozgatas = () => {
    if (csonakElemek.includes(farkasKep) || csonakElemek.includes(kaposztaKep)) {
        alert('Egyszerre csak egy fér a csónakba!')
    } else if (asideElemek.includes(kecskeKep)) {
        csonak.appendChild(kecskeKep)
        csonakElemek.push(kecskeKep)
        asideElemek = asideElemek.filter(elem => elem !== kecskeKep)
    } else {
        asideElemek.push(kecskeKep)
        balElem.appendChild(kecskeKep)
        csonakElemek = csonakElemek.filter(elem => elem !== kecskeKep)
    }
}

const farkasMozgatas = () => {
    if (csonakElemek.includes(kecskeKep) || csonakElemek.includes(kaposztaKep)) {
        alert('Egyszerre csak egy fér a csónakba!')
    } else if (asideElemek.includes(farkasKep)) {
        csonak.appendChild(farkasKep)
        csonakElemek.push(farkasKep)
        asideElemek = asideElemek.filter(elem => elem !== farkasKep)
    } else {
        asideElemek.push(farkasKep)
        balElem.appendChild(farkasKep)
        csonakElemek = csonakElemek.filter(elem => elem !== farkasKep)
    }
}

const kaposztaMozgatas = () => {
    if (csonakElemek.includes(kecskeKep) || csonakElemek.includes(farkasKep)) {
        alert('Egyszerre csak egy fér a csónakba!')
    } else if (asideElemek.includes(kaposztaKep)) {
        csonak.appendChild(kaposztaKep)
        csonakElemek.push(kaposztaKep)
        asideElemek = asideElemek.filter(elem => elem !== kaposztaKep)
    } else {
        asideElemek.push(kaposztaKep)
        balElem.appendChild(kaposztaKep)
        csonakElemek = csonakElemek.filter(elem => elem !== kaposztaKep)
    }
}