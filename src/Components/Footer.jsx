import React from "react";
import img from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <img className="h-[70px] w-[70px] my-5" src={img} alt="" />
        <p className="max-w-[400px] text-justify">
          We craft innovative, high-performance mobile apps that transform ideas
          into digital experiences. From concept to code, our team builds
          reliable, scalable, and user-friendly applications tailored to your
          business goals. Empower your vision with AppCrafter — where creativity
          meets technology.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
