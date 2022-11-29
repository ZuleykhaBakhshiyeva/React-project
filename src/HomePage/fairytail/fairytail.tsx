import './fairytail.scss';
import photo from '../../../src/assets/photo/Rectangle19.jpg';

export const FairyTail=() =>{
    return(
        <>
        <div className="fairy-tail">
            <div className="container">
                    <h1 className="title">Fairy tail
                    <span>Сказочная страна чудес</span>
                </h1>
            </div>
            <div className="left-right">
                <div className="left">
                    <div className="image">
                        <img src={photo} />
                    </div>
                    <button><i className="fa-solid fa-angle-left" ></i></button>
                    <button className="button1"><i className="fa-solid fa-angle-right"></i></button>
                </div> 
                <div className="right">
                    <p>Каппадокия - сказочная страна воздушных шаров, сырных домиков,<br/>разноцветных долин и волшебных рассветов!<br/> 
                    Сюда приезжают, чтобы увидеть природные чудеса, полетать на<br/> воздушном шаре и конечно же сделать миллион красивых фотографий! </p>
                    <p>Участников тура ждёт профессиональная фотосессия от лучших<br/>фотографов Каппадокии!<br/>
                    Ведь именно за волшебными фото на рассвете на фоне воздушных<br/>шаров сюда приезжают люди со всего мира! 
                    </p>
                    <p><b>Также Вы увидите:</b></p>
                    <p>Музей на открытом воздухе в Гёреме<br/>
                    Ущелье Ыхлара и монастырь Селиме<br/>
                    Подземные города
                    Крепость Учхисар<br/>
                    Зельве и Пашабаг</p>
                    <p>и многие другие достпримечательности.</p>
                    <p>Местная кухня — один из поводов посетить Каппадокию, здесь<br/>есть рестораны на любой бюджет.</p>
                </div>
            </div>
        </div>
        </>
    )
}