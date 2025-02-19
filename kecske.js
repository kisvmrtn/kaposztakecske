console.log("asd")
const asideElem = document.getElementById("bal");

asideElem.innerHTML += `
    <img src="kepek/kecske2.png" alt="kecske" onclick="kecskeMozgatas()">
    <img src="kepek/kaposzta.png" alt="kaposzta" onclick="kaposztaMozgatas()">
    <img src="kepek/farkas.png" alt="farkas" onclick="farkasMozgatas()">
    `

const kecskeMozgatas = () => {
    let articleElem = document.getElementById("csonak")
    let balKep = document.querySelector('img[alt="kecske"]');
        if (balKep) {
            articleElem.appendChild(balKep)

        }
        console.log(articleElem) 
}