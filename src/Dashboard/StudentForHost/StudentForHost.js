import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';

const StudentForHost = () => {

    const { user } = useContext(AuthContext)
    const [hostRole, setHostRole] = useState({})
    const [studentsData, setStudentsData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/hostrolesdata/${user?.email}`)
            .then(res => {
                console.log(res)
                setHostRole(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [user?.email])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/studentsftboc/${hostRole?.nameOfClass}`)
            .then(res => {
                console.log(res)
                setStudentsData(res?.data?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [hostRole])

    console.log(hostRole)

    return (
        <div className=''>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email & Date Of Birth</th>
                            <th>Father Mobile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {/* studentsdata */}
                        {
                            studentsData.map((sinfo, i) =>
                                <tr>
                                    <th>
                                        <p>{i + 1}</p>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={sinfo.imgLink} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{sinfo.name}</div>
                                                <div className="text-sm opacity-50">{sinfo.nameOfClass}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {sinfo.email}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{sinfo.dob}</span>
                                    </td>
                                    <td>{sinfo.fatherMobileNumber}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email & Date Of Birth</th>
                            <th>Father Mobile</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default StudentForHost;