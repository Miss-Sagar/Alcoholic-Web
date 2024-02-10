import { useState, useEffect } from "react";
import { MainContainer, LeftContainer, MiddleContainer, TabLinks, MiddleContainerMobile } from "./Navbar.styles";
import { Link, Outlet } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("menu");
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 620 ? false : true);
    };

    // Initial call to set the initial state based on the window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile])

  const handleChangleActiveTab = (e: any) => {
    setActiveTab(e.target.innerText.toLowerCase());
    isMobile && openMenu && setOpenMenu(false);
  }

  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MainContainer className='mainCont' isMobile={isMobile}>
        {
          !isMobile ?
            <><MiddleContainer>
              <TabLinks>
                <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'menu' ? '2px solid white' : '2px solid transparent' }} to="/" onClick={(e) => handleChangleActiveTab(e)}>Menu</Link>
              </TabLinks>
              <TabLinks>
                <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'teaser' ? '2px solid white' : '2px solid transparent' }} to="/teaser" onClick={(e) => handleChangleActiveTab(e)}>Teaser</Link>
              </TabLinks>
              <TabLinks>
                <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'gallery' ? '2px solid white' : '2px solid transparent' }} to="/gallery" onClick={(e) => handleChangleActiveTab(e)}>Gallery</Link>
              </TabLinks>
              <TabLinks>
                <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'booking' ? '2px solid white' : '2px solid transparent' }} to="/booking" onClick={(e) => handleChangleActiveTab(e)}>Booking</Link>
              </TabLinks>
            </MiddleContainer></>

            :
            <>
              <div>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuIconClick}
                  style={{ marginLeft: '10px' }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              {openMenu &&
              <MiddleContainerMobile>
                <TabLinks>
                  <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'menu' ? '2px solid white' : '2px solid transparent' }} to="/" onClick={(e) => handleChangleActiveTab(e)}>Menu</Link>
                </TabLinks>
                <TabLinks>
                  <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'teaser' ? '2px solid white' : '2px solid transparent' }} to="/teaser" onClick={(e) => handleChangleActiveTab(e)}>Teaser</Link>
                </TabLinks>
                <TabLinks>
                  <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'gallery' ? '2px solid white' : '2px solid transparent' }} to="/gallery" onClick={(e) => handleChangleActiveTab(e)}>Gallery</Link>
                </TabLinks>
                <TabLinks>
                  <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', borderBottom: activeTab === 'booking' ? '2px solid white' : '2px solid transparent' }} to="/booking" onClick={(e) => handleChangleActiveTab(e)}>Booking</Link>
                </TabLinks>
              </MiddleContainerMobile>
              }</>
        }
      </MainContainer>
      <Outlet />
    </>
  );
}

export default Navbar;
