function Hello({name, message, emoji}) {
    // console.log(props)
    // const {name , message} = props;
    return (
        <>
            <h1>{message} {emoji} {name} </h1>
        </>
    )
}
export default Hello;