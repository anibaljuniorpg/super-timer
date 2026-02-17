import 'styled-components';

declare module 'styled-components' {
    //* O DefaultTheme é uma interface que define as propriedades de tema disponíveis para a aplicação. Ele inclui uma variedade de cores, 
    // organizadas em diferentes tonalidades (gray, green, red, yellow) e níveis de intensidade (100, 300, 500, 700, 900). 
    // Essas propriedades são usadas para garantir uma aparência consistente em toda a aplicação, permitindo que os componentes acessem 
    // as cores definidas no tema para estilização. Ao usar o DefaultTheme, os desenvolvedores podem facilmente aplicar 
    // as cores do tema aos componentes sem precisar se preocupar com valores específicos de cor, promovendo a reutilização e a manutenção do código.
    export interface DefaultTheme {
        'gray-100': string;
        'gray-300': string;
        'gray-400': string;
        'gray-500': string;
        'gray-600': string;
        'gray-700': string;
        'gray-800': string;
        'gray-900': string;

        'green-200': string;
        'green-300': string;
        'green-500': string;
        'green-700': string;

        'red-200': string;
        'red-500': string;
        'red-700': string;

        'yellow-500': string;
    }
}

//* O defaultTheme é um objeto que implementa a interface DefaultTheme, fornecendo valores específicos para cada propriedade de cor 
// definida na interface.
export const defaultTheme = {
        

        'gray-100': '#E1E1E6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',

        'green-200': '#00b37d77',
        'green-300': '#00B37E',
        'green-500': '#00875F',
        'green-700': '#015F43',

        'red-200': '#E6A5AA',
        'red-500': '#AB222E',
        'red-700': '#7A1921',

        'yellow-500': '#FBA94C',
    }