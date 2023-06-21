import "./DropDownFilterForm.css"

const DropDownFilterForm = ({ data = [] }) => {
    const mountainNames = data.map(item => item.name).sort();


    return (
        <form className="DropDownFilterForm">
            <label htmlFor="MountainList">Mountain List</label>
            <select id="MountainList">

                {mountainNames.map(mountainName => {
                    return <option key={mountainName} value={mountainName}>{mountainName}</option>
                })}
            </select>
        </form>
    );
}

export default DropDownFilterForm
