const Information = (props) => {

    return (
        <>
            <h1>{props.city}</h1>
            <h3>{props.temp}</h3>

            {props.show ?
                <ul className="w-list">
                    <li><b>Weather:</b> {props.description}</li>
                    <li><b>Wind:</b> {props.wind}</li>
                    <li><b>Clouds:</b> {props.clouds}</li>
                </ul> : <span></span>
            }
        </>
    )
}

export default Information;