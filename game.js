'use strict';

const asset = name => 'assets/' + name + '.png';
const $ = id => document.getElementById(id);
const two = number => String(number).padStart(2, '0');
const clamp = (value, lo, hi) => Math.min(hi, Math.max(lo, value));
const goal = (x, y, icon, action, hint, lines) => ({ x, y, icon, action, hint, lines });
const spoken = (who, text) => ({who, text});
const chapters = [
  {
    title:'Dikenalkan Puput', short:'Puput', icon:'chat', place:'Taman', scene:'scene-4',
    subtitle:'Sebelum ada aku dan Sylvi, ada Puput.', spawn:[190,192], floor:148, puput:[316,163],
    memory:'Puput itu temanku, sekaligus teman dekat Sylvi. Dari dia aku tahu siapa orang yang akhirnya ingin kuajak bicara setiap hari.',
    goals:[
      goal(316,163,'puput','Sapa Puput','Hampiri Puput di jalan setapak. Dia mau mengenalkanmu pada seseorang.',[
        spoken('Puput','Sit, kenalin, namanya Sylvi. Dia temen deketku. Coba deh kamu sapa dia di IG.'),
        'Di umur 25, aku belum pernah PDKT atau chat pribadi sama cewek kayak gini. Waktu Puput bilang “sapa aja”, buat dia mungkin tinggal kirim satu pesan. Aku malah nanya, habis bilang hai, terus ngomong apa?',
        spoken('Gesit','Put, kalau nanti jawabanku pendek terus dia kira aku nggak tertarik gimana? Aku suka bingung ngerangkai kata.'),
        spoken('Puput','Ya kenalan dulu aja, Sit. Masa semua chat besok mau kamu siapin hari ini juga?')
      ]),
      goal(172,187,'phone','Buka Instagram','Bawa ponselmu ke bangku taman dan buka profil Sylvi.',[
        'Di layar sudah ada nama Sylvi. Aku penasaran sama temen dekatnya Puput ini. Yang baru buatku itu ngobrol sama cewek yang memang pengin kudekati.',
        'Aku menyapanya di IG. “Hai, Sylvi. Aku Gesit, temennya Puput.” Dari situ percakapan pertama kami dimulai.'
      ])
    ]
  },{
    title:'DM Pertama', short:'Chat IG', icon:'phone', place:'Kamar Gesit', scene:'scene-1', channel:'DM Instagram',
    subtitle:'Kaku di balik layar, nyaman setelah dibalas.', spawn:[141,192], floor:151,
    thought:'“Kemarin iyaaa, hari ini iyaa. Jangan-jangan dia bosan?”', enemySpeed:32,
    memory:'Sylvi orang pertama yang bikin aku merasa sebegitu dihargai. Aku ingat jawabanku yang cuma “nyiram”, pertanyaan lanjutannya, dan betapa panjang ceritaku sesudah itu.',
    goals:[
      goal(279,154,'chat','Baca DM','Dekati meja kerja dan buka balasan pertama Sylvi di Instagram.',[
        spoken('Sylvi','Hai, Gesit! Iya, aku temennya Puput. Salam kenal yaa.'),
        spoken('Gesit','Salam kenal juga. Eh, itu tadi udah aku bilang ya, hehe. Aku agak bingung mau ngobrol apa.'),
        spoken('Sylvi','Hehe, santai aja, Gesit. Kamu main Stardew Valley juga, kan? Biasanya paling betah ngapain di kebun?'),
        spoken('Gesit','Nyiram.'),
        'Begitu terkirim baru aku sadar. Dia udah nanya panjang, aku cuma jawab “nyiram”. Padahal di kepalaku ada cerita satu kebun penuh. Mau nambahin malah takut dia keburu bosan.',
        spoken('Sylvi','Nyiram apa aja, Gesit? Aku jadi penasaran kebunmu isinya apa.'),
        'Nah, yang itu aku bisa jawab. Aku cerita kalau kadang niatnya cuma nyiram sebentar, tahu-tahu sudah main sejam. Begitu kukirim baru kelihatan panjangnya. Kali ini kubiarin aja.'
      ]),
      goal(413,185,'shadow','Hadapi','Hampiri Bayang Ragu saat kamu mulai menghitung huruf di balasannya.',[
        'Aku sibuk menebak artinya satu huruf, padahal Sylvi lagi punya tugas, UAS, dan revisi. Ponsel kutaruh dulu. Nanti kalau dia sempat, ceritanya bisa kami sambung.',
        'Sambil nunggu, kubaca lagi DM kami dari awal. Lucu juga lihat jawabanku yang sepatah-sepatah. Sekarang kalau nemu tempat makan atau lihat kebunku panen, aku langsung kepikiran mau cerita ke Sylvi.'
      ]),
      goal(223,155,'pad','Buka kebun','Hampiri laptop. Kali ini Sylvi yang lebih dulu mengajakmu mabar.',[
        spoken('Sylvi','Gesit, kapan kita mabar Stardew? Aku masih pengin lihat kebun yang kamu ceritain itu.'),
        'Dia ingat. Waktu itu aku duduk di depan laptop sambil senyum sendiri. Kukira soal kebunku cuma obrolan kecil buat ngisi chat yang sepi.',
        spoken('Gesit','Ayo, Syl. Nanti kalau main pasti aku lebih cerewet. Kalau ngetik suka mentok duluan, hehe.'),
        'Sylvi orang pertama yang bikin aku merasa sebegitu dihargai. Jawabanku boleh cuma satu kata, ceritaku boleh sepanjang satu layar. Besoknya dia masih datang bawa pertanyaan. Aku mulai berani mulai percakapan duluan juga.'
      ]),
      goal(376,188,'heart','Balas foto','Buka foto Sylvi dan kirim pujian yang sudah dari tadi ingin kamu sampaikan.',[
        'Jempolku sempat mau kirim emoji aja. Terus kupikir, kalau yang ingin kubilang itu “cantik”, mana dia tahu kalau nggak kutulis?',
        spoken('Gesit','Cantik sih ini, nggak boong wkwk.'),
        spoken('Sylvi','Makasii yaa, jadii maluu.'),
        'Aku naruh HP, terus kuambil lagi buat baca balasannya sekali lagi. Baru kali ini aku berani bilang begitu ke cewek. Sekarang aku penasaran seperti apa senyumnya kalau kami ngobrol langsung.'
      ])
    ]
  },{
    title:'Pertama di Koat Coffee', short:'Koat Coffee', icon:'coffee', place:'Koat Coffee', scene:'koat',
    subtitle:'Untuk pertama kalinya, obrolan kami pindah dari layar ke meja kopi.', spawn:[151,191], floor:151, sylvi:[346,159],
    memory:'First date kami di Koat Coffee. Setelah kenal lewat IG, akhirnya aku bisa lihat senyumnya dari seberang meja.',
    goals:[
      goal(233,157,'coffee','Ambil kopi','Ambil kopi di dekat bar sebelum menghampiri meja Sylvi.',[
        'Ini first date kami. Di IG aku bisa mikir dulu sebelum membalas. Di Koat Coffee, dari tempatku berdiri saja aku sudah bisa melihat Sylvi. Mau latihan bilang “hai” pun keburu ketahuan senyum.'
      ]),
      goal(346,159,'sylvi','Sapa Sylvi','Bawa kopimu ke meja Sylvi dan sapa dia secara langsung.',[
        spoken('Gesit','Hai, Sylvi. Akhirnya ketemu juga ya. Kalau di chat aku cuma bisa nebak kamu lagi senyum apa enggak, hehe.'),
        'Aku mau bilang senang dia datang, tapi kalimatku putus di tengah. Aku malah sibuk muter cangkir. Pas kuangkat kepala, Sylvi masih lihat ke arahku, nunggu aku selesai.',
        spoken('Gesit','Aku senang kamu mau ketemu. Sebenarnya itu yang mau aku bilang dari tadi.'),
        spoken('Sylvi','Aku juga senang, Gesit. Terus, tadi kamu mau cerita apa?'),
        'Di situ aku sadar kenapa aku selalu pengin balas pesannya. Bahkan waktu aku sendiri gemas karena susah ngomong, di depan Sylvi aku masih merasa ceritaku layak ditunggu.'
      ]),
      goal(202,187,'phone','Kirim kabar','Sebelum pulang dari Koat, kirim satu pesan dengan kata-katamu sendiri.',[
        spoken('Gesit','Syl, makasih ya buat hari ini. Lain kali aku mau ketemu lagi.'),
        'Waktu Puput ngenalin kami, aku masih bingung habis salam kenal mau ngobrol apa. Sekarang malah ada cerita yang sengaja kusimpan buat ketemu Sylvi lagi.'
      ])
    ]
  },{
    title:'Rencana Dua Tiket', short:'Dua Tiket', icon:'music', place:'Kamar Gesit', scene:'scene-1',
    subtitle:'Kami belum begitu dekat ketika mulai membuat rencana berdua.', spawn:[146,194], floor:151,
    memory:'Aku membalas story soal pentas Disney. Dari situ muncul rencana nonton orkestra berdua, padahal waktu itu kami masih PDKT.',
    goals:[
      goal(278,155,'phone','Balas story','Buka story Sylvi tentang pentas Disney dan kirim balasan.',[
        'Awalnya cuma balas story. Lalu kami mulai bahas musiknya, jadwalnya, sampai akhirnya yang sedang kami bicarakan adalah pergi nonton konser orkestra. Berdua.',
        'Tiketnya sekitar satu setengah juta per orang. Waktu uangku belum siap, Sylvi bersedia menalangi dua tiket dulu.'
      ]),
      goal(401,182,'letter','Simpan rencana','Simpan rencana konser kalian di catatan.',[
        'Aku senang dia percaya sama aku. Tanganku sudah gatal mau cerita ke Puput, tapi kutahan. Kami belum dekat banget. Satu rencana pergi bareng belum menjawab pertanyaanku soal perasaan dia.',
        'Nanti kalau ada kesempatan berdua, aku pengin nanya sendiri.'
      ])
    ]
  },{
    title:'Tiga Kursi di Kafe', short:'Bertiga', icon:'coffee', place:'Kafe', scene:'cafe',
    subtitle:'Aku sudah menyiapkan kalimatnya. Saat itu, mejanya untuk bertiga.', spawn:[111,192], floor:151, sylvi:[307,157], puput:[365,161],
    memory:'Aku datang ke kafe dengan niat menyatakan perasaan. Puput ikut bersama kami. Kusimpan dulu kalimat itu supaya kelak Sylvi bisa menjawab berdua denganku.',
    goals:[
      goal(307,157,'sylvi','Hampiri meja','Hampiri meja tempat Sylvi dan Puput berkumpul.',[
        'Sepanjang jalan ke kafe aku sibuk latihan. Pembukanya jangan kepanjangan. Kalau dia diam, tunggu. Pokoknya hari ini mau kubilang kalau aku suka.',
        'Begitu sampai di meja, ada Puput juga. Mereka memang teman dekat. Melihat mereka ngobrol, kalimat yang kusiapkan tadi kusimpan dulu.'
      ]),
      goal(365,161,'puput','Gabung ngobrol','Gabung dengan Puput dan nikmati waktu kalian bertiga.',[
        spoken('Puput','Gesit, sini, gabung!'),
        'Aku ikut duduk. Aku tetap senang bisa ngobrol bertiga sama Puput dan Sylvi. Cuma satu percakapan itu yang pengin kulakukan berdua dengan Sylvi.'
      ]),
      goal(151,189,'phone','Simpan niat','Saat hendak pulang, ambil ponselmu dan pikirkan cara bicara berdua.',[
        'Confess-nya kutunda. Sampai di jalan pulang, kalimat tadi masih utuh di kepalaku. Kalau susah cari waktu berdua di kafe, mungkin aku bisa meneleponnya.'
      ])
    ]
  },{
    title:'Di Ujung Telepon', short:'Telepon', icon:'phone', place:'Kamar Gesit', scene:'scene-1', channel:'Lewat telepon',
    subtitle:'Yang kutakutkan sepanjang hari akhirnya kutanyakan sendiri.', spawn:[112,193], floor:151,
    thought:'“Kalau dia cuma ramah? Kalau setelah ini dia malah menjauh?”', enemySpeed:34,
    memory:'Setelah tertunda di kafe, aku menyatakan perasaanku lewat telepon. Sylvi mau menjalaninya dengan komitmen. Saat kutanya sekali lagi, dia menjawab “Oke.”',
    goals:[
      goal(344,183,'shadow','Hadapi','Hadapi Bayang Ragu sebelum menekan tombol panggil.',[
        'Ini pertama kalinya aku seserius ini. Aku bahkan pernah nangis cuma karena membayangkan ditolak. Belum juga menelepon, di kepalaku sudah ada sepuluh versi percakapan yang berakhir buruk.',
        'Yang bisa kulakukan cuma jujur. Jawabannya tetap punya Sylvi.'
      ]),
      goal(278,153,'phone','Telepon Sylvi','Dekati ponsel di meja, telepon Sylvi, dan katakan perasaanmu.',[
        spoken('Gesit','Sylvi, waktu di kafe kemarin sebenernya aku mau ngomong sesuatu. Aku nyaman sama kamu. Aku suka sama kamu. Kamu pengin kita jalanin ini gimana?'),
        'Di seberang telepon, Sylvi bilang dia mau menjalaninya dulu dengan komitmen. Aku dengar jawabannya. Tapi karena sejak tadi aku menyiapkan diri buat ditolak, aku masih perlu tanya sekali lagi.',
        spoken('Gesit','Berarti kamu oke sama aku?'),spoken('Sylvi','Oke.'),
        'Aku senyum sambil masih nempelin telepon ke telinga. Jawaban yang dari tadi paling kuharapkan justru yang paling susah kupercaya bakal kudengar.'
      ])
    ]
  },{
    title:'Malam Orkestra', short:'Orkestra', icon:'music', place:'Gedung Orkestra', scene:'scene-3',
    subtitle:'Rencana waktu PDKT akhirnya kami jalani setelah bicara jujur.', spawn:[107,195], floor:151, sylvi:[322,156],
    memory:'Akhirnya dua tiket itu terpakai. Kami nonton orkestra, foto berdua, lalu aku menggenggam tangannya saat berjalan.',
    goals:[
      goal(322,156,'sylvi','Temui Sylvi','Bawa dua tiket ke Sylvi di dekat panggung.',[
        'Waktu membicarakan tiket ini dulu, aku masih bertanya apakah dia sekadar ramah. Malam ini aku duduk di sebelahnya dan bisa mendengarkan musik tanpa sibuk mencari tanda.',
        'Setelah konser, kami foto berdua. Aku merangkulnya sedikit. Rasanya lucu mengingat untuk memuji fotonya lewat chat saja dulu aku perlu mengumpulkan nyali.'
      ]),
      {...goal(469,191,'music','Gandeng tangan','Berjalanlah bersama Sylvi menuju pintu keluar gedung.',[
        'Pas kami jalan, kugenggam tangannya. Aku ingat candaan kami dulu soal “dituntun” dan “pegangan”. Sekarang tangannya beneran ada di tanganku.'
      ]),escort:true}
    ]
  },{
    title:'Minggu Depan, Ya?', short:'Tiap Minggu', icon:'book', place:'Jalan Taman', scene:'scene-4',
    subtitle:'Satu kali ketemu pelan-pelan jadi kebiasaan tiap minggu.', spawn:[118,189], floor:148, sylvi:[283,158],
    memory:'Sesudah telepon itu kami makin dekat. Kami sering jalan tiap minggu. Aku mulai hafal rasanya menantikan waktu biasa bersamanya.',
    goals:[
      goal(283,158,'sylvi','Jalan bareng','Temui Sylvi untuk jalan berdua lagi minggu ini.',[
        'Setelah aku jujur, ketemu Sylvi jadi bagian dari mingguku. Kadang sepulang jalan aku langsung mikir, minggu depan enaknya ke mana ya?',
        'Dulu aku menyusun topik supaya chat kami panjang. Sekarang saat jalan berdampingan, diam sebentar pun enak.'
      ]),
      {...goal(439,181,'chat','Buat janji lagi','Susuri jalan setapak berdua dan ajak Sylvi ketemu lagi minggu depan.',[
        spoken('Gesit','Minggu depan kalau kamu senggang, jalan lagi, yuk.'),
        'Pelan-pelan aku punya tempat di kesehariannya, dan dia punya tempat di keseharianku. Aku mulai ingin memanggil dia dengan satu kata yang selama ini masih kusimpan.'
      ]),escort:true}
    ]
  },{
    title:'Panggilan Sayang', short:'Sayang', icon:'heart', place:'Taman Senja', scene:'scene-2',
    subtitle:'Kali ini aku mendengarnya kembali dari dia.', spawn:[157,193], floor:148, sylvi:[333,157],
    memory:'Aku memberanikan diri memanggil Sylvi “sayang”. Dia membalasku dengan panggilan yang sama. Sampai sekarang aku ingat senangnya.',
    goals:[
      goal(333,157,'sylvi','Panggil sayang','Hampiri Sylvi dan ucapkan panggilan yang selama ini kamu simpan.',[
        'Biasanya aku panggil namanya. Kali ini pas mau menyapanya, yang keluar dari mulutku justru…',
        spoken('Gesit','Sayang.'),spoken('Sylvi','Iya, sayang.'),
        'Aku yang mulai duluan, tapi aku juga yang salah tingkah. Dulu satu huruf tambahan di “iyaa” saja bisa kupikirkan semalaman. Sekarang dia memanggilku sayang dan aku pengin menikmati rasanya.'
      ])
    ]
  },{
    title:'Di Depan Akuarium', short:'Akuarium', icon:'heart', place:'Akuarium', scene:'scene-0',
    subtitle:'Date ini datang setelah kami sama-sama tahu perasaan masing-masing.', spawn:[152,195], floor:166, sylvi:[313,174], scarfRow:4,
    memory:'Date di akuarium terjadi sesudah aku confess. Kami berdiri berdua di depan kaca, menikmati waktu sebagai dua orang yang sudah saling sayang.',
    goals:[
      goal(313,174,'sylvi','Temui Sylvi','Temui Sylvi di depan kaca akuarium.',[
        'Kalau melihat kami dari belakang di depan kaca ini, orang mungkin cuma lihat dua orang lagi lihat ikan. Aku tahu betapa panjang jalannya dari DM pertamaku sampai bisa berdiri di sini sama dia.',
        'Ini date kami setelah aku confess. Aku bisa memanggilnya sayang, dan kali ini dia cukup menoleh untuk tahu aku sedang bicara sama siapa.'
      ]),
      {...goal(455,190,'heart','Lihat ikan','Susuri akuarium bersama Sylvi dan berhenti di depan kawanan ikan.',[
        'Seekor ikan lewat, lalu kawanan kecil menyusul. Aku ikut melihat ke arah yang dia tunjuk. Ada saat-saat yang pengin kusimpan justru karena waktu itu kami nggak perlu ngomong apa-apa.'
      ]),escort:true}
    ]
  },{
    title:'Pacaran, Pelan-Pelan', short:'Restu Mama', icon:'house', place:'Kamar Gesit', scene:'scene-1',
    subtitle:'Kami sudah pacaran. Restu Mama masih kami harapkan.', spawn:[130,192], floor:151,
    thought:'“Kalau belum boleh jalan sama aku, sampai kapan kami harus menunggu?”', enemySpeed:36,
    memory:'Sekarang kami sudah pacaran. Mamanya Sylvi punya aturan ketat dan belum mengizinkan kami pacaran atau pergi berdua. Aku memilih sabar dan tetap berharap suatu hari kami direstui.',
    goals:[
      goal(279,155,'phone','Hubungi Sylvi','Dekati ponsel dan luangkan waktu untuk mendengarkan Sylvi.',[
        'Setelah semua minggu yang kami lalui, aku sudah bisa bilang Sylvi itu pacarku. Kami dekat banget sekarang. Justru karena itu, hal yang belum selesai ini terasa berat buatku.',
        'Mamanya Sylvi punya aturan yang ketat. Dia belum mengizinkan Sylvi pacaran atau pergi jalan sama aku. Kadang aku sudah kangen sebelum tahu kapan kami bisa ketemu lagi.'
      ]),
      goal(413,185,'shadow','Hadapi','Hadapi pikiranmu tentang masa depan kalian.',[
        'Kalau aku lagi takut, gampang sekali buatku minta Sylvi segera kasih kepastian. Padahal dia juga yang harus menghadapi situasi di rumah. Aku pengin jadi orang yang bisa diajak cerita.',
        'Aku bisa belajar sabar hari ini, meskipun aku belum tahu kapan keadaan akan berubah.'
      ]),
      goal(279,155,'chat','Kirim pesan','Kembali ke ponsel dan sampaikan apa yang ingin kamu jaga.',[
        spoken('Gesit','Sayang, aku kangen. Kalau sekarang belum bisa jalan, nggak apa-apa. Nanti kalau kamu senggang, aku pengin denger ceritamu.'),
        'Aku berharap suatu hari mamanya bisa merestui kami. Di sinilah kisah kami sampai hari ini. Kalau boleh membayangkan satu hari di masa depan, ada pemandangan yang ingin kutunjukkan ke Sylvi.'
      ])
    ]
  },{
    title:'Janji Kita', short:'Janji Kita', icon:'rings', place:'Taman Pernikahan', scene:'scene-5', wedding:true, scarfRow:6,
    subtitle:'Sepotong masa depan yang ingin kujaga bersamamu.', spawn:[86,192], floor:148, sylvi:[289,151],
    memory:'Dalam impianku keluarga kami hadir dengan restu, Sylvi mengenakan kerudung putih, dan kami saling menyematkan cincin. Semuanya bermula dari Puput dan satu sapaan di IG.',
    goals:[
      goal(167,181,'rings','Ambil cincin','Ambil cincin di taman yang Gesit bayangkan untuk hari pernikahan kalian.',[
        'Dalam bayanganku, hari itu akhirnya datang. Puput hadir di antara tamu. Kalau dulu dia nggak memperkenalkan kami, mungkin aku masih belum tahu betapa bahagianya dipanggil sayang oleh Sylvi.'
      ]),
      goal(289,151,'sylvi','Ucapkan janji','Bawa cincin ke Sylvi yang menunggumu di bawah gapura bunga.',[
        'Sylvi memakai kerudung putih. Di antara keluarga yang hadir, mamanya tersenyum memberi restu. Kali ini tanganku gemetar karena kami akan menikah.',
        spoken('Gesit','Sylvi, dulu mau kenalan saja aku bingung harus ngetik apa. Makasih sudah mau kenal aku yang sekaku itu. Aku mau terus dengerin kamu, sampai kita tua nanti.'),
        'Kami mengucap janji nikah lalu saling menyematkan cincin. Waktu kugenggam tangan istriku, aku teringat obrolan pertama di Koat Coffee. Senang sekali membayangkan suatu hari bisa mengenangnya berdua seperti ini.',
        {kiss:true, text:'Sylvi tersenyum, lalu kami sama-sama mendekat dan berciuman untuk pertama kalinya sebagai suami istri. Waktu kami membuka mata, dia tertawa kecil. “Sayang,” bisikku. “Iya, sayang,” jawabnya, masih menggenggam tanganku.'}
      ])
    ]
  }
];

