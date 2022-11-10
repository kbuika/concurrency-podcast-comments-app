import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        flexDirection: "column",
        margin: "2em",
      }}
    >
      <div>
        Too lazy to design a home page - Please send me ideas! &nbsp;
        <a
          href="https://twitter.com/the_kibuika"
          target="blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          {" "}
          Tweet me
        </a>
      </div>

      <div style={{marginTop: "3em"}}>
        Leave a comment on Episode 04 -{" "}
        <Link to="/episode-0" style={{ textDecoration: "underline" }}>
          The DroidConKE 2022 Banter
        </Link>
      </div>
    </div>
  );
}

export default Home;
