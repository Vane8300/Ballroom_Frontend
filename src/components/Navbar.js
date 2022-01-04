import  '../styling/Navbar.css';
export default function Navbar(){
    return(
        <div className={"Navbar"}>
            <div className={"allSide"}>
                <div className={"links"}>
                    <a href="home">Acasa</a>
                    <a href="reservations">Reservations</a>
                    <a href={"profile"}>Profile</a>
                </div>
            </div>
        </div>
    )
}