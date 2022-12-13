import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../../hooks/Scrool-to-top';
import ConformationModal from '../../Pages/Shared/ConformationModal/ConformationModal';

const AllBlogForHost = () => {
    const [blogs, setBlogData] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [deleteBlog, setDeleteBlog] = useState(null)
    console.log(deleteBlog)

    useEffect(() => {
        allBlogGet()
    }, [user])

    const allBlogGet = () => {
        setLoading(true)
        allBlogForHost(user)
            .then(data => {
                setBlogData(data)
                setLoading(false)
            })
    }

    const allBlogForHost = async (user) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/allblogsforhost?email=${user?.email}`)

        const products = await res.json()
        return products
    }

    const modalClose = () => {
        setDeleteBlog(null)
    }

    const handleDeleteBlog = blog => {
        fetch(`${process.env.REACT_APP_API_URL}/hostblog/${blog._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    allBlogGet();
                    toast.success(`Blog ${blog.name} deleted successfully`)
                }
            })

    }

    return (
        <div>
            <ScrollToTop/>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Heading</th>
                            <th>Image</th>
                            <th>Blog Coute</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            blogs?.map((blog, i) =>
                                <tr key={blog._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={blog.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{blog.title.slice(0, 35)}</div>
                                                <div className="text-sm opacity-50">{blog.categoryName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>
                                      
                                    </td>
                                    <td>
                                      
                                    </td>
                                    <th>
                                        <label onClick={() => setDeleteBlog(blog)} htmlFor="modalConformation" className="btn border-2 border-regal-orange text-xl text-error h-7 w-9 flex items-center justify-center rounded-full hover:bg-regal-orange bg-transparent ">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </label>
                                    </th>
                                </tr>
                            )
                        }
                        {
                            deleteBlog && <ConformationModal
                                title={` Are you sure want to delete !!!`}
                                message={`if you delete ${deleteBlog.name}. we will never be able to recover it!!`}
                                successAction={handleDeleteBlog}
                                modalData={deleteBlog}
                                successButtonName="Delete"
                                modalClose={modalClose}
                            />
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBlogForHost;