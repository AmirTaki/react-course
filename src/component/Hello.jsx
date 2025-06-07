const name = "amir";
const DisplayMessage = () => {
    return "Wow!";
}

function Hello() {
    return (
        <>
            <h1>Hello from a component! {DisplayMessage()}</h1>
        </>
    )
}
export default Hello;