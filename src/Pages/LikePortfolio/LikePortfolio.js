import React from 'react';

const LikePortfolio = () => {
    const portfolioData = [
        {
            img: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name: "Academic Building",
            smalltitle: "Details"
        },
        {
            img: "https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Students Club Building",
            smalltitle: "Sudents"
        },
        
        {
            img: "https://images.unsplash.com/photo-1604412132568-9d5c14de13c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxheSUyMGdyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Play Ground For All",
            smalltitle: "know More"
        },
        {
            img: "https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Library For Education",
            smalltitle: "Education"
        }
    ]
    return (
        <div data-aos="fade-up" className='px-6 md:px-20 lg:px-32 xl:px-52 py-11'>
            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our
                        Campus</h1>

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                        {
                            portfolioData.map((p, i) =>
                                <div key={i} class="relative rounded-xl">
                                    <img src={p.img} alt=""
                                        className='h-96 w-full rounded-xl'
                                    />
                                    <div class="absolute bottom-0 w-full px-8 py-4 overflow-hidden rounded-b-xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                        <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">{p.name}</h2>
                                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{p.smalltitle}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LikePortfolio;