import {
  createContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";

import type { Cycle } from "../components/Header/reducers/cycles/reducer";
import {
  cyclesReducer,
  initialCyclesState,
} from "../components/Header/reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCycleAction,
  markCycleAsFinishedAction,
} from "../components/Header/reducers/cycles/actions";

/* =======================
   TIPOS
======================= */

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsAmount: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCycle: () => void;
}

/* =======================
   CONTEXT
======================= */

export const CyclesContext = createContext({} as CyclesContextType);

/* =======================
   PROVIDER
======================= */

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    initialCyclesState,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find(
    (cycle) => cycle.id === activeCycleId
  );

  /* =======================
     EFFECTS
  ======================= */

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state", stateJSON);
  }, [cyclesState]);

  /* =======================
     HANDLERS
  ======================= */

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    dispatch(interruptCycleAction());
    setAmountSecondsPassed(0);
  }

  function markCycleAsFinished() {
    dispatch(markCycleAsFinishedAction());
    setAmountSecondsPassed(0);
  }

  function setSecondsAmount(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  /* =======================
     PROVIDER
  ======================= */

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCycleAsFinished,
        amountSecondsPassed,
        setSecondsAmount,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
