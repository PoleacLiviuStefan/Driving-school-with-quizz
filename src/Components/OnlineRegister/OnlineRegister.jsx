import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineRight, AiOutlineCloseCircle } from "react-icons/ai";

const OnlineRegister = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [selectCategory, setSelectedCategory] = useState([]);
  const handleSelectCategory = (position) => {
    if (
      !selectCategory.some((element) => {
        if (element === position) {
          return true;
        }
      })
    )
      setSelectedCategory((current) => [...current, position]);
    else
      setSelectedCategory((current) =>
        current.filter((element) => element !== position)
      );
  };
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="relative flex flex-col items-center w-[65rem] h-full ">
        <div className="relative   bg-bgRegister bg-cover  w-screen h-[32rem]">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[50%] w-full h-full ">
            <div className="relative top-0 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
              <a
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer"
              >
                Scoala Auto-Moto POPTEAN
              </a>
              <span className="mx-[1rem] ">
                <AiOutlineRight />
              </span>
              <a className="cursor-pointer">Inscrieri Online</a>
            </div>

            <h2 className="text-[26px] w-[90%] lg:w-[49rem] text-center lg:text-left lg:text-[42px] font-extrabold text-white ">
              TE POTI INSCRIE{" "}
              <span className="text-[#DC2626]">DIRECT ONLINE</span>{" "}
            </h2>
          </div>
        </div>
        <div className="mt-[5rem] flex flex-col items-center text-center  w-full">
          <h3 className="mb-[2rem] lg:mb-[4rem] text-black font-bold w-[90%] lg:w-[35rem] text-[16px] lg:text-[24px] ">
            COMPLETEAZA FORMULARUL URMATOR SI NE VEDEM DIRECT LA ORE
          </h3>
          <h4 className="text-[18px] font-bold">1.Completeaza cu datele personale toate campurile de mai jos</h4>
          <form
            className="mt-[1rem] flex flex-col items-center  lg:grid lg:grid-cols-3 bg-white p-[1rem] w-full h-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Nume</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Prenume</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Prenumele Tatalui</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className=" mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Prenumele Mamei</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">CNP*</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="number"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Sex</label>
              <select className="mt-[1rem] w-[18rem]">
                <option>Alege din lista</option>
                <option>Masculin</option>
                <option>Feminin</option>
                <option>Altul</option>
              </select>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Data de Nastere</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="number"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Tara Nasterii</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Judetul</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Localitate/Sector</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Serie</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Numar</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Emis de</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Emis la</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Expira la</label>
              <input
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col w-full text-left group">
              <label className="">
                Categorii permis de conducere detinute deja{" "}
              </label>
              <div
                onClick={() => setShowCategories((prev) => !prev)}
                className="flex flex-wrap cursor-pointer border-[1px] border-black text-[13px] lg:text-[15px] lg:w-[57rem] lg:h-[2rem] px-[1rem] items-center"
              > 
                {(!showCategories && selectCategory.length===0) ? "APASA PENTRU A VEDEA TOATE CATEGORIILE": selectCategory.map((val) => {
                  let categoryLabel = "";
                  switch (val) {
                    case 0:
                      categoryLabel = "A1";
                      break;
                    case 1:
                      categoryLabel = "A2";
                      break;
                    case 2:
                      categoryLabel = "A";
                      break;
                    case 3:
                      categoryLabel = "B1";
                      break;
                    case 4:
                      categoryLabel = "B";
                      break;
                    case 5:
                      categoryLabel = "BE";
                      break;
                    case 6:
                      categoryLabel = "C1";
                      break;
                    case 7:
                      categoryLabel = "C1E";
                      break;
                    case 8:
                      categoryLabel = "C";
                      break;
                    // Adaugă cazurile pentru alte valori ale lui "val" dacă este necesar
                    default:
                      break;
                  }
                  return (
                    <div onClick={(e)=>{e.stopPropagation();setSelectedCategory(current=>current.filter((el)=>el!==val))}} className="flex justify-center items-center bg-red-500 text-white w-[4rem] h-[90%] px-[1rem] my-1 lg:my-0 mx-[.25rem] z-20 rounded-[8px]">
                      <span className="text-[20px] mr-2">
                        <AiOutlineCloseCircle />
                      </span>
                      {categoryLabel}
                    </div>
                  );
                })}
              </div>

              <ul
                className={`flex flex-row mt-[.5rem]  bg-white shadow-xl  ${
                  !showCategories && "hidden"
                }`}
              >
                <li
                  onClick={() => handleSelectCategory(0)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 0) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A1
                </li>
                <li
                  onClick={() => handleSelectCategory(1)}
                  className={`flex justify-center  items-center ${
                    selectCategory.some((element) => {
                      if (element === 1) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A2
                </li>
                <li
                  onClick={() => handleSelectCategory(2)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 2) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A
                </li>
                <li
                  onClick={() => handleSelectCategory(3)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 3) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  B1
                </li>
                <li
                  onClick={() => handleSelectCategory(4)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 4) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  B
                </li>
                <li
                  onClick={() => handleSelectCategory(5)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 5) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  BE
                </li>
                <li
                  onClick={() => handleSelectCategory(6)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 6) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C1
                </li>
                <li
                  onClick={() => handleSelectCategory(7)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 7) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C1E
                </li>
                <li
                  onClick={() => handleSelectCategory(8)}
                  className={`flex justify-center items-center ${
                    selectCategory.some((element) => {
                      if (element === 8) {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineRegister;
