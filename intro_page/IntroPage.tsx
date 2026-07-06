import "./introPage.css";

export function IntroPage() {
  return (
    <div className="intro_background">
      <div className="intro_div">
        <img className="intro_pic" src="assets/alt.jpg" alt="" />
        <h1 className="intro_name">Alex Yan</h1>
        <p className="intro_header">Programmer. Creator. Literally him</p>
        <p className="intro_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex error
          voluptatibus esse itaque doloribus voluptatibus esse itaque doloribus
        </p>
        <button className="more_btn">Learn more</button>
      </div>
    </div>
  );
}
