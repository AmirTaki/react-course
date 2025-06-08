// import  "../css/style.css"
import styles from "./inlineComponent.module.css"
export default function InlineComponent(){
    return(
        <>
            {/* <h1 className="header-inline">Inline Component</h1> */}
            <h1 className={styles.header}>Inline Component</h1>
        </>
    )
}