import "./PageLogo.css"


const PageLogo = ({logo, alt}) => {
    console.log(logo)
    
    return (

        <div className="PageLogo">

            <img src={logo} alt={alt} />


        </div>

    )


}
export default PageLogo;