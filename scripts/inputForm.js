const form = document.querySelector(".contact__form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function removeError(input) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains("error-message")) {
    errorSpan.textContent = "";
  }
}

function setError(input, message) {
  let errorSpan = input.nextElementSibling;
  if (!errorSpan || !errorSpan.classList.contains("error-message")) {
    errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    input.parentNode.appendChild(errorSpan);
  }
  errorSpan.textContent = message;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    setError(nameInput, "Пожалуйста, введите ваше имя");
    isValid = false;
  } else {
    removeError(nameInput);
  }

  if (emailInput.value.trim() === "") {
    setError(emailInput, "Пожалуйста, введите ваш email");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setError(emailInput, "Неверно указан адрес электронной почты");
    isValid = false;
  } else {
    removeError(emailInput);
  }

  if (messageInput.value.trim() === "") {
    setError(messageInput, "Пожалуйста, введите ваше сообщение");
    isValid = false;
  } else {
    removeError(messageInput);
  }

  return isValid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log("Отправка данных:", data);

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Данные успешно отправлены:", json);

        alert("Данные успешно отправлены!");
        form.reset();
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);

        alert(
          "Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз."
        );
      });
  }
});
