import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted successfully!");
};
