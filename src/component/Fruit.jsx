export default function Fruit ({emoji, name, price, soldOut}){
    return (
        <>
            <li>
                {emoji} {name} ${price} {soldOut ? "soldOut" : ""};
            </li>
        </>
    )
}