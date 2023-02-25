function MyRecipesComponent({image, label, calories, protein, carbs, fat, link}) {
    return (
        <div className="main">
            <div className="photo">
                <a href={link}>
                    <img src={image} alt="recipe" className="recipe-image"/>
                </a>
            </div>
            <br/>
            <br/>
            <div className="recipe">
                <p className="recipe-label">{label}</p>
                <br/>
                <div className="container-recipes-info">
                    <div className="subcontainer-recipes-info">
                        <div className="info">
                            <p>{calories.toFixed()}</p>
                        </div>
                        <div className="name">
                            <span>Cal</span>
                        </div>
                    </div>

                    <div className="subcontainer-recipes-info">
                        <div className="info">
                            <p>{protein.toFixed()}g</p>
                        </div>
                        <div className="name">
                            <span>Protein</span>
                        </div>
                    </div>

                    <div className="subcontainer-recipes-info">
                        <div className="info">
                            <p>{carbs.toFixed()}g</p>
                        </div>
                        <div className="name">
                            <span>Carbs</span>
                        </div>
                    </div>

                    <div className="subcontainer-recipes-info">
                        <div className="info">
                            <p>{fat.toFixed()}g</p>
                        </div>
                        <div className="name">
                            <span>Fat</span>
                        </div>
                    </div>
                </div>
                    <br/>
                    <br/>
                <div className="link">
                    <a href={link} target="blank">Let's Cook!</a>
                </div>
                    <br/>
            </div> 
        </div>
    
    )
}
export default MyRecipesComponent;