import { ProductCard } from "../common/ProductCard"

export const ItemListContainer = (props)=>{
    return <div>
        <h1 style={ {color:"steelblue"}}>{props.greeting} </h1>
        <h2>Inmuelbles</h2>
        <ProductCard barrio={"Jardines del Jockey"} precio={200000} />
        <ProductCard barrio={"La Rufina"} precio={400000} />
        <ProductCard barrio={"Country del Jockey"} precio={500000} />
    </div>

}