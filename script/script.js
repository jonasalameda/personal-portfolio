document.addEventListener("DOMContentLoaded", initHome);

async function initHome() {
	const email = document.querySelector("#recipient-email");
	const subject = document.querySelector("#subject-text");
	const msg = document.querySelector("#message-text");
	const name = document.querySelector("#contact-name");

        document.querySelector("#sendEmail").addEventListener("click", () => {
            if (validateForm(msg, email, subject, name)) {
				document.querySelector("#sendEmail").disabled = true;
				sendEmail(msg.value, email.value, subject.value, name.value);
			}
    })
}

function sendEmail(message, email, subject, name) {
    fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Basic' + btoa("")
        },
        body: `"Messages":[
				{
						"From": {
								"Email": "jomas.almei@gmail.com",
								"Name": "${name}"
						},
						"To": [
								{
										"Email": "jomas.almei@gmail.com",
										"Name": "${name}"
								}
						],
						"Subject": "${subject}",
						"TextPart": "${message}",
						"HTMLPart": "<h1>${email} has contacted you through your website</h1><p>${message}</p>"
				}
		]`
    })
}

function validateForm(message, email, subject, name) {
	let isFormValid = true;

	// there surely is a better way to do this, but i needa have this ready as soon as possible, so we can make it more efficient another day idk
	// TODO: efficiency?
	if (message.value === "") {
		message.classList.add("border", "border-danger")
		isFormValid = false;
	} else {
		message.classList.add("border", "border-success")
		message.classList.remove("border", "border-danger")
	}

	if (email.value === "") {
		email.classList.add("border", "border-danger")
		isFormValid = false;
	} else {
		email.classList.add("border", "border-success")
		email.classList.remove("border", "border-danger")
	}
	if (subject.value === "") {
		subject.classList.add("border", "border-danger")
		isFormValid = false;
	} else {
		subject.classList.add("border", "border-success")
		subject.classList.remove("border", "border-danger")
}
	if (name.value === "") {
		name.classList.add("border", "border-danger")
		isFormValid = false;
	} else {
		name.classList.add("border", "border-success")
		name.classList.remove("border", "border-danger")
	}

	if (!isFormValid) {
		const element = document.createElement('div');
		element.classList.add(['alert', 'alert-danger']);
		element.role = 'alert';
		document.querySelector("#alertContainer").appendChild(element)

		setTimeout(() => {
			element.remove()
		}, 4000);
		return false;
	}

	return true;
}
