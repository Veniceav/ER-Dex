import { useEffect } from "react"
import { DexPage } from "./layout";

import {
  PokemonPage,
  MovesPage,
  AbilitiesPage,
  TrainerPage,
  TeamBuilder
} from "./pages";

import PokemonDataProvider from "./data/PokemonDataProvider";

import {
  BrowserRouter,
  RouterProvider,
  useNavigate,
  Route,
  Routes
} from "react-router-dom";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Redirect to="pokemon" />,
//     children: [

//     ]
//   },
// ]);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DexPage>
          <Routes>
            <Route path="pokemon" element={<PokemonPage />} />
            <Route path="moves/:moveName?" element={<MovesPage />} />
            <Route path="abilities" element={<AbilitiesPage />} />
            <Route path="trainers" element={<TrainerPage />} />
            <Route path="team-builder" element={<TeamBuilder />} />
          </Routes>
        </DexPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
