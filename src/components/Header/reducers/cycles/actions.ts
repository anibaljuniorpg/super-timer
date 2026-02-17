// actions.ts
import type { Cycle } from "./reducer";

/**
 * Enum centralizado para evitar strings mágicas
 * e garantir tipagem forte no reducer.
 */
export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
  MARK_CYCLE_AS_FINISHED = "MARK_CYCLE_AS_FINISHED",
}

/**
 * Action para criar um novo ciclo
 * @param newCycle ciclo criado
 */
export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE as const,
    payload: {
      newCycle,
    },
  };
}

/**
 * Action para interromper o ciclo ativo
 */
export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE as const,
  };
}

/**
 * Action para marcar o ciclo ativo como finalizado
 */
export function markCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED as const,
  };
}
