import React from 'react';

const UEventDetails = () => {

    const eventContent = [
        {
            text: "Over 37 lectures and 55.5 hours of content!"
        },
        {
            text: "LIVE PROJECT End to End Software Testing Training Included."
        },
        {
            text: "Learn Software Testing and Automation basics from a professional trainer from your own desk."
        },
        {
            text: "Information packed practical training starting from basics to advanced testing techniques."
        },
        {
            text: "Best suitable for beginners to advanced level users and who learn faster when demonstrated."
        },
        {
            text: "Course content designed by considering current software testing technology and the job market."
        },
        {
            text: "Practical assignments at the end of every session."
        },
        {
            text: "Practical learning experience with live project work and examples."
        }
    ]

    const timing = [
        {
            text: "Days",
            count: "25"
        },
        {
            text: "Hours",
            count: "15"
        },
        {
            text: "Minutes",
            count: "55"
        },
        {
            text: "Seconds",
            count: "11"
        },
    ]

    const scheduleInfo = [
        {
            title: "Start Time",
            icon: <i class="fa-regular fa-clock"></i>,
            time: " 08:00",
            date: "31/07/2022"
        },
        {
            title: "Finish Time",
            icon: <i class="fa-solid fa-flag"></i>,
            time: " 17:00",
            date: "15/08/2022"
        },
        {
            title: "Address",
            icon: <i class="fa-solid fa-location-dot"></i>,
            address: "Vanice, Italy"
        }
    ]
    return (
        <div className='xl:px-52 px-5'>
            <h3 className='pb-7'>Events</h3>
            <div>
                <div className='flex items-start gap-5 relative'>
                    <div className='flex-1'>
                        <div className='text-3xl font-semibold pb-7'>
                            <h1>Applying Natural Laws to Technology and Society</h1>
                        </div>
                        <div className='relative flex flex-col items-center justify-center'>
                            <img
                                src="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                className='w-full h-64 md:h-96' />
                            <div className='absolute top-3 grid grid-cols-2 md:grid-cols-4 gap-6'>
                                {
                                    timing.map((time, i) =>
                                        <div key={i} className='h-24 w-24 rounded-full border-2 border-white text-white flex items-center justify-center flex-col'>
                                            <h3 className='text-5xl font-bold'>{time.count}</h3>
                                            <p>{time.text}</p>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex items-start gap-16 py-12 '>
                                <div className='flex-1'>
                                    <div>
                                        <h3 className='text-xl font-bold pb-4'>EVENT DESCRIPTION</h3>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                    <div className='py-7'>
                                        <h3 className='text-xl font-bold pb-5'>EVENT CONTENT</h3>
                                        <div>
                                            {
                                                eventContent.map((content, i) =>
                                                    <div key={i} className='flex  gap-4 items-start pb-3'>
                                                        <i className=" fa-solid fa-circle text-regal-orange text-xs mt-1.5"></i>
                                                        <h2 className='text-base '> {content.text}
                                                        </h2>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='w-44'>
                                    {
                                        scheduleInfo.map((info, i) =>
                                            <div key={i} className='flex gap-3  border-b border-gray-300 py-3 '>
                                                <p className='text-regal-orange text-lg'>{info.icon}</p>
                                                <div>
                                                    <h3 className='font-bold'>{info.title}</h3>
                                                    <div className='text-gray-500 text-base'>
                                                        <p>{info.time}</p>
                                                        <p>{info.date}</p>
                                                        <p>{info.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 bg-regal-orange h-96 sticky top-20'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UEventDetails;

// echo "# project-tm-pro" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jayed-phero/project-tm-pro.git
// git push -u origin main