'use strict';

// import function file response
var response = require('./../response');
// import function file connection
var connection = require('./../connection');

// select semua siswa
exports.viewSiswa = function(req,res){
    connection.query("SELECT * FROM siswa", function(error, rows, field){
    if(error){
        connection.log(error);
    } else {
        response.ok(rows,res)
    }
    });
};

// select data siswa berdasarkan id
exports.viewSiswaById = function(req,res){
    let id_siswa = req.params.id_siswa;
    connection.query(`SELECT
	A.nama_lengkap, A.jenis_kelamin, CONCAT(A.tmp_lahir, ", ", DATE_FORMAT(A.tgl_lahir, "%d-%m-%Y")) AS tempat_tgl_lahir,
	B.nama_ayah, E.nama_ibu, f.nama_wali,
	CONCAT(A.alamat_lengkap, " dusun ", A.nama_dusun, " RT ", A.no_rt, " RW ", A.no_rw, " kelurahan ", C.kelurahan, " Kecamatan ", D.kecamatan) AS alamat_lengkap_banget
FROM siswa A
	LEFT JOIN ayah B ON B.id_ayah=A.id_ayah
	INNER JOIN kelurahan C ON A.id_kelurahan=C.id_kelurahan
	INNER JOIN kecamatan D ON C.id_kecamatan=D.id_kecamatan
	LEFT JOIN ibu E ON A.id_ibu=E.id_ibu
    LEFT JOIN wali F ON A.id_wali=F.id_wali
    WHERE id_siswa = ?
ORDER BY A.nama_lengkap ASC`, [id_siswa],
        function(error, rows, field){
            if(error){
                connection.log(error);
            } else {
                response.ok(rows,res)
            }
        }
    );
};

// add data siswa
exports.addSiswa = function(req,res){

    var id_siswa = req.body.id_siswa;
    var nama_lengkap = req.body.nama_lengkap;
    var jenis_kelamin = req.body.jenis_kelamin;
    var nisn = req.body.nisn;
    var nik = req.body.nik;
    var tmp_lahir = req.body.tmp_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var id_agama = req.body.id_agama;
    var kewarganegaraan = req.body.kewarganegaraan;
    var id_disabilitas = req.body.id_disabilitas;
    var alamat_lengkap = req.body.alamat_lengkap;
    var id_kelurahan = req.body.id_kelurahan;
    var nama_dusun = req.body.nama_dusun;
    var no_rt = req.body.no_rt;
    var no_rw = req.body.no_rw;
    var id_statustinggal = req.body.id_statustinggal;
    var id_transportasi = req.body.id_transportasi;
    var no_kps = req.body.no_kps;
    var id_pip = req.body.id_pip;
    var no_kks = req.body.no_kks;
    var no_akta = req.body.no_akta;
    var id_bank = req.body.id_bank;
    var id_ayah = req.body.id_ayah;
    var id_ibu = req.body.id_ibu;
    var id_wali = req.body.id_wali;
    var no_telp = req.body.no_telp;
    var no_hp = req.body.no_hp;
    var email = req.body.email;

    connection.query('INSERT INTO siswa (id_siswa, nama_lengkap, jenis_kelamin, nisn, nik, tmp_lahir, tgl_lahir, id_agama, kewarganegaraan, id_disabilitas, alamat_lengkap, id_kelurahan, nama_dusun, no_rt, no_rw, id_statustinggal, id_transportasi, no_kps, id_pip, no_kks, no_akta, id_bank, id_ayah, id_ibu, id_wali, no_telp, no_hp, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id_siswa, nama_lengkap, jenis_kelamin, nisn, nik, tmp_lahir, tgl_lahir, id_agama, kewarganegaraan, id_disabilitas, alamat_lengkap, id_kelurahan, nama_dusun, no_rt, no_rw, id_statustinggal, id_transportasi, no_kps, id_pip, no_kks, no_akta, id_bank, id_ayah, id_ibu, id_wali, no_telp, no_hp, email],
        function(error, rows, field){ 27
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil menambah data siswa!",res)
            }
        }
    );

};

// update data siswa
exports.updateSiswa = function(req,res) {

    var id_siswa = req.body.id_siswa;
    var nama_lengkap = req.body.nama_lengkap;
    var jenis_kelamin = req.body.jenis_kelamin;
    var nisn = req.body.nisn;
    var nik = req.body.nik;
    var tmp_lahir = req.body.tmp_lahir;
    var tgl_lahir = req.body.tgl_lahir;
    var id_agama = req.body.id_agama;
    var kewarganegaraan = req.body.kewarganegaraan;
    var id_disabilitas = req.body.id_disabilitas;
    var alamat_lengkap = req.body.alamat_lengkap;
    var id_kelurahan = req.body.id_kelurahan;
    var nama_dusun = req.body.nama_dusun;
    var no_rt = req.body.no_rt;
    var no_rw = req.body.no_rw;
    var id_statustinggal = req.body.id_statustinggal;
    var id_transportasi = req.body.id_transportasi;
    var no_kps = req.body.no_kps;
    var id_pip = req.body.id_pip;
    var no_kks = req.body.no_kks;
    var no_akta = req.body.no_akta;
    var id_bank = req.body.id_bank;
    var id_ayah = req.body.id_ayah;
    var id_ibu = req.body.id_ibu;
    var id_wali = req.body.id_wali;
    var no_telp = req.body.no_telp;
    var no_hp = req.body.no_hp;
    var email = req.body.email;

    connection.query('UPDATE siswa SET nama_lengkap=?, jenis_kelamin=?, nisn=?, nik=?, tmp_lahir=?, tgl_lahir=?, id_agama=?, kewarganegaraan=?, id_disabilitas=?, alamat_lengkap=?, id_kelurahan=?, nama_dusun=?, no_rt=?, no_rw=?, id_statustinggal=?, id_transportasi=?, no_kps=?, id_pip=?, no_kks=?, no_akta=?, id_bank=?, id_ayah=?, id_ibu=?, id_wali=?, no_telp=?, no_hp=?, email=? WHERE id_siswa=?',
        [nama_lengkap, jenis_kelamin, nisn, nik, tmp_lahir, tgl_lahir, id_agama, kewarganegaraan, id_disabilitas, alamat_lengkap, id_kelurahan, nama_dusun, no_rt, no_rw, id_statustinggal, id_transportasi, no_kps, id_pip, no_kks, no_akta, id_bank, id_ayah, id_ibu, id_wali, no_telp, no_hp, email, id_siswa],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil update data siswa!",res)
            }
        }

    );
};

// delete siswa
exports.deleteSiswa = function(req,res) {

    var id_siswa = req.params.id_siswa;

    connection.query('DELETE FROM siswa WHERE id_siswa=?',
        [id_siswa],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil delete data siswa!",res)
            }
        }

    );

};