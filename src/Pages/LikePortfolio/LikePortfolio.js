import React from 'react';

const LikePortfolio = () => {
    const portfolioData = [
        {
            img: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
            name: "Best Website Collections",
            smalltitle: "WEBSITE"
        },
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "Ton’s of mobile mockup",
            smalltitle: "Mockups"
        },
        {
            img: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
            name: "Block of Ui kit",
            smalltitle: "Ui kit"
        },
        {
            img: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "Huge collection of animation",
            smalltitle: "Animation"
        }
    ]
    return (
        <div className='px-6 md:px-20 lg:px-32 xl:px-52 py-11'>
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