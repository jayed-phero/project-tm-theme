import React from "react"

const Awrapper = () => {
  const awrapper = [
    {
      cover: "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
      data: "3,000",
      title: "SUCCESS STORIES",
    },
  
    {
      cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
      data: "320",
      title: "TRUSTED TUTORS",
    },
    {
      cover: "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
      data: "1,000",
      title: "SCHEDULES",
    },
    {
      cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
      data: "587",
      title: "COURSES",
    },
  ]
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