const storageKey = 'pixel-hati-petualangan-v3';
function startChapter(index) {
  const [x,y] = chapters[index].spawn;
  return {chapter:index, step:0, line:0, mode:'walk', x,y, face:'right', hearts:3, enemyHP:3};
}
function restore() {
  let fresh = {...startChapter(0), unlocked:0, finished:false, sound:false};
  try {
    // The expanded chronology starts with Puput. Older chapter indices describe different events.
    const previous = localStorage.getItem('pixel-hati-petualangan-v2') || localStorage.getItem('pixel-hati-gesit-sylvi-v1');
    if (previous) {
      try { fresh.sound = JSON.parse(previous)?.sound === true; } catch { /* Use default sound. */ }
    }
    const s = JSON.parse(localStorage.getItem(storageKey));
    if (!s || !Number.isInteger(s.chapter) || !chapters[s.chapter] || !Number.isInteger(s.unlocked) ||
        !chapters[s.unlocked] || s.chapter>s.unlocked) return fresh;
    const chapter=chapters[s.chapter], g=chapter.goals[s.step];
    if (!Number.isInteger(s.step) || !g || !Number.isInteger(s.line) || !g.lines[s.line] ||
        !['walk','talk','fight','rest','end'].includes(s.mode) ||
        (['fight','rest'].includes(s.mode) && g.icon!=='shadow') ||
        (s.mode==='end' && s.chapter!==chapters.length-1)) return fresh;
    return {...startChapter(s.chapter), ...s, x:clamp(Number.isFinite(s.x)?s.x:chapter.spawn[0],13,547),
      y:clamp(Number.isFinite(s.y)?s.y:chapter.spawn[1],chapter.floor,204),
      hearts:clamp(Math.round(s.hearts)||0,0,3), enemyHP:clamp(Math.round(s.enemyHP)||3,1,3)};
  } catch { return fresh; }
}
let state=restore();
const chapter=()=>chapters[state.chapter];
const objective=()=>chapter().goals[state.step];

const musicFiles = {
  piano: 'assets/iya-sayang-piano.mp3',
  strings: 'assets/iya-sayang-strings.mp3',
  box: 'assets/iya-sayang-box.mp3'
};
const music = new Audio();
music.preload = 'none';
music.loop = true;
music.volume = .6;
let musicUnlocked = false;
let currentCue;

function musicCue() {
  if (state.mode === 'end') return 'box';
  if (state.chapter === 5 && objective().icon === 'phone' && state.mode === 'talk') {
    if (state.line === 2) return null;
    if (state.line >= 3) return 'strings';
  }
  return state.chapter > 5 ? 'strings' : 'piano';
}
function syncMusic() {
  const cue = musicCue();
  if (!musicUnlocked || !state.sound || document.hidden || !cue) {
    music.pause();
    return;
  }
  if (cue !== currentCue) {
    music.src = musicFiles[cue];
    currentCue = cue;
  }
  if (music.paused) music.play().catch(() => { /* Retry on the next user gesture. */ });
}
function activateMusic() {
  musicUnlocked = true;
  syncMusic();
}

let audio;
function chime(notes = [523, 659]) {
  if (!state.sound) return;
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    audio ??= new Audio();
    if (audio.state === 'suspended') audio.resume().catch(() => {});
    notes.forEach((hz, i) => {
      const oscillator = audio.createOscillator(), gain = audio.createGain();
      const start = audio.currentTime + i * .085;
      oscillator.type = 'triangle'; oscillator.frequency.value = hz;
      gain.gain.setValueAtTime(.0001, start);
      gain.gain.exponentialRampToValueAtTime(.08, start + .012);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .16);
      oscillator.connect(gain); gain.connect(audio.destination);
      oscillator.start(start); oscillator.stop(start + .18);
    });
  } catch { /* The game also works in browsers without Web Audio. */ }
}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { $('save-status').textContent = 'Progres hanya di sesi ini'; }
}
function setSoundButton() {
  const control = $('sound');
  control.querySelector('img').src = asset(state.sound ? 'sound' : 'mute');
  control.querySelector('span').textContent = state.sound ? 'Suara aktif' : 'Suara mati';
  control.setAttribute('aria-pressed', String(state.sound));
  control.setAttribute('aria-label', state.sound ? 'Matikan suara' : 'Aktifkan suara');
}
function chapterMenu() {
  $('chapters').replaceChildren();
  chapters.forEach((chapter, index) => {
    const locked = index > state.unlocked, current = index === state.chapter;
    const button = document.createElement('button');
    button.className = 'chapter' + (current ? ' current' : '');
    button.disabled = locked;
    button.setAttribute('aria-label', 'Bab ' + (index + 1) + ', ' + chapter.title + (locked ? ', terkunci' : current ? ', sedang dimainkan' : ', mainkan kembali'));
    if (current) button.setAttribute('aria-current', 'step');
    button.innerHTML = '<img class="item" alt="" src="' + asset(chapter.icon) + '"><span><small>BAB ' + two(index + 1) + '</small><b>' + chapter.short + '</b></span>' +
      (locked ? '<img class="tiny-lock" alt="" src="' + asset('lock') + '">' : '');
    button.onclick = () => { if (!current) goTo(index); };
    $('chapters').append(button);
  });
  $('unlocked').textContent = (state.unlocked + 1) + ' dari '+chapters.length+' bab terbuka';
}


