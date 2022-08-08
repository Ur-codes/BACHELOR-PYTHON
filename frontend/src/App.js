import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Menu } from './composants/Menu';
import { PanierProvider } from './context/panierContext';
import { Produits } from './composants/Produits';
import { Accueil } from './composants/Accueil';
import { ConfirmCommande } from './composants/ConfirmCommande';
import { Panier } from './composants/Panier';
import { Connexion } from './composants/Connexion';
import { Deconnexion } from './composants/Deconnexion';

import { Routes, Route } from "react-router-dom"
import { Viennoiseries } from './composants/Viennoiseries';
import { Patisserie } from './composants/Patisseries';
import { Sucreries } from './composants/Sucreries';
import { Inscription } from './composants/Inscription';

function App() {
  return (
    <div className="container">
      <PanierProvider>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/panier" element={<Panier />} />
          <Route path="/commandeconfirmer" element={<ConfirmCommande />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/viennoiseries" element={<Viennoiseries/>} />
          <Route path="/patisseries" element={<Patisserie/>}/>
          <Route path="/sucreries" element={<Sucreries/>}/>
          <Route path="/connexion" element={<Connexion/>}/>
          <Route path="/deconnexion" element={<Deconnexion/>}/>
          <Route path="/inscription" element={<Inscription/>}/>
          <Route path="*" element={<><h1>Erreur 404</h1></>}/>
      </Routes>
      </PanierProvider>
    </div>
  );
}

export default App;
