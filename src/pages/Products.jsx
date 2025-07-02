import { useParams } from "react-router-dom"

export default function Products (){
    const {id} =  useParams()
    return <>
        <h1>Products List </h1>
        Showing product with id : {id}
    </>
} 