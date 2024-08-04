export function loadUser({ id, name, clientSince }) {
    const nameField = document.querySelector(".content .user .info strong")
    nameField.textContent = name

    const clientSinceField = document.querySelector(".content .user .info span")
    clientSinceField.textContent = `Cliente desde ${clientSince}`

    const avatarField = document.querySelector(".content .user .avatar img")
    avatarField.setAttribute('src', `./src/assets/avatar/${id}.jpg`)
    avatarField.setAttribute('alt', `Avatar do usuário ${name}`)
}