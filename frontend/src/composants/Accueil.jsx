import { Link } from "react-router-dom";

export const Accueil = () => {

    if (!localStorage.getItem("Panier")) {
      localStorage.setItem("Panier",JSON.stringify([]))
    }

    return <div>
          <center>
            <br></br>
            <h3>Bienvenue chez Patisserie-TTJ</h3>
            <br></br>
            <img className="row" src="https://get.pxhere.com/photo/sweet-meal-food-produce-baking-dessert-cream-delicious-cake-pastry-bakery-strawberry-baked-sugar-tasty-sweetness-patisserie-confectionery-cakes-1044470.jpg" width={1100} height={1100} />
            <br></br>
            <text>Ici, nous vous proposons les meilleures pâtisseries disponibles sur le marché. Nos artisans sont tous sans exceptions de grands pâtissiers et vous sert des mets d'exceptions.</text>
            <br></br>
            <Link to='/produits' className="tabsMenu">Nos produits</Link>
            </center>
            </div>
        
}