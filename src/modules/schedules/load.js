import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value;
  // Busca na API os agendamentos para carregar do lado direito da página
  // Os horários disponíveis (horário futuro + não agendados) do lado esquerdo (form)
  hoursLoad({ date });
}
