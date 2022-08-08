import { NavLink } from "react-router-dom"

export const Produits= () =>{



    return <div className="container">
        <br></br>
        <center><h3>Voici les différentes catégories de produits que nous proposons</h3></center>
        <br></br>
        <div className="row">
            <div className="col">
            <div class="card">
                <img src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/02/09/node_130316/11554445/public/2020/02/09/B9722530051Z.1_20200209195522_000%2BGM4FFVAGL.1-0.jpg?itok=mz_a7upk1581275508" class="card-img-top" alt="..."/>
                <div class="card-body">
                <center><h5 class="card-title">Viennoiseries</h5>
                <NavLink className="btn btn-primary" to='/viennoiseries'>Voir</NavLink></center>
                </div>
            </div>
            </div>
            <div className="col">
            <div class="card">
                <img src="https://static.lexpress.fr/medias_12151/w_1843,h_1031,c_crop,x_130,y_0/w_1000,h_563,c_fill,g_north/v1572274554/le-chou-cafe-d-hugo-victor_6221718.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <center><h5 class="card-title">Pâtisseries</h5>
                <NavLink className="btn btn-primary" to='/patisseries'>Voir</NavLink></center>
                </div>
            </div>
            </div>
            <div className="col">
            <div class="card">
                <img src="https://voyage-onirique.com/wp-content/uploads/2020/05/sucreries-scaled.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <center><h5 class="card-title">Sucreries</h5>
                <NavLink className="btn btn-primary" to='/sucreries'>Voir</NavLink></center>
                </div>
            </div>
            </div>
            <center>
            <NavLink to='/' className="tabsMenu">Revenir à l'Accueil</NavLink>
            </center>
        </div>
    </div>
} 