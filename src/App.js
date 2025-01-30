import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import MobileHeader from "./components/header/mobile-header/MobileHeader";

const App = () => {

    return (
        <>
            <Header/>
            <MobileHeader/>

            <Content/>

            <Footer/>

        </>
    );
};

export default App;
