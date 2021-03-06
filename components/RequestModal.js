import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { open_request_Model } from '../store/states';

function RequestModal() {
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            requestModal: state.stateReducer.requestModal,
            addorupdate: state.stateReducer.addorupdate
        }
    });

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={state.requestModal} as={Fragment} >
            <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => {
                dispatch(open_request_Model(false))
            }}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block bg-white max-h-[80vh] rounded-lg text-left overflow-x-auto shadow-xl transform transition-all sm:my-8 sm:align-middle w-[70vw] p-5">

                            <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:col-span-1">
                                        <div className="px-4 sm:px-0">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900"> Request Leave </h3>
                                            <p className="mt-1 text-sm text-gray-600">Enter the date of you want the leave or number of hours</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <form action="#" method="">
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                Date & Hours
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="first-name"
                                                                id="first-name"
                                                                autoComplete="given-name"
                                                                className="mt-1 focus:ring-indigo-500 p-2 border-1 border-violet-800 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button
                                                        type="click"
                                                        onClick={ () => dispatch(open_request_Model(false))}
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default RequestModal
