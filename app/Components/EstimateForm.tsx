"use client";

import { use, useState } from "react";
import { serviceLinks } from "../lib/helper";
import { client } from "../lib/client";

export default function EstimateForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [IsFormSubmitted, setIsFormSubmitted] = useState(false);


    const handleSubmit = () => {
        setLoading(true);
    if( name && email && message && phoneNumber && category ) {

        const contact = {
          _type: 'estimate',
          userName: name,
          email: email,
          message: message,
          zipCode: zipCode,
          phoneNumber: phoneNumber,
          subject: category,
        };
    
        client.create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
            setTimeout(() => {
                setIsFormSubmitted(false);
              }, 1500);
          })
          .catch((err) => console.log(err));
    }
      };

  return (
    <div className="w-full min-[1009px]:w-1/2 flex flex-col p-8 items-start justify-start gap-4">
            <p className="text-[26px] leading-[36px] py-3 pb-8">Request an Estimate</p>
            <form className="w-full flex flex-col items-start text-[#525252] justify-start gap-5">
                <div className="flex flex-col w-full min-[975px]:flex-row justify-center items-center gap-5">
                    <input 
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-6 py-4 rounded-lg  text-[15px] outline-1leading-[26px] bg-primary/5"
                    />
                    <input 
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-6 py-4 rounded-lg  text-[15px] outline-1 leading-[26px] bg-primary/5"
                    />
                </div>
                <div className="flex flex-col w-full min-[975px]:flex-row justify-center items-center gap-5">
                    <input 
                        type="number"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full px-6 py-4 rounded-lg  text-[15px] outline-1 leading-[26px] bg-primary/5"
                    />
                    <input 
                        type="text"
                        placeholder="Zip code"
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full px-6 py-4 rounded-lg text-[15px] outline-1 leading-[26px] bg-primary/5"
                    />
                </div>                
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg  text-[15px] outline-1leading-[26px] bg-primary/5"
                    >
                    <option value='others' >--Select Category--</option>
                    {serviceLinks.map((item, idx) => (
                    <option  key={idx} className='text-base border-0 outline-none capitalize text-black' value={item.service}>
                        {item.linkName}
                    </option>
                    ))}
                </select>
                 <textarea 
                    className=" px-6 py-4 w-full rounded-lg text-[15px] outline-1 bg-primary/5 min-h-[140px]"
                    placeholder="Your message here"
                />
                {
                    IsFormSubmitted ? (
                        <h3 className="text-black shadow-xl ">Thank You for getting in touch!</h3>
                    ): (
                        <button
                            onClick={handleSubmit}
                            className="text-base text-white bg-primary rounded-lg px-7 py-4 papa uppercase"
                        >
                            { loading ? 'Posting Estimate...' : 'Get Estimate'}
                        </button>
                    )
                }
            </form>
        </div>
  )
}
