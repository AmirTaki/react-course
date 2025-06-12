import ConditionalComponent from "./component/ConditionalComponent"
import Counter from "./component/Counter"
import Form from "./component/form"
import Fruits from "./component/Fruits"
import Hello from "./component/Hello"
import InlineComponent from "./component/InlineComponent"
import Message from "./component/Message"
import OulineComponent from "./component/OutlineComponent"

function App() {
    const [query, setQuery] = useState("");
    // Syntax of the useEffecct hook :  useEffect(()=> {}, [])
    useEffect(()=> {
        async function fetchFood(){
            const responsive = await fetch(`API`);
            const data = await responsive.json()
            setFoodData(data.results)
        }
        fetchFood()
    
    }, [query])
  return (
    <>
     
    </>
  )
}

export default App

