import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer';

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <div className="content-wrapper flex-grow-1">
        <div className="container-lg page-content">
          <h1 data-aos="fade-right" className="app__section__title mb-4">
            Visi dan Misi
          </h1>

          <section className="mb-5">
            <h2 data-aos="fade-up" className="text-center mt-4 mb-3">
              Visi
            </h2>
            <p data-aos="fade-up" className="lead text-muted text-center mb-5">
              "Mewujudkan generasi yang berprestasi, berkarakter, dan berwawasan lingkungan serta berlandaskan iman dan takwa."
            </p>

            <h2 data-aos="fade-up" className="text-center mt-4 mb-3">
              Misi
            </h2>
            <ul data-aos="fade-up" className="list-unstyled lead text-muted mb-5">
              <li className="mb-3">🌟 Menanamkan nilai-nilai keimanan dan ketakwaan sebagai dasar dalam membentuk karakter peserta didik.</li>
              <li className="mb-3">🌟 Mengembangkan potensi akademik dan non-akademik siswa untuk mencapai prestasi di tingkat lokal, nasional, dan internasional.</li>
              <li className="mb-3">🌟 Menerapkan pembelajaran berbasis teknologi untuk menjawab tantangan era digital.</li>
              <li className="mb-3">🌟 Membudayakan hidup bersih, sehat, dan peduli terhadap lingkungan.</li>
              <li className="mb-3">🌟 Mendorong terciptanya suasana belajar yang inklusif dan kondusif bagi seluruh warga sekolah.</li>
            </ul>
          </section>

          <h2 data-aos="fade-right" className="app__section__title mt-5">Tujuan SMA Negeri 1 Habinsaran</h2>
          <p data-aos="fade-up" className="app__section__content">
            SMA Negeri 1 Habinsaran bertujuan untuk menghasilkan lulusan yang tidak hanya unggul dalam prestasi akademik, tetapi juga memiliki kepribadian yang tangguh, 
            sikap peduli terhadap sesama, dan kemampuan untuk menghadapi tantangan dunia yang terus berubah. 
            Kami berkomitmen untuk menciptakan lingkungan pendidikan yang inspiratif, inovatif, dan inklusif.
          </p>

          <h3 data-aos="fade-left" className="app__section__title mt-5">Komitmen Kami</h3>
          <p data-aos="fade-up" className="app__section__content">
            SMA Negeri 1 Habinsaran selalu berkomitmen untuk:
          </p>
          <ul data-aos="fade-up" className="list-unstyled app__section__content">
            <li className="mb-3">✔️ Meningkatkan kualitas pembelajaran melalui program pengembangan guru dan sarana pendidikan yang memadai.</li>
            <li className="mb-3">✔️ Memberikan perhatian khusus pada pendidikan karakter siswa agar mereka menjadi individu yang bermoral dan bertanggung jawab.</li>
            <li className="mb-3">✔️ Menjalin kemitraan yang kuat dengan orang tua siswa dan masyarakat sekitar.</li>
          </ul>

          <h3 data-aos="fade-up" className="app__section__title mt-5">Alamat dan Kontak</h3>
          <p data-aos="fade-up" className="app__section__content">
            📍 Jl. Parsoburan, Parsoburan Tengah, Kec. Habinsaran, Kab. Toba, Prov. Sumatera Utara 22383
          </p>
          <p data-aos="fade-up" className="app__section__content">
            📞 <a href="https://wa.me/qr/2WBB2XPDF6FOE1" className="contact-link">082276423194 (WhatsApp)</a>
          </p>
          <p data-aos="fade-up" className="app__section__content">
            📧 <a href="mailto:depedrompane@gmail.com" className="contact-link">depedrompane@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisiMisi;
