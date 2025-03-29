import Price from "./Price";
import './ProdDetails.css';

function ProdDetails({title , description, idx, image, features}){
    let oldPrices=["12,459","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    const list = (features) ? features.map((feature, i) => <li key={i}>{feature}</li>) : null ;
    return (
        <div className="product">
            <h4>{title}</h4>
            <img src={`./src/assets/${image}`} alt={`${title}-image`} id = 'icon' />
            <p>{description}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            {(list) ? <ul>{list}</ul> : null}
        </div>
    );
}
export default ProdDetails;