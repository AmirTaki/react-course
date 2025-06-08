const header  = {color : 'red', backgroundColor : "black"}
export default function InlineComponent(){
    return(
        <>
            <h1 style={{color : 'blue', fontSize : '140px'}}>Inline Component</h1>
            <h1 style={header}>Inline Component</h1>

        </>
    )
}