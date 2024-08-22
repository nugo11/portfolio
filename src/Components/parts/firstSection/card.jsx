import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill,
  BsAt,
  BsPinMapFill,
} from "react-icons/bs";

export default function Card() {
  return (
    <div className="card">
        <img src='photo.JPEG' alt="photo" width={150} height={140} />
      <div className="card-top">
        <h1>ნუგზარ ხუციშვილი</h1>
        <p>Frontent დეველოპერი</p>
        <div className="soc-icons">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/nugo.khucishvili/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/n-khutsishvili/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/nugo11" target="_blank">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-mid">
        <ul>
          <li>
            <span>
              <BsFillTelephoneFill />
            </span>
            <a href="tel:+995595999862">+995 595 99 98 62</a>
          </li>
          <li>
            <span>
              <BsAt />
            </span>
            <a href="mailto:nugoxucishvili@gmail.com">nugoxucishvili@gmail.com</a>
          </li>
          <li>
            <span>
              <BsPinMapFill />
            </span>
            თბილისი, საქართველო
          </li>
        </ul>
      </div>
    </div>
  );
}
