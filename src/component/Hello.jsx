function Hello({message, emoji, name, seatNumbers} ) {
    return (
        <>
            <h1>{message} {emoji} {name} {seatNumbers}</h1>
        </>
    )
}

export const Another = (props) =>{
    return(
        <>
            <h1>{props.person.message} {props.person.emoji} {props.person.name} {props.person.seatNumbers}</h1>
        </>
    )
}



export default Hello;