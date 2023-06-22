import "./LinkedItem.css"

const LinkedItem = ({ linkText, isActive = false, changePageHandler }) => {
    
    return (

        <a name={linkText} onClick={changePageHandler} className={isActive ? "LinkedItem active" : "LinkedItem"} href="#">
            {linkText}
        </a>)
}
export default LinkedItem;