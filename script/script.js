document.addEventListener("DOMContentLoaded", initHome);

function initHome() {
    const email = document.querySelector("#recipient-email");
    const subject = document.querySelector("#subject-text");
    const msg = document.querySelector("#message-text");

    // TODO: implement mailjet API
        document.querySelector("#sendEmail").addEventListener("click", () => {
            console.log("biel")
            window.open(`mailto:jomas.almei@gmail.com?subject=${subject.value}&body=${msg.value}`)
    })
}

// msg.addEventListener("click", () => {
//     msg.classList.remove("border-danger")
// })

// function validateForm(event) {
//     event.preventDefault();

//     if (msg.value === "") {
//         changeLabelColor(msg)
//         return;
//     }
//     if (subject.value === "") {
//         changeLabelColor(subject)
//         return;
//     }

//     window.open(`mailto:jomas.almei@gmail.com?subject=${}&body=${}`)
// }

// function changeLabelColor(element) {
//     element.classList.add("border-danger");
// }
