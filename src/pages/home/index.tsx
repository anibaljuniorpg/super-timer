import { HandPalm, Play } from "phosphor-react"
import { HomeContainer, StartCountDownButton, StopCountdownButton } from "./styles"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

import { NewCycleForm } from "./newCycleForm"
import { Countdown } from "./Countdown"
import { useContext } from "react"
import { CyclesContext } from "..//..//contexts/CyclesContext"

// Zod
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo deve ter no mínimo 1 minuto")
    .max(60, "O ciclo deve ter no máximo 60 minutos"),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  // Pega tudo do Context
  const { activeCycle, createNewCycle, interruptCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 1,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch("task")
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
