import Wellcome from "./Wellcome";
import Code from "./Code";

export default function ConditionalComponent (){
    const display = false;
    // return display ? <h1>Message 1</h1> : <h1>Message 2</h1>
    return display ? <Wellcome /> : <Code />
}
