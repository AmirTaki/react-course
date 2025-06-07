export default function Message () {
    function handleClick () {
        console.log("Button Clicked");
    }
    return(
        <>
            <button onClick={handleClick}> Click here to get a message</button>
        </>
    )
}