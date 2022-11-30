import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { editProfile } from "../../../services/reducres/user/userSlice"
import { Input, Textarea } from "@material-tailwind/react";
import { useDispatch } from "react-redux";

export default function Example({ open, setOpen }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ username: "", bio: "", profile: "" })
    const cancelButtonRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault()
        dispatch(editProfile(formData))
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mb-[5rem] md:mb-0">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="flex flex-col">
                                            <div className="mb-4">
                                                <h3 className="font-poppins font-medium text-xs">
                                                    Edit Profile
                                                </h3>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <div>
                                                    <div className="mb-3">
                                                        <Input label="Username" name="username" onChange={(e) => {
                                                            setFormData((prev) => {
                                                                return { ...prev, username: e.target.value }
                                                            })
                                                        }} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <Textarea label="Bio" name="bio" onChange={(e) => {
                                                            setFormData((prev) => {
                                                                return { ...prev, bio: e.target.value }
                                                            })
                                                        }} />
                                                    </div>
                                                    {/* <div className="mb-3">
                                                        <Input onChange={ } label="Email" />
                                                    </div> */}
                                                    <div>
                                                        <input
                                                            type="file"
                                                            name="profile"
                                                            onChange={(e) => {
                                                                setFormData((prev) => {
                                                                    return { ...prev, profile: e.target.files[0] }
                                                                })
                                                            }}
                                                            className="form-control
                                                                block
                                                                w-full
                                                                px-3
                                                                py-1.5
                                                                text-base
                                                                font-normal
                                                              text-gray-700
                                                              bg-white bg-clip-padding
                                                                border border-solid border-gray-300
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0
                                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        />
                                                        <img src="" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </form>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}