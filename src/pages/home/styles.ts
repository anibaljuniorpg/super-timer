import styled from "styled-components";

/* =======================
   HOME CONTAINER
======================= */

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
    max-width: 480px;
  }

  @media (max-width: 768px) {
    form {
      gap: 2rem;
    }
  }
`;

/* =======================
   COUNTDOWN
======================= */

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 7rem;
    line-height: 6rem;

    span {
      padding: 1.5rem 0.75rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 4.5rem;
    line-height: 4rem;

    span {
      padding: 1rem 0.5rem;
    }
  }
`;

/* =======================
   SEPARATOR
======================= */

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;

  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: 2rem;
  }
`;

/* =======================
   BUTTON BASE
======================= */

export const ButtonInput = styled.button`
  width: 37.9925rem;
  height: 4rem;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  span {
    padding-left: 0.75rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* =======================
   START BUTTON
======================= */

export const StartCountDownButton = styled(ButtonInput)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-300"]};
  }

  &:disabled {
    background: ${(props) => props.theme["green-200"]};
  }
`;

/* =======================
   STOP BUTTON
======================= */

export const StopCountdownButton = styled(ButtonInput)`
  background: ${(props) => props.theme["red-500"]};

  &:hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;
