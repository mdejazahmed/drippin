import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerDiv">
          <img src="public\assets\logo.png" alt="logo" />
          <h1>
            DRI<span>PP</span>IN
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            laborum hic quis dolores deleniti nisi enim, architecto obcaecati
            voluptatibus dignissimos atque, laboriosam eum fugit excepturi
            suscipit molestiae. Quo, neque aspernatur.
          </p>
        </div>
        <div className="footerDiv">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            mollitia reprehenderit beatae distinctio commodi, nihil fugit, sed
            totam, eaque possimus fugiat molestias blanditiis odit atque. Ipsa
            voluptates modi aliquam expedita?
          </p>
        </div>
        <div className="footerDiv">
          <h1>Contact</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eaque eius unde, recusandae, <br />
            repudiandae quaerat veritatis voluptate aliquid placeat repellat
            eveniet! <br />
            Consequatur facere ullam recusandae, voluptatem nobis temporibus a
            est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
