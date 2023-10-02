import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import tailwindConfig from '../../tailwind.config.js'

const CardIntro = ({ className, onSubmit, title, question, onChange, placeholder, mode }) => {
    const [legthInput, setLength] = useState('')
    const ref = useRef(null)



    const HandleChange = event => {
        setLength(event.currentTarget.value)
        onChange(event)
    }

    return (
        <motion.section
            initial={{ x: (window.innerWidth / 2) + 100 }}
            whileInView={{ x: 0 }}
            transition={{
                type: 'spring',
                duration: .5
            }}

            className={"w-fit h-fit p-10 rounded-2xl border-actionSecondary border-4 text-primary font-poppins divide-y-4 divide-actionSecondary " + className}>
            <h4 className="font-bold py-4">{title}</h4>

            <div className="py-4 flex flex-col gap-5">
                <span className="font-light">{question}</span>
                {
                    mode === "question" ?
                        <div className="w-full relative flex justify-center items-center">
                            <input type="text" onChange={HandleChange} className="bg-transparent w-full border border-actionSecondary rounded-md text-primary p-2 outline-none" placeholder={placeholder} />
                            <motion.button
                                onClick={onSubmit}
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1
                                }}
                                className={`absolute right-0 w-fit h-full bg-actionSecondary px-5 rounded-r-md ${legthInput.length > 0 ? "block" : "hidden"}`}>
                                <Send color="white" />
                            </motion.button>
                        </div>
                        :
                        <div className="w-full relative flex justify-center items-center">
                            <motion.button
                                onClick={onSubmit}
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1
                                }}
                                whileHover={{
                                    backgroundColor: tailwindConfig.theme.extend.colors.actionSecondary,
                                    color: tailwindConfig.theme.extend.textColor.secondary
                                }}
                                className={`bg-transparent opacity-0 w-full border border-actionSecondary rounded-md text-primary p-2 outline-none`}>
                                Vamos Lá
                            </motion.button>
                        </div>
                }
            </div>
        </motion.section>
    )
}

export default CardIntro