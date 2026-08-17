import Button from "../atoms/Button";
import { FaGlobe, FaGithub } from "react-icons/fa6";

export default function ProjectCard({ img, title, icon, desc, tech }) {
  return (
    <div>
      <div>
        <img src={img} alt={`${title} image`} />
      </div>

      <div>{icon}</div>

      {/* judul dan deskripsi */}
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      {/* Tech Stack */}
      <div>
        <span>{tech}</span>
      </div>

      {/* Tombol */}
      <div>
        <Button>
          <FaGlobe />
          Live Site
        </Button>
        <Button>
          <FaGithub />
          Repository
        </Button>
      </div>
    </div>
  );
}
