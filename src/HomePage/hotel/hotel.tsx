import './hotel.scss';
import photo1 from '../../assets/photo/Rectangle24.png'
import photo2 from '../../assets/photo/Rectangle25.png'
import photo3 from '../../assets/photo/Rectangle26.png'
import photo4 from '../../assets/photo/Rectangle31.png'
import photo5 from '../../assets/photo/Rectangle32.png'
import photo21 from '../../assets/photo/Rectangle251.png'
import photo31 from '../../assets/photo/Rectangle261.png'
import photo41 from '../../assets/photo/Rectangle311.png'
import photo51 from '../../assets/photo/Rectangle321.png'

export const Hotel=() =>{
    return(
        <>
        <div className="hotel" id="hotel"> 
        <div className="container"> 
            <h1 className="title">Hotel</h1> 
            <span>Sultan Cave Suites</span>
        </div> 
        <div className="left-right"> 
            <div className="left"> 
                <img className="image" src={photo1}/> 
            </div> 
            <div className="right"> 
                <div className="text"> 
                    <p>В этом уникальном отеле, расположенном на вершине холма Айдынлы, вы<br/>можете забронировать высеченные в скале номера, обставленные антикварной<br/>мебелью со всей Турции. С солнечной террасы отеля открывается прекрасный<br/>панорамный вид на Национальный парк Гереме. 
                    </p> 
                    <p>Большинство номеров отеля Sultan Cave Suites высечены в скале, что<br/>обеспечивает прохладу и покой. Все номера оборудованы гостиной зоной и<br/>современной ванной комнатой. В большинстве из них есть собственная терраса или балкон. 
                    </p> 
                    <p> 
                        Отель Cave Suites Sultan располагает изысканным рестораном, где подают<br/>фирменные блюда региона Каппадокии. После ужина, пройдя на террасу, вы<br/>сможете заказать напиток и полюбоваться закатом солнца над деревней. 
                    </p> 
                </div> 
                <div className="galery"> 
                    <a target="_blank" href={photo21}>
                      <img className="image" src={photo2}/>   
                    </a>
                    <a target="_blank" href={photo31}>
                        <img className="image" src={photo3}/>
                    </a>
                    <a target="_blank" href={photo41}>
                        <img className="image" src={photo4}/> 
                    </a>
                    <a target="_blank" href={photo51}>
                        <img className="image" src={photo5}/> 
                    </a>
                </div> 
            </div> 
        </div> 
    </div>
        </>
    )
}