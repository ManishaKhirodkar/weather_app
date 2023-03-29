import React, { useEffect, useState } from 'react'
import '../components/home.css'

const Home = () => {
    const api = {
        key: "6c6ca858cd50e4d931120b60cc778b79",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const [search, setSearch] = useState("mumbai");
    const [weather, setWeather] = useState({});

    const searchButton = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result)
                console.log(result)
            })
    }
    /* const [users, setUsers] = useState([]);
 
      const useEffectApi = () => {
  
          const getUsers = async () => {
              const response = await fetch(`${api.base}weather?q=${users}&appid=${api.key}`);
              setUsers(await response.json());
              console.log(response)
          }
          useEffect(() => {
              getUsers();
          }, [])
  
      };*/

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setDate(new Date(), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div>
            <div className="hero">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Cities</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 offset-md-7">
                            <div className="box">
                                <h1>Weather Details</h1>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="left-side">
                                            <ul>
                                                <li>Cloudy</li>
                                                <li>Humidity</li>
                                                <li>Wind</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="right-side">
                                            <ul>
                                                {weather.main ? <li>{Math.round(weather.main.feels_like)}%</li> : null}
                                                {weather.main ? <li>{Math.round(weather.main.humidity)}%</li> : null}
                                                {weather.wind ? <li>{Math.round(weather.wind.speed)}km/h</li> : null}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">

                            {typeof weather.main !== "undefined" ? (
                                <div className="box1">
                                    <h1>{Math.round(weather.main.temp)}° </h1><p>{weather.name}</p>
                                    <span>{date.toLocaleTimeString()} {date.toLocaleDateString()}</span>
                                    <i className="bi bi-brightness-low-fill"></i>
                                </div>
                            ) : (
                                ""
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <div className="container conta">
                <h1>Cities</h1>
                <div className="row row-cols-1 row-cols-md-3 g-0">
                    <div className="col">
                        <div className="cards">
                            <img src="../Assets/thunder.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-titles">35°</h5>
                                <p className="card-text">Delhi</p><span className='fw-500' style={{ margin: "0 0 0 174px" }}>09/03/23</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards">
                            <img src="../Assets/thunder3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-titles">34°</h5>
                                <p className="card-text">Jaipur</p><span className='fw-500' style={{ margin: "0 0 0 174px" }}>09/03/23</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cards">
                            <img src="../Assets/thunder2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-titles">32°</h5>
                                <p className="card-text">Haryana</p><span style={{ margin: "0 0 0 174px" }}>09/03/23</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-inp">
                <input type="search" className="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search city' /> </div>
            <i className="bi bi-search icn" onClick={searchButton}></i>


            <div className="section1 mb-2">
                <img src="../Assets/earth-gc170ef17d_1920.jpg" height="400px" width="400px" alt="" />
            </div>


            <h1 className='mt-4 mb-4'><b>News</b></h1>

            <div className="container">
                <div className="row">
                    <div className="figu me-2">
                        <figure>
                            <img src="../Assets/thunder3.jpg" alt="Mountains" />
                            <h2 className='thun'>Thunderstrom in <br /> Delhi</h2>
                        </figure>
                        <figure>
                            <img src="../Assets/thunder2.jpg" alt="Mountains" />
                            <h2 className='thun'>Cloudstrom in <br /> Manipur</h2>
                        </figure>
                        <figure>
                            <img src="../Assets/summer.jpg" alt="Mountains" />
                            <h2 className='thun'>Its Summer Season in <br /> Mumbai</h2>
                        </figure>
                    </div>
                </div>
            </div>
            <footer>
                <div className="section6">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-7 col-sm-12">
                                <h3 className="tit5">WEATHER APP</h3>

                            </div>
                            <div className="col-md-5 col-sm-12">
                                <p>Home</p>
                                <p>Cities</p>
                                <p>News</p>
                                <p>Contact us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home