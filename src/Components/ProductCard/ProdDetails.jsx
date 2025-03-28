import Price from "./Price";
import './ProdDetails.css';
// eslint-disable-next-line react/prop-types
function ProdDetails({title , description, idx}){
    let oldPrices=["12,459","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>{description}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}
export default ProdDetails;