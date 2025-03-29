function PrintInfo(){
    let name ={
        firstName : 'Rutuja',
        lastName : 'Jirage'
    };
    return (
        <div>
            <h4>Name of the Candidate :</h4>
            <p>{(name.firstName+" "+name.lastName).toUpperCase()}</p>
        </div>
    );
}

export {PrintInfo};