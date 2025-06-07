export default function Fruits (){
    const fruits = [
        { name : "apple", price : 10, emoji : "🍎" },
        { name : "Mango", price : 7, emoji : "🥭" },
        { name : "Banana", price : 2, emoji : "🍌" },
        { name : "Orange", price : 5, emoji : "🍊" },
        { name : "Pineapple", price : 8, emoji : "🍍" }
    ]
    return (
    <>  
        <ul>
            {fruits.map((fruit)=>(
                <li key = {fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price} </li>
            ))}
        </ul>
    </>
    )
}