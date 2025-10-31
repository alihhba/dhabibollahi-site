import React from 'react';
import {useNavigate} from "react-router-dom";
import icons from '@/lib/utils/icons';
import Icon from '@/icon/Icon';


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const ContactSection = () => {
    const navigate = useNavigate();

    return (
        <div>

            <form className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                >
                    Send now
                </button>
            </form>

            {/* Social Links */
            }
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Social</h2>

                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                    {[
                        {name: "Linkedin", icon: icons.linkedin},
                        {name: "Instagram", icon: icons.instagram},
                        {name: "Telegram", icon: icons.telegram},
                        {name: "Whatsapp", icon: icons.whatsapp},
                    ].map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between border border-primary-100 rounded-[20px] px-4 py-4"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 flex items-center justify-center bg-primary-100 text-white rounded-lg text-xl">
                                    <Icon
                                        className={'w-7 h-7'}

                                        icon={item?.icon}
                                    />
                                </div>
                                <p className="text-primary-100 font-medium">{item.name}</p>
                            </div>

                            <div
                                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-blue-500 text-lg">
                                ↗
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactSection
