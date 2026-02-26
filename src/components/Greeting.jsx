function Greeting() {
  return (
    <div className="greeting fade-in">
      <h1>Selamat Hari Raya Idul Fitri 1447 H</h1>
      <p className="arabic"> تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</p>
      <p className="arabic">مِنَ الْعَائِدِين وَالْفَائِزِين</p>
      <p style={{ fontSize: "1.8rem" }}>Mohon maaf lahir dan batin.</p>
      <p className="desc" style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
        Semoga di hari yang suci ini, hati kembali bersih, langkah kembali
        ringan, dan kebahagiaan selalu menyertai.
      </p>
    </div>
  );
}

export default Greeting;
