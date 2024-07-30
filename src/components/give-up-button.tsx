import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const GiveUpButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname !== "/quiz") return null;

  return (
    <Button variant="destructive" onClick={() => navigate("/result")}>
      I give up! 🙌
    </Button>
  );
};
