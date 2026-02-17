
import styled from "styled-components";

//** O HistoryContainer é o componente principal da página de histórico, responsável por envolver todo o conteúdo da página. Ele é estilizado
//  para ocupar todo o espaço disponível, com um preenchimento interno de 3.5rem. O layout é configurado como flexbox, permitindo que os elementos
//  filhos sejam organizados em uma coluna. O título (h1) dentro do HistoryContainer tem um tamanho de fonte de 1.5rem e uma cor definida pelo
//  tema, garantindo uma aparência consistente com o restante da aplicação.
export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }
`;

//** O HistoryList é um componente estilizado que representa a lista de histórico. Ele é configurado para ocupar todo
//  o espaço disponível, com uma margem superior de 2rem. O conteúdo dentro do HistoryList é organizado em uma tabela, 
// que tem uma largura de 100% e um colapso de bordas para garantir que as células estejam unidas. A tabela tem um mínimo
//  de largura de 600px para garantir que o conteúdo seja exibido corretamente em telas menores. As células da tabela (th e td)
//  são estilizadas para ter um preenchimento interno de 1rem, uma cor de fundo definida pelo tema e um tamanho de fonte de 0.875rem.
//  As células do cabeçalho (th) têm uma cor de texto diferente e um arredondamento nos cantos superiores, enquanto as células do corpo
//  (td) têm uma borda superior para separar as linhas.
export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background-color: ${props => props.theme["gray-600"]};
            padding: 1rem;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
                
            }
            &:last-child{
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
            
        }

        td{
            background-color: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                padding-left: 1.5rem;
                width: 50%;
            }

            &:last-child{
                padding-right: 1.5rem;
            }
        }
    }
`;


const STATUS_COLORS  = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}



export const Status = styled.span<StatusProps>`

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;