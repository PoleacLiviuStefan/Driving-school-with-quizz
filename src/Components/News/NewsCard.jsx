import React from 'react'

const NewsCard = ({newTitle,newDescription}) => {
  return (
    <div className='bg-white shadow-xl w-[15rem] h-[25rem]'>
        <h2>{newsTitle}</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta non id sed, amet eos! Neque quisquam deserunt alias dolorum sint quae, atque ducimus blanditiis, vitae, quia perferendis illo iste? </p>
    </div>
  )
}

export default NewsCard