import React from "react";
import Footer from "../components/Footer";

const JurusanSMAN1Habinsaran = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 data-aos="fade-right" className="app__section__title">
          Jurusan di SMA Negeri 1 Habinsaran
        </h1>
        <p data-aos="fade-up" className="lead text-muted text-center mb-5">
          SMA Negeri 1 Habinsaran menawarkan dua pilihan jurusan utama yang 
          dapat dipilih oleh siswa sesuai dengan minat dan potensi mereka: 
          Jurusan Ilmu Pengetahuan Alam (IPA) dan Ilmu Pengetahuan Sosial (IPS).
        </p>

        <div data-aos="fade-right" className="mt-5">
          <h3>Jurusan Ilmu Pengetahuan Alam (IPA)</h3>
          <p>
            Jurusan IPA diperuntukkan bagi siswa yang memiliki minat dalam bidang sains, teknologi, 
            dan matematika. Dalam jurusan ini, siswa akan mempelajari mata pelajaran seperti:
          </p>
          <ul>
            <li>Matematika</li>
            <li>Fisika</li>
            <li>Kimia</li>
            <li>Biologi</li>
          </ul>
          <p>
            Jurusan IPA juga membuka peluang bagi siswa untuk melanjutkan studi ke program 
            pendidikan tinggi di bidang kedokteran, teknik, ilmu komputer, dan bidang lain yang 
            berkaitan dengan sains dan teknologi.
          </p>
        </div>

        <div data-aos="fade-right" className="mt-5">
          <h3>Jurusan Ilmu Pengetahuan Sosial (IPS)</h3>
          <p>
            Jurusan IPS cocok bagi siswa yang tertarik dengan ilmu sosial, ekonomi, dan humaniora. 
            Dalam jurusan ini, siswa akan mempelajari mata pelajaran seperti:
          </p>
          <ul>
            <li>Ekonomi</li>
            <li>Sosiologi</li>
            <li>Geografi</li>
            <li>Sejarah</li>
          </ul>
          <p>
            Jurusan IPS memberikan dasar yang kuat bagi siswa untuk melanjutkan studi ke bidang 
            seperti hukum, manajemen, ilmu komunikasi, pendidikan, dan bidang lainnya yang terkait 
            dengan ilmu sosial.
          </p>
        </div>

        <div data-aos="fade-up" className="mt-5">
          <h3>Konseling dan Dukungan</h3>
          <p>
            SMA Negeri 1 Habinsaran juga menyediakan layanan konseling bagi siswa untuk membantu 
            mereka memilih jurusan yang sesuai dengan minat dan bakat mereka. Dengan bimbingan dari 
            guru dan konselor, siswa dapat menentukan jalur pendidikan yang paling cocok untuk masa depan mereka.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JurusanSMAN1Habinsaran;
