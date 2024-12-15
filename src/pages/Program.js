import React from "react";
import Footer from "../components/Footer";

const Program = () => {
  const programs = [
    {
      title: "Pramuka",
      description: "Melatih kedisiplinan, kemandirian, dan jiwa kepemimpinan melalui kegiatan kepramukaan.",
      image: "https://smabmone.sch.id/wp-content/uploads/2018/12/sman1babakanmadang-smabmone-bmone-ekstrakurikuler-pramuka-1.jpg",
    },
    {
      title: "Olahraga",
      description: "Beragam cabang olahraga seperti futsal, voli, basket, dan atletik untuk menjaga kebugaran dan semangat sportivitas.",
      image: "https://i.ytimg.com/vi/OfBXkLZhs0A/maxresdefault.jpg",
    },
    {
      title: "Seni Tari",
      description: "Mengembangkan bakat dan kreativitas di bidang seni tari tradisional maupun modern.",
      image: "https://smkn1tegalsari.sch.id/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-27-at-20.27.21.jpeg",
    },
    {
      title: "Paduan Suara",
      description: "Mengasah kemampuan bernyanyi secara harmonis dalam kelompok.",
      image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01j0tc3zx2bbsvwn80w3mxnvdj.jpg",
    },
    {
      title: "Karya Ilmiah Remaja (KIR)",
      description: "Mendorong kreativitas dan inovasi siswa melalui penelitian ilmiah.",
      image: "https://1.bp.blogspot.com/--_yfQvGjrbc/YBtWWdlX0FI/AAAAAAAAA-Y/bMdf1u-PnWcw1KrZjC_pDNKEaYJQNMvtQCLcBGAsYHQ/s2048/IMG20180920142349.jpg",
    },
    {
      title: "English Club",
      description: "Meningkatkan kemampuan berbahasa Inggris melalui diskusi, debat, dan kegiatan lainnya.",
      image: "https://kursusbahasainggris.or.id/wp-content/uploads/2018/03/enlish.jpg",
    },
  ];

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <div className="content-wrapper flex-grow-1">
        <div className="container mt-5">
          <h1 data-aos="fade-right" className="text-center mb-4">
            Program Ekstrakurikuler SMA Negeri 1 Habinsaran
          </h1>
          <p data-aos="fade-up" className="text-center text-muted mb-5">
            Beragam program ekstrakurikuler yang dirancang untuk mengembangkan potensi, bakat, dan minat siswa di berbagai bidang.
          </p>

          <div className="row">
            {programs.map((program, index) => (
              <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card shadow-sm">
                  <img
                    src={program.image}
                    className="card-img-top"
                    alt={program.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{program.title}</h5>
                    <p className="card-text">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Program;
