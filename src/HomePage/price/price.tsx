import './price.scss';
import photo1 from '../../assets/photo/kisspng-flight-hot-air-balloon-computerФІМП-icons-aerostat-5afe08ad4b2f923.png'

export const Price=() =>{
    return (
        <div className="price" id="price"> 
        <div className="container"> 
            <h1 className="title">Price </h1>
            <span>Стоимость услуг</span> 
        </div>
        <div className="left-right">
            <div className="left">
                <div className="text">
                    <p><b>Включено</b></p>
                    <p>Проживание в двухместном номере в отеле с завтраками
                    </p>
                    <p>Индивидуальный трансфер для нашей группы из Анкары и обратно
                    </p>
                    <p>Экскурсия на Солёное озеро
                    </p>
                    <p>Индивидуальная дневная экскурсия по лучшим местам Каппадокии с<br/>личным транспортом
                    </p>
                    <p>Фотосессия с профессиональным фотографом для каждой участницы<br/>
                    (Несколько локаций, 5 лучших фото в обработке фотографа и весь<br/>материал (до 100 фотографий)
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="text">
                    <p><b>Не включено</b></p>
                    <p>Авиа Киев-Анкара-Киев (140-170$)</p>
                    <p>Обеды и ужины (150$ на поездку)</p>
                    <p>Воздушный шар 200$</p>
                    <p>Дополнительные экскурсии (по желанию) от 30$</p>
                </div>
            </div>
            <div className="balloon">
                <img className="small-balloon-start" src={photo1}/>
                <img className="small-balloon-end" src={photo1}/>
                <img className="big-balloon" src={photo1}/>
            </div>
        </div>
    </div>
    )
}