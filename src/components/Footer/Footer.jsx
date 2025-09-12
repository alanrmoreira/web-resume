import { Divider } from "@mui/material";
import InfiniteLoopSlider from '../Animations/InfiniteScrollAnimation';
import logo from '../../assets/am-logo-big.png';

export default function Footer(params) {
    return (
        <>
            <Divider />
            <section className='' id="footer">
                <InfiniteLoopSlider />
                <img src={logo} className='footer-logo' alt="logo Alan Moreira" />
                <InfiniteLoopSlider />
            </section>
        </>
    );
};
