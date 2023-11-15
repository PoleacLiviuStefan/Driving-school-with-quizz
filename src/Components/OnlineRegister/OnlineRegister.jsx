import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineRight, AiOutlineCloseCircle,AiOutlineCheck } from "react-icons/ai";
import emailjs from '@emailjs/browser'

const OnlineRegister = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [selectCategory, setSelectedCategory] = useState([]);
  const [registerCompleted,setRegisterCompleted]=useState(false);
  const [checkedCategory,setCheckedCategory]=useState([]);
  const generalCategory=useRef();
  const [category,setCategory]=useState("Categoria A1");
  const handleSelectCategory = (value) => {
    if (
      !selectCategory.some((element) => {
        if (element === value) {
          return true;
        }
      })
    )
      setSelectedCategory((current) => [...current, value]);
    else
      setSelectedCategory((current) =>
        current.filter((element) => element !== value)
      );
  };

  const handleCheckedCategory = (element) => {
    console.log(checkedCategory.toString())
    if(checkedCategory.find(elementFind=>elementFind === element))
      setCheckedCategory(checkedCategory.filter(item=>item!==element))
      
    else
      setCheckedCategory(allElements=> [...allElements, element]);
  }
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("da");
    emailjs.sendForm('service_d9r6rus', 'template_ytabuau', form.current,'RUXGR3wPf5KOMGSuu')
      .then((result) => {
        console.log("mesaj trimis")
         
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="flex justify-center items-center w-full h-full pb-[10rem] ">
      <div className="relative flex flex-col items-center w-[65rem] h-full ">
        <div className="relative   bg-bgRegister bg-cover  w-screen h-[32rem] ">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[50%] w-full h-full ">
            <div className="relative mb-4 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
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

          <form ref={form} onSubmit={sendEmail}
            className="mt-[1rem] flex flex-col items-center  bg-white p-[1rem] w-full h-full"
          
          >
            <div className=" flex flex-col items-center  lg:grid lg:grid-cols-3">
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Nume</label>
              <input
                name="user_firstName"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Prenume</label>
              <input
              name="user_lastName"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
              <label className="">Prenumele Tatalui</label>
              <input
                name="user_fatherName"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className=" mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Prenumele Mamei</label>
              <input
                name="user_motherName"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">CNP*</label>
              <input
                name="user_CNP"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="number"
                minLength={13}
                maxLength={13}
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Serie</label>
              <input
                name="user_IdSeries"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Numar</label>
              <input
                name="user_IdNumber"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Emis de</label>
              <input
                name="user_IdTransmitter"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Emis la</label>
              <input
                name="user_IdIssuedAt"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Expira la</label>
              <input
              name="user_expireDate"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Sex</label>
              <select name="user_gender" className="mt-[1rem] w-[18rem]">
                <option>Alege din lista</option>
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
                <option value="Altul">Altul</option>
              </select>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Data de Nastere</label>
              <input
                name="user_birthDate"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
                placeholder="ZZ/LL/AAAA"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Tara Nasterii</label>
              <input
                name="user_nationality"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Judetul</label>
              <input
                name="user_county"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label className="">Localitate/Sector</label>
              <input
                name="user_city"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
            </div>
         
          
            
            <div className="mt-[2rem] lg:mt-[3rem] flex flex-col w-[90%] text-left group">
              <label className="lg:w-[25rem]">
                Categorii permis de conducere detinute deja{" "}
              </label>
              <div
                onClick={() => setShowCategories((prev) => !prev)}
                className="flex flex-wrap justify-center  cursor-pointer border-[1px] border-black text-[12px] lg:text-[15px]  lg:w-[60rem] lg:h-[2rem] px-[.5rem] lg:px-[1rem] items-center"
              > 
                {(!showCategories && selectCategory.length===0) ? "APASA PENTRU A VEDEA TOATE CATEGORIILE": selectCategory.map((val) => {
                  
                  return (
                    <div onClick={(e)=>{e.stopPropagation();setSelectedCategory(current=>current.filter((el)=>el!==val))}} className="flex justify-center items-center bg-red-500 text-white w-[4rem] h-[90%] px-[1rem] my-1 lg:my-0 mx-[.25rem] z-20 rounded-[8px]">
                      <span className="text-[20px] mr-2">
                        <AiOutlineCloseCircle />
                      </span>
                      {val}
                    </div>
                  );
                })}
              </div>
             
              <ul
                className={` flex flex-row mt-[.5rem] text-[13px] lg:text-[16px] bg-white shadow-xl  ${
                  !showCategories && "hidden"
                }`}
              >
                <li
                  onClick={() => handleSelectCategory("A1")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "A1") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A1
                </li>
                <li
                  onClick={() => handleSelectCategory("A2")}
                  className={`flex justify-center  items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "A2") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A2
                </li>
                <li
                  onClick={() => handleSelectCategory("A")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "A") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  A
                </li>
                <li
                  onClick={() => handleSelectCategory("B1")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "B1") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  B1
                </li>
                <li
                  onClick={() => handleSelectCategory("B")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "B") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  B
                </li>
                <li
                  onClick={() => handleSelectCategory("BE")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "BE") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  BE
                </li>
                <li
                  onClick={() => handleSelectCategory("C1")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "C1") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C1
                </li>
                <li
                  onClick={() => handleSelectCategory("C1E")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "C1E") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C1E
                </li>
                <li
                  onClick={() => handleSelectCategory("C")}
                  className={`flex justify-center items-center border-[1px] ${
                    selectCategory.some((element) => {
                      if (element === "C") {
                        return true;
                      }
                    }) && "bg-red-500 text-white"
                  } w-full h-[2rem] cursor-pointer`}
                >
                  C
                </li>
              </ul>
            </div>
            <input name="user_categories" className="hidden" value={selectCategory.toString()}/>
            </div>
         
          <h4 className="mt-[2rem] text-[18px] w-[90%] lg:w-full font-bold">2.Completeaza cu datele de contact pentru ca noi sa putem lua legatura</h4>
          <div   className=" flex flex-col items-center  lg:grid lg:grid-cols-3 bg-white p-[1rem] w-full h-full"
          >
              
              <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
            <label>Email</label>
            <input
                name="user_email"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text"
              ></input>
              </div>
              <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
              <label>Telefon</label>
              <input
                name="user_phone"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" required
              ></input>
              </div>
              <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
                 <label>Adresa</label>
                 <input
                 name="user_street"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" placeholder="STRADA" required
              ></input>
              </div>
              <input
                 name="user_adressNumber"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" placeholder="NUMAR" required
              ></input>
                 <input
                 name="user_bloc"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" required
                placeholder="BLOC"
              ></input>
                 <input
                 name="user_scara"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" placeholder="SCARA" required
                
              ></input>
                 <input
                 name="user_etaj"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" placeholder="ETAJ" required
              ></input>
               <input
               name="user_apartament"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" placeholder="APARTAMENT" required
              ></input>
             
                  
                 <input
                 name="user_localitate"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" 
                placeholder="LOCALITATE"
              ></input>
          
              <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
                <label>Judet/Sector</label>
                 <input
                 name="user_judet"
                className="mt-[.5rem] lg:mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" 
              ></input>
              </div>
              <div className="mt-[2rem] lg:mt-[3rem] flex flex-col text-left group">
                <label>Tara</label>
                 <input
                 name="user_tara"
                className="mt-[1rem] border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                type="text" defaultValue="Romania"
              ></input>
              </div>
          </div>
          <h4 className="mt-[3rem] text-[18px] font-bold">3. Alege categoriile pe care le doresti</h4>
          <div    className="relative mt-[1rem] flex flex-col  items-center  bg-white p-[1rem] w-[90%] lg:w-full h-[20rem]"
            >
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <input name="user_categoriiDorite" value={checkedCategory.toString()} className="hidden"  />
              <select ref={generalCategory} onChange={()=>{setCategory(generalCategory.current.value); console.log(category)}}  className="w-[20rem] h-[2rem] border-[1px] border-red-600 focus:outline-none text-center font-bold">
                <option value="Categoria A1">Categoria A1</option>
                <option value="Categoria A2">Categoria A2</option>
                <option value="Categoria AM">Categoria AM</option>
                <option value="Categoria A">Categoria A</option>
                <option value="Categoria B1">Categoria B1</option>
                <option value="Categoria B">Categoria B</option>
                <option value="Categoria B extins">Categoria B extins</option>
                <option value="Categoria BE">Categoria BE</option>
              </select>
              <div className="hidden flex flex-col items-center">
                <div className="flex">
                  <input type="radio" value="B Manuala" className="mx-[.5rem] rounded-[0px]"  />
                  <label>B Manuala</label>
                </div>
                <div className="flex">
                  <input type="radio" value="B Manuala Engleza"  />
                  <label>B Manuala in Limba Engleza</label>
                </div>
                <div className="flex">
                  <input type="radio" value="B Automata - Dizabilitati"  />
                  <label>B Automata Pentru Persoane cu Dizabilitati</label>
                </div>
                <div className="flex">
                  <input type="radio" value="B Automata Engleza"  />
                  <label>B Automata in Limba Engleza</label>
                </div>
                <div className="flex">
                <input type="radio" value="B1"  />
                  <label>B1</label>
                </div>
                <div className="flex">
                <input type="radio" value="B Extins"  />
                  <label>B Extins</label>
                </div>
                <div className="flex">
                <input type="radio" value="BE"  />
                  <label>BE</label>
                </div>
                <div className="flex">
                  <input type="radio" value="A"  />
                  <label>A</label>
                </div>
                <div className="flex">
                <input type="radio" value="A Engleza"  />
                <label>A in Limba Engleza</label>
                </div>
                <div className="flex">
                  <input type="radio" value="A1"  />
                  <label>A1</label>
                </div>
                <div className="flex">
                <input type="radio" value="A1 Engleza"  />
                <label>A1 in Limba Engleza</label>
                </div>
                <div className="flex">
                  <input type="radio" value="A2"  />
                  <label>A2</label>
                </div>
                <div className="flex">
                <input type="radio" value="A2 Engleza"  />
                <label>A2 in Limba Engleza</label>
                </div>
                <div className="flex">
                  <input type="radio" value="AM"  />
                  <label>AM</label>
                </div>
                <div className="flex">
                <input type="radio" value="AM Engleza"  />
                <label>AM in Limba Engleza</label>
                </div>
              </div>
              <div className="mt-[1rem] lg:mt-0 flex flex-col items-start w-[21rem] lg:w-[25rem] text-[14px] lg:text-[15px]">
                <div  className={`flex my-2 ${category!="Categoria B" && "hidden"}`}>
                  <span onClick={()=>handleCheckedCategory("B Manuala")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} > <span className={` ${!checkedCategory.find((element=>element==="B Manuala")) && "hidden"}`}><AiOutlineCheck /></span> </span>
                  <label>B Manuala</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria B" && "hidden"}`}>
                  <span onClick={()=>handleCheckedCategory("B Manuala in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} > <span className={` ${!checkedCategory.find((element=>element==="B Manuala in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>B Manuala in Limba Engleza</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria B" && "hidden"}`}>
                  <span onClick={()=>handleCheckedCategory("B Automata Pentru Persoane cu Dizabilitati")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="B Automata Pentru Persoane cu Dizabilitati")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>B Automata Pentru Persoane cu Dizabilitati</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria B" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("B Automata in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="B Automata in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>B Automata in Limba Engleza</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria B1" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("B1")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="B1")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>B1</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria B extins" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("B Extins")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="B Extins")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>B Extins</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria BE" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("BE")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="BE")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>BE</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>A</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                <label>A in Limba Engleza</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A1" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A1")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A1")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>A1</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A1" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A1 in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A1 in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                <label>A1 in Limba Engleza</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A2" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A2")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A2")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>A2</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria A2" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("A2 in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="A2 in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                <label>A2 in Limba Engleza</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria AM" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("AM")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="AM")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                  <label>AM</label>
                </div>
                <div className={`flex my-2 ${category!="Categoria AM" && "hidden"}`}>
                <span onClick={()=>handleCheckedCategory("AM in Limba Engleza")} className={`flex justify-center items-center text-[20px] text-red-600 w-6 h-6 border-[2px] border-red-600 mr-2`} ><span className={` ${!checkedCategory.find((element=>element==="AM in Limba Engleza")) && "hidden"}`}> <AiOutlineCheck /> </span> </span>
                <label>AM in Limba Engleza</label>
                </div>
              </div>
              </div>
                  <button onClick={()=>{navigate("/inscrieri-online")}}  className="relative mt-4 btn2 w-[12rem] lg:w-[16rem] h-[3rem] rounded-[15px]  border border-red-500 bg-red-500 font-semibold tracking-wider leading-none overflow-hidden trasition ease-in-out duration-300 text-white cursor-pointer"
       
        >
          <span className="absolute inset-0 bg-red-600 trasition ease-in-out duration-300"  ></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
          {registerCompleted ? "Multumim, formular a fost trimis! Cat de curand veti fi contactat de cineva din echipa noastra": "INSCRIE-TE ACUM"}
          </span>
          {registerCompleted ? "Multumim, formular a fost trimis! Cat de curand veti fi contactat de cineva din echipa noastra": "INSCRIE-TE ACUM"}</button>
              
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineRegister;
