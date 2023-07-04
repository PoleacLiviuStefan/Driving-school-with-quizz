import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import autoMoto from "../../Images/autoMoto.jpg";
import moto1 from "../../Images/moto1.jpg";
import { GiCarWheel } from "react-icons/gi";
import PriceCard from "./PriceCard";
import { CiTimer } from "react-icons/ci";
const DriverLicense = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-full py-[10rem]">
      <div className="relative flex flex-col items-center w-full lg:w-[65rem] h-full ">
        <div className="absolute top-[-1rem] left-[1rem] lg:left-0 flex items-start lg:items-center text-[12px] lg:text-[14px] text-gray-500 ">
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
          <a className="cursor-pointer">Obtine Permisul</a>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-[26px] w-[90%] lg:w-full  lg:text-[42px] text-center font-extrabold leading-[1.7rem] lg:leading-[4rem]">
            TE AJUTAM SA OBTII{" "}
            <span className="text-red-600">PERMISUL AUTO</span>{" "}
          </h2>
          <h3 className=" lg:text-[24px] font-bold text-gray-500 text-center">
            CATEGORII PERMIS DE CONDUCERE
          </h3>
        </div>
        <div className="mt-[5rem] flex flex-col lg:flex-row  items-center lg:items-start  w-full">
          <div className="flex flex-col">
            <img
              src={autoMoto}
              className="w-[350px] lg:w-[450px] rounded-[15px]"
            />
            <img
              src={moto1}
              className="mt-[1rem] w-[350px] lg:w-[450px] rounded-[15px]"
            />
          </div>
          <div className="flex flex-col px-[1rem] mt-[2rem] lg:px-0 lg:ml-[3rem] lg:mt-0  leading-[1.1rem] lg:leading-[1.3rem]  ">
            <p className="font-bold">
              Ne bucuram ca ti-ai facut curaj sa dai de permis, alaturi de
              instructorii scoli noastre vei reusii sa-ti indeplinesti visul!
            </p>
            <h3 className="mt-[.5rem] lg:mt-[1rem] text-[16px] lg:text-[24px] font-bold">
              Conditiile de inscriere pentru categoria A:
            </h3>
            <ul className="text-[14px] lg:text-[15px]">
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Pentru AM si A1 este necesara varsta minima de 16 ani
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Pentru A2 este necesara varsta minima de 18 ani
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2 mt-1">
                  <GiCarWheel />
                </span>
                Pentru A este necesara varsta minima de 24 ani sau detinerea
                categoriei A2 cu o vechime de cel putin 2 ani
              </li>
            </ul>
            <h3 className="mt-[1rem] text-[16px] lg:text-[24px] font-bold">
              Conditiile de inscriere pentru categoria B:
            </h3>
            <ul className="text-[14px] lg:text-[15px]">
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Pentru B este necesara varsta minima de 18 ani
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Pentru BE si B extins este necesar permisul pentru categoria B
              </li>
            </ul>
            <h3 className="mt-[1rem] text-[16px] lg:text-[24px] font-bold">
              Acte necesare pentru inscriere:
            </h3>
            <ul className="text-[14px] lg:text-[15px]">
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Copie buletin
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Copie certificat de nastere
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Copie certificat de casatorie (daca este cazul schimbarii
                numelui)
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Copie permis fata/verso (pentru cine vine la adaugarea
                categoriei)
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Cazier judiciar in original
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Taxa permis
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Adeverinta notarila de la parinti pentru minori la : AM, A1, B1
              </li>
              <li className="flex my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Adeverinta medic de familie
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Analize medicale + examen psihologic, facute la clinica avizata
                scolii de soferi (Policlinica Vlaicu)
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem]">
                {" "}
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                Avans
              </li>
              <li>
                <span className="font-bold text-[16px] lg:text-[20px]">Categoria A</span>
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem] lg:w-[35rem]">
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                <p>
                  In cadrul acestei categorii permis de conducere fac parte
                  urmatoarele clase suplimentare: A1, A2 si AM. Daca iti doresti
                  sa conduci vehicule din categoria A cu subclasele de rigoare,
                  trebuie sa stii ca obtinand permisul de conducere vei putea
                  conduce motociclete cu sau fara atas si tricicluri cu motor cu
                  puteri variate (in functie de subcategoria permisului de
                  conducere). Cel mai important aspect pe care trebuie sa il
                  cunosti este faptul ca ai nevoie de cel putin 2 ani de
                  conducere la activ pentru a putea conduce motociclete sau
                  cvadricicluri.
                </p>
              </li>
              <li>
                <span className="font-bold text-[16px] lg:text-[20px]">Categoria B</span>
              </li>
              <li className="flex  my-[.5rem] lg:my-[.7rem] lg:w-[35rem]">
                <span className="mr-2">
                  <GiCarWheel />
                </span>
                <p>
                  Categoriile B, B extins, B1 si BE iti ofera posibilitatea de a
                  conduce ansamblul de vehicule a caror masa totala maxima
                  autorizata este curpinsa intre 400-550 kg (pentru categoria
                  B1) si 3.500-4.250 kg pentru categoriile B, B extins si BE.
                  Mai mult, ansamblul format dintr-un autovehicul si o remorca
                  nu trebuie sa aiba un numar de locuri mai mare de 8. In
                  general, la categoria BE, acest ansamblu este format dintr-un
                  autovehicul din categoria B la care se ataseaza o remorca a
                  carei masa maxima autorizata nu este mai mare de 750 kg.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="mt-[5rem] text-[26px] text-center lg:text-left lg:text-[36px] font-extrabold">
          TARIFE CURSURI CATEGORIA A
        </h2>
        <div className="mt-[4rem] flex flex-wrap justify-center w-full">
          <PriceCard
            durationCard="30"
            titleCard="Categoria AM"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-start  w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  8 ORE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex flex-col justify-center items-center w-full   border-b-[1px] border-b-gray-300  px-[1rem]">
                  <span className="font-bold">VITEZA MAXIMA ADMISA:</span> 45
                  km/h, pentru mopede pe drumuri publice
                </li>
              </ul>
            }
            priceCard="990"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria A1"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center   w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  Stagiul fara detinerea unui permis categoria AM, va fi de 26
                  de ore. Daca candidatul detine permis categoria AM de mai
                  putin de 2 ani, stagiul alocat va fi de 20 ore, respectiv daca
                  detine permis categoria AM de mai mult de 2 ani este de doar
                  10 ore
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex flex-col justify-center items-center w-full   border-b-[1px] border-b-gray-300  px-[1rem]">
                  <span className="font-bold">VITEZE MAXIME ADMISE</span>
                  <ul>
                    <li>90 km/h pe autostrazi</li>
                    <li>
                      80 km/h pe drumurile expres sau pe cele nationale europene
                      (E){" "}
                    </li>
                    <li>70 km/h pe celelalte tipuri de drumuri</li>
                  </ul>
                </li>
              </ul>
            }
            priceCard="1990"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria A2"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center   w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  Stagiul fara detinerea unui permis categoria AM, va fi de 26
                  de ore. Daca candidatul detine permis categoria AM de mai
                  putin de 2 ani, stagiul alocat va fi de 20 ore, respectiv daca
                  detine permis categoria AM de mai mult de 2 ani este de doar
                  10 ore
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex flex-col justify-center items-center w-full   border-b-[1px] border-b-gray-300  px-[1rem]">
                  <span className="font-bold">VITEZE MAXIME ADMISE</span>
                  <ul>
                    <li>130 km/h pe autostrazi</li>
                    <li>
                      100 km/h pe drumurile expres sau pe cele nationale
                      europene (E){" "}
                    </li>
                    <li>90 km/h pe celelalte tipuri de drumuri</li>
                  </ul>
                </li>
              </ul>
            }
            priceCard="1990"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria A"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-start w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  Stagiul fara detinerea unui permis categoria AM, va fi de 26
                  de ore. Daca candidatul detine permis categoria AM de mai
                  putin de 2 ani, stagiul alocat va fi de 20 ore, respectiv daca
                  detine permis categoria AM de mai mult de 2 ani este de doar
                  10 ore
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex flex-col justify-center items-center w-full   border-b-[1px] border-b-gray-300  px-[1rem]">
                  <span className="font-bold">VITEZE MAXIME ADMISE</span>
                  <ul>
                    <li>130 km/h pe autostrazi</li>
                    <li>
                      100 km/h pe drumurile expres sau pe cele nationale
                      europene (E){" "}
                    </li>
                    <li>90 km/h pe celelalte tipuri de drumuri</li>
                  </ul>
                </li>
              </ul>
            }
            priceCard="1990"
          />
          <PriceCard
            durationCard="1"
            titleCard="Ora suplimentara Moto"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] "></ul>
            }
            priceCard="70"
          />
        </div>
        <h2 className="mt-[5rem] text-[26px] text-center lg:text-left lg:text-[36px] font-extrabold">
          TARIFE CURSURI CATEGORIA B
        </h2>
        <div className="mt-[4rem] flex flex-wrap justify-center w-full">
          <PriceCard
            durationCard="30"
            titleCard="Categoria B"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-center h-[3rem] w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  30 ORE PRACTICE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  DURATA MINIMA: 6 SAPTAMANI
                </li>
              </ul>
            }
            priceCard="2500"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria B Automat"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-center h-[3rem] w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  30 ORE PRACTICE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  DURATA MINIMA: 6 SAPTAMANI
                </li>
              </ul>
            }
            priceCard="2500"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria B+E"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-center h-[3rem] w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  10 ORE PRACTICE
                </li>
                <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]">
                  PLATA IN RATE
                </li>
          
              </ul>
            }
            priceCard="990"
          />
          <PriceCard
            durationCard="30"
            titleCard="Categoria B Extins"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
                <li className="my-[.5rem] flex justify-center items-center w-full   border-b-[1px] border-b-gray-300  px-[1rem]">
                  Acest permis este necesar pentru a conduce un ansamblu de
                  vehicule format dintr-un autovehicul tragator din categoria B
                  si o remorca, a carui masa maxima autorizata este mai mare de
                  3500 kg, dar nu depaseste 4250 kg.
                </li>
        
                <li className="my-[.5rem] flex justify-center items-center h-[3rem] w-full border-b-[1px] border-b-gray-300  px-[1rem]">
                  {" "}
                  <span className="mr-4 text-[24px]">
                    <CiTimer />{" "}
                  </span>{" "}
                  7 ORE PRACTICE
                </li>
              </ul>
            }
            priceCard="600"
          />
          <PriceCard
            durationCard="2"
            titleCard="Sedinta suplimentara auto"
            benefitsCard={
              <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
          
              </ul>
            }
            priceCard="150"
          />
        </div>
      </div>
    </div>
  );
};

export default DriverLicense;
