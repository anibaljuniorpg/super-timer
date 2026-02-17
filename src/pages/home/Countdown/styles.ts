import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: clamp(3.5rem, 10vw, 10rem);
  line-height: clamp(3rem, 8vw, 8rem);
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);

  /* Evita quebra e overflow */
  white-space: nowrap;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: clamp(0.75rem, 2vw, 2rem)
      clamp(0.5rem, 1.5vw, 1rem);
    border-radius: 8px;

    min-width: clamp(3rem, 8vw, 6rem);
    text-align: center;
  }
`;

export const Separator = styled.div`
  color: ${(props) => props.theme["green-500"]};

  width: clamp(1.5rem, 4vw, 4rem);
  padding: clamp(1rem, 3vw, 2rem) 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;
