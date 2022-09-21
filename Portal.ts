import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const portalDiv = document.createElement("div");
    useEffect(() => {

        portalDiv.setAttribute("id", "portal");
        document.documentElement.appendChild(portalDiv);
        return () => {
            document.documentElement.removeChild(portalDiv);
        }
    })
    return ReactDOM.createPortal(
        children, portalDiv);
}
export default Portal