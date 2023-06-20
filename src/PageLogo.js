import "./PageLogo.css"


const PageLogo = ({ logoNum }) => {

	return (
		logoNum === 1
			? <img src="./images/logo/logoMountains.png" alt="Mountain Logo" />
			: <img src="./images/logo/logoNationalParks.png" alt="National Park Logo" />

		// <div className="PageLogo">
		//   <img src={logo} alt={alt} />
		// </div>

	)
}
export default PageLogo;