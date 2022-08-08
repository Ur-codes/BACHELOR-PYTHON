import { Navigate } from "react-router-dom";

export const ConfirmCommande = () => {
    const clientData = JSON.parse(localStorage.getItem("client"))
    const listeProduits = JSON.parse(localStorage.getItem("Panier"))

    let temp = 0
    listeProduits.map((listeProduits, index)=>{
        temp = temp + (listeProduits.price * listeProduits.nombre);
    })

    console.log(listeProduits, clientData)
    return (<div>
        <h2>Merci de votre achat!</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Produit</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Quantité</th>
                </tr>
            </thead>
            <tbody>
                {listeProduits.map((produit,index) => {
                    return <tr key={index}>
                        <th scope="row">{produit.name}</th>
                        <td>{(produit.price * produit.nombre).toFixed(2)} €</td>
                        <td>{produit.nombre}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <p>Total : {temp.toFixed(2)} €</p>
        <h2>Détail livraison</h2>
        <ul>
            <li>nom : {clientData.nom}</li>
            <li>email : {clientData.email}</li>
            <li>adresse : {clientData.adresse}</li>
        </ul>
    </div>)
    
}