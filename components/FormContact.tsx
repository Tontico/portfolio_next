import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwitchTheme from "./SwitchTheme";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";


const FormContact = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [formData, setFormData] = useState<object>({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [validatedLogs, setValidatedLogs] = useState<boolean>(false);
    const apiUrl = process.env.API_URL;

    const handlePhone = (e: any) => {
        let input = e.target.value.replace(/\D/g, '');
        let formattedInput = input.replace(/(\d{2})(?=\d)/g, '$1 ');
        setPhoneNumber(formattedInput);
    };

    const handleApi = () => {
        console.log(apiUrl)
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`https://nodejs-serverless-function-express-five-xi.vercel.app/api/send-email`, formData);
            setValidatedLogs(true);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            alert('Une erreur est survenue lors de l\'envoi de l\'e-mail');
            setValidatedLogs(false);
        }
    };
    return (
        <>
            <form className=" relative h-5/6 w-1/2 phone:w-11/12 dark:bg-white bg-customDarkBg rounded-md mx-auto flex flex-col justify-center " onSubmit={handleSubmit} onClick={handleApi}>
                <div className=" w-11/12 h-full mx-auto p-5 mb-10 flex flex-col justify-center items-center ">
                    <h2 className="dark:text-black text-white text-center text-2xl mb-2 phone:m-0">Pour toute demande particulière !</h2>
                    {validatedLogs && (<span className="bg-lime-500 w-full p-2 rounded-md dark:text-black text-white text-center mb-2">Message envoyé avec succès !</span>)}
                    <span className="dark:text-black text-sm text-white">* Obligatoire</span>
                    <div className="w-full my-2 flex gap-4 phone:flex-col">
                        <input className=" w-1/2 border-customColor phone:w-full  p-2 border-2   rounded-md dark:text-customDarkBg" name="lastname" type="text" placeholder="Nom..." onChange={handleChange}></input>
                        <input className=" p-2 w-1/2 border-customColor  phone:w-full border-2  rounded-md dark:text-customDarkBg" name="firstname" type="text" placeholder="Prenom..." onChange={handleChange}></input>
                    </div>
                    <div className="w-full my-2 flex gap-4 phone:flex-col">
                        <input className=" w-1/2 border-customColor  phone:w-full  p-2 border-2  rounded-md dark:text-customDarkBg" name="email" type="mail" placeholder="*Email..." required onChange={handleChange}></input>
                        <input
                            className="p-2 w-1/2  border-customColor  phone:w-full border-2  rounded-md dark:text-customDarkBg"
                            type="tel"
                            value={phoneNumber}
                            name="phone"
                            maxLength={14}
                            onChange={(e) => {
                                handlePhone(e);
                                handleChange(e);
                            }}
                            placeholder="Téléphone..."
                        />
                    </div>
                    <input className="my-2 p-2  border-customColor  w-full border-2 rounded-md dark:text-customDarkBg" name="subject" type="text" placeholder="*Objet de votre demande..." required onChange={handleChange}></input>
                    <textarea className="my-2 p-2 border-customColor  w-full border-2  rounded-md dark:text-customDarkBg" name="message" placeholder="Votre Message..." onChange={handleChange}></textarea>

                    <button className="bg-customColor  rounded-full p-3 w-40  mx-auto text-white dark:text-customDarkBg absolute bottom-6 left-1/2 transform -translate-x-1/2">Soumettre</button>
                </div>
            </form>
            <Image src='/images/sticker.png' alt="photo-contact" className="w-80 absolute top-44 right-44 transform translate-x-1/2 translate-y-1/2 phone:hidden" width={1592} height={1592} />
        </>
    );
}

export default FormContact;