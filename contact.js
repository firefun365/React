import React from "react";

class Contact extends React.Component {
  render () {
    return (
        <div id="form">
        <div id="FooterWhite">
            <h3 id="h3form">צרו קשר</h3>
            <form>
              <input type="text" placeholder="השם שלך" name="FullName" required/>
              <input type="tel" placeholder="מספר הטלפון שלך" name="PhoneNum" required/>
              <br/>  <br/>  <br/>
              <input type="text" placeholder="ההודעה שלך" name="Messege" id="textarea"/>
              <br/>  <br/>
              <input type="submit" id="submit" value="שלח"/>
            </form>
        </div>
      </div>
    );
  }
}

export default Contact;