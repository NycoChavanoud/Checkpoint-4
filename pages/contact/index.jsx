import Layout from "../../components/Layout";

export default function Contact() {
  // const [processing, setProcessing] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setProcessing(true);

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_EMAILJS_SERVICEID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATEID,
  //       form.current,
  //       process.env.REACT_APP_EMAILJS_KEYID
  //     )
  //     .then((result) => {
  //       // eslint-disable-next-line
  //       console.log(result.text);
  //       setName("");
  //       setMessage("");
  //       setPhone("");
  //       setEmail("");
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line
  //       console.log(error.text);
  //       addToast("Sorry, something wrong happened, please, try again later!", {
  //         appearance: "error",
  //       });
  //     })
  //     .finally(() => setProcessing(false));
  // };
  return (
    <Layout pageTitle="êtes-vous certain?">
      <div>
        AAA
        {/* <form ref={form} onSubmit={sendEmail}>
          <div className="contact-us-form bg-melon-pink">
            <h2 id="title-contact-us">Contact Us</h2>
            <div className="grid-form">
              <h3>Name</h3>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name-contact"
                  name="user_name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  disabled={processing}
                  required
                />
              </label>
              <h3>Email</h3>
              <label htmlFor="email">
                <input
                  type="email"
                  name="user_email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={processing}
                  required
                />
              </label>
              <h3>
                Phone <span id="italic"> (optional) </span>{" "}
              </h3>
              <label htmlFor="phone">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={processing}
                  value={phone}
                />
              </label>
            </div>
            <h3>Message</h3>
            <label htmlFor="message">
              <textarea
                name="message"
                autoComplete="off"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                disabled={processing}
                required
              />
            </label>
            <input
              type="submit"
              id="submit-btn"
              value="SEND"
              disabled={processing}
            />
          </div>
        </form> */}
      </div>
    </Layout>
  );
}
