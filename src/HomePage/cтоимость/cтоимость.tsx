import './cтоимость.scss';
import photo1 from '../../assets/photo/Rectangle55.png'

export const Cтоимость=() =>{
    return(
        <div className="cтоимость">
        <div className="left-right">
            <div className="left">
                <div className="container-one">
                    <h1 className="title">1.07.2020</h1>
                        <span>Ближайшая дата тура </span> 
                </div>
                <div className="container-two">
                    <h1 className="title">490$</h1>
                        <span>Стоимость</span> 
                </div>
                <div className="text-one">
                    <p>Оставить заявку или задать вопрос</p>
                    <div className="input-text">
                        <input className="text" type="text" placeholder="Имя"/>
                        <input className="text" type="tel" placeholder="Телефон" pattern="[0-9]{3}[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
                    </div>
                    <button className="btn button">ОСТАВИТЬ ЗАЯВКУ</button>
                </div>
            </div>
            <div className="right">
                <img className="image" src={photo1}/>
            </div>
        </div>
    </div>
    )
}