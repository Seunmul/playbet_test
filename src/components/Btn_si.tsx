import "./Btn_si.css";

const Btn_si = (props):JSX.Element => {

    const loginBy=props.loginBy
    const imgSrc=props.imgSrc

  return (
    <div className="btn-si" id="btn-si-gg">
      <div id="login-icon-size">
        <img className="login-icon" src={imgSrc}></img>
      </div>
      <div>{loginBy}</div>
      <div id="login-icon-size"></div>
    </div>
  );
};

export default Btn_si;
