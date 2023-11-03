import afifah from "../assets/afifah.png";
import "./style.css";

export default function ContactComponen() {
  // const centerImageStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  // const centerListStyle = {
  //   listStyle: "none",
  //   paddingLeft: 0,
  //   textAlign: "center",
  //   fontWeight: "bold",
  // };

  return (
    <aside>
      <article className="sidebar">
        <h3>Contact Me</h3>
        <div className="imagestyle">
          <img src={afifah} alt="fifa" />
        </div>
        <ul className="centerliststyle">
          <li>Nama : Zumro'atul Afifah</li>
          <li>Email : zumroatulafifah484@gmail.com</li>
          <li>WhatsApp : 085755729840</li>
        </ul>
      </article>
    </aside>
  );
}
