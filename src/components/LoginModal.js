import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

const ModalLogin = (props) => {
    // const [showModal, setShowModal] = useState(false);
    const [mail, setUserMail] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('Sign In')


    const changeToAC = (e) => {
        e.preventDefault();
        setTitle('Sign Up');
    }

    // getting user email address information
    const handleChangeMail = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserMail(value)
    }

    // getting user password 
    const handlePassword = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPassword(value);
    }

    // Submit handle login, we get user mail and password input
    // and pass it to login function
    const handleSubmit = (e) => {
        props.login(mail, password)
    }

    return (
        <>
            <Modal className="modal" size="regular" active={props.show} toggler={(e) => props.setFalse(e, false)}>
                <div className="flex">
                    <div className="w-2/4">
                        <img className="w-full h-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                    </div>
                    <div className="w-2/4 p-6">
                        <ModalHeader className="w-full" toggler={(e) => props.setFalse(e, false)}>
                            <p className="w-full text-center mx-auto">{title}</p>
                        </ModalHeader>
                        <ModalBody>
                            <p className="text-gray-500 text-center pt-2">Simplify your reading in minutes.</p>
                           <form className="mt-8 space-y-6">
                               <input type="hidden" name="remember" value="true" />
                               <div className="rounded-md shadow-sm -space-y-px">
                                   <label className="sr-only" htmlFor="username">
                                       Email
                                   </label>
                                   <input type="text" name="email" 
                                   required placeholder="mail@mail.com" defaultValue={mail}
                                    className="appearance-none rounded-none relative 
                                    block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 rounded-t-md 
                                    focus:outline-none focus:ring-indigo-500 focus:border--indigo-500 
                                    focus:z-10 sm:text-sm"
                                    onChange={(e) => handleChangeMail(e)}
                                    />
                               </div>
                               <div className="rounded-md shadow-sm -space-y-px">
                                   <label className="sr-only" htmlFor="username">
                                       Password
                                   </label>
                                   <input type="text" name="password" 
                                   required 
                                   placeholder="password" value={password}
                                    className="appearance-none rounded-none relative 
                                    block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 rounded-b-md 
                                    focus:outline-none focus:ring-indigo-500 focus:border--indigo-500 
                                    focus:z-10 sm:text-sm"
                                    onChange={(e) => handlePassword(e)}
                                    />
                               </div>
                           </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="blue"
                                onClick={(e) => handleSubmit(e)}
                                ripple="light"
                                className="w-full"
                            >
                                {title}
                            </Button>
                        </ModalFooter>
                        <p className="text-sm cursor-pointer pt-1" onClick={(e) => changeToAC(e)}> Don't have an Account</p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalLogin;