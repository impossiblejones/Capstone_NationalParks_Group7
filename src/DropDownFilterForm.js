import "./DropDownFilterForm.css";

const DropDownFilterForm = ({ data = [], mountain, mountainChangeHandler }) => {
	const mountainNames = data.map(item => item.name).sort();

	return (
		<form className="DropDownFilterForm">
			<label htmlFor="MountainList">Mountains</label>
			<select
				id="MountainList"
				value={mountain}
				onChange={mountainChangeHandler}
			>
				{mountainNames.map(mountainName => {
					return <option key={mountainName} value={mountainName}>{mountainName}</option>
				})}
			</select>
		</form>
	);
}

export default DropDownFilterForm