import { useContext, useEffect } from "react"
import { CountdownContainer, Separator } from "./styles"
import { CyclesContext } from "..//..//..//contexts/CyclesContext"
import { differenceInSeconds } from "date-fns"

// =======================================================
// COMPONENTE COUNTDOWN
// =======================================================



export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCycleAsFinished,
    amountSecondsPassed,
    setSecondsAmount,
  } = useContext(CyclesContext)

  // Total de segundos do ciclo
  const totalSeconds = activeCycle
    ? activeCycle.minutesAmount * 60
    : 0

  // Segundos restantes
  const currentSeconds = activeCycle
    ? totalSeconds - amountSecondsPassed
    : 0

  // Conversão para minutos e segundos
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  // Formatação (sempre 2 dígitos)
  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  // =====================================================
  // EFEITO — controla o timer
  // =====================================================

  useEffect(() => {
    if (!activeCycle) return

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate
      )

      if (secondsDifference >= totalSeconds) {
        markCycleAsFinished()
        setSecondsAmount(totalSeconds)
        clearInterval(interval)
      } else {
        setSecondsAmount(secondsDifference)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCycleAsFinished,
    setSecondsAmount,
  ])

  // =====================================================
  // JSX
  // =====================================================

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
