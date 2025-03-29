import ProdDetails from "./ProdDetails";

function AmazonList(){
    let styles={
        display : "flex",
        flexWrap : "wrap",
        gap : "10px",
        justifyContent : "center",
        alignItems : "center"
    };
    return (
        <div style={styles}>
            <ProdDetails title="Logitech MX Master" description="8,000 DPI" idx={0} image={"logitech.png"}/>
            <ProdDetails title="Apple Pencil (2nd Gen)" description="Intuitive Surface" idx={1} image={"pencil.png"}/>
            <ProdDetails title="Zebronics Zeb-transformer" description="Designed for iPad Pro" idx={2} image={"zebronics.png"}/>
            <ProdDetails title="Petronics Toad 23" description="Wireless" idx={3} image={"patronics.png"}/>
        </div>
    );
}

export default AmazonList;