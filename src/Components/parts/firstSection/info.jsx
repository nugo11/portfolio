import { BsCodeSlash } from "react-icons/bs";
import Card from "./card";
import Typewriter from "typewriter-effect";


export default function Info() {
  return (
    <div className="info">
      <div className="info-left">
        <Card />
      </div>
      <div className="info-right">
        <div className="code-icon"><BsCodeSlash /></div>
        
        <div className="welcome-text">
          <p>გამარჯობა! მე ვარ</p>
          <h1>
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(45)
                        .typeString("Frontand")
                        .pauseFor(10)
                        .deleteChars(3)
                        .typeString("end <span>დეველოპერი</span><br><br>")
                        .changeDelay(20)
                        .typeString('HTML, CSS, JavaScript, TypeScript, React.<br><br>')
                        .changeDelay(10)
                        .typeString('<p>ჩემს შესახებ ინფორმაციისთვის <a href="#about">დააკლიკეთ აქ!</a></p><br>')
                        .typeString('<p>პროექტების სანახავად <a href="#projects">დააკლიკეთ აქ!</a></p>')
                        .start();
                }}
            />
            </h1>
          <b></b>
        </div>
        
      </div>
    </div>
  );
}
