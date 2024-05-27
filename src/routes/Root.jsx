import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = ({ bgImageUrl }) => {
    return (
        <>
            <Header bgImageUrl={bgImageUrl} />
            <main>
                <Outlet></Outlet>
            </main>

            <Footer />
        </>
    );
}

export default Root;