const world=$('world'), ctx=world.getContext('2d');
const pictures=new Map();
function imageFor(name) {
  if (!pictures.has(name)) {
    const img=new Image(); img.src=asset(name); pictures.set(name,img);
    img.onload=()=>{dirty=true;};
  }
  return pictures.get(name);
}
const keys=new Set(), pointers=new Map();
let destination=null, clock=0, stride=0, walking=false, camera=0, dirty=true;
let enemy={x:0,y:0}, pulse=null, attackLock=0, grace=0, near=null, previousTime=0, lastDraw=0;
let companion=null, visible=true, moved=false, pendingSave=0;
let kissTime=0;
const weddingKiss=()=>state.mode==='talk' && objective().lines[state.line]?.kiss===true;
const usableRange=28, calmRange=58, walkingSpeed=107;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const canWalk=()=>state.mode==='walk' || state.mode==='fight';
function clearInput() {
  keys.clear(); pointers.clear(); destination=null; walking=false;
  document.querySelectorAll('.held').forEach(el=>el.classList.remove('held'));
}
function stopAndSave() {
  clearInput();
  if(moved){save();moved=false;}
  previousTime=0; dirty=true;
}
function initScene() {
  clearInput(); pulse=null; attackLock=0; grace=1.2; near=null; stride=0; dirty=true;
  const g=objective();
  enemy={x:g.x,y:g.y};
  if(state.mode==='fight') enemy.x=clamp(state.x+(state.x>280?-75:75),18,542);
  companion=chapter().sylvi ? {x:chapter().sylvi[0],y:chapter().sylvi[1]} : null;
  if(g.escort) companion={x:clamp(state.x-19,13,547),y:state.y-1};
}
function goTo(index) {
  Object.assign(state,startChapter(index));
  state.unlocked=Math.max(state.unlocked,index);
  initScene(); chime([392,494,587]); render();
  if($('title').getBoundingClientRect().top<0) $('permainan').scrollIntoView({block:'start'});
}
function showHearts() {
  $('hearts').setAttribute('aria-label',state.hearts+' dari 3 hati');
  [...$('hearts').children].forEach((img,i)=>img.classList.toggle('spent',i>=state.hearts));
}
function actionUI(force=false) {
  const g=objective(), close=distance(state,g)<=usableRange;
  if(!force && near===close)return;
  near=close;
  const b=$('next');
  b.disabled=state.mode==='walk' && !close;
  const labels={walk:g.action, fight:'Tenangkan', rest:'Coba lagi', talk:'Lanjut', end:'Main lagi'};
  b.textContent=weddingKiss()?'Buka surat':labels[state.mode];
  if(state.mode==='walk') b.title=close?g.action:'Dekati tujuan yang bertanda seru';
  else b.removeAttribute('title');
}
function render() {
  const c=chapter(), g=objective();
  let who='Gesit', voice='Tujuan', text=g.hint;
  if(state.mode==='talk'){
    const line=g.lines[state.line];text=typeof line==='string'?line:line.text;
    who=line.who||'Gesit';voice=line.who?(c.channel || 'Percakapan'):'Dalam hati';
  }else if(state.mode==='fight'){
    who='Bayang Ragu';voice='Overthinking';
    text=c.thought+' Bergeraklah, lalu gunakan Tenangkan saat bayangan mendekat. Jaga jarak agar hatimu tetap utuh.';
  }else if(state.mode==='rest'){
    voice='Tarik napas';text='Aku mundur sebentar untuk menarik napas. Saat siap, aku bisa mencoba lagi dari sini.';
  }else if(state.mode==='end'){
    voice='Surat untuk Sylvi';
    text=[
      'Sylvi, sayangku,',
      'Kalau kamu tanya apa yang pertama kali bikin aku jatuh hati, aku selalu ingat caramu ngobrol sama aku waktu kita baru kenal. Aku belum pernah chat sama cewek yang sedang aku dekati. Kadang jawabanku pendek banget, padahal sebenarnya aku senang kamu nyapa. Kamu tetap nyambungin ceritaku. Sampai suatu hari kamu ngajak aku mabar Stardew duluan, dan aku senyum sendiri. Ternyata kamu juga pengin ngabisin waktu sama aku, ya, Syl.',
      'Kamu orang pertama yang bikin aku merasa sebegitu dihargai. Mungkin buat kamu, menanggapi ceritaku itu hal biasa. Buat aku, rasanya besar sekali. Dari anak yang suka bingung mau ngomong apa, aku jadi orang yang kalau ngalamin sesuatu langsung kepikiran, “Nanti aku mau cerita ini ke Sylvi.” Makasih ya, sayang. Aku suka sekali jadi diriku sendiri waktu sama kamu.',
      'Aku kadang pengin balik sebentar ke hari kita duduk di Koat Coffee. Pengin lihat lagi kamu dari seberang meja, sambil tahu sesuatu yang waktu itu belum kutahu. Cewek di depanku ini suatu hari bakal nonton orkestra sambil duduk di sebelahku. Tangannya bakal kugenggam waktu kami jalan pulang. Dan suatu hari, waktu aku panggil dia “sayang”, dia bakal manggil aku “sayang” juga. Kalau Gesit waktu itu dikasih tahu, kayaknya sepanjang ngopi aku bakal senyum terus.',
      'Sayang, aku bersyukur banget kita sudah sampai sejauh ini. Dulu dengar kamu bilang “oke” di ujung telepon saja sudah bikin aku lega setengah mati. Sekarang aku bisa bilang, “Itu Sylvi, pacarku.” Aku masih senang tiap kali mengucapkannya. Dari semua orang, ternyata aku yang punya kesempatan buat kenal kamu sedekat ini. Terima kasih sudah memilih buat jalan bareng aku.',
      'Aku tahu sekarang ada kalanya kita sama-sama kangen dan belum bisa ketemu. Soal restu Mama, aku mau menjalaninya pelan-pelan sama kamu. Kalau suatu hari kamu capek, telepon aku ya, Syl. Cerita sebisamu. Kalau kamu lagi pengin ditemenin diam pun, aku mau tetap di ujung telepon sampai kamu siap ngomong. Dulu kamu sabar mendengarkan aku yang kaku. Aku juga pengin kamu merasakan betapa berharganya setiap ceritamu buat aku.',
      'Aku punya doa yang sederhana. Semoga suatu hari Mama merestui kita, dan aku bisa melihat kamu di hari pernikahan kita sambil bilang dalam hati, “Syl, akhirnya kita sampai juga.” Sesudah hari itu, aku pengin pulang ke rumah yang sama denganmu. Bikin kopi selagi kamu cerita tentang harimu. Kalau kita lagi beda pendapat, aku mau belajar duduk lagi di sebelahmu dan dengerin kamu baik-baik. Begitulah keluarga bahagia yang ingin kubangun sama kamu, sayang. Rumah tempat kita berdua selalu merasa disayang.',
      'Nanti kalau rambut kita sudah sama-sama putih, mau ke akuarium lagi sama aku? Aku pengin berdiri di sebelahmu di depan kaca itu, kayak waktu kita masih pacaran. Mungkin langkah kita sudah pelan. Bagus juga, berarti aku bisa gandeng tanganmu lebih lama. Terus aku mau bisik, “Sayang,” cuma karena sampai setua itu pun aku masih pengin dengar kamu jawab, “Iya, sayang?”',
      'Sylvii, aku sayang banget sama kamu. Semoga kita diberi umur panjang buat saling menjaga, membangun keluarga yang bahagia, dan menikmati hari-hari biasa itu berdua. Semoga kita selalu bersama sampai ajal memisahkan kita. Kalau besok pagi ada cerita kecil lagi, kamu tetap orang pertama yang pengin aku kabari.',
      'Peluk jauh dulu ya, sayang.\nGesit'
    ].join('\n\n');
  }
  $('title').textContent=c.title; $('subtitle').textContent=c.subtitle;
  $('chapter-number').textContent='BAB '+two(state.chapter+1)+' / '+two(chapters.length);
  $('location').textContent=c.place; $('location').parentElement.hidden=state.mode==='end';
  $('ending').hidden=state.mode!=='end'; document.querySelector('.water-dust').hidden=c.scene!=='scene-0';
  $('line').textContent=text; $('speaker').textContent=who; $('voice').textContent=voice;
  $('dialogue').classList.toggle('letter',state.mode==='end');
  $('portrait').src=asset(who==='Sylvi'?'silvi':who==='Puput'?'puput':who==='Bayang Ragu'?'shadow':'gesit');
  $('portrait').alt='Potret '+who;
  $('page-count').textContent=state.mode==='fight'?'Kekuatan bayangan · '+state.enemyHP+' / 3':'Tujuan '+(state.step+1)+' / '+c.goals.length;
  document.querySelector('.controls').classList.toggle('in-dialog',!canWalk());
  document.querySelectorAll('.dpad button').forEach(b=>b.disabled=!canWalk());
  world.setAttribute('aria-label',c.place+'. '+text+' WASD atau panah untuk jalan, E untuk aksi.');
  actionUI(true); showHearts(); chapterMenu(); setSoundButton(); syncMusic(); save(); dirty=true;
}
const isPerson = g => g.icon === 'sylvi' || g.icon === 'puput';
function talkNow() {
  clearInput(); state.mode='talk';state.line=0;
  if(isPerson(objective()))state.face=state.x<=objective().x?'right':'left';
  chime([523,659]);render();
}
function act() {
  if($('journal').open || document.hidden)return;
  const g=objective();
  if(state.mode==='walk'){
    if(distance(state,g)>usableRange)return;
    if(g.icon!=='shadow'){talkNow();return;}
    state.mode='fight';state.enemyHP=3;initScene();chime([349,294]);render();return;
  }
  if(state.mode==='fight'){
    if(attackLock>0)return;
    const hit=distance(state,enemy)<=calmRange;
    pulse={x:state.x,y:state.y,age:0,hit};attackLock=.47;dirty=true;
    if(!hit){chime([392]);return;}
    state.enemyHP--;
    if(state.enemyHP===0){talkNow();return;}
    const sign=enemy.x>=state.x?1:-1;
    enemy.x=clamp(enemy.x+sign*38,15,545);grace=.38;
    chime([523,698]);render();return;
  }
  if(state.mode==='rest'){
    state.mode='fight';state.hearts=3;state.enemyHP=3;initScene();render();return;
  }
  if(state.mode==='end'){goTo(0);return;}
  if(state.line+1<g.lines.length){
    const previousCue=musicCue();
    state.line++;
    if(weddingKiss())kissTime=0;
    if(previousCue===musicCue())chime([587]);
    render();return;
  }
  if(state.step+1<chapter().goals.length){
    state.step++;state.line=0;state.mode='walk';initScene();render();return;
  }
  if(state.chapter===chapters.length-1){
    state.mode='end';state.finished=true;state.x=265;state.y=153;state.face='right';
    render();return;
  }
  goTo(state.chapter+1);
}
function movePlayer(dt) {
  let dx=0,dy=0;
  for(const dir of new Set([...Array.from(keys,key=>keyDirections[key]),...pointers.values()])){
    if(dir==='left')dx--;if(dir==='right')dx++;if(dir==='up')dy--;if(dir==='down')dy++;
  }
  let remaining=Infinity;
  if(dx||dy)destination=null;
  else if(destination){dx=destination.x-state.x;dy=destination.y-state.y;remaining=Math.hypot(dx,dy);}
  const length=Math.hypot(dx,dy),step=Math.min(remaining,walkingSpeed*dt);
  const lastX=state.x,lastY=state.y;
  if(length>.01){
    state.x=clamp(state.x+dx/length*step,13,547);
    state.y=clamp(state.y+dy/length*step,chapter().floor,204);
    state.face=Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'front':'back');
  }
  const travel=distance(state,{x:lastX,y:lastY});
  walking=travel>.015;
  if(walking){
    stride+=travel;dirty=true;moved=true;pendingSave+=dt;
    if(pendingSave>=1){save();pendingSave=0;}
  }else if(moved){save();moved=false;pendingSave=0;dirty=true;}
  if(destination && remaining<=step+.1){
    const interact=destination.interact;destination=null;walking=false;
    if(interact && state.mode==='walk'){act();return;}
  }
  if(objective().escort && companion){
    const dx=state.x-companion.x,dy=state.y-companion.y,d=Math.hypot(dx,dy);
    if(d>19){const amount=Math.min(d-19,walkingSpeed*dt*1.12);companion.x+=dx/d*amount;companion.y+=dy/d*amount;dirty=true;}
  }
  actionUI();
}
function updateFight(dt) {
  attackLock=Math.max(0,attackLock-dt);grace=Math.max(0,grace-dt);
  const dx=state.x-enemy.x,dy=state.y-enemy.y,d=Math.hypot(dx,dy);
  if(d>1){
    const s=Math.min(d,chapter().enemySpeed*dt);
    enemy.x+=dx/d*s;enemy.y+=dy/d*s;
  }
  if(d<13 && grace===0){
    state.hearts--;grace=1.35;
    enemy.x=clamp(state.x+(state.x<280?52:-52),15,545);
    chime([311,233]);
    if(!state.hearts){state.mode='rest';clearInput();}
    render();
  }
  dirty=true;
}
function resize() {
  const box=world.getBoundingClientRect();
  world.width=clamp(Math.round(212*box.width/Math.max(1,box.height)),150,560);
  world.height=212;ctx.imageSmoothingEnabled=false;dirty=true;
}
function bitmap(name,x,y,w,h) {
  const img=imageFor(name);
  if(img.complete && img.naturalWidth)ctx.drawImage(img,Math.round(x),Math.round(y),w,h);
}
function shadow(x,y,r) {
  ctx.fillStyle='rgba(41,39,58,.28)';ctx.beginPath();ctx.ellipse(x,y,r,3,0,0,Math.PI*2);ctx.fill();
}
function character(x,y,row,face,frame) {
  const sheet=imageFor('walk');if(!sheet.complete||!sheet.naturalWidth)return;
  const h=Math.round(43+(y-148)*.14), w=Math.round(h*24/38);
  shadow(x,y-1,w*.36);
  ctx.save();ctx.translate(Math.round(x),Math.round(y));
  if(face==='left')ctx.scale(-1,1);
  ctx.drawImage(sheet,frame*24,row*38,24,38,-Math.round(w/2),-h,w,h);ctx.restore();
  return h;
}
function marker(x,y,close) {
  const bx=Math.round(x-6),by=Math.round(y+Math.sin(clock*3)*1.5);
  ctx.fillStyle='#493d45';ctx.fillRect(bx-1,by-1,14,15);ctx.fillRect(bx+4,by+14,4,2);
  ctx.fillStyle=close?'#d5efd0':'#ffe7aa';ctx.fillRect(bx,by,12,13);ctx.fillRect(bx+5,by+13,2,2);
  ctx.fillStyle='#634950';ctx.fillRect(bx+5,by+2,2,6);ctx.fillRect(bx+5,by+9,2,2);
}
function drawWeddingKiss() {
  const [x,y]=chapter().sylvi;
  const sheet=imageFor('wedding-kiss');
  if(!sheet.complete || !sheet.naturalWidth)return;
  const still=state.mode==='end' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const approach=still?1:clamp(kissTime/.75,0,1);
  const gap=Math.round(32-12*approach);
  const left=x-16-gap, right=x-16;
  for(const [frame,dx] of [[0,left],[1,right]]){
    shadow(dx+16,y-1,9);
    ctx.drawImage(sheet,frame*28,0,28,40,dx,y-45,32,46);
  }
  if(approach===1){
    const rise=still?4:Math.min(8,Math.round((kissTime-.75)*8));
    bitmap('heart',right-1,y-56-rise,12,12);
  }
}
function paint() {
  const kissing=weddingKiss() || state.mode==='end';
  const focus=kissing?chapter().sylvi[0]-10:state.x;
  camera=clamp(Math.round(focus-world.width/2),0,560-world.width);
  ctx.save();ctx.clearRect(0,0,world.width,212);ctx.translate(-camera,0);
  bitmap(chapter().scene,0,0,560,212);
  const g=objective(), rows=[];
  const frame=walking ? [1,0,2,0][Math.floor(stride/5)%4] : 0;
  if(destination){
    ctx.strokeStyle='#fff2c9';ctx.strokeRect(Math.round(destination.x)-3,Math.round(destination.y)-1,6,2);
  }
  if(!kissing && companion)rows.push({y:companion.y,draw:()=>character(companion.x,companion.y,
    chapter().scarfRow ?? 5,companion.x>state.x?'left':'right',g.escort?frame:0)});
  if(chapter().puput){
    const [x,y]=chapter().puput;
    rows.push({y,draw:()=>character(x,y,7,x>state.x?'left':'right',0)});
  }
  const playerRow=(chapter().wedding?2:0)+(state.face==='back'?1:0);
  if(kissing)drawWeddingKiss();
  else rows.push({y:state.y,draw:()=>{
    if(state.mode==='fight' && grace>.5 && Math.floor(clock*9)%2)ctx.globalAlpha=.65;
    character(state.x,state.y,playerRow,state.face,frame);ctx.globalAlpha=1;
  }});
  if(state.mode==='fight' || (state.mode==='walk' && g.icon==='shadow')){
    const e=state.mode==='fight'?enemy:g;
    rows.push({y:e.y,draw:()=>{
      const y=e.y+Math.sin(clock*4)*2;
      shadow(e.x,e.y,10);bitmap('shadow',e.x-15,y-32,30,30);
      if(state.mode==='fight'){
        ctx.fillStyle='#493e50';ctx.fillRect(e.x-12,y-39,24,5);
        ctx.fillStyle='#e5a0ab';ctx.fillRect(e.x-11,y-38,Math.ceil(22*state.enemyHP/3),3);
      }
    }});
  }else if(state.mode==='walk' && !isPerson(g)){
    rows.push({y:g.y,draw:()=>{
      shadow(g.x,g.y,8);bitmap(g.icon,g.x-11,g.y-23+Math.sin(clock*3)*2,22,22);
    }});
  }
  rows.sort((a,b)=>a.y-b.y).forEach(item=>item.draw());
  if(state.mode==='walk'){
    marker(g.x,g.y-(isPerson(g)?64:g.icon==='shadow'?51:42),near);
    const px=g.x-camera;
    if(px<10 || px>world.width-10){
      const left=px<10, sign=left?-1:1, x=camera+(left?10:world.width-10);
      ctx.fillStyle='#493d45';ctx.fillRect(x-8,119,17,17);
      ctx.fillStyle='#ffe7aa';ctx.beginPath();ctx.moveTo(x+5*sign,127);ctx.lineTo(x-2*sign,121);ctx.lineTo(x-2*sign,133);ctx.fill();
    }
  }
  if(pulse){
    ctx.strokeStyle=pulse.hit?'#fff2b8':'#bddae2';ctx.lineWidth=2;ctx.globalAlpha=1-pulse.age/.36;
    ctx.beginPath();ctx.ellipse(pulse.x,pulse.y-8,4+pulse.age/.36*calmRange,4+pulse.age/.36*22,0,0,Math.PI*2);ctx.stroke();
    ctx.globalAlpha=1;ctx.lineWidth=1;
  }
  ctx.restore(); dirty=false;
}
function tick(time) {
  requestAnimationFrame(tick);
  if(document.hidden || !visible || $('journal').open){previousTime=0;return;}
  if(time-lastDraw<30)return;
  const dt=previousTime?Math.min((time-previousTime)/1000,.08):0;
  previousTime=time;lastDraw=time;clock+=dt;
  if(canWalk())movePlayer(dt);
  if(state.mode==='fight')updateFight(dt);
  if(weddingKiss() && kissTime<1.8){kissTime+=dt;dirty=true;}
  if(pulse){pulse.age+=dt;if(pulse.age>=.36)pulse=null;dirty=true;}
  if(dirty || state.mode==='walk')paint();
}


