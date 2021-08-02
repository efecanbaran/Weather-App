import axios from "axios";
import { useState } from "react";
import Information from "./Informations";

const WeatherApp = () => {
    const [veri, setVeri] = useState("");
    const [temp, setTemp] = useState("");
    const [city, setCity] = useState("");
    const [clouds, setClouds] = useState("");
    const [wind, setWind] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${veri}&appid=f386f1c7a00a8e484bc82a7d9e578e09`)
            .then((data) => {
                setTemp(`${Number(data.data.main.feels_like - 273.15).toFixed(1)}°c`)
                setCity(data.data.name)
                setClouds(`${data.data.clouds.all}%`)
                setWind(`${data.data.wind.speed} km/s`)
                setDescription(data.data.weather[0].description)
            }).catch((er) => console.log(er))
        setVeri("");
        setShow(true);
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={veri} onChange={(e) => setVeri(e.target.value)} required placeholder="Enter a city"></input>
                    <button type="submit" onClick={handleSubmit}>Search</button>
                </form>
            </div>
            <br></br>
            <Information city={city} temp={temp} description={description} clouds={clouds} wind={wind} show={show} />

        </>
    )
}

export default WeatherApp;