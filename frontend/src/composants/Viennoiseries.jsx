import axios from 'axios';
import { useState } from 'react';
import {useEffect} from "react";
import { Link } from "react-router-dom";

let init = 0
export const Viennoiseries = () => {
    var [objectPanier, setObjectPanier] = useState(
        {
            "id": "",
            "name": "",
            "price": "",
            "quantity": "",
            "url": "", 
            "nombre": "",
        }
    );

    //localStorage.removeItem("Panier")
    //localStorage.setItem("Panier", JSON.stringify([]))
    const [stock, setStock] = useState([])
    let temp;

    if(init < 16){
        const result = axios.get('http://localhost:8000/api/viennoiseries/')
            .then(res => {
                const tempStock = res.data;
                setStock(tempStock);
                console.log(stock);
            })
        console.log(result);
        init++;
    }

    
    function handleClick(object){
        console.log(object)
        const test = temp.filter(temp => { return temp.name === object.name })
        if(test.length !== 0){
            if(test[0].nombre+1 <= test[0].quantity){
                console.log(test)
                console.log(1)
                let copy = temp.filter(temp => { return temp.name !== object.name })
                localStorage.setItem("Panier", JSON.stringify(copy))
                setObjectPanier({id: object.id, name: object.name, price: object.price, quantity: object.quantity, url: object.url, nombre : test[0].nombre+1})
            }
            else{
                alert("Stock vide pour cet article")
            }
        }
        else{
            console.log(2)
            setObjectPanier({id: object.id, name: object.name, price: object.price, quantity: object.quantity, url: object.url, nombre : 1})
        }
    }

    useEffect(() => {
        temp = JSON.parse(localStorage.getItem("Panier"))
        if(objectPanier.id !== ""){
            console.log(temp)
            const update = temp;
            update.push(objectPanier);
            localStorage.setItem("Panier", JSON.stringify(update))
            setObjectPanier({"id": "","name": "","price": "","quantity": "","url": "", "nombre": ""})
            console.log(temp)
        }
    })

    let columns = []
    return(
        <div className="container">
            <div className="row">
            {stock.forEach((items, index) => {
                    columns.push(     
                    <div className="col-sm-4 col-lg-4" key={index}>
                        <div class="card">
                            <br></br>
                            <center><h3 className="titre-produit">{items.name}</h3></center>
                            <img src={items.url} class="card-img-top" height="200px "alt="..."/>
                            <div class="card-body">
                                <center><p> Prix : {items.price} €</p>
                                <p> Quantité disponible : {items.quantity}</p>
                                <button onClick={() => handleClick(items)} className="Bouton">Ajouter au Panier</button></center>
                            </div>
                        </div>
                    </div>
                  )
                    }
                    
                
                )}
                {columns}
                </div>
                 <br></br>
                <center><Link to='/produits' className="tabsMenu">Revenir aux produits</Link></center>
            </div>
    )
}