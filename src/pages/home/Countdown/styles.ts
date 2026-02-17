import styled from "styled-components";

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
