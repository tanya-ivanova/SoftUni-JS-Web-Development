import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const withAuth = (Component) => {
    const WrapperComponent = (props) => {
        const authContext = useContext(AuthContext);

        return (
            <Component {...props} auth={authContext} />
        );
    };

    return WrapperComponent;
};