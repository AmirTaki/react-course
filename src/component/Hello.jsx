function Hello(props) {
    props.name = "mani"; // warning : props is Immutability
    return (
        <>
            <h1>{props.message} {props.emoji} {props.name} </h1>
        </>
    )
}
export default Hello;