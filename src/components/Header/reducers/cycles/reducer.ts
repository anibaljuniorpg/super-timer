// cyclesReducer.ts
import { ActionTypes } from "./actions";
import { produce } from "immer";

/**
 * Representa um ciclo de trabalho
 */
export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

/**
 * Estado global dos ciclos
 */
export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

/* =======================
   ACTIONS TIPADAS
======================= */

interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface InterruptCycleAction {
  type: ActionTypes.INTERRUPT_CYCLE;
}

interface MarkCycleAsFinishedAction {
  type: ActionTypes.MARK_CYCLE_AS_FINISHED;
}

type CyclesActions =
  | AddNewCycleAction
  | InterruptCycleAction
  | MarkCycleAsFinishedAction;

/* =======================
   ESTADO INICIAL
======================= */

export const initialCyclesState: CyclesState = {
  cycles: [],
  activeCycleId: null,
};

/* =======================
   REDUCER
======================= */

export function cyclesReducer(
  state: CyclesState,
  action: CyclesActions
): CyclesState {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_NEW_CYCLE: {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
        break;
      }

      case ActionTypes.INTERRUPT_CYCLE: {
        const currentCycle = draft.cycles.find(
          (cycle) => cycle.id === draft.activeCycleId
        );

        if (currentCycle) {
          currentCycle.interruptedDate = new Date();
        }

        draft.activeCycleId = null;
        break;
      }

      case ActionTypes.MARK_CYCLE_AS_FINISHED: {
        const currentCycle = draft.cycles.find(
          (cycle) => cycle.id === draft.activeCycleId
        );

        if (currentCycle) {
          currentCycle.finishedDate = new Date();
        }

        draft.activeCycleId = null;
        break;
      }

      default:
        return draft;
    }
  });
}
