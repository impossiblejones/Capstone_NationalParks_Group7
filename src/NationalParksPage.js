import './NationalParksPage.css';

const NationalParksPage = () => {


	// const StateList = ({ data = [], mountain, mountainChangeHandler }) => {
	// 	const mountainNames = data.map(item => item.name).sort();




	return (
		<>
			<h2>NationalParksPage</h2>
			<form>
				<label htmlFor="StateList">State</label>
				<select name='StateList' id='StateList'>
					<option value='1'>val1</option>
					<option value='2'>val2</option>
				</select>

				<label htmlFor="TypeList">Type</label>
				<select name='TypeList' id='TypeList'>
					<option value='1'>val1</option>
					<option value='2'>val2</option>
				</select>
			</form>


		</>
	);
}

export default NationalParksPage;