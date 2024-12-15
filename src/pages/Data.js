import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const storedData = JSON.parse(localStorage.getItem('siswa') || '[]');
    setStudents(storedData);
  }, []);

  return (
    <div className="data-wrapper container mt-5">
      <h1 data-aos="fade-right" className="app__section__title">Data Siswa</h1>
      {students.length > 0 ? (
        <div data-aos="fade-up" className="data-table-wrapper mt-4">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>NIS</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>No Telepon</th>
                <th>Alamat</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} data-aos="fade-up">
                  <td>{index + 1}</td>
                  <td>{student.nama}</td>
                  <td>{student.nis}</td>
                  <td>{student.tempatLahir}</td>
                  <td>{student.tanggalLahir}</td>
                  <td>{student.noTelepon}</td>
                  <td>{student.alamat}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p data-aos="fade-up" className="lead text-muted text-center mt-5">
          Belum ada data siswa yang terdaftar.
        </p>
      )}
    </div>
  );
};

export default Data;
