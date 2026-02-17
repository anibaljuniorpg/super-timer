import styled from "styled-components";

/** O HistoryContainer é o componente principal da página de histórico, responsável por envolver todo o conteúdo da página. Ele é estilizado
 para ocupar todo o espaço disponível, com um preenchimento interno de 3.5rem. O layout é configurado como flexbox, permitindo que os elementos
 filhos sejam organizados em uma coluna. O título (h1) dentro do HistoryContainer tem um tamanho de fonte de 1.5rem e uma cor definida pelo
 tema, garantindo uma aparência consistente com o restante da aplicação.
*/
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme["gray-100"]};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme["green-500"]};
    }

    &::placeholder {
        color: ${props => props.theme["gray-500"]};
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;}
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;