import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtem a "li" pai do elemento clicado.
      const item = event.target.closest("li");

      // Pega o id do agendamento para remover
      const { id } = item.dataset;

      // Confirma que o id foi selecionado
      if (id) {
        // Exibe uma mensagem de confirmação antes de cancelar o agendamento.
        // Se o usuário confirmar, chama a função de cancelamento.
        const isConfirm = confirm(
          "Tem certeza de que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // Chama a função de cancelamento passando o id do agendamento.
          // Após o cancelamento, recarrega a lista de agendamentos do dia.
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
