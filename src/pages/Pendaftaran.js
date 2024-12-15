import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PendaftaranSiswa = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    nis: "",
    tempatLahir: "",
    tanggalLahir: "",
    noTelepon: "",
    alamat: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("siswa") || "[]");

    // Validasi jika NIS sudah terdaftar
    if (storedData.find((siswa) => siswa.nis === formData.nis)) {
      setError("NIS sudah terdaftar.");
      setSuccess("");
      return;
    }

    // Simpan data siswa baru ke localStorage
    storedData.push(formData);
    localStorage.setItem("siswa", JSON.stringify(storedData));
    setSuccess("Pendaftaran berhasil.");
    setError("");
    setFormData({
      nama: "",
      nis: "",
      tempatLahir: "",
      tanggalLahir: "",
      noTelepon: "",
      alamat: "",
      email: "",
    });
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 data-aos="fade-right" className="app__section__title">
          Formulir Pendaftaran Siswa Baru
        </h1>
        <p data-aos="fade-up" className="lead text-muted text-center mb-5">
          Silakan lengkapi formulir di bawah ini untuk mendaftarkan diri sebagai siswa SMA Negeri 1 Habinsaran.
        </p>

        {error && (
          <div className="alert alert-danger" data-aos="fade-up">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success" data-aos="fade-up">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4" data-aos="fade-up">
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="form-control"
              id="nama"
              name="nama"
              placeholder="Masukkan nama lengkap"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nis" className="form-label">
              NIS (Nomor Induk Siswa)
            </label>
            <input
              type="text"
              className="form-control"
              id="nis"
              name="nis"
              placeholder="Masukkan NIS"
              value={formData.nis}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tempatLahir" className="form-label">
              Tempat Lahir
            </label>
            <input
              type="text"
              className="form-control"
              id="tempatLahir"
              name="tempatLahir"
              placeholder="Masukkan tempat lahir"
              value={formData.tempatLahir}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tanggalLahir" className="form-label">
              Tanggal Lahir
            </label>
            <input
              type="date"
              className="form-control"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="noTelepon" className="form-label">
              Nomor Telepon
            </label>
            <input
              type="text"
              className="form-control"
              id="noTelepon"
              name="noTelepon"
              placeholder="Masukkan nomor telepon"
              value={formData.noTelepon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea
              className="form-control"
              id="alamat"
              name="alamat"
              rows="3"
              placeholder="Masukkan alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Daftar
          </button>
        </form>

        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={() => navigate("/data")}
        >
          Lihat Data Siswa
        </button>
      </div>
    </div>
  );
};

export default PendaftaranSiswa;
