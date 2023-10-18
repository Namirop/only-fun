function Information(props) {
    return (
        <div>
            <p>INFORMATIONS SUR LE JEU : </p>
            <p>Date : {props.date}</p>
            <p>Developpeur : {props.developper}</p>
            <p>PEGI : {props.pegi}</p>
        </div>
    )
}

export default Information;