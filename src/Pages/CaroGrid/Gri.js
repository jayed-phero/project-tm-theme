import React, { Component } from "react";
import Slider from "react-slick";
import { dataDigitalBestSeller } from "./data";

export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="px-5 md:px-20 lg:px-32 xl:px-52 py-16 py-11">
                <div class=" md:flex md:items-center md:justify-between">
                    <div>
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                            What our clients are saying
                        </h1>

                        <div class="flex mx-auto mt-6">
                            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>

                    <div class="flex justify-between mt-8 md:mt-0">
                        <button title="left arrow" class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" onClick={this.previous}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" onClick={this.next}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {dataDigitalBestSeller.map((item) => (
                            <div  class="p-8 w-96 border rounded-lg dark:border-gray-700 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
                                <p class="leading-loose text-gray-500 dark:text-gray-400 group-hover:text-white">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div class="flex items-center mt-8 -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div class="mx-2">
                                        <h1 class="font-semibold text-gray-800 dark:text-white group-hover:text-white">Robert</h1>
                                        <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* <div style={{ textAlign: "center" }}>
                    <button className="button p-5 rounded-xl bg-gray-300" onClick={this.previous}>
                        Previous
                    </button>
                    <button className="button p-5 rounded-xl bg-gray-30" onClick={this.next}>
                        Next
                    </button>
                </div> */}
            </div>
        );
    }
}