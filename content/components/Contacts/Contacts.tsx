import "./contacts.css";

export function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
      <div className="contacts">
        <div className="phone">
          <img src="assets/icons.png" alt="" />
          <p className="cont_bold">8 800 555 35 35</p>
        </div>
        <div className="mail">
          <img src="assets/mail.png" alt="" />
          <p className="cont_bold">literally@him.com</p>
        </div>
        <div className="tw">
          <img src="assets/Twitter.png" alt="" />
          <div>
            <p className="cont_bold">Twitter</p>
            <p className="cont_link">https://twitter.com/wordpress</p>
          </div>
        </div>
        <div className="fb">
          <img src="assets/facebook.png" alt="" />
          <div>
            <p className="cont_bold">Facebook</p>
            <p className="cont_link">https://facebook.com/wordpress</p>
          </div>
        </div>
        <div className="skype">
          <img src="assets/Skype.png" alt="" />
          <div>
            <p className="cont_bold">Skype</p>
            <p className="cont_link">whoeverstillusesthis.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
}
