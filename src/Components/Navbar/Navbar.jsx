import React, { useState, useEffect } from "react";
import logo from "../../Images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { AiFillCaretRight, AiOutlineDown } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal'

const Navbar = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [servicesMenu, setServicesMenu] = useState(false);
  const [closeMenu,setCloseMenu]=useState(false);
  const navigate = useNavigate();
  const located = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);
  useEffect(() => {
    setCloseMenu(false)
    if(showMobileMenu===false)
    {
    const timer = setTimeout(() => {
      setCloseMenu(true)
        
    }, 300);
  
    return () => clearTimeout(timer)
  }
}, [showMobileMenu]);
  return (
    <Fade>
    <div
      className={` ${
        scrollValue > 400 || located.pathname !== "/"
          ? "fixed text-black  lg:top-0 "
          : "fixed lg:absolute text-white  lg:top-[2.5rem]"
      } bg-white lg:bg-transparent  z-40 flex justify-center items-center   w-full h-[5rem] lg:h-[9rem] px-[3rem] font-lexend`}
    >
      <div className={`fixed  flex items-center absolute top-0 left-0 h-[1.8rem] w-[150%] bg-white px-[2rem] ${
  (scrollValue > 400 || located.pathname !=="/")
            ? "  lg:top-0 "
            : "lg:hidden"
        }`}>
        <ul className="flex relative animate-[textSlideMobile_30s_linear_infinite] lg:animate-[textSlide_30s_linear_infinite]  justify-between items-center ">
            <li className="absolute whitespace-nowrap text-[14px]  font-bold">Reducere de 100 lei pentru studenti, elevi si someri</li>
            <li className="absolute whitespace-nowrap left-[20rem] lg:left-[50rem] text-[14px] font-bold">Serie noua incepand cu 20 iunie</li>
            <li className="absolute whitespace-nowrap left-[40rem] lg:left-[100rem] text-[14px]  font-bold">Reducere de 10% daca te mai inscri alaturi de cineva</li>
        </ul>
      </div>
      <a
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0 });
        }}
      >
        <img
          src={logo}
          className="mt-[1.7rem] lg:mt-0 w-[45px] lg:w-[80px] lg:mr-[2rem] cursor-pointer"
        />
      </a>
      <ul
        className={`${
          scrollValue > 400 || located.pathname !== "/"
            ? "bg-white shadow-lg"
            : "bg-transparent"
        } hidden lg:flex items-center justify-between  w-[65rem]    rounded-[20px] text-[13.5px] font-bold `}
      >
        <li
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, left: 0 });
          }}
          className={`flex flex-col ml-[1rem]  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          ACASA
        </li>
        <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        href="About"
                      >
        <li
       
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          DESPRE NOI
        </li>
        </Link>
        <li
          onClick={() => {
            navigate("/oferte");
            window.scrollTo({ top: 0, left: 0 });
          }}
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          OFERTE
        </li>
        <li
          onClick={() => {
            navigate("/produse");
            window.scrollTo({ top: 0, left: 0 });
          }}
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          PRODUSE
        </li>
        <li
          className={`group flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          {" "}
          <span className="flex items-center group">
            SERVICII{" "}
            <span className="ml-[2px] text-[16px] transtion ease-in-out duration-300  group-hover:rotate-[90deg] ">
              <AiFillCaretRight />
            </span>
          </span>
          <ul
            className={`absolute mt-[1.2rem] opacity-0 hidden transition ease-in-out duration-1000 group-hover:flex group-hover:opacity-100 group  bg-white   w-[15rem] h-[11.5rem] flex-col justify-between shadow-xl text-black`}
          >
            <li
              onClick={() => {
                navigate("/servicii/obtine-permisul");
                window.scrollTo({ top: 0, left: 0 });
              }}
              className="relative flex ml- items-center py-[.5rem] px-[1rem] border-b-[1px] border-gray-300 cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300"
            >
              <span className="absolute text-white  left-0  transition ease-in-out  group-hover:left-4 duration-300">
                <BsChevronRight />
              </span>{" "}
              <span className="ml-6">OBTINE PERMISUL</span>{" "}
            </li>
            <li
              onClick={() => {
                navigate("/servicii/conducere-defensiva");
                window.scrollTo({ top: 0, left: 0 });
              }}
              className="flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white "
            >
              <span className="absolute text-white  left-0  transition duration-500 ease-in-out group-hover:left-4">
                <BsChevronRight />
              </span>
              <span className="ml-6">CONDUCERE DEFENSIVA</span>
            </li>
            <li
              onClick={() => {
                navigate("/servicii/perfectionare-moto");
                window.scrollTo({ top: 0, left: 0 });
              }}
              className="flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300"
            >
              <span className="absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4">
                <BsChevronRight />
              </span>
              <span className="ml-6">PERFECTIONARE MOTO</span>
            </li>
            <li
              onClick={() => {
                navigate("/servicii/curs-cu-masina-personala");
                window.scrollTo({ top: 0, left: 0 });
              }}
              className="flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300"
            >
              <span className="absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4">
                <BsChevronRight />
              </span>
              <span className="ml-6">CURS CU MASINA PERSONALA</span>
            </li>
          </ul>
        </li>
        <li
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
          onClick={() => {
            navigate("/inscrieri-online");
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          INSCRIERI ONLINE
        </li>
        <li
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
          onClick={() => {
            navigate("/legislatie/chstionare-online");
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          LEGISLATIE
        </li>
        <li
          onClick={() => {
            navigate("/noutati");
            window.scrollTo({ top: 0, left: 0 });
          }}
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
        >
          NOUTATI
        </li>
        <li
          className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}
          onClick={() => {
            navigate("/galerie");
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          GALERIE
        </li>
        <li onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, left: 0 });
              }}
          className="btn2  px-10 py-3 rounded-[15px] relative border border-red-500 bg-red-500 font-semibold tracking-wider leading-none overflow-hidden trasition ease-in-out duration-300 text-white cursor-pointer"
       
        >
          <span className="absolute inset-0 bg-red-600"></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            CONTACT
          </span>
          CONTACT
        </li>
      </ul>

      <div
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className="absolute lg:hidden   left-[1.5rem] top-[2rem]  flex flex-col items-left justify-center h-[2rem]  w-[1.5rem]"
      >
        <span
          className={`relative ${
            showMobileMenu
              ? " animate-[topLine_.5s_ease-in-out_forwards]"
              : " animate-[topLineReverse_.5s_ease-in-out_forwards]"
          } top-[.3rem] w-[1.3rem] h-[2px] bg-black`}
        />
        <span
          className={`relative ${
            showMobileMenu
              ? " animate-[disappear_.5s_ease-in-out_forwards]"
              : " animate-[appear_.5s_ease-in-out_forwards]"
          }  top-[.6rem] w-[1rem] h-[2px] bg-black`}
        />
        <span
          className={`relative ${
            showMobileMenu
              ? " animate-[bottomLine_.5s_ease-in-out_forwards]"
              : "animate-[bottomLineReverse_.5s_ease-in-out_forwards]"
          } top-[.9rem] w-[1.3rem] h-[2px] bg-black`}
        />
      </div>
      <div
        className={`absolute ${
          showMobileMenu
            ? "animate-[showMobileBlackMenu_.3s_ease-in-out_forwards]"
            : "animate-[showMobileBlackMenuReverse_.3s_ease-in-out_forwards]"
        } ${closeMenu && "hidden"} left-0 top-[4.9rem] bg-black bg-opacity-[60%] w-[100%] h-screen`}
      >
        <div className={`flex justify-center bg-white w-0 ${showMobileMenu ? "animate-[showMobileMenu_.3s_ease-in-out_forwards_.5s]" : "animate-[showMobileMenuReverse_.3s_ease-in-out_forwards]"} h-full overflow-hidden`}>
          <ul
            className={`  flex flex-col  items-start   w-[10rem]  py-[.5rem] px-[1rem]  text-[13px] font-bold text-black`}
          >
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              ACASA
            </li>
            <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        href="About"
                      >
            <li
              className={`flex flex-col whitespace-nowrap cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              DESPRE NOI
            </li>
            </Link>
            <li
              onClick={() => {
                navigate("/oferte");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              OFERTE
            </li>
            <li
              onClick={() => {
                navigate("/produse");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              PRODUSE
            </li>
            <li
              className={`flex flex-col whitespace-nowrap  cursor-pointer transition ease-in-out group    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              {" "}
              <span
                onClick={() => {
                  setServicesMenu((prev) => !prev);
                }}
                className="flex items-center "
              >
                SERVICII{" "}
                <span
                  className={`ml-2 text-[16px] ${
                    servicesMenu
                      ? "animate-[rotateArrow_.3s_ease-in-out_forwards]"
                      : "animate-[reverseRotateArrow_.3s_ease-in-out_forwards]"
                  }`}
                >
                  <AiFillCaretRight />
                </span>
              </span>
              <ul
                className={`relative ${
                  !servicesMenu && "hidden"
                } left-[-2.5rem] top-[.7rem]   group  bg-white   w-[15rem] h-[11.5rem] flex-col items-left justify-between  text-black `}
              >
                <li
                  onClick={() => {
                    navigate("/servicii/obtine-permisul");
                    window.scrollTo({top:0,left:0});
                    setShowMobileMenu(false);
                  }}
                  className="relative flex whitespace-nowrap items-center py-[.5rem] px-[1rem]  cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300"
                >
                  <span className="absolute text-white  left-0  transition ease-in-out  group-hover:left-4 duration-300">
                    <BsChevronRight />
                  </span>{" "}
                  <span className="ml-6">OBTINE PERMISUL</span>{" "}
                </li>
                <li
                  onClick={() => {
                    navigate("/servicii/conducere-defensiva");
                    window.scrollTo({top:0,left:0});
                    setShowMobileMenu(false);
                  }}
                  className={`flex items-center whitespace-nowrap py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out  hover:bg-red-600 hover:text-white  ${!showMobileMenu && "hidden"}`}
                >
                  <span className="absolute text-white  left-0  transition duration-500 ease-in-out group-hover:left-4">
                    <BsChevronRight />
                  </span>
                  <span className="ml-6">CONDUCERE DEFENSIVA</span>
                </li>
                <li
                  onClick={() => {
                    navigate("/servicii/perfectionare-moto");
                    window.scrollTo({top:0,left:0});
                    setShowMobileMenu(false);
                  }}
                  className={`flex items-center  whitespace-nowrap py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300 ${!showMobileMenu && "hidden"}`}
                >
                  <span className="absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4">
                    <BsChevronRight />
                  </span>
                  <span className="ml-6">PERFECTIONARE MOTO</span>
                </li>
                <li
                  onClick={() => {
                    navigate("/servicii/curs-cu-masina-personala");
                    window.scrollTo({top:0,left:0});
                    setShowMobileMenu(false);
                  }}
                  className={`flex items-center whitespace-nowrap py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300 ${!showMobileMenu && "hidden"}`}
                >
                  <span className="absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4">
                    <BsChevronRight />
                  </span>
                  <span className="ml-6">CURS CU MASINA PERSONALA</span>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                navigate("/inscrieri-online");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              INSCRIERI ONLINE
            </li>
            <li
              onClick={() => {
                navigate("/legislatie/chstionare-online");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              LEGISLATIE
            </li>
            <li
              onClick={() => {
                navigate("/noutati");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              NOUTATI
            </li>
            <li
              onClick={() => {
                navigate("/galerie");
                window.scrollTo({top:0,left:0});
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              GALERIE
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, left: 0 });
                setShowMobileMenu(false);
              }}
              className={`flex flex-col whitespace-nowrap cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] ${!showMobileMenu && "hidden"}`}
            >
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default Navbar;
