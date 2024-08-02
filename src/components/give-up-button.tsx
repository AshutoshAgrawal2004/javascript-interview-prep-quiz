import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const GiveUpButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.pathname.includes("/quiz")) return null;

  return (
    <Button
      variant="outline"
      className="border-2 border-red-900 text-gray-400"
      onClick={() => navigate("/result")}
    >
      I give up! 🙌
    </Button>
  );
};
