import "./ProductInfo.css"
import Price from "./Price"
import AddToCartButton from "./AddToCartButton"

export default function ProductInfo() {
    return(
        <div className="container">
            <p className="category">Perfume</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <Price/>
            <AddToCartButton/>
        </div>
    )
}