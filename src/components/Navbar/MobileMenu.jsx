import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/Instagramicon";

function MobileMenu({ openMenu }) {
  return (
    <div
      className={`menu-container -z-10 absolute top-[10vh] left-[0] w-screen h-[90vh] bg-white flex justify-center items-center flex-col transition-all duration-500 gap-10 overflow-hidden ${
        !openMenu ? "translate-y-[calc(-100%_-_10vh)]" : "translate-y-[0%]"
      }`}
    >
      <div className="menu-content flex align-center justify-center gap-4">
        <div className="menu-item">
          <FacebookIcon />
        </div>
        <div className="menu-item">
          <InstagramIcon />
        </div>
        <div className="menu-item">
          <TwitterIcon />
        </div>
      </div>

      <a
        href=""
        className="btn bg-primary text-lg font-sans normal-case text-cta  py-3 px-7 border-none grid place-items-center rounded-lg font-normal hover:shadow-lg hover:bg-primary"
      >
        Call Us
      </a>
    </div>
  );
}
export default MobileMenu;
