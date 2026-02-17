import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { History } from './pages/history';
import { DefaultLayout } from './layouts/DefaultLayout';

//* O Router é um componente que define as rotas da aplicação usando o React Router. Ele utiliza o componente Routes para agrupar 
// as rotas e o componente Route para definir cada rota individualmente.
export function Router() {
  // A rota principal (path='/') é associada ao componente DefaultLayout, que serve como um layout base para as páginas. Dentro do DefaultLayout,
  // há duas rotas filhas: a rota '/' que renderiza o componente Home e a rota '/history' que renderiza o componente History.
  return (

    <Routes> 
        {/* A estrutura de rotas é organizada de forma hierárquica, onde o DefaultLayout é o componente pai que envolve as rotas filhas. 
            Isso permite que o layout seja compartilhado entre as páginas, garantindo uma aparência consistente em toda a aplicação. 
            O Home é a página inicial da aplicação, enquanto o History exibe o histórico de atividades do usuário. */}
        <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
