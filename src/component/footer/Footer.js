import "./Footer.css";
const Home = () => {
  return (
    <div className="footer">
      <div className="footerBack">
        <div className="content">
          <div>
            <h1>Find a Code Bootcamp</h1>
            <p>Find, rate and read reviews on coding bootcamps</p>
            <div className="inp">
              <input />
              <input  placeholder="Enter Zipcode"/>
            </div>
            <div>
              <button className="button1">Find Bootcamps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
