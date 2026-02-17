import { useContext } from "react";
import { ptBR } from "date-fns/locale";
import { CyclesContext} from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from "date-fns";

export function History() {
  const {cycles} = useContext(CyclesContext)

  function getColorByState(interruptedDate?: Date,
    finishedDate?: Date){
    if (interruptedDate){
      return <Status statusColor="red">interrompido</Status>
    } else if (finishedDate) {
      return <Status statusColor="green">Concluido</Status>
    } else {
      return <Status statusColor="yellow">Em andamento</Status>
    }
  }

  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>

      <HistoryList>
        {/* A tabela dentro do HistoryList é composta por um cabeçalho (thead) e um corpo (tbody). O cabeçalho define as colunas da tabela, que incluem
         "Tarefa", "Duração", "Início" e "Status". O corpo da tabela contém várias linhas (tr), cada uma representando uma tarefa diferente.
         Cada linha tem células (td) que contêm informações sobre a tarefa, como o nome da tarefa, a duração, quando foi iniciada e seu status atual.
         As tarefas listadas incluem estudar React, JavaScript, TypeScript, Java, Python e C#, com diferentes durações, tempos de início e status. */}
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            { cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>{formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR
                  })}</td>
                  <td>
                    {
                      getColorByState(cycle.interruptedDate, cycle.finishedDate)
                    }
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}