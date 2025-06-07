import Wellcome from "./Wellcome";
import Code from "./Code";

export default function ConditionalComponent (){
    const display = false;

    if(display){
        return <Wellcome />
    }
    else {
        return <Code />
    }
    
   
    // return (
    //     <>
    //         <h3>This is a conditional component</h3>
    //         <h3>Code everday !</h3>
    //     </>
    // )
}