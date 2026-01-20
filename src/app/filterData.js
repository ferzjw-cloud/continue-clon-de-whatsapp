// referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $listChat = document.querySelector (".chats ul")
// const $chats = document.querySelectorAll(".user-chat")

const chatsData = [
    {
        name: "Daniel Alejandro",
        lastMessage: "vamos a tomar una birra",
        avatar: "https://placehold.com/100x100"
    },
    {
        name: "Anabella",
        lastMessage: "tengo que ir al super",
        avatar: "https://placehold.com/100x100"
       }
]

const renderChats = (list) => {
    $listChat.innerHTML = ""

    if (list.length === 0) {
        $listChat.innerHTML = "<li class='empty'>No hay chats para mostrar</li>"
    }

    list.forEach((chat) => {
    $listChat.innerHTML += `
    <li class="user-chat">
        <img src="${chat.avatar}" alt="foto de perfil de Maria Lopez">
        <div>
            <h3>${chat.name}</h3>
            <p>${chat.lastMessage}</p>
        </div>
    </li>
    `
    })
    }
    

const searchChats = () => {
    const nameSearch = $search.value.toLowerCase()
    // filter, es un bucle
    // callback es una funcion que se ejecuta depsues de que pasa algo...
    const filteredChats = chatsData.filter((chat) => chat.name.toLowerCase().includes(nameSearch))
   renderChats(filteredChats)
}

$search.addEventListener("input", searchChats)
renderChats(chatsData)

    //console.log (nameSearch, "lo que va a buscar en el user")


// Validar la longitud de $chats

// const lenghtChats = $chats.length
// console.log (lenghtChats)

