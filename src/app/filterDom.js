// referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $listChat = querySelector (".chats ul")
// const $chats = document.querySelectorAll(".user-chat")

const chatsData = [
    {
        name: "Daniel Alejandro",
        lastMessage: "vamos a tomar una birra",
        avatar: ".src/assets/4-profile.png"
    },
    {
        name: "Anabella",
        lastMessage: "tengo que ir al super",
        avatar: ".src/assets/2-profile.png"
    }
]

const renderChats = (list) => {
    $listChat.innerHTML = ""

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
    
const searchChats = () => { ""

}


$search.addEventListener("input", searchChats)
renderChats(chatsData)

    const $chats = document.querySelectorAll(".user-chat")
    const nameSearch = $search.value.toLowerCase()

    for (let i = 0; i < $chats.length; i++) {
        const $chat = $chats [i]
        const $titleTag = $chat.querySelector("h3")
        const name = $titleTag.textContent.toLowerCase()
        
        //console.log (name, "donde va a buscar el user")

        if(name.includes(nameSearch)) {
             $chat.style.display = "flex"
    } else {$chat.style.display = "none"

    // Concepto: El método includes() en JavaScript determina si un elemento específico se encuentra dentro de un arreglo o una cadena de texto, devolviendo un valor booleano (true o false) según sea el caso.

        }

    }

    //console.log (nameSearch, "lo que va a buscar en el user")


$search.addEventListener("input",searchChats) 
renderChats()

// Validar la longitud de $chats

const lenghtChats = $chats.length
console.log (lenghtChats)

