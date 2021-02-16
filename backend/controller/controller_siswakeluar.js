'use strict';

// import function file response
var response = require('./../response');
// import function file connection
var connection = require('./../connection');

// select semua siswa keluar
exports.viewSiswaKeluar = function(req,res){
    connection.query("SELECT * FROM siswa_keluar", function(error, rows, field){
    if(error){
        connection.log(error);
    } else {
        response.ok(rows,res)
    }
    });
};

// select data siswa keluar berdasarkan id
exports.viewSiswaKeluarById = function(req,res){
    let id_siswakeluar = req.params.id_siswakeluar;
    connection.query('SELECT * FROM siswa_keluar WHERE id_siswakeluar = ?', [id_siswakeluar],
        function(error, rows, field){
            if(error){
                connection.log(error);
            } else {
                response.ok(rows,res)
            }
        }
    );
};

// add data siswa keluar
exports.addSiswaKeluar = function(req,res){

    var id_siswakeluar      = req.body.id_siswakeluar;
    var id_siswa            = req.body.id_siswa;
    var id_jenisalasan      = req.body.id_jenisalasan;
    var tgl_keluar          = req.body.tgl_keluar;
    var keterangan          = req.body.keterangan;

    connection.query('INSERT INTO siswa_keluar (id_siswakeluar, id_siswa, id_jenisalasan, tgl_keluar, keterangan) VALUES (?, ?, ?, ?, ?)',
        [id_siswakeluar, id_siswa, id_jenisalasan, tgl_keluar, keterangan],
        function(error, rows, field){
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil menambah data siswa keluar!",res)
            }
        }
    );

};

// update data siswa keluar
exports.updateSiswaKeluar = function(req,res) {

    var id_siswakeluar      = req.body.id_siswakeluar;
    var id_siswa            = req.body.id_siswa;
    var id_jenisalasan      = req.body.id_jenisalasan;
    var tgl_keluar          = req.body.tgl_keluar;
    var keterangan          = req.body.keterangan;

    connection.query('UPDATE siswa_keluar SET id_siswa=?, id_jenisalasan=?, tgl_keluar=?, keterangan=? WHERE id_siswakeluar=?',
        [id_siswa, id_jenisalasan, keterangan, tgl_keluar, id_siswakeluar],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil update data siswa keluar!",res)
            }
        }

    );
};

// delete siswa keluar
exports.deleteSiswaKeluar = function(req,res) {

    var id_siswakeluar = req.params.id_siswakeluar;

    connection.query('DELETE FROM siswa_keluar WHERE id_siswakeluar=?',
        [id_siswakeluar],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Berhasil delete data siswa keluar!",res)
            }
        }

    );

};