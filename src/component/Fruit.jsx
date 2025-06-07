export default function Fruit ({emoji, name, price}){
    return (
        <>
            { price > 5 ? ( 
                <li>
                    {emoji} {name} ${price}
                </li>
            ) : (
                ""
            )}
        </>
    )
}