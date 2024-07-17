import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: 12, textAlign: "center", color: "#bdb6b6" }}>
        COPYRIGHT MELIE GALAZ- 2024.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a
          href="https://github.com/MelieGalaz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: "#bdb6b6", fontSize: 20 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/mely-galaz-9638bb246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: "#bdb6b6", fontSize: 20 }} />
        </a>
      </div>
    </Box>
  );
};
