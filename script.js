document.addEventListener("DOMContentLoaded", function () {
    const namaObatInput = document.getElementById("namaObat");
    const jenisObatInput = document.getElementById("jenisObat");
    const fungsiObatInput = document.getElementById("fungsiObat");
    const stokObatInput = document.getElementById("stokObat");
    const addBtn = document.getElementById("addBtn");
    const tableBody = document.getElementById("tableBody");

    let obatList = [];

    function renderTable() {
        tableBody.innerHTML = ""; // Clear table content
        obatList.forEach((obat, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${obat.nama}</td>
                <td>${obat.jenis}</td>
                <td>${obat.fungsi}</td>
                <td>${obat.stok}</td>
                <td class="action-buttons">
                    <button class="edit" onclick="editObat(${index})">Edit</button>
                    <button class="delete" onclick="deleteObat(${index})">Hapus</button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    }

    function addObat() {
        const nama = namaObatInput.value.trim();
        const jenis = jenisObatInput.value.trim();
        const fungsi = fungsiObatInput.value.trim();
        const stok = stokObatInput.value.trim();

        if (nama && jenis && fungsi && stok) {
            obatList.push({ nama, jenis, fungsi, stok: parseInt(stok) });
            renderTable();
            clearForm();
        } else {
            alert("Mohon isi semua data obat.");
        }
    }

    function clearForm() {
        namaObatInput.value = "";
        jenisObatInput.value = "";
        fungsiObatInput.value = "";
        stokObatInput.value = "";
    }

    addBtn.addEventListener("click", addObat);

    window.deleteObat = function (index) {
        obatList.splice(index, 1);
        renderTable();
    };

    window.editObat = function (index) {
        const obat = obatList[index];
        namaObatInput.value = obat.nama;
        jenisObatInput.value = obat.jenis;
        fungsiObatInput.value = obat.fungsi;
        stokObatInput.value = obat.stok;
        obatList.splice(index, 1); // Remove the item being edited
        renderTable();
    };
});
