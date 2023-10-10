import React from "react";
import { Link } from "react-router-dom";
import line1 from "../../assets/images/line-1.svg";
import line2 from "../../assets/images/line-2.svg";
import university from "../../assets/images/university.svg";
import enamad from "../../assets/images/enamad.png";
import "./Footer.css";


const Footer = () => {
    return (
        <footer>
            <section className="footer-sec">
                <div className="info">
                    <div className="description">
                        <img src={line1} alt="line1" />
                        <h3>سامانه Uniway</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله لازم است.
                        </p>
                    </div>
                    <div className="links-symbols">
                        <div className="links">
                            <div className="quick-access">
                                <img src={line2} alt="line2" />
                                <h3>دسترسی سریع</h3>
                                <nav>
                                    <Link to="/">سفرهای من</Link>
                                    <Link to="/">صفحه اصلی</Link>
                                    <Link to="/">قوانین استرداد</Link>
                                    <Link to="/">قوانین و مقررات</Link>
                                </nav>
                            </div>
                            <div className="about-us">
                                <img src={line2} alt="line2" />
                                <h3>درباره ما</h3>
                                <nav>
                                    <Link to="/">تماس با ما</Link>
                                    <Link to="/">تیم اکما</Link>
                                </nav>
                            </div>
                        </div>
                        <div className="trust-symbols">
                            <img src={university} alt="university" />
                            <img src={enamad} alt="enamad" />
                        </div>
                    </div>
                </div>
                <div className="register-opinions">
                    <div>
                        <h3>آیا پیشنهاد یا شکایتی دارید؟</h3>
                        <p>
                            با خیال راحت نظرات، پیشنهادات یا حتی شکایات خود را ثبت کنید.
                        </p>
                    </div>
                    <button className="btn-yellow">
                        <span>ثبت نظر یا شکایت</span>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <p className="rights">
                    کلیه حقوق این سایت متعلق به گروه <span>اکما</span> می‌باشد.
                </p>
            </section>
        </footer>
    );
};


export default Footer;