import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "../schedules/show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value;
  // Busca na API os agendamentos para carregar do lado direito da página
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Os horários disponíveis (horário futuro + não agendados) do lado esquerdo (form)
  hoursLoad({ date, dailySchedules });
}
