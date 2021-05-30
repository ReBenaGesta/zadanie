import { useState } from 'react';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      tel,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setTel('')
        setMessage('')
        setBody('')
      }
    })
  }
  return (
    <>
      <section className="flex justify-center items-center h-screen ">
        <form action="/Kontakt">
          <div className="p-4 border-2 border-black rounded-2xl ">
          <div className="flex flex-col content-center font-mono border-2 border-black rounded-2xl p-4 z-10 bg-white">
      <label className="font-bold text-center mb-5">Formularz kontaktowy</label>
      <hr className="border-2 border-black" />
            <label htmlFor="name" className="">
              Imie
            </label>
            <input
              type="text"
              id="fname"
              onChange={(e)=>{setName(e.target.value)}}
              name="name"
              placeholder="Twoje imie.."
              className="py-0.5"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"

              onChange={(e)=>{setEmail(e.target.value)}}
              name="email"
              placeholder="Twój email.."
              className="py-0.5"
            />

            <label htmlFor="tel">Nr telefonu</label>
            <input
              type="number"
              id="tel"
              onChange={(e)=>{setTel(e.target.value)}}
              name="tel"
              placeholder="Twój numer telefonu.."
              className="py-0.5"
            />

            <label htmlFor="message">Wiadomość</label>
            <textarea
              id="msg"
              onChange={(e)=>{setMessage(e.target.value)}}
              name="message"
              placeholder="Wiadomość.."
              className="py-0.5"
            ></textarea>
            <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
            <hr className="border-2 border-black" />
          </div>
          </div>
        </form>
      </section>
    </>
    );
}

