/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react"
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'
import { motion } from "motion/react"

interface FormData{
    lastname : string,
    firstname : string,
    presence: "assisteront" | "n'assisteront pas" | null;
    number : string,
    message : string
}

const FormHb = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormdata] = useState<FormData>({
        lastname : '',
        firstname : '',
        presence : null, 
        number : '',
        message : ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setFormdata(
            (prev) => {
                if (name === "presence" && value === "n'assisteront pas") {
                    return { ...prev, presence: value, number: "" };
                }
                return {...prev, [name] : value}
            })
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch('/api/contactform', {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            })
            if(!response.ok){
                const data = await response.json()
                console.log(data)
                alert('אנא נסו שוב')
                return
            }
            const data = await response.json()
            console.log(data)
            alert('תודה על תשובתכם!')
            setFormdata({
                lastname : '',
                firstname : '',
                presence : null, 
                number : '',
                message : ''
            })
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

  return (

    <form 
        dir="rtl"
        className="flex flex-col gap-3 justify-center h-full w-full font-primary text-home-text md:w-[30%] md:flex md:flex-col"
        onSubmit={handleSubmit}
        >
        <motion.label initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col w-[90%] gap-2 mr-5 text-right">שם משפחה* : <br />
            <input
                className="bg-white rounded-full px-8 py-2 border border-home-text text-right" 
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
            /> 
        </motion.label>

        <motion.label initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col w-[90%] gap-2 mr-5 text-right">שם פרטי* :<br />
            <input 
                className="bg-white rounded-full px-8 py-2 border border-home-text text-right" 
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
        </motion.label> 

        <label className="flex flex-row items-center gap-2 mt-3 mr-5 w-[90%]">
            <input 
                className="appearance-none w-3 h-3 bg-white rounded-full border border-home-text checked:bg-home-text"
                type="radio" 
                name="presence"
                value={'assisteront'}
                checked={formData.presence === 'assisteront'}
                onChange={handleChange}
                required
            />
            <span className="text-right">נגיע</span>
        </label>

       {
       formData.presence === 'assisteront' ?
        <label className="flex flex-col w-[90%] gap-2 mr-5 text-right">מספר משתתפים* :<br />
            <input 
            className="bg-white rounded-full px-8 py-2 border border-home-text text-right" 
            type="number" 
            name="number" 
            value={formData.number} 
            onChange={handleChange}
            min={1}
            step={1}
            inputMode='numeric'
            required
            /> 
        </label>
        :
        null
        }

        <label className="flex flex-row items-center gap-2 mb-4 mr-5 w-[90%]">
            <input 
                className="appearance-none w-3 h-3 bg-white rounded-full border border-home-text checked:bg-home-text"
                type="radio" 
                name="presence"
                value={"n'assisteront pas"}
                checked={formData.presence === "n'assisteront pas"}
                onChange={handleChange}
            />
            <span className="text-right">לא נגיע</span>
        </label>

        <label className="flex flex-col w-[90%] gap-2 mr-5 text-right">הודעה לזוג המאושר :<br />
            <textarea className="bg-white rounded-3xl px-9 py-2 border border-home-text text-right"  name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>

       <motion.button 
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[180px] h-[40px] bg-entry-text text-white mx-auto py-1 rounded-full mt-5 flex items-center justify-center"
        type="submit"
        disabled={loading}
        >
        {loading ? 
            <Tailspin
                size="20"
                stroke="5"
                speed="0.9"
                color="#EFCBD5" 
            />
            : 'שליחה'
        }
        </motion.button>
    </form>

  )

}

export default FormHb