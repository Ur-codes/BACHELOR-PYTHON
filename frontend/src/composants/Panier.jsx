import { useEffect, useState } from "react";
import { FormulaireCommande } from "./FormulaireCommande";
import { Link } from "react-router-dom";

let refresh = 0;
let temp = 0;

export const Panier = () => {
    const [listeProduits, setListeProduits] = useState(JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [])
    let [totale, setTotale] = useState(0)
    let [affichage, setAffichage] = useState();

    function viderPanier() {
        refresh = 0;
        localStorage.removeItem("Panier")
        window.location.reload(false);
    }

    function supprimerProduit(e) {
        refresh = 0;
        const id = e.target.value
        const result = listeProduits.filter(produit => produit.id !== id)
        setListeProduits(result)
        localStorage.setItem("Panier", JSON.stringify(result))
    }

    useEffect(() => {
        if(refresh === 0){ 
            refresh = 1;
            temp = 0
            listeProduits.map((listeProduits, index)=>{
                temp = temp + (listeProduits.price * listeProduits.nombre);
            })
            setTotale(temp)
            console.log(listeProduits, totale)
            if(JSON.parse(localStorage.getItem("statusConnexion")) === true){
                setAffichage(
                    <div>
                        <p>Vous êtes connecter, vos information seront utilisé</p>
                        <Link to="/commandeconfirmer" style={{marginTop: "10px", marginBottom: "10px"}} className="btn btn-primary">Commander</Link>
                    </div>
                )
            }
            else{
                setAffichage(<FormulaireCommande></FormulaireCommande>)
            }
        }
    }, [listeProduits, totale])

    return <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Produit</th>
                    <th scope="col">Prix </th>
                    <th scope="col">Quantité</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {listeProduits.map((produit,index) => {
                    return <tr key={index}>
                        <th scope="row">{produit.name}</th>
                        <td>{(produit.price * produit.nombre).toFixed(2)} €</td>
                        <td>{produit.nombre}</td>
                        <td><button className="btn btn-primary" onClick={supprimerProduit} value={produit.id}>Supprimer</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        <p>Total : {totale.toFixed(2)} €</p>
        <button className="btn btn-primary" onClick={viderPanier}>Vider panier</button>
        {affichage}
    </div>
}