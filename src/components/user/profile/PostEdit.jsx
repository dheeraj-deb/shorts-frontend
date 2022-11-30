import React from 'react'
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useState } from 'react';

import { editPost } from "../../../services/api/UserRequestes"

function PostEdit({ post, setIsLoading, setEdit, selectIsEdit }) {

    const [formData, setFormData] = useState({ title: post.title, description: post.description })
    const handleEdit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await editPost(post?._id, { title: formData.title, description: formData.description })
        setEdit(true)
        setIsLoading(false)
        selectIsEdit(false)
    }

    const handleCancelEdit = () => {
        selectIsEdit(false)
    }

    return (
        <div>
            <div className='p-4'>
                <form onSubmit={handleEdit}>
                    <h3 className='font-poppins text-gray-600 font-medium mb-4'>Edit Post</h3>
                    <div>
                        <div className='mb-3 font-poppins'>
                            <Input type="text" label='Title' value={formData.title} onChange={(e) => setFormData((prev) => {
                                return { ...prev, title: e.target.value }
                            })} />
                        </div>
                        <div>
                            <Textarea type="text" label='Description' value={formData.description} onChange={(e) => setFormData((prev) => {
                                return { ...prev, description: e.target.value }
                            })} />
                        </div>
                    </div>
                    <div className='text-end mt-2'>
                        <Button onClick={handleCancelEdit} color='red' size='sm' className='mr-2'>Cancel</Button>
                        <Button type='submit' size='sm' >Edit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostEdit