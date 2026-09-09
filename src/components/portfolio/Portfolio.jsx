import "./portfolio.css";
import cabin from "./../../assets/image/cabin.png";
import cake from "./../../assets/image/cake.png";
import circus from "./../../assets/image/circus.png";
import game from "./../../assets/image/game.png";
import safe from "./../../assets/image/safe.png";
import submarine from "./../../assets/image/submarine.png";
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
export default function Portfolio() {
  return (
    <section className="Portfolio">
      <h2>PORTFOLIO</h2>

      <div className="Portfolio-line">
        <iconButton>
<StarIcon/>
        </iconButton>
      </div>

      <div className="Portfolio-grid">

        <div className="Portfolio-card">
          <img src={cabin} alt="Cabin" />
        </div>

        <div className="Portfolio-card">
          <img src={cake} alt="Cake" />
        </div>

        <div className="Portfolio-card">
          <img src={circus} alt="Circus" />
        </div>
<div className="Portfolio-card">
          <img src={game} alt="Circus" />
        </div>
        <div className="Portfolio-card">
          <img src={safe} alt="Circus" />
        </div>
<div className="Portfolio-card">
          <img src={submarine} alt="Circus" />
        </div>
      </div>
    </section>
  );
}
