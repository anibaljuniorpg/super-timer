import type { Cycle } from "./reducer";

/**
 * Action types centralizados
 */
export const ActionTypes = {
  ADD_NEW_CYCLE: "ADD_NEW_CYCLE",
  INTERRUPT_CYCLE: "INTERRUPT_CYCLE",
  MARK_CYCLE_AS_FINISHED: "MARK_CYCLE_AS_FINISHED",
} as const;

/**
 * Union type dos valores de ActionTypes
 */
export type ActionType =
  typeof ActionTypes[keyof typeof ActionTypes];

/**
 * Action para criar um novo ciclo
 */
export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  } as const;
}

/**
 * Action para interromper o ciclo ativo
 */
export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  } as const;
}

/**
 * Action para marcar o ciclo ativo como finalizado
 */
export function markCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED,
  } as const;
}
