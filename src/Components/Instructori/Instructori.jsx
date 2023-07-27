
import {useNavigate} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import Instructor from './Instructor';
import instructorAvatar from '../../Images/Instructor.jpg'
const Instructori = () => {

    const navigate=useNavigate();

  return (
    <div className='flex justify-center items-center w-full h-full py-[10rem]'>
        <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full'>
        <div className='absolute top-[-1rem] left-[1rem] lg:left-0 flex items-centert text-[12px]  lg:text-[14px] text-gray-500 '>
              <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Instructorii Nostri</a>
            
            </div>
            <h2 className='text-[26px] lg:text-[42px] font-extrabold'>INSTRUCTORII <span className='text-red-600'> NOSTRI</span></h2>
            <p className='w-[80%] text-[18px] lg:text-[24px] text-justify lg:text-center'>Intalneste echipa noastra de oameni talentanti, cu ajutorul carora o sa reusesti sa obtii permisul de conducere </p>
            <div className=' flex flex-col items-center lg:grid lg:grid-cols-3  w-full '>
                <Instructor instructorAvatar={instructorAvatar} moto={true} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
                <Instructor instructorAvatar={instructorAvatar} moto={true} auto={true} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
                <Instructor instructorAvatar={instructorAvatar} auto={true} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
                <Instructor instructorAvatar={instructorAvatar} moto={true} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
                <Instructor instructorAvatar={instructorAvatar} moto={true} auto={true} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
            </div>
            <span className='mt-[4rem] bg-black w-full  h-[2px]'/>
            <Instructor instructorAvatar={instructorAvatar}  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam harum quasi recusandae debitis, amet tempora reprehenderit odit voluptas ad aperiam a fugiat, aspernatur animi itaque ut obcaecati accusantium minima molestiae dolor adipisci? Molestiae, eligendi velit. Nemo, ea iusto. Molestiae labore facilis provident quis quam voluptatibus aut tenetur dignissimos iste!" />
        </div>
    </div>
  )
}

export default Instructori