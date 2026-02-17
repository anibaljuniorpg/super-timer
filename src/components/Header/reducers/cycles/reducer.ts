// cyclesReducer.ts
import { produce } from "immer";
import {
  ActionTypes,
  addNewCycleAction,
  interruptCycleAction,
  markCycleAsFinishedAction,
} from "./actions";

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
   ACTIONS (inferidas)
======================= */

type CyclesActions =
  | ReturnType<typeof addNewCycleAction>
  | ReturnType<typeof interruptCycleAction>
  | ReturnType<typeof markCycleAsFinishedAction>;

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
