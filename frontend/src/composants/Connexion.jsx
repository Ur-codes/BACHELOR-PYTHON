import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let refresh = 0;

export const Connexion = () => {
    var [utilisateur, setUtilisateur] = useState(
        {
            "identifiant": "",
            "password": ""
        }
    );

    let [page, setPage] = useState()
    let [stock, setStock] =useState()

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("statusConnexion")) == true && refresh == 0){
            refresh = 1;
            setPage(
                <p>Vous êtes deja connecter</p>
            )
            console.log(refresh, page)
        }
        else if((JSON.parse(localStorage.getItem("statusConnexion")) == false && refresh == 0) || (JSON.parse(localStorage.getItem("statusConnexion")) == undefined && refresh == 0)){
            refresh = 1;
            setPage(
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Identifiant</label>
                        <input type="text" name="identifiant" value={utilisateur.identifiant} onChange={handleChange}></input>
                        <label>Mot de passe</label>
                        <input type="text" name="password" value={utilisateur.password} onChange={handleChange}></input>
                        <button type="submit">Connexion</button>
                    </form>
                    <p>ou...</p>
                    <Link to='/inscription' className="btn btn-primary">Inscriver-vous</Link>
                </div>
                
            )
            console.log(refresh, page)
        }
    })

    function handleSubmit(e) {
        refresh = 0;
        axios.get('http://localhost:8000/api/clients',{
            params: {
                Username: utilisateur.identifiant,
                Password: utilisateur.password
            }
        })
        .then(res => {
                const tempStock = res.data;
                setStock(tempStock);
                console.log(stock);
            })
        if(utilisateur.identifiant === stock.username && utilisateur.password ===stock.password){
            localStorage.setItem("statusConnexion", true);
            localStorage.setItem("client",JSON.stringify({nom:stock.Nom,email:stock.Email,adresse:stock.Address}))
        }
        else{
            alert("Mauvais Identifiant/Mot de passe")
        }
    }

    function handleChange(e){
        const {name, value} = e.target;
        refresh = 0;
        console.log(name, value);
        setUtilisateur({...utilisateur, [name] : value});
    }

    return(
        <div>
            {page}
        </div>
    )
}