// import "../css/style.css"
import styles from "./OutlineComponent.module.css"
export default function OulineComponent () {
    return(
        <>
            {/* <h1 className = "header-outline">this is an outline components</h1> */}
            <h1 className={styles.header}>this is an outline components</h1>
        </>
    )
}