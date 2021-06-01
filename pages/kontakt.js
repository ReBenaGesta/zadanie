import { useState } from "react";
import { API_CONTACT } from "../src/constants";
import { sendContactEmail } from "../src/utils";

export default function Kontakt() {
  const [isSending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitionError, setSubmitionError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const tel = e.target[2].value;
    const msg = e.target[3].value;

    setSending(true);

    const resp = await await sendContactEmail({
      name,
      email,
      tel,
      msg,
    });

    if (resp.status === 200 && resp.ok) {
      setSubmitted(true);
      setSending(false);
    } else {
      setSubmitionError(true);
      setSubmitted(true);
      setSending(false);
    }
  };

  const ContactForm = () => (
    <form
      onSubmit={async (e) => {
        await handleSubmit(e);
      }}
    >
      <div>
        <label
          htmlFor="fname"
          className="font-thin text-mobile-md sm:text-tablet-md xl:text-desktop-md leading-mobile-md sm:leading-tablet-md xl:leading-desktop-md"
        >
          Imię
        </label>
        <input
          type="text"
          name="fname"
          className="border rounded w-full focus:outline-none focus:shadow-outline py-2 px-2 disabled:bg-gray-400"
          disabled={isSending}
          required
        />
      </div>
      <div className="mt-sm">
        <label
          htmlFor="email"
          className="font-thin text-mobile-md sm:text-tablet-md xl:text-desktop-md leading-mobile-md sm:leading-tablet-md xl:leading-desktop-md disabled:bg-gray-400"
        >
          E - mail
        </label>
        <input
          type="email"
          name="email"
          className="border rounded w-full focus:outline-none focus:shadow-outline py-2 px-2"
          disabled={isSending}
          required
        />
      </div>
      <div className="mt-sm">
        <label
          htmlFor="tel"
          className="font-thin text-mobile-md sm:text-tablet-md xl:text-desktop-md leading-mobile-md sm:leading-tablet-md xl:leading-desktop-md disabled:bg-gray-400"
        >
          Numer telefonu
        </label>
        <input
          type="tel"
          name="tel"
          className="border rounded w-full focus:outline-none focus:shadow-outline py-2 px-2"
          disabled={isSending}
          required
        />
      </div>
      <div className="mt-sm">
        <label
          htmlFor="msg"
          className="font-thin text-mobile-md sm:text-tablet-md xl:text-desktop-md leading-mobile-md sm:leading-tablet-md xl:leading-desktop-md disabled:bg-gray-400"
        >
          Wiadomość
        </label>
        <textarea
          type="text"
          name="msg"
          className="border rounded w-full focus:outline-none focus:shadow-outline py-2 px-2 disabled:bg-gray-400"
          disabled={isSending}
          required
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Wyślij"
          className="py-2 px-2 mt-sm border rounded w-full max-w-sm "
          disabled={isSending}
        />
      </div>
    </form>
  );

  const FinalMessage = ({ error = null }) =>
    error ? (
      <main className="mt-sm text-center flex flex-col gap-4">
        <h2 className="font-light text-center text-darkBlue last-text-offset text-mobile-lg sm:text-tablet-lg xl:text-desktop-lg leading-mobile-lg sm:leading-tablet-lg xl:leading-desktop-lg">
          Wystąpił błąd, spróbuj ponownie później.
        </h2>
        <a href="/" className="text-gray border px-2 py-2">
          Powrót do strony głównej
        </a>
      </main>
    ) : (
      <main className="mt-sm text-center flex flex-col gap-4">
        <h2 className="font-light text-center text-darkBlue xl:mt-md text-mobile-lg sm:text-tablet-lg xl:text-desktop-lg leading-mobile-lg sm:leading-tablet-lg xl:leading-desktop-lg">
          Dziękujemy za kontakt!
        </h2>
        <a href="/" className="text-gray border px-2 py-2 xl:mt-md">
          Powrót do strony głównej
        </a>
      </main>
    );

  return (
    <main className="mt-sm w-full flex justify-center">
      <div className="max-w-4xl">  
      <h1 className="font-thin text-darkBlue max-w-full text-center break-all text-mobile-xl sm:text-tablet-xl xl:text-desktop-xl leading-mobile-xl sm:leading-tablet-xl xl:leading-desktop-xl">
        Kontakt
      </h1>
      <div className="border-dotted border-t-4 m-sm" />

      {submitted ? <FinalMessage error={submitionError} /> : <ContactForm />}
      </div>
    </main>
  );
}
