import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
// import Resume from '../Assets/resume/resume_.pdf'


const Header = () => {

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingUp || currentScrollPos < 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    const [expanded, setExpanded] = useState(false);
  return (
    <div className='header-con'  style={{display: visible ? 'block' : 'none' }}>
         <Navbar expand="lg" className="navs" fixed='top' data-bs-theme="dark" variant='dark' expanded={expanded}>
      <Container>
        <Navbar.Brand className='logo' href="#"><h1>Vinith</h1></Navbar.Brand>
        <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="toggels text-white">
            {expanded ? <IoMdClose className='nav-icon'/>:<IoIosMenu className='nav-icon'/>}
          </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-4 my-lg-0 nav-mob-slide"
            navbarScroll 
          >
            <Nav.Link  className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#about">About Me</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#work">Works</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#contact">Contact</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
        <a className='resume-btn' href="https://drive.google.com/file/d/13u9mF5UOH6k653GVMxACIZ8TsWtficgc/view" download target='_blank'>Resume</a>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header