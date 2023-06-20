import "./LinkedItem.css"

const LinkedItem = ({ linkText, isActive = false }) => {

    return (
        <a className={isActive ? "LinkedItem active" : "LinkedItem"} href="#">
            {linkText}
        </a>)
}
export default LinkedItem;