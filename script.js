// Fungsi untuk melakukan konversi
function konversi() {
  const jenis = document.getElementById("jenis").value;
  const nilai = parseFloat(document.getElementById("nilai").value);
  const arah = parseInt(document.getElementById("arah").value);
  const hasilElem = document.getElementById("hasil");
  let hasil = "";

  if (isNaN(nilai)) {
    hasil = "Masukkan angka yang valid!";
  } else {
    switch(jenis) {
      case "suhu":
        hasil = (arah === 1) 
          ? `${(nilai * 9/5 + 32).toFixed(2)} °F` 
          : `${((nilai - 32) * 5/9).toFixed(2)} °C`;
        break;
      case "panjang":
        hasil = (arah === 1) 
          ? `${(nilai / 1000).toFixed(3)} kilometer` 
          : `${(nilai * 1000).toFixed(0)} meter`;
        break;
      case "berat":
        hasil = (arah === 1) 
          ? `${(nilai / 1000).toFixed(3)} kilogram` 
          : `${(nilai * 1000).toFixed(0)} gram`;
        break;
    }
  }

  hasilElem.textContent = `Hasil: ${hasil}`;
  hasilElem.classList.remove("show");
  void hasilElem.offsetWidth;
  hasilElem.classList.add("show");
}

// Event listener untuk mengganti arah konversi saat jenis berubah
document.getElementById("jenis").addEventListener("change", function() {
  const jenis = this.value;
  const arah = document.getElementById("arah");

  arah.innerHTML = ""; // Kosongkan opsi

  if (jenis === "suhu") {
    arah.innerHTML += `<option value="1">Celsius → Fahrenheit</option>`;
    arah.innerHTML += `<option value="2">Fahrenheit → Celsius</option>`;
  } else if (jenis === "panjang") {
    arah.innerHTML += `<option value="1">Meter → Kilometer</option>`;
    arah.innerHTML += `<option value="2">Kilometer → Meter</option>`;
  } else if (jenis === "berat") {
    arah.innerHTML += `<option value="1">Gram → Kilogram</option>`;
    arah.innerHTML += `<option value="2">Kilogram → Gram</option>`;
  }
});
