
function MsgBox({userName,textColor}){
    let tColor={color : textColor};
    return(
        <div style={{backgroundColor : "aliceblue",padding : "5px" ,marginBottom : "10px"}}>
            <h3 style={tColor}>{"Hello "+userName}</h3>
        </div>
    );
}
export default MsgBox;