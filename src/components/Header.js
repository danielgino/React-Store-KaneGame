import '../styles/Header.css'

function Header({setCurrentPage }){
    return(
        <div className="header-comp">
    

            <div className="button-menu">

                <button className='menu-B' onClick={()=>setCurrentPage('homePage')}> Home</button>
                <button className='menu-B'  onClick={()=>setCurrentPage('cartPage')}> Cart🛒 </button>
                <button className='menu-B' onClick={()=>setCurrentPage('about')}> About </button>
                <button className='menu-B'> Text</button>


            </div>

        </div>
        
    )
}

export default Header;