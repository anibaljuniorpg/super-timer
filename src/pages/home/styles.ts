import styled from "styled-components";

/*
** O HomeContainer é o componente principal da página inicial, responsável por envolver todo o conteúdo da página.
 Ele é estilizado para ocupar todo o espaço disponível, com um layout flexbox que organiza os elementos em uma coluna,
  centralizando-os tanto horizontalmente quanto verticalmente. O formulário dentro do HomeContainer também é configurado como um flexbox,
   permitindo que os elementos sejam organizados em uma coluna com um espaçamento de 3.5rem entre eles.
*/
export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;



/** O HistoryList é um componente estilizado que representa a lista de histórico. Ele é configurado para ocupar todo
 o espaço disponível, com uma margem superior de 2rem. O conteúdo dentro do HistoryList é organizado em uma tabela, 
 que tem uma largura de 100% e um colapso de bordas para garantir que as células estejam unidas. A tabela tem um mínimo*/
export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme["gray-100"]}; 

    display:flex;
    gap: 1rem;

    span{
        background: ${props => props.theme["gray-700"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;


export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme["green-500"]};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;




export const ButtonInput = styled.button`
  width: 37.9925rem;
  height: 4rem;
  border-radius: 8px;
  border: 0;
  color: ${props => props.theme["gray-100"]};
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
`

export const StartCountDownButton = styled(ButtonInput)`
  background: ${props => props.theme["green-500"]};

  &:not(:disabled):hover {
    background: ${props => props.theme["green-300"]};
  }

  &:disabled {
    background: ${props => props.theme["green-200"]};
  }
`

export const StopCountdownButton = styled(ButtonInput)`
  background: ${props => props.theme["red-500"]};

  
  &:hover {
    background: ${props => props.theme["red-700"]};
  }
`
