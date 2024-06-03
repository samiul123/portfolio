import React, {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import {slideIn} from "../utils/motion";
import {send} from "../assets";

export const Contact = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.25 });
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div
            id={props.id}
            key={props.id}
            className="p-10 h-auto bg-custom-gray text-white flex flex-col items-center space-y-10">
            <h2 className="font-lulo uppercase text-4xl z-10">Contact</h2>
            <div ref={ref} className="overflow-hidden min-w-[800px]">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    viewport={{ once: false, amount: .25 }}
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="bg-gray-600 flex-[0.75] p-8 rounded-lg">
                    <form
                        ref={formRef}
                        className="flex flex-col p-5 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Your Name</span>
                            <input type="text"
                                   name="name"
                                   value={form.name}
                                   placeholder="What's your name?"
                                   onChange={handleChange}
                                   className="px-3 py-4 rounded-lg
                               border-none font-medium bg-custom-gray outline-none"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Your Email</span>
                            <input type="text"
                                   name="email"
                                   value={form.email}
                                   placeholder="What's your email?"
                                   onChange={handleChange}
                                   className="px-3 py-4 rounded-lg
                               border-none font-medium bg-custom-gray outline-none"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Your Message</span>
                            <textarea
                                rows="8"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's your message?"
                                className="px-3 py-4 rounded-lg
                               border-none font-medium bg-custom-gray outline-none resize-none"
                            />
                        </label>
                        <button
                            type="submit"
                            className="p-3 flex w-fit gap-2 items-center justify-center bg-custom-gray font-bold
                        rounded-lg">
                            SEND
                            <img
                                src={send}
                                alt="send"
                                className="sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                            />
                        </button>

                    </form>
                </motion.div>
            </div>
        </div>
    );
}