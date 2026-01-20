const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("formMessage")

const messages = [
    {
        id: 1,
        text: "Hola Queres venir por un cafe?",
        Date: "14.02",
        me: false
    },
    {
        id: 2,
        text: "Si, perfecto. a las 18 te parece bien?",
        Date: "14.11",
        me: true
    },
    {
        id: 3,
        text: "Dale, en la plaza",
        Date: "14.16",
        me: false
    },
    {
        id: 4,
        text: "Dale",
        Date: "14.19",
        me: true
    }
]
const renderMessages = (list) => {
    $listMessages.innerHTML = ""

    list.forEach((message) => {
        $listMessages.innerHTML += `
        <div class="message ${message.me === true? 'me' : ""}">
        <p class="content">${message.text}</p>
        <p class="time">${message.Date}</p>
    </div>
    `
    })
}

const sendMessage = (event) => {
    const now = new Date()
   if (event.key === "Enter"){
   const newMessage = {
    text: $message.value,
    me: true,
    Date: now.getHours() + ":" + now.getMinutes()
   }
   
    console.log(newMessage)
    }else {
        console.log("presionaste la tecla, ", event.key)
    }

}



//$formMessage.addEventListener("submit", sendMessage)
$message.addEventListener("keydown", (e) => {
    sendMessage(e)
})

renderMessages(messages)