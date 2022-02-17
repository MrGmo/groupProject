import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({
  children,
  to,
  variant = "standard",
  color = "primary",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      size="large"
      sx={styles[variant]}
      color={color}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

const styles = {
  standard: { m: 1, color: "#05386b", fontWeight: "bold" },
  title: { fontSize: "30px", fontWeight: "bold" },
};

export default NavButton;
