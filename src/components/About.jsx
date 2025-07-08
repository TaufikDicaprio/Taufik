import '../styles/About.css';
import { AiTwotoneFire } from "react-icons/ai";

function About() { 
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About Me</h3>
        <p>
          Saya adalah mahasiswa Informatika di Universitas Satya Terra Bhinneka yang memiliki ketertarikan besar terhadap dunia hitung-hitungan dan analisis.
        </p>
        <p>
          Angka, logika, dan pola adalah hal-hal yang selalu menarik perhatian saya. Di balik kesenangan terhadap aktivitas berpikir, saya juga menyukai suasana yang damai dan tenang — tempat di mana saya bisa merenung, belajar, dan mengembangkan diri tanpa distraksi yang berlebihan.
        </p>
        <p>
          Meski saya pernah meraih beberapa pencapaian, seperti menjadi juara dalam olimpiade matematika dan lomba bulu tangkis tingkat sekolah, saya menyadari bahwa belum ada satu pun dari pencapaian itu yang benar-benar saya tekuni secara mendalam. Hal ini bukan karena kurangnya minat, tapi lebih kepada proses pencarian: saya masih terus berusaha mengenal diri sendiri, memahami apa potensi sejati saya, dan ke mana sebenarnya arah langkah saya ke depan.
        </p>
        <p>
          Saya percaya setiap orang punya waktunya sendiri untuk menemukan tempatnya. Saat ini, saya sedang berada di fase eksplorasi, pembelajaran, dan pembentukan identitas. Saya tidak mengklaim telah ahli dalam satu bidang, tapi saya terus belajar dan mencoba untuk tidak berhenti, meskipun kadang merasa ragu atau belum sepenuhnya yakin.
        </p>
        <p>
          Bagi saya, menjadi “tanggung” bukan berarti gagal. Justru dari ketidaksempurnaan itulah saya belajar membentuk fondasi diri yang lebih kokoh. Saya percaya, selama saya terus berjalan, pada akhirnya saya akan menemukan ruang di mana potensi saya bisa tumbuh sepenuhnya dan bermakna — baik untuk diri sendiri maupun untuk orang lain.
        </p>
        <blockquote className="quote">
          <h4>ابدأ من حيث أنت، واستخدم ما لديك، وافعل ما تستطيع</h4>
          <h4>"Ibdāʾ min ḥaythu anta, wa-stakhdim mā ladayka, wafʿal mā tastāṭiʿ"</h4>
          <p>Mulailah dari mana kamu berada, gunakan apa yang kamu punya, lakukan yang kamu bisa.</p>
        </blockquote>
        <h4>Menyala Abangkuhh</h4>
        <div className="skills">
          <AiTwotoneFire />
        </div>
      </div>
    </section>
  );
}

export default About;
