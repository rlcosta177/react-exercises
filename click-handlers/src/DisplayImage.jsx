

function DisplayImage() {

    const imageUrl = "./src/assets/2023_04_MicrosoftTeams-image-24.jpg";

    const handleClick = (e) => {
        console.log(e)
        e.target.style.display = "none"
    }

    return(
        <>
        <img src={imageUrl} alt="hashmap" onClick={(e) => handleClick(e)}/>
        </>
    )
}

export default DisplayImage