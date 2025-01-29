//Source Code ini milik METALIKA GUNENA


function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value / 100; // konversi cm ke meter
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if (weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('result').innerHTML = "Harap masukkan nilai yang valid.";
        document.getElementById('result-explanation').innerHTML = "";
        return;
    }
//ini rumusunya
    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";//menseleksi kategori
    let explanation = "";//menseleksi penjelasan
//ini bagian yang akan keluar jika hasilnya sudah dihitung yang merupakan kategori dan penjelasan
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        explanation = "Anda berada dalam kategori <strong>Kekurangan berat badan</strong>. Disarankan untuk meningkatkan asupan kalori dan nutrisi untuk mencapai berat badan ideal.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal(ideal)";
        explanation = "Anda berada dalam kategori <strong>Normal(ideal)</strong>. Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga berat badan ideal.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
        explanation = "Anda berada dalam kategori <strong>Kelebihan berat badan</strong>. Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.";
    } else {
        category = "Kegemukan(Obesitas)";
        explanation = "Anda berada dalam kategori <strong>Kegemukan(Obesitas)</strong>. Segera konsultasikan dengan dokter atau ahli gizi untuk rencana penurunan berat badan yang sehat.";
    }
//ini yang akan keluar di hasilnya
    document.getElementById('result').innerHTML = `
        Usia: ${age} tahun<br>
        Jenis Kelamin: ${gender === 'male' ? 'Pria' : 'Wanita'}<br>
        BMI: ${bmi} (${category})`;//kategori yang terseleksi masuk disini

    document.getElementById('result-explanation').innerHTML = `
        <p>${explanation}</p>`;//penjelasan yang terseleksi masuk disini
}
//ini fungsi untuk mereset form
function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.querySelector('input[name="gender"][value="male"]').checked = true;
    document.getElementById('result').innerHTML = '';
    document.getElementById('result-explanation').innerHTML = '';
}