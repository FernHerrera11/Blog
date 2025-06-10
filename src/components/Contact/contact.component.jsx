


const Contact = () => {

return (
        
    <div className="Contact-Container">
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>

)


}


export default Contact;