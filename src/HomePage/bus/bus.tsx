import './bus.scss'
import photo from './Rectangle22.png';

export const Bus =() => {
    return(
        <>
        <div className="our-trip" id="bus">
            <div className="left-right">
                <div className="left">
                    <div className="container">
                        <h1 className="title">Our trip</h1>
                        <span>Маршрут</span>
                    </div>
                    <div className="text"> 
                        <p><b>День 1 </b></p> 
                        <p>Прилёт в Анкару<br/> 
                            Трансфер в Каппадокию<br/> 
                            Солёное озеро<br/> 
                            Приезд в Гёреме <br/> 
                            Ужин 
                            </p> 
                        <p><b>День 2 </b></p> 
                        <p>Фотосессия<br/> 
                            Завтрак в отеле <br/> 
                            Дневной тур по Каппадокии <br/> 
                            Закат с панорамным видом 
                            </p> 
                        <p><b>День 3 </b></p> 
                        <p>Полёт на воздушном шаре<br/> 
                            Завтрак в отеле <br/> 
                            Экскурсии на выбор  
                            </p> 
                        <p><b>День 4 </b></p> 
                        <p>Свободное время, шоппинг<br/>
    Трансфер в Анкару<br/> 
                            Вылет в Киев</p> 
                    </div> 
                    <button>ЗАБРОНИРОВАТЬ</button>
                </div>
            <div className="right"> 
                <div className="image">
                    <img src={photo} className="slider-img2"/> 
                </div>
                <button className='button2'><i className="fa-solid fa-angle-left"></i></button>
                <button className='button1'><i className="fa-solid fa-angle-right"></i></button>
            </div> 
        </div> 
    </div> 
        </>
    )
}