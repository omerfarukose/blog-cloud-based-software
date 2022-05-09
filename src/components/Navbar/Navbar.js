import './Navbar.css'

function Navbar (){

    return(
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <div className="navbar-logo-icon-border">
                    <img className="navbar-logo-icon" src={require('../../assets/cloud-icon.png')}/>
                </div>
                <div className='navbar-logo-text'>Cloud Based Software</div>
            </div>
        </div>
    )
}

export default Navbar;