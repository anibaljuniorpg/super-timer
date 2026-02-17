import { useContext } from "react"
import { useFormContext } from "react-hook-form"

import { CyclesContext } from "..//..//..//contexts/CyclesContext"
import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from "./style"

// =======================================================
// TIPAGEM DO FORMULÁRIO
// (mesma estrutura definida no Home)
// =======================================================

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

// =======================================================
// COMPONENTE
// =======================================================

export function NewCycleForm() {
  // Lê se existe um ciclo ativo para desabilitar os inputs
  const { activeCycle } = useContext(CyclesContext)

  // Acessa o form que veio do <FormProvider />
  const { register } = useFormContext<NewCycleFormData>()

  return (
    <FormContainer>
      {/* Campo: nome da tarefa */}
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Digite o nome da tarefa"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      {/* Campo: duração */}
      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