function openJournal() {
  const count = state.finished ? chapters.length : state.unlocked;
  $('journal-intro').textContent = count === 0 ? 'Kenangan pertama tersimpan setelah kamu menamatkan bab pertama.' : count + ' dari '+chapters.length+' kenangan sudah tersimpan.';
  $('journal-list').replaceChildren();
  chapters.forEach((chapter, i) => {
    const entry = document.createElement('article');
    const locked = i >= count;
    entry.className = 'entry' + (locked ? ' locked' : '');
    entry.innerHTML = '<img alt="" src="' + asset(locked ? 'lock' : chapter.icon) + '"><div><h3>' + chapter.title + '</h3><p>' +
      (locked ? 'Selesaikan bab ' + (i + 1) + ' untuk membuka kenangan.' : chapter.memory) + '</p></div>';
    $('journal-list').append(entry);
  });
  $('journal').showModal(); $('close-journal').focus(); chime([392, 523]);
}


$('next').addEventListener('click',act);
$('sound').addEventListener('click',()=>{state.sound=!state.sound;setSoundButton();save();activateMusic();});
for (const eventName of ['click','pointerup','keydown']) {
  document.addEventListener(eventName, activateMusic);
}
$('journal-tab').addEventListener('click',()=>{stopAndSave();openJournal();});
$('close-journal').addEventListener('click',()=>$('journal').close());
$('journal').addEventListener('click',event=>{
  const b=$('journal').getBoundingClientRect();
  if(event.target===$('journal') && (event.clientX<b.left || event.clientX>b.right || event.clientY<b.top || event.clientY>b.bottom))$('journal').close();
});
$('journal').addEventListener('close',()=>{previousTime=0;world.focus({preventScroll:true});});
$('game-tab').addEventListener('click',()=>{world.focus({preventScroll:true});world.scrollIntoView({block:'nearest'});});
const keyDirections={ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',ArrowUp:'up',KeyW:'up',ArrowDown:'down',KeyS:'down'};
document.addEventListener('keydown',event=>{
  if(event.altKey || event.ctrlKey || event.metaKey || $('journal').open)return;
  const dir=keyDirections[event.code];
  if(dir && canWalk()){
    event.preventDefault();keys.add(event.code);destination=null;return;
  }
  if(event.code==='KeyE' || (event.code==='Space' && !event.target.closest('button,a'))){
    event.preventDefault();if(!event.repeat)act();
  }
});
document.addEventListener('keyup',event=>keys.delete(event.code));
for(const button of document.querySelectorAll('.dpad button')){
  const release=event=>{
    pointers.delete(event.pointerId);
    button.classList.toggle('held',[...pointers.values()].includes(button.dataset.dir));
  };
  button.addEventListener('pointerdown',event=>{
    if(!canWalk() || event.button!==0)return;
    event.preventDefault();button.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId,button.dataset.dir);button.classList.add('held');
    destination=null;movePlayer(.035);paint();
  });
  for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);
  button.addEventListener('click',event=>{
    if(event.detail!==0 || !canWalk())return;
    pointers.set(-1,button.dataset.dir);movePlayer(.12);pointers.delete(-1);paint();
  });
  button.addEventListener('contextmenu',event=>event.preventDefault());
}
world.addEventListener('pointerdown',event=>{
  if(!canWalk() || event.button!==0)return;
  event.preventDefault();world.focus({preventScroll:true});
  const box=world.getBoundingClientRect(),g=objective();
  const x=camera+(event.clientX-box.left)*world.width/box.width;
  const y=(event.clientY-box.top)*212/box.height;
  if(state.mode==='fight' && Math.abs(x-enemy.x)<19 && y>=enemy.y-38 && y<=enemy.y+6){
    if(distance(state,enemy)<=calmRange){act();return;}
  }
  const interact=state.mode==='walk' && Math.abs(x-g.x)<=20 && y<=g.y+9 && y>=g.y-72;
  if(interact && distance(state,g)<=usableRange){act();return;}
  destination=interact ? {x:g.x+(state.x<g.x?-17:17),y:g.y,interact:true}
    : {x:clamp(x,13,547),y:clamp(y,chapter().floor,204),interact:false};
  dirty=true;
});
window.addEventListener('blur',stopAndSave);
window.addEventListener('pagehide',()=>{music.pause();stopAndSave();});
window.addEventListener('pageshow',syncMusic);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAndSave();syncMusic();});
new ResizeObserver(resize).observe(world);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)stopAndSave();else dirty=true;}).observe(world);
initScene();resize();render();requestAnimationFrame(tick);


