// referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $chats = document.querySelectorAll(".user-chat")

const searchChats = () => {
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
}

// Validar la longitud de $chats

const lenghtChats = $chats.length
console.log (lenghtChats)

$search.addEventListener("input",searchChats) 