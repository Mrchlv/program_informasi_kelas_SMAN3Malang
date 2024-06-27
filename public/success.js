document.addEventListener('DOMContentLoaded', function() {
    // Database siswa (contoh data)
    const studentDatabase = [
        { nama: "ABYAN AHMAD AMAN", kode: "20751", kelas: "XI-A" },
        { nama: "ACHMAD ERWIN NUR SATRIA", kode: "20753", kelas: "XI-A" },
        { nama: "ALDINO DENDRA SATRIA PRAMAINKA PUTRA", kode: "20771", kelas: "XI-A" },
        { nama: "ALEANDRA RAMADHANI", kode: "20772", kelas: "XI-A" },
        { nama: "ANISAH ATAYA SHAFIRA", kode: "20786", kelas: "XI-A" },
        { nama: "ATHAYA MAULANA FAIZA", kode: "20801", kelas: "XI-A" },
        { nama: "BINTANG WAHYU HIDAYAT", kode: "20813", kelas: "XI-A" },
        { nama: "CALLYSTA AZ ZAHRA WAHYUDI", kode: "20819", kelas: "XI-A" },
        { nama: "DIMAS RAMADHAN LASWANTO", kode: "20842", kelas: "XI-A" },
        { nama: "EVELYN NAJWA KASIH ANANDA FANCY", kode: "20857", kelas: "XI-A" },
        { nama: "FARHA NAIMA ZAINI", kode: "20864", kelas: "XI-A" },
        { nama: "GABRYLI LOVELYA", kode: "20868", kelas: "XI-A" },
        { nama: "GRACE DESMALTA YURINANDA", kode: "20878", kelas: "XI-A" },
        { nama: "IFRA DANIN RAMADHANI", kode: "20890", kelas: "XI-A" },
        { nama: "JAUZA UDKHIA RAHMA", kode: "20898", kelas: "XI-A" },
        { nama: "JOVITA ARTIKA SUPRIYADI", kode: "20904", kelas: "XI-A" },
        { nama: "KARINIA AULIA HUSNA", kode: "20907", kelas: "XI-A" },
        { nama: "KAYANA SHABIRANIA", kode: "20910", kelas: "XI-A" },
        { nama: "KAYLA SANG PRAMESWARI", kode: "20912", kelas: "XI-A" },
        { nama: "KIANDRA ALKHALIEF ARI PUTRA", kode: "20924", kelas: "XI-A" },
        { nama: "LADO DAMBA ATAFANO", kode: "20926", kelas: "XI-A" },
        { nama: "MOCHAMMAD ZALDY PRASETYO", kode: "20948", kelas: "XI-A" },
        { nama: "MUHAMMAD FARREL BARA MAHENDRA", kode: "20959", kelas: "XI-A" },
        { nama: "MUHAMMAD RAFI ALLAM SALSABIL", kode: "20964", kelas: "XI-A" },
        { nama: "MUMTAZA HANUN BASIL", kode: "20969", kelas: "XI-A" },
        { nama: "NEIL AUTHAR ATANILAH", kode: "20995", kelas: "XI-A" },
        { nama: "NUR LINTANG KIRANA WASISTA", kode: "21001", kelas: "XI-A" },
        { nama: "OLAV PUTRA SETIAWAN", kode: "21003", kelas: "XI-A" },
        { nama: "RADITYA OMAR HANASTA", kode: "21014", kelas: "XI-A" },
        { nama: "RANA WIRDANUGRAHA", kode: "21024", kelas: "XI-A" },
        { nama: "SAMITA RARAS WINDRIA HADI", kode: "21043", kelas: "XI-A" },
        { nama: "SANDRA VIMALA SACCANI SUMARTO", kode: "21044", kelas: "XI-A" },
        { nama: "SAYLENDRA WICAKSONO", kode: "21047", kelas: "XI-A" },
        { nama: "YUSITA NUR ANNISA PUTRI", kode: "21087", kelas: "XI-A" },
        { nama: "ZASKIA FILZA ARINA ZULFA", kode: "21091", kelas: "XI-A" },
        { nama: "ZULHAM MIFTAHUL ARIFIN", kode: "21095", kelas: "XI-A" }
]
[
        { nama: "ADAM PUTRA AKBAR MARSOLI", kode: "20754", kelas: "XI-B" },
        { nama: "ADRIANO CHRISTHOPER ADAM MOVIC", kode: "20758", kelas: "XI-B" },
        { nama: "AINUN NAZAH HAQI PUTRA", kode: "20765", kelas: "XI-B" },
        { nama: "ALYA MAHARDIKA ARDININGRUM", kode: "20780", kelas: "XI-B" },
        { nama: "ANDIKA PUTRA WICAKSANA", kode: "20783", kelas: "XI-B" },
        { nama: "AZIZAH NUR SALMA", kode: "20809", kelas: "XI-B" },
        { nama: "FAHRI MUHAMMAD AZKA", kode: "20861", kelas: "XI-B" },
        { nama: "IFFAHATUL AFIQOH", kode: "20889", kelas: "XI-B" },
        { nama: "M HAKIM PUTRA PRASETYA", kode: "20933", kelas: "XI-B" },
        { nama: "MADELBERTO ALDO ELIYANO DHARE", kode: "20934", kelas: "XI-B" },
        { nama: "MOHAMMAD FEBRIANO ABIMANTARA", kode: "20950", kelas: "XI-B" },
        { nama: "MUHAMMAD BARACK OBAMA", kode: "20956", kelas: "XI-B" },
        { nama: "MUHAMMAD FARHAN SYABANIE", kode: "20958", kelas: "XI-B" },
        { nama: "MUHAMMAD IHSAN MUZAKKI", kode: "20961", kelas: "XI-B" },
        { nama: "MUHAMMAD RAYYAN YUDHANIAR", kode: "20965", kelas: "XI-B" },
        { nama: "NADYA SADDA ISLAMI", kode: "20975", kelas: "XI-B" },
        { nama: "NAJWA AALIYAH ADNIE ALFACHRUDIN", kode: "20981", kelas: "XI-B" },
        { nama: "NAJWA REYZHA ALMIRA", kode: "20982", kelas: "XI-B" },
        { nama: "NASYWA DESLUNA ZAKIAH", kode: "20985", kelas: "XI-B" },
        { nama: "NAVARRO AL FATHIR WIONANDA PUTRA", kode: "20988", kelas: "XI-B" },
        { nama: "NAZWA MAULIDYAH KUSUMANISYAH", kode: "20994", kelas: "XI-B" },
        { nama: "NOE NARAWANGSA SUHARYA", kode: "20999", kelas: "XI-B" },
        { nama: "POETRI AULYA SALMA", kode: "21006", kelas: "XI-B" },
        { nama: "RAFI AHNAF RAHMAPUTRA", kode: "21015", kelas: "XI-B" },
        { nama: "RAFI AKBAR", kode: "21016", kelas: "XI-B" },
        { nama: "RESNU RAFIF RAMADHAN", kode: "21027", kelas: "XI-B" },
        { nama: "SERAVIN GLORIA REGO", kode: "21048", kelas: "XI-B" },
        { nama: "STEVANUS RONALD FIRMANSYAH", kode: "21056", kelas: "XI-B" },
        { nama: "SUCI WARDANIYAH PRATIWI", kode: "21057", kelas: "XI-B" },
        { nama: "SULTAN ALVARO", kode: "21058", kelas: "XI-B" },
        { nama: "TIARA DWI APRILIA", kode: "21069", kelas: "XI-B" },
        { nama: "YATNAZENTARYA PAMELA", kode: "21085", kelas: "XI-B" },
        { nama: "YOEL CHRISTIAN SABATUDUNG", kode: "21086", kelas: "XI-B" },
        { nama: "ZERLINDA NAFISHA ARDANA", kode: "21094", kelas: "XI-B" }
]
[
        { nama: "AKSHANAELA INDIRA", kode: "20769", kelas: "XI-C" },
        { nama: "ALFIN EDY", kode: "21103", kelas: "XI-C" },
        { nama: "ANGGRAENI RISMAWA DZAKY", kode: "20785", kelas: "XI-C" },
        { nama: "ATHALIA FAUZIYAH GHAFFARI", kode: "20799", kelas: "XI-C" },
        { nama: "ATHALLAH MUHAMMAD VARREL ALVYN HAZEL PRAWIRA", kode: "20800", kelas: "XI-C" },
        { nama: "AURYN WENDYTHA ARDYANINGRUM", kode: "20806", kelas: "XI-C" },
        { nama: "BUNGA APRILIA ANANDA PUTRI", kode: "20816", kelas: "XI-C" },
        { nama: "CHERISHA NABILLA PUTRI", kode: "20823", kelas: "XI-C" },
        { nama: "DAVINA RAHMADANI P F", kode: "20836", kelas: "XI-C" },
        { nama: "DENZEL ATILLA FIRMAN", kode: "20837", kelas: "XI-C" },
        { nama: "DZAKY SAKTI WIBAWA", kode: "20850", kelas: "XI-C" },
        { nama: "FELISIA FISSYARI SELIA SANKA", kode: "20866", kelas: "XI-C" },
        { nama: "GABRIEL EDIK", kode: "21104", kelas: "XI-C" },
        { nama: "GAJENDRA BIMA PRADITYA", kode: "20869", kelas: "XI-C" },
        { nama: "GANENDRA SATRIO WICAKSANA", kode: "20870", kelas: "XI-C" },
        { nama: "GIAN AJI PUTRO PRAMUDYO", kode: "20875", kelas: "XI-C" },
        { nama: "HANIN KENAZ ALFARREL", kode: "20884", kelas: "XI-C" },
        { nama: "IKE WIDIYAH NINGSIH", kode: "20891", kelas: "XI-C" },
        { nama: "KAYANA ANEIRA PUTRI CANIA", kode: "20909", kelas: "XI-C" },
        { nama: "KRISTA MURIA ANDRIANA GUNARSO", kode: "20925", kelas: "XI-C" },
        { nama: "LAURA ALMIRA MANHA IFRA KURNIAWAN", kode: "20928", kelas: "XI-C" },
        { nama: "LYONEL RADITYA PRATAMA", kode: "20932", kelas: "XI-C" },
        { nama: "MADRIDSTA MAULIDA SAFA", kode: "20935", kelas: "XI-C" },
        { nama: "MARVEL AYENDRA SASONO", kode: "20937", kelas: "XI-C" },
        { nama: "MOHAMMAD FAKHRI RAHMAN HAFIZH", kode: "20949", kelas: "XI-C" },
        { nama: "MUHAMMAD AQUYLA RAFIKY", kode: "20955", kelas: "XI-C" },
        { nama: "MUHAMMAD REZA LUTHFIYANTO", kode: "20966", kelas: "XI-C" },
        { nama: "MUHAMMAD ZAVIER RASYAD ALFAITH", kode: "20968", kelas: "XI-C" },
        { nama: "ODWILLA FIRENZE LAKE", kode: "21002", kelas: "XI-C" },
        { nama: "QEYLA JULIANA BASTIAN", kode: "21010", kelas: "XI-C" },
        { nama: "RAFIE AHMAD JUNAIDI", kode: "21017", kelas: "XI-C" },
        { nama: "RIZKE ANGGIA RAMADHANI", kode: "21032", kelas: "XI-C" },
        { nama: "SAFIRA DAMAYANTI", kode: "21036", kelas: "XI-C" },
        { nama: "SHIMA AULIA RAMADHANI HERMAWAN", kode: "21054", kelas: "XI-C" },
        { nama: "TALITA RAHMA KAMILA", kode: "21064", kelas: "XI-C" },
        { nama: "ZAKI DZULFIKAR SANCHIA PRAKASA", kode: "21090", kelas: "XI-C" }
]
[        
        { nama: "ALBERTHIO ADHITYA WARDHANA", kode: "20770", kelas: "XI-D" },
        { nama: "ANAK AGUNG ISTRI ANJANI SARASWATI ANOM PUTRI", kode: "20782", kelas: "XI-D" },
        { nama: "AURELLIA SABRINA HADI SAPUTRI", kode: "20805", kelas: "XI-D" },
        { nama: "BULAN AISYAH SAJIDAH HARIONO", kode: "20815", kelas: "XI-D" },
        { nama: "CICILLIA ELEN PRASETYA", kode: "20825", kelas: "XI-D" },
        { nama: "CYALISTA ABIR PUTRI SURYANINGRAT", kode: "20829", kelas: "XI-D" },
        { nama: "CYNARA HARSYA ADINATA", kode: "20830", kelas: "XI-D" },
        { nama: "DAFIQ AL-A'LA", kode: "20832", kelas: "XI-D" },
        { nama: "DAVINA APPLE SANYOTO", kode: "20835", kelas: "XI-D" },
        { nama: "DIAMANTA GALVIN MUHAMMAD ILMAN SAM", kode: "20840", kelas: "XI-D" },
        { nama: "DISTIA RAHMA SARI DISY AGSE", kode: "20845", kelas: "XI-D" },
        { nama: "EVERETT ANLIKA A TOERSENO", kode: "20858", kelas: "XI-D" },
        { nama: "GANES DANASTRI PRATISTA AURA AFRA", kode: "20871", kelas: "XI-D" },
        { nama: "GREAT ATHALLA MAULANA", kode: "20879", kelas: "XI-D" },
        { nama: "INERICHA CAHYA SENA", kode: "20894", kelas: "XI-D" },
        { nama: "JASMINE ALIFIA PUTRI AYUNDA", kode: "20897", kelas: "XI-D" },
        { nama: "KEISYA PRADJNA NOVANDOPUTRI", kode: "20916", kelas: "XI-D" },
        { nama: "KEYSHA PUTERI KURNIAWAN", kode: "20921", kelas: "XI-D" },
        { nama: "MAIDA ATHAYA DAMAYANTI", kode: "20936", kelas: "XI-D" },
        { nama: "NADHIRA AGHNI FADHILA", kode: "20972", kelas: "XI-D" },
        { nama: "NAFILA AULIYA NUR AZIZA", kode: "20977", kelas: "XI-D" },
        { nama: "NAYLA AZZAHRA AMALIA", kode: "20989", kelas: "XI-D" },
        { nama: "NICHOLAS ARDAN DARMONO", kode: "20997", kelas: "XI-D" },
        { nama: "OXY AYU TUHU PUTRI", kode: "21005", kelas: "XI-D" },
        { nama: "PURWA BRAWIJAYA", kode: "21007", kelas: "XI-D" },
        { nama: "RASSYA ADITYA RIDWAN", kode: "21025", kelas: "XI-D" },
        { nama: "SABRINA YEIRA ARISANDRA", kode: "21035", kelas: "XI-D" },
        { nama: "SALWA", kode: "21041", kelas: "XI-D" },
        { nama: "SALWA KAYLA RAMADHANI", kode: "21042", kelas: "XI-D" },
        { nama: "SHAFEERA MERYANNISA", kode: "21049", kelas: "XI-D" },
        { nama: "SYAFINATU AISYA", kode: "21061", kelas: "XI-D" },
        { nama: "SYAFIRA DINA AMELIA", kode: "21062", kelas: "XI-D" },
        { nama: "TALITA ZALFA RAMADHANI", kode: "21065", kelas: "XI-D" },
        { nama: "WIDYADHARI ANARGYA SAKSONO", kode: "21081", kelas: "XI-D" }
]
[
        { nama: "AILSA PURI SALASHIKA", kode: "20764", kelas: "XI-E" },
        { nama: "AISYIYAH KIARA AZ ZAHRAWANI KANAYA", kode: "20768", kelas: "XI-E" },
        { nama: "ALESSANDRA NESYA RIEVALINA AZ ZAHRA", kode: "20774", kelas: "XI-E" },
        { nama: "ANNISA DANISH HAMIDA", kode: "20787", kelas: "XI-E" },
        { nama: "ANYA RAJWA PARAMITA", kode: "20790", kelas: "XI-E" },
        { nama: "ASHA PUTERI APRILIA", kode: "20796", kelas: "XI-E" },
        { nama: "AZZA ARRAFI AQSHA KAMILA", kode: "20810", kelas: "XI-E" },
        { nama: "CHALYA BENING PANINGAL", kode: "20822", kelas: "XI-E" },
        { nama: "CLARISTA ALMIRAH SANTOSA", kode: "20828", kelas: "XI-E" },
        { nama: "DANIEL FELIX CHRISHERJUNANTO", kode: "20834", kelas: "XI-E" },
        { nama: "DIANDRA ALMEIRA HADI PRAMESTI", kode: "20841", kelas: "XI-E" },
        { nama: "DIRGA PANJI PUTERA WARDHANA", kode: "20844", kelas: "XI-E" },
        { nama: "FADEY EZRA KAMAZAKI MAHENDRA PUTRA", kode: "20860", kelas: "XI-E" },
        { nama: "GHANIA NAZAHA NOER HIDAYAH", kode: "20873", kelas: "XI-E" },
        { nama: "HARUM AMORITA AZZAH", kode: "20885", kelas: "XI-E" },
        { nama: "JIHAN AYUDYAH MUTIARASARI", kode: "20902", kelas: "XI-E" },
        { nama: "KAINDRA VERRELL JUVENEIRO SOEYONO", kode: "20905", kelas: "XI-E" },
        { nama: "KANAYA EVITA AZALIA", kode: "20906", kelas: "XI-E" },
        { nama: "KAYLA AYU RAMADHANI", kode: "20911", kelas: "XI-E" },
        { nama: "KEN BARRU APTA GREATUTEURA", kode: "20918", kelas: "XI-E" },
        { nama: "KEYLA CLAUDIA WIBOWO", kode: "20920", kelas: "XI-E" },
        { nama: "MAULIDYA KHOIRUN NISA", kode: "20938", kelas: "XI-E" },
        { nama: "NADINE ARDITA NARESWARI", kode: "20973", kelas: "XI-E" },
        { nama: "NAEN KEISYA AERUNEVIA", kode: "20976", kelas: "XI-E" },
        { nama: "NAMIRA PUTRI SENOVA", kode: "20983", kelas: "XI-E" },
        { nama: "PUTRI MAYLAFAIZA HUSADA", kode: "21009", kelas: "XI-E" },
        { nama: "QUEENA TASYA MICHAILA", kode: "21011", kelas: "XI-E" },
        { nama: "RAKHSANDA MAIARA", kode: "21023", kelas: "XI-E" },
        { nama: "REVALINA SHAFA AZZAHRAH", kode: "21028", kelas: "XI-E" },
        { nama: "RIFAT FADHILLAH", kode: "21031", kelas: "XI-E" },
        { nama: "RIZKY AMELIA PUTRI", kode: "21033", kelas: "XI-E" },
        { nama: "SALSABILA DHIA RAHMA DZUHNIYYAH", kode: "21040", kelas: "XI-E" },
        { nama: "SHANA LIENOOR KENAR KAYANA", kode: "21051", kelas: "XI-E" },
        { nama: "SULTHONY MUNIB", kode: "21059", kelas: "XI-E" },
        { nama: "SYIFA IZZA SANTOSO", kode: "21063", kelas: "XI-E" },
        { nama: "VASHTI RAMADHANTI RIZANI", kode: "21076", kelas: "XI-E" }
]
[
        { nama: "ADITYA DWI IRAWAN", kode: "20757", kelas: "XI-F" },
        { nama: "AHMAD FADHILAH SAPUTRA", kode: "20760", kelas: "XI-F" },
        { nama: "AISYAH MAGHFIROH", kode: "20766", kelas: "XI-F" },
        { nama: "ALTHAF MUHAMMAD ATHARAUF", kode: "20777", kelas: "XI-F" },
        { nama: "ANUGRAH GHAZIAN ZHAFIRI", kode: "20789", kelas: "XI-F" },
        { nama: "BRAMANTYA AKBAR DEWANTO", kode: "20814", kelas: "XI-F" },
        { nama: "CHERYL NABILA NASHIFA", kode: "20824", kelas: "XI-F" },
        { nama: "DANA WISTARA", kode: "20833", kelas: "XI-F" },
        { nama: "FAIZAH KHANSA NABILAH", kode: "20862", kelas: "XI-F" },
        { nama: "GHANIYYAH AULIA ZAHRAH HERDIANTI", kode: "20874", kelas: "XI-F" },
        { nama: "GITA KHAIRINA FEBRIAN", kode: "20877", kelas: "XI-F" },
        { nama: "GUSTI MARYAM HAMIDAH", kode: "20881", kelas: "XI-F" },
        { nama: "HALWA SYARAFANA", kode: "20883", kelas: "XI-F" },
        { nama: "KHIRANNIE ALIKHA ANANDA SUSILO", kode: "20923", kelas: "XI-F" },
        { nama: "LAILA RAHMADANI", kode: "20927", kelas: "XI-F" },
        { nama: "MEUTIA RAHMA SAFIRA", kode: "20940", kelas: "XI-F" },
        { nama: "MILDAN ARRIVO RISWANDI", kode: "20943", kelas: "XI-F" },
        { nama: "MUH DHIKA ANUGERAH RACHMAN", kode: "20952", kelas: "XI-F" },
        { nama: "MUHAMMAD FIKRI ATHALA NASRULLAH", kode: "20960", kelas: "XI-F" },
        { nama: "MUHAMMAD PUTRA RAMADHAN", kode: "20963", kelas: "XI-F" },
        { nama: "NAYLA DANIA RAHMA", kode: "20990", kelas: "XI-F" },
        { nama: "NAYLA MEYLAND FADHILAH", kode: "20991", kelas: "XI-F" },
        { nama: "NAZAFA PUTRI CAHAYA PRAMASTUTI", kode: "20993", kelas: "XI-F" },
        { nama: "RACHMAD EVAN SETIAWAN", kode: "21012", kelas: "XI-F" },
        { nama: "RAHMA PUTRI RAHAYU", kode: "21020", kelas: "XI-F" },
        { nama: "SAKA LANGIT SATUDUA", kode: "21038", kelas: "XI-F" },
        { nama: "SURYANTI DWI ANGGRAINI", kode: "21060", kelas: "XI-F" },
        { nama: "TANAYA TSAQOFA ALAENA", kode: "21067", kelas: "XI-F" },
        { nama: "TIARA PERMATASARI", kode: "21070", kelas: "XI-F" },
        { nama: "VANIA CALISTA DEWI AKRIANTO", kode: "21074", kelas: "XI-F" },
        { nama: "WIDIAWATI RIZKY DWI SEPTIANO", kode: "21080", kelas: "XI-F" },
        { nama: "WISNU GAYUH WISESA", kode: "21082", kelas: "XI-F" },
        { nama: "ZAHRA AL KAILA", kode: "21088", kelas: "XI-F" },
        { nama: "ZEFANYA EDENIA PRASETYO", kode: "21092", kelas: "XI-F" }
]
[
        { nama: "ACHMAD ARBIANSYAH", kode: "20752", kelas: "XI-G" },
        { nama: "ADDEGA KUSMARA AZOVA", kode: "20755", kelas: "XI-G" },
        { nama: "APTA SUJANA", kode: "20791", kelas: "XI-G" },
        { nama: "ARIF SYAIFULLAH", kode: "20794", kelas: "XI-G" },
        { nama: "ATHA NAFI RYANKA", kode: "20798", kelas: "XI-G" },
        { nama: "AZARIA MAYZUN PRAYITNO", kode: "20808", kelas: "XI-G" },
        { nama: "BAGAS YUDHA PRAKASA", kode: "20811", kelas: "XI-G" },
        { nama: "CIELSY JULIA BINTARO", kode: "20826", kelas: "XI-G" },
        { nama: "DAFFA AZRIL FIRMANSYAH", kode: "20831", kelas: "XI-G" },
        { nama: "DHEWA ARNO PRAYOGA", kode: "20839", kelas: "XI-G" },
        { nama: "DITO WILDAN ADI PRATAMA", kode: "20846", kelas: "XI-G" },
        { nama: "EGHA RAMA PRAKASA", kode: "20852", kelas: "XI-G" },
        { nama: "ELVARETTA SYANDANA AGUNG", kode: "20854", kelas: "XI-G" },
        { nama: "ENGGAR AYU LESTARI WILUJENG", kode: "20855", kelas: "XI-G" },
        { nama: "FABIANO AGIL IZA WIJAYA", kode: "20859", kelas: "XI-G" },
        { nama: "GERALDINE GRACE NATALIE", kode: "20872", kelas: "XI-G" },
        { nama: "GILANG WIRAHADI WASITO", kode: "20876", kelas: "XI-G" },
        { nama: "GUSTI QAULAN TSAQIILA", kode: "20882", kelas: "XI-G" },
        { nama: "HASMO AUFARYAN AKMAL", kode: "20886", kelas: "XI-G" },
        { nama: "HERDWINTA TITIS ANGGITAMA", kode: "20887", kelas: "XI-G" },
        { nama: "IKHTIARTI RISQIA SYARIFAH", kode: "20892", kelas: "XI-G" },
        { nama: "JEEHAN AURA FEBRIANA", kode: "20899", kelas: "XI-G" },
        { nama: "KATHERINE ZEFANYA", kode: "20908", kelas: "XI-G" },
        { nama: "KEISYA KAMILA PUTRI ISLAMI", kode: "20915", kelas: "XI-G" },
        { nama: "KEN SYIR ALI", kode: "20919", kelas: "XI-G" },
        { nama: "MAZIA AFKARINA I", kode: "20939", kelas: "XI-G" },
        { nama: "MOCHAMAD FERNALDY SAMPURNO", kode: "20945", kelas: "XI-G" },
        { nama: "NABIL ZAYYAN FAIQ", kode: "20970", kelas: "XI-G" },
        { nama: "NARYAMA DANISH RABBANI", kode: "20984", kelas: "XI-G" },
        { nama: "RADHEASYNTA FAURIEN AURELLIA HIDAYAT", kode: "21013", kelas: "XI-G" },
        { nama: "RAFIKHA PUTRI RAMADHANI", kode: "21018", kelas: "XI-G" },
        { nama: "TIARA WILDAN KAMIL", kode: "21071", kelas: "XI-G" },
        { nama: "UKE NOVITA ANGGRAENI", kode: "21073", kelas: "XI-G" },
        { nama: "WYKE AMELYA PRASTICA SARI", kode: "21083", kelas: "XI-G" }
]
[
        { nama: "AHMAD GHANI AL BANJARI", kode: "20762", kelas: "XI-H" },
        { nama: "ALEENA LEVANDA PUTRI", kode: "20773", kelas: "XI-H" },
        { nama: "ALVIN TIO EVANA", kode: "20778", kelas: "XI-H" },
        { nama: "ARADEA YULISTA RAMADHANI", kode: "20792", kelas: "XI-H" },
        { nama: "AULIYAA HANIFA RAMADHANI", kode: "20803", kelas: "XI-H" },
        { nama: "AURA CINTA EDITYA", kode: "20804", kelas: "XI-H" },
        { nama: "DIO RIZKY WAHYU ANANDA", kode: "20843", kelas: "XI-H" },
        { nama: "EDNIE SHENDYA EYLINIE", kode: "20851", kelas: "XI-H" },
        { nama: "ELLENE SORA MICHELLE", kode: "20853", kelas: "XI-H" },
        { nama: "FALAH RIZKI WIRATAMA ATMAJA", kode: "20863", kelas: "XI-H" },
        { nama: "FARHAN", kode: "20865", kelas: "XI-H" },
        { nama: "FIORENZA MALYA CALLYSTA AZALEA", kode: "20867", kelas: "XI-H" },
        { nama: "ILHAM REZA RIFANSYAH", kode: "20893", kelas: "XI-H" },
        { nama: "JESIKA JUNAISHE IDELINA YUKA", kode: "20900", kelas: "XI-H" },
        { nama: "KAYSA MUMTAZ TSABITA MAHRUS", kode: "20913", kelas: "XI-H" },
        { nama: "KEANDRE WAHYU MAHARDIKA", kode: "20914", kelas: "XI-H" },
        { nama: "MUHAMAD FIRLI BIRANO WIJAYA", kode: "20953", kelas: "XI-H" },
        { nama: "NACHELLE NAVINA CANDRA WIBOWO", kode: "20971", kelas: "XI-H" },
        { nama: "NAIFA SARASWATI KAYANA", kode: "20978", kelas: "XI-H" },
        { nama: "NATASYA HILDA ISWANDA", kode: "20986", kelas: "XI-H" },
        { nama: "NATHAN ATHALLAH KOWIMBIN", kode: "20987", kelas: "XI-H" },
        { nama: "NAYSILA ANAISHA DEWI RUSYDA", kode: "20992", kelas: "XI-H" },
        { nama: "NEVIONIDYA JOSEFIN", kode: "20996", kelas: "XI-H" },
        { nama: "OLLA RHEA IGNATHEA", kode: "21004", kelas: "XI-H" },
        { nama: "RICO MUHAMMAD AXEL DARMABAKTI KAINGRAS", kode: "21030", kelas: "XI-H" },
        { nama: "SATRYO BAGUS PAMUNGKAS", kode: "21046", kelas: "XI-H" },
        { nama: "SHAFIRA ALFA NURILLAH ARIDHA", kode: "21050", kelas: "XI-H" },
        { nama: "SHEREN RAFASYA", kode: "21053", kelas: "XI-H" },
        { nama: "TSABITAH NURUL AIMEE", kode: "21072", kelas: "XI-H" },
        { nama: "VARELL NADHIF SUSETYAWAN", kode: "21075", kelas: "XI-H" },
        { nama: "VELLYSA APRILIA PUTRI", kode: "21077", kelas: "XI-H" },
        { nama: "VINO ARISTA FIRMANDA", kode: "21079", kelas: "XI-H" },
        { nama: "ZAHRA NUR EVITA SARI", kode: "21089", kelas: "XI-H" }
]
[
        { nama: "ABDIEL GAYNEL GYOVANIAWAN", kode: "20750", kelas: "XI-I" },
        { nama: "AISYAH REGINA BALQIS", kode: "20767", kelas: "XI-I" },
        { nama: "ALIF ALFINO PAHLEVI", kode: "20775", kelas: "XI-I" },
        { nama: "ALYA ADINDA FITRI", kode: "20779", kelas: "XI-I" },
        { nama: "ANGGI JIAN NOVITA", kode: "20784", kelas: "XI-I" },
        { nama: "ANNISA RAMADHANI", kode: "20788", kelas: "XI-I" },
        { nama: "ATTALLA IBRAHIM", kode: "20802", kelas: "XI-I" },
        { nama: "BINTANG SYAH REZA", kode: "20812", kelas: "XI-I" },
        { nama: "CATTLEYA HAPSARI PINILIH", kode: "20820", kelas: "XI-I" },
        { nama: "CETTA NARESWARI RACHMAT", kode: "20821", kelas: "XI-I" },
        { nama: "DYTA ASTERINA DEVINA", kode: "20849", kelas: "XI-I" },
        { nama: "JALU SETA ABID ADIWANGSA", kode: "20896", kelas: "XI-I" },
        { nama: "JIHAN ALFIANI RAHMASARI", kode: "20901", kelas: "XI-I" },
        { nama: "KEISYA SALSABILLA AGUSTIN", kode: "20917", kelas: "XI-I" },
        { nama: "LINTANG EGIA NAILA ABIYYU NISA", kode: "20930", kelas: "XI-I" },
        { nama: "MIKAEL DAVID CRISTIANO NUNO SETYAWAN", kode: "20942", kelas: "XI-I" },
        { nama: "MIRACLELLY WIJAYANTY", kode: "20944", kelas: "XI-I" },
        { nama: "MOCHAMAD YUSUF DANENDRA", kode: "20946", kelas: "XI-I" },
        { nama: "MOCHAMMAD NASRULLAH", kode: "20947", kelas: "XI-I" },
        { nama: "MUHAMMAD ALTHAF RAIS ABDILLAH", kode: "20954", kelas: "XI-I" },
        { nama: "MUHAMMAD BIMA RACHMANTYA", kode: "20957", kelas: "XI-I" },
        { nama: "MUHAMMAD NABIL RAHMATULLAH", kode: "20962", kelas: "XI-I" },
        { nama: "MUHAMMAD SALMAN AL FARIZI", kode: "20967", kelas: "XI-I" },
        { nama: "NADINE CHANDRA KIRANA", kode: "20974", kelas: "XI-I" },
        { nama: "NIZAL SUPRATMAN", kode: "20998", kelas: "XI-I" },
        { nama: "RAHIDAH NAJWA KHAIRUNNISA", kode: "21019", kelas: "XI-I" },
        { nama: "RAIHAN ADIWITYA EVAN PRASETYA", kode: "21021", kelas: "XI-I" },
        { nama: "RAVIANSYAH SATRIA DWITAMA", kode: "21026", kelas: "XI-I" },
        { nama: "SAHASYIKA AURA ANASTASYA", kode: "21037", kelas: "XI-I" },
        { nama: "SALMA NUR FADILLAH", kode: "21039", kelas: "XI-I" },
        { nama: "SHARIFA NISWA KURNIAWAN", kode: "21052", kelas: "XI-I" },
        { nama: "SRI TANAHASALI ACHMAD", kode: "21055", kelas: "XI-I" },
        { nama: "TIARA AYSHA AL KAYYAS", kode: "21068", kelas: "XI-I" }
]
[
    { nama: "ADINDA RISQII RAHMANIA", kode: "20756", kelas: "XI-J" },
    { nama: "AFDHOL RIZKI", kode: "20759", kelas: "XI-J" },
    { nama: "AHMAD FAISHAL ZUFARULLAH PRATAMA", kode: "20761", kelas: "XI-J" },
    { nama: "AI MEY SRIMUJIESTY PUTRY", kode: "20763", kelas: "XI-J" },
    { nama: "AL-MAAYRA SADYRA FATHIH", kode: "20776", kelas: "XI-J" },
    { nama: "AMEERA SHAFWA EQEILLA MONTESKY", kode: "20781", kelas: "XI-J" },
    { nama: "ARGYA PADMA PRAMESWARI", kode: "20793", kelas: "XI-J" },
    { nama: "ARTIE LAURENZI ASSAMI", kode: "20795", kelas: "XI-J" },
    { nama: "ASSYIFA SOFIE NUR ISLAMI", kode: "20797", kelas: "XI-J" },
    { nama: "AYU FEBRIYANI ASIYAH", kode: "20807", kelas: "XI-J" },
    { nama: "BUNGA MEILV ASTLY ANANTA", kode: "20817", kelas: "XI-J" },
    { nama: "CALLISTA AZZAHRA", kode: "20818", kelas: "XI-J" },
    { nama: "CINTA AYUDIA RIZKY", kode: "20827", kelas: "XI-J" },
    { nama: "DEWANGGA GIFARA KRISNA HADI", kode: "20838", kelas: "XI-J" },
    { nama: "DONITA YEMIMA KASIH", kode: "20847", kelas: "XI-J" },
    { nama: "DUHITA LITUHAYU CALYA BALINDRA", kode: "20848", kelas: "XI-J" },
    { nama: "ERWINDRA BIMA BHASKARA", kode: "20856", kelas: "XI-J" },
    { nama: "GRISELDA FREYA SYAHPUTERI WIJAYA", kode: "20880", kelas: "XI-J" },
    { nama: "HILLARY FERRENCHIA FRANS", kode: "20888", kelas: "XI-J" },
    { nama: "IRFANDI NAUFAL", kode: "20895", kelas: "XI-J" },
    { nama: "JINGGA NAURELL ARYA RAISA NADINE", kode: "20903", kelas: "XI-J" },
    { nama: "KHEISYA AULIA SETYAWAN", kode: "20922", kelas: "XI-J" },
    { nama: "LIDYA NURULLAILY HIDAYAT", kode: "20929", kelas: "XI-J" },
    { nama: "LUVENA ANINDYA PUTRI MARSUDI", kode: "20931", kelas: "XI-J" },
    { nama: "MICHELE KENZO WIJAYA", kode: "20941", kelas: "XI-J" },
    { nama: "NAILA KIFAH HERMAWAN", kode: "20979", kelas: "XI-J" },
    { nama: "NAJLA ADHWA SUHARDI", kode: "20980", kelas: "XI-J" },
    { nama: "NORIN FIBRI YOLA", kode: "21000", kelas: "XI-J" },
    { nama: "PUTRI ANISAA MUSTIKANING WIDI", kode: "21008", kelas: "XI-J" },
    { nama: "REVANIA KHUMAIROH WIJAYANTI", kode: "21029", kelas: "XI-J" },
    { nama: "RIZZA HIBBAN MUSYAFFA", kode: "21034", kelas: "XI-J" },
    { nama: "SATRIA PAKSI HARIYONO", kode: "21045", kelas: "XI-J" },
    { nama: "TALITHA KINAN ALIFYA", kode: "21066", kelas: "XI-J" },
    { nama: "VIERA AMANDA KARUNIA PUTRI", kode: "21078", kelas: "XI-J" },
    { nama: "WELDI RAINALD BASA BOLEN", kode: "21105", kelas: "XI-J" },
    { nama: "ZENDA IQBAL NARESWARA", kode: "21093", kelas: "XI-J" }
];
  
  // Mendapatkan data siswa dari local storage
  const studentCode = localStorage.getItem('studentCode');
  const studentName = localStorage.getItem('studentName');

  // Validasi data siswa
  const validatedStudent = studentDatabase.find(student => {
    return student.nama === studentName && student.kode === studentCode;
  });

  // Jika siswa valid, tampilkan pesan sukses
  if (validatedStudent) {
    const successMessage = document.getElementById('success-message');
    const classAssignment = validatedStudent.kelas; // Kelas siswa dari database
    let chosenSubjects;

    // Menentukan mata pelajaran berdasarkan kelas
    switch (classAssignment) {
      case 'XI-A':
        chosenSubjects = 'MAT TK.LANJUT, FISIKA, GEOGRAFI, B. JEPANG, PKWU';
        break;
      case 'XI-B':
        chosenSubjects = 'MAT TK. LANJUT, FISIKA, KIMIA, B. JERMAN, PKWU';
        break;
      case 'XI-C':
        chosenSubjects = 'MAT TK. LANJUT, FISIKA, KIMIA, B. JEPANG, PKWU';
        break;
      case 'XI-D':
        chosenSubjects = 'BIOLOGI, KIMIA, FISIKA, MAT TK. LANJUT, PKWU';
        break;
      case 'XI-E':
        chosenSubjects = 'BIOLOGI, KIMIA, FISIKA, B. INGGRIS TK. LANJUT, PKWU';
        break;
      case 'XI-F':
        chosenSubjects = 'BIOLOGI, KIMIA, FISIKA, INFORMATIKA, PKWU';
        break;
      case 'XI-G':
        chosenSubjects = 'MAT TK. LANJUT, EKONOMI, INFORMATIKA, B. INGGRIS TK. LANJUT, PKWU';
        break;
      case 'XI-H':
        chosenSubjects = 'MAT TK. LANJUT, EKONOMI, INFORMATIKA, SOSIOLOGI, PKWU';
        break;
      case 'XI-I':
        chosenSubjects = 'SOSIOLOGI, EKONOMI, MAT TK. LANJUT, B. JERMAN, PKWU';
        break;
      case 'XI-J':
        chosenSubjects = 'SOSIOLOGI, EKONOMI, B. INGGRIS TK. LANJUT, B. JEPANG, PKWU';
        break;
      default:
        chosenSubjects = 'Mata pelajaran belum ditentukan';
    }

    successMessage.innerHTML = `
      <h2>Nama: ${validatedStudent.nama} ; Kode Siswa: ${validatedStudent.kode} ; Kelas: ${classAssignment}</h2>
      <p>Selamat Anda telah menaiki kelas ${classAssignment} dengan mata pelajaran pilihan ${chosenSubjects}</p>
      <button id="back-button">Kembali ke Halaman Utama</button>
    `;

    // Event listener untuk tombol kembali ke halaman utama
    document.getElementById('back-button').addEventListener('click', function() {
      window.location.href = '/';
    });
  } else {
    // Jika siswa tidak valid, tampilkan pesan kesalahan
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Maaf nama dan kode anda belum terdaftar, periksa kembali dan coba lagi!';
    const successMessage = document.getElementById('success-message');
    successMessage.appendChild(errorMessage);
  }
});