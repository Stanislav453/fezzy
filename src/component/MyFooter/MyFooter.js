import "./MyFooter.scss"
import img from "../Fotogallery/fezzy-foto-gallery.png"



export const MyFooter = () => {
    return (
        <footer className="container footer-bg">
            <img className="footer-logo" src={img} slt="logo" />
            <a className="footer-link" href="mailto:st.jendrisak@gmail.com">Created by</a>
        </footer>
    )
}