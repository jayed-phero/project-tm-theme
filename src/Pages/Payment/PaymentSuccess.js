import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const transactionId = query.get("transactionId")

    const [paymentInfo, setPaymentInfo] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/eventpayment/by-transaction-id/${transactionId}`)
            .then(res => {
                console.log(res)
                setPaymentInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [transactionId])
    return (
        <div className='px-5 md:px-20 lg:px-32 xl:px-52 py-9 lg:py-16 min-h-screen'>
            <div>
                <h3 className='text-xl font-bold text-green-500 pb-5'>Congrats! {paymentInfo.name}. You have Successfully Paid {paymentInfo.eventTitle} event Fee. </h3>
                <h3 className='py-2'>TransactionId: {paymentInfo.transactionId}</h3>
                <h3>Day & Time: {paymentInfo.paidAt}</h3>
                <img src={paymentInfo.eventImg} className='h-56 w-full md:w-64 rounded-lg my-5' alt="" />
                <p>Explore this Event.</p>

                <div class="bg-gray-50 px-4 py-3 sm:px-6 print:hidden">
                    <button onClick={() => window.print()} class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Print</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;