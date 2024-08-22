import { BsMoonFill } from "react-icons/bs";
import { BsTranslate } from "react-icons/bs";


export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        ნუგზარ <span>ხუციშვილი</span>
      </div>
      <div className="themeMode">
        <ul>
        <li><BsMoonFill /></li>
        <li><BsTranslate /></li>
        </ul>
      </div>
    </div>
  );
}
