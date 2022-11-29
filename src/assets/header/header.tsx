import './header.scss'
export const Header =() => {
    return(
        <header>
        <div className="container">
            <div className="navbar">
                <nav>
                    <a href="#bus" className="nav-link">Маршрут</a>
                    <a href="#hotel" className="nav-link">Отель</a>
                    <a href="#price" className="nav-link">Стоимость</a>
                </nav>
                <a href="tel:+3845646556465" className="phone-link">+3845646556465</a>
            </div>
            <h5 className="header-title">Cappadocia
            <span>Эксклюзивный тур</span></h5>
        </div>
    </header>
    )
}
