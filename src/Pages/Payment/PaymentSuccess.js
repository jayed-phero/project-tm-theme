import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from '../../hooks/Scrool-to-top';

const PaymentSuccess = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = new URLSearchParams(location.search)
    const transactionId = query.get("transactionId")

    const [paymentInfo, setPaymentInfo] = useState()
    console.log(paymentInfo)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/eventpayment/by-transaction-id/${transactionId}`)
            .then(res => {
                console.log(res)
                setPaymentInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [transactionId])

    if(!paymentInfo?._id){
        return (
            <div className='px-5 md:px-20 lg:px-32 xl:px-52 py-9 lg:py-16 min-h-screen text-center text-2xl text-red-500'>
                <h3>No Data Found</h3>
            </div>
        )
    }

    const goHome = () => {
        navigate('/')
    }
    return (
        <div className='px-5 md:px-20 lg:px-32 xl:px-52 py-9 lg:py-16 min-h-screen'>
            <ScrollToTop/>
            <div>
                <div className='flex items-start flex-col md:flex-row gap-11'>
                    <div className='w-full'>
                        <h3 className='text-xl font-bold  pb-5'> <span className='text-green-500'>Congrats! {paymentInfo.name} </span>.</h3>
                        <h3> You have Successfully Paid for  {paymentInfo.eventTitle} event . </h3>
                        <h3 className='py-2 text-bold text-xl'>TransactionId: {paymentInfo.transactionId}</h3>
                        <h3>Day & Time: {paymentInfo.paidAt}</h3>
                    </div>
                    <img src={paymentInfo.eventImg} className='h-56 w-full  rounded-lg my-5' alt="" />
                </div>
                <div class="bg-gray-50 py-3  print:hidden flex items-center gap-7">
                    <button onClick={() => window.print()} class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Print</button>
                    <button onClick={ goHome()} class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;