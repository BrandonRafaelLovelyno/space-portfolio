//Importing assest
import github from "../../assets/images/github-icon.svg";
import facebook from "../../assets/images/facebook-icon.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import githubAfter from "../../assets/images/github-icon-after.svg";
import facebookAfter from "../../assets/images/facebook-icon-after.svg";
import instagramAfter from "../../assets/images/instagram-icon-after.svg";

//Importing custom components
import FillButton from "../FillButton";

function NavSpan() {
  return (
    <div className="icons">
      <FillButton mainImage={github} afterImage={githubAfter} width={40} height={40} />
      <FillButton mainImage={facebook} afterImage={facebookAfter} width={40} height={40} />
      <FillButton mainImage={instagram} afterImage={instagramAfter} width={40} height={40} />
    </div>
  );
}

export default NavSpan;
