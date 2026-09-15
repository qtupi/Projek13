import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Screen =
  | "login"
  | "register"
  | "home"
  | "catalog"
  | "search"
  | "detail"
  | "borrow"
  | "loans"
  | "history"
  | "favorites"
  | "profile";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  year: number;
  available: boolean;
  synopsis: string;
  stock: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const BOOKS: Book[] = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Fiksi",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=280&fit=crop&auto=format",
    year: 2005,
    available: true,
    synopsis: "Kisah persahabatan 10 anak Belitung yang berjuang menuntut ilmu di sekolah SD Muhammadiyah yang hampir roboh.",
    stock: 3,
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=280&fit=crop&auto=format",
    year: 1980,
    available: true,
    synopsis: "Novel pertama dari Tetralogi Buru yang menceritakan kisah Minke di era kolonial Belanda.",
    stock: 2,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Pengembangan Diri",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&h=280&fit=crop&auto=format",
    year: 2018,
    available: false,
    synopsis: "Panduan membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil namun konsisten.",
    stock: 0,
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Sains",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200&h=280&fit=crop&auto=format",
    year: 2011,
    available: true,
    synopsis: "Sejarah singkat umat manusia dari zaman batu hingga era modern yang mengubah cara pandang kita.",
    stock: 1,
  },
  {
    id: 5,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    category: "Fiksi",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop&auto=format",
    year: 2009,
    available: true,
    synopsis: "Kisah 6 santri dari pelosok Indonesia yang menuntut ilmu di Pondok Madani dengan mimpi besar.",
    stock: 4,
  },
  {
    id: 6,
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Filsafat",
    cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=200&h=280&fit=crop&auto=format",
    year: 500,
    available: true,
    synopsis: "Traktat militer kuno dari Tiongkok yang masih relevan dalam strategi bisnis dan kehidupan modern.",
    stock: 2,
  },
];

const CATEGORIES = ["Semua", "Fiksi", "Sejarah", "Sains", "Filsafat", "Pengembangan Diri"];

const LOANS = [
  { id: "PJM-001", bookId: 2, title: "Bumi Manusia", borrowDate: "02 Sep 2026", dueDate: "16 Sep 2026", status: "Dipinjam", daysLeft: 1 },
  { id: "PJM-002", bookId: 4, title: "Sapiens", borrowDate: "28 Agu 2026", dueDate: "11 Sep 2026", status: "Terlambat", daysLeft: -4 },
];

const HISTORY = [
  { id: "RWT-001", title: "Laskar Pelangi", author: "Andrea Hirata", returnDate: "20 Agu 2026", duration: "14 hari" },
  { id: "RWT-002", title: "Atomic Habits", author: "James Clear", returnDate: "01 Agu 2026", duration: "10 hari" },
  { id: "RWT-003", title: "Negeri 5 Menara", author: "Ahmad Fuadi", returnDate: "12 Jul 2026", duration: "7 hari" },
];

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────
const IconHome = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#E8AF22" : "none"} stroke={active ? "#E8AF22" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconBook = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#E8AF22" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconClock = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#E8AF22" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconHeart = ({ active, filled }: { active?: boolean; filled?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "#E8AF22" : active ? "#E8AF22" : "none"} stroke={active || filled ? "#E8AF22" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconUser = ({ active }: { active?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#E8AF22" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconSearch = ({ color = "#94a3b8" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconBack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B3359" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconStar = ({ filled }: { filled?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#E8AF22" : "none"} stroke="#E8AF22" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [prevScreen, setPrevScreen] = useState<Screen>("home");
  const [activeTab, setActiveTab] = useState<Screen>("home");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [favorites, setFavorites] = useState<number[]>([1, 5]);
  const [borrowSuccess, setBorrowSuccess] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", nis: "", password: "" });
  const [borrowDate, setBorrowDate] = useState("16 Sep 2026");

  const navigate = (to: Screen, from?: Screen) => {
    if (from) setPrevScreen(from);
    setScreen(to);
    if (["home", "catalog", "loans", "favorites", "profile"].includes(to)) {
      setActiveTab(to);
    }
  };

  const openBook = (book: Book) => {
    setSelectedBook(book);
    setBorrowSuccess(false);
    navigate("detail", screen);
  };

  const toggleFav = (id: number) => {
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  };

  const filteredBooks = BOOKS.filter((b) => {
    const matchCat = activeCategory === "Semua" || b.category === activeCategory;
    const matchQ = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 p-4 py-8">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[780px] rounded-[48px] shadow-2xl overflow-hidden border-[10px] border-[#1a1a2e]" style={{ boxShadow: "0 30px 80px rgba(11,51,89,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset" }}>
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 h-10 flex items-center justify-between px-6 text-xs font-bold" style={{ background: screen === "login" || screen === "register" ? "#0B3359" : screen === "home" ? "#0B3359" : ["detail", "borrow"].includes(screen) ? "#0B3359" : "transparent", color: "white" }}>
          <span>9:41</span>
          <div className="w-24 h-5 bg-[#1a1a2e] rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
          <div className="flex gap-1 items-center">
            <div className="flex gap-0.5 items-end">
              {[2, 3, 4, 5].map((h, i) => <div key={i} className="w-1 bg-white rounded-sm" style={{ height: h * 2 }} />)}
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M1 6s4-6 11-6 11 6 11 6-4 6-11 6S1 6 1 6z" /><circle cx="12" cy="6" r="3" /></svg>
            <svg width="14" height="10" viewBox="0 0 24 16" fill="white"><rect x="0" y="2" width="20" height="12" rx="2" /><rect x="20" y="5" width="3" height="6" rx="1" /><rect x="1" y="3" width="16" height="10" rx="1" fill="#0B3359" /></svg>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-full w-full overflow-hidden relative" style={{ background: "#f8fafc" }}>
          {screen === "login" && <LoginScreen onLogin={() => navigate("home")} onRegister={() => navigate("register")} form={loginForm} setForm={setLoginForm} />}
          {screen === "register" && <RegisterScreen onBack={() => navigate("login")} onSuccess={() => navigate("home")} form={registerForm} setForm={setRegisterForm} />}
          {screen === "home" && <HomeScreen onBook={openBook} onSearch={() => navigate("search", "home")} books={BOOKS} favorites={favorites} />}
          {screen === "catalog" && <CatalogScreen onBook={openBook} books={filteredBooks} allBooks={BOOKS} categories={CATEGORIES} activeCategory={activeCategory} setCategory={setActiveCategory} query={searchQuery} setQuery={setSearchQuery} />}
          {screen === "search" && <SearchScreen onBack={() => navigate(prevScreen)} onBook={openBook} books={BOOKS} />}
          {screen === "detail" && selectedBook && <DetailScreen book={selectedBook} onBack={() => navigate(prevScreen)} onBorrow={() => navigate("borrow", "detail")} isFav={favorites.includes(selectedBook.id)} onToggleFav={() => toggleFav(selectedBook!.id)} />}
          {screen === "borrow" && selectedBook && <BorrowScreen book={selectedBook} onBack={() => navigate("detail", "borrow")} onConfirm={() => { setBorrowSuccess(true); navigate("loans"); }} borrowDate={borrowDate} setBorrowDate={setBorrowDate} />}
          {screen === "loans" && <LoansScreen loans={LOANS} success={borrowSuccess} onBack={() => navigate("home")} />}
          {screen === "history" && <HistoryScreen history={HISTORY} onBack={() => navigate("home")} />}
          {screen === "favorites" && <FavoritesScreen books={BOOKS.filter((b) => favorites.includes(b.id))} onBook={openBook} onToggleFav={toggleFav} favorites={favorites} />}
          {screen === "profile" && <ProfileScreen onHistory={() => navigate("history", "profile")} onLogout={() => navigate("login")} />}
        </div>

        {/* Bottom Nav */}
        {["home", "catalog", "loans", "favorites", "profile"].includes(screen) && (
          <div className="absolute bottom-0 left-0 right-0 z-40 flex bg-white border-t border-slate-100" style={{ paddingBottom: 12, boxShadow: "0 -4px 20px rgba(0,0,0,0.07)" }}>
            {([
              { id: "home", label: "Beranda", Icon: IconHome },
              { id: "catalog", label: "Katalog", Icon: IconBook },
              { id: "loans", label: "Pinjaman", Icon: IconClock },
              { id: "favorites", label: "Favorit", Icon: IconHeart },
              { id: "profile", label: "Profil", Icon: IconUser },
            ] as const).map(({ id, label, Icon }) => (
              <button key={id} onClick={() => navigate(id as Screen)} className="flex-1 flex flex-col items-center gap-0.5 pt-2 pb-0">
                <Icon active={activeTab === id} />
                <span className="text-[10px] font-700" style={{ color: activeTab === id ? "#E8AF22" : "#94a3b8", fontWeight: activeTab === id ? 800 : 500 }}>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin, onRegister, form, setForm }: any) {
  return (
    <div className="h-full flex flex-col" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 60%, #082845 100%)" }}>
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-16 pb-4">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-4" style={{ boxShadow: "0 8px 32px rgba(232,175,34,0.4)" }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <rect x="6" y="8" width="24" height="30" rx="3" fill="#E8AF22" />
            <rect x="10" y="4" width="24" height="30" rx="3" fill="#0B3359" stroke="#E8AF22" strokeWidth="1.5" />
            <line x1="15" y1="12" x2="29" y2="12" stroke="#E8AF22" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="17" x2="29" y2="17" stroke="#E8AF22" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="22" x2="24" y2="22" stroke="#E8AF22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="text-white text-2xl font-black tracking-tight">Smart Library</h1>
        <p className="text-blue-300 text-xs font-600 mb-8 tracking-widest uppercase">Letris School</p>

        {/* Form */}
        <div className="w-full space-y-3">
          <div>
            <label className="text-blue-200 text-xs font-700 mb-1 block">Email / NIS</label>
            <input
              value={form.email}
              onChange={(e: any) => setForm({ ...form, email: e.target.value })}
              placeholder="Masukkan email atau NIS"
              className="w-full px-4 py-3 rounded-xl text-sm font-600 outline-none text-white placeholder-blue-400"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            />
          </div>
          <div>
            <label className="text-blue-200 text-xs font-700 mb-1 block">Password</label>
            <input
              value={form.password}
              onChange={(e: any) => setForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="Masukkan password"
              className="w-full px-4 py-3 rounded-xl text-sm font-600 outline-none text-white placeholder-blue-400"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            />
          </div>
          <div className="text-right">
            <button className="text-xs font-700" style={{ color: "#E8AF22" }}>Lupa Password?</button>
          </div>
          <button onClick={onLogin} className="w-full py-3.5 rounded-xl text-sm font-800 text-[#0B3359] transition-all active:scale-95" style={{ background: "linear-gradient(90deg, #E8AF22 0%, #FFC638 100%)", boxShadow: "0 4px 20px rgba(232,175,34,0.4)" }}>
            Masuk
          </button>
        </div>
      </div>
      <div className="text-center pb-8">
        <p className="text-blue-300 text-xs font-600">
          Belum punya akun?{" "}
          <button onClick={onRegister} className="font-800" style={{ color: "#E8AF22" }}>Daftar Sekarang</button>
        </p>
      </div>
    </div>
  );
}

// ─── Register Screen ──────────────────────────────────────────────────────────
function RegisterScreen({ onBack, onSuccess, form, setForm }: any) {
  return (
    <div className="h-full flex flex-col" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 60%, #082845 100%)" }}>
      <div className="pt-12 px-6 pb-4 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
          <IconBack />
        </button>
        <h2 className="text-white font-800 text-lg">Daftar Akun</h2>
      </div>

      <div className="flex-1 px-6 overflow-y-auto hide-scrollbar">
        <p className="text-blue-300 text-xs mb-6 font-600">Lengkapi data diri untuk mendaftar sebagai anggota perpustakaan Letris School.</p>
        <div className="space-y-3">
          {[
            { label: "Nama Lengkap", key: "name", placeholder: "Masukkan nama lengkap", type: "text" },
            { label: "NIS (Nomor Induk Siswa)", key: "nis", placeholder: "Contoh: 2024001234", type: "text" },
            { label: "Email Sekolah", key: "email", placeholder: "nama@letris.sch.id", type: "email" },
            { label: "Password", key: "password", placeholder: "Minimal 8 karakter", type: "password" },
          ].map(({ label, key, placeholder, type }) => (
            <div key={key}>
              <label className="text-blue-200 text-xs font-700 mb-1 block">{label}</label>
              <input
                value={form[key]}
                onChange={(e: any) => setForm({ ...form, [key]: e.target.value })}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl text-sm font-600 outline-none text-white placeholder-blue-400"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(232,175,34,0.15)", border: "1px solid rgba(232,175,34,0.3)" }}>
          <p className="text-xs font-600" style={{ color: "#E8AF22" }}>
            Pendaftaran membutuhkan validasi oleh petugas perpustakaan. Akun aktif dalam 1×24 jam.
          </p>
        </div>

        <button onClick={onSuccess} className="w-full mt-5 py-3.5 rounded-xl text-sm font-800 text-[#0B3359] transition-all active:scale-95 mb-8" style={{ background: "linear-gradient(90deg, #E8AF22 0%, #FFC638 100%)", boxShadow: "0 4px 20px rgba(232,175,34,0.3)" }}>
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

// ─── Home Screen ──────────────────────────────────────────────────────────────
function HomeScreen({ onBook, onSearch, books, favorites }: any) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="pt-10 pb-4 px-5" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-300 text-xs font-600">Selamat datang 👋</p>
            <h1 className="text-white font-800 text-lg">Ahmad Fauzan</h1>
          </div>
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <IconBell />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-500 border-2 border-[#0B3359]" />
          </div>
        </div>
        {/* Search bar */}
        <button onClick={onSearch} className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-left" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <IconSearch color="rgba(255,255,255,0.6)" />
          <span className="text-sm font-600" style={{ color: "rgba(255,255,255,0.5)" }}>Cari judul atau penulis...</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar phone-screen">
        {/* Stats */}
        <div className="px-5 py-4 grid grid-cols-3 gap-2">
          {[
            { label: "Dipinjam", val: "2", color: "#0B3359" },
            { label: "Terlambat", val: "1", color: "#dc2626" },
            { label: "Favorit", val: String(favorites.length), color: "#E8AF22" },
          ].map(({ label, val, color }) => (
            <div key={label} className="rounded-xl p-3 text-center bg-white shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
              <p className="text-xl font-900" style={{ color }}>{val}</p>
              <p className="text-[10px] font-700 text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mx-5 mb-4 rounded-2xl overflow-hidden relative" style={{ height: 120, background: "linear-gradient(120deg, #0B3359 0%, #E8AF22 100%)" }}>
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=160&fit=crop&auto=format" alt="Perpustakaan" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative p-4">
            <p className="text-white font-900 text-base leading-tight">Buku Baru<br />Telah Tersedia!</p>
            <p className="text-yellow-200 text-[11px] font-600 mt-1">45+ judul terbaru bulan ini</p>
            <div className="mt-2 inline-block px-3 py-1 rounded-full text-[10px] font-800 text-[#0B3359]" style={{ background: "#E8AF22" }}>Lihat Sekarang</div>
          </div>
        </div>

        {/* Buku Terbaru */}
        <div className="px-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-800 text-[#0B3359] text-sm">Buku Populer</h2>
            <span className="text-xs font-700" style={{ color: "#E8AF22" }}>Lihat Semua</span>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {books.slice(0, 5).map((book: Book) => (
              <button key={book.id} onClick={() => onBook(book)} className="flex-shrink-0 w-[110px]">
                <div className="rounded-xl overflow-hidden mb-2 shadow-md" style={{ height: 150 }}>
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-[11px] font-800 text-[#0B3359] text-left leading-tight line-clamp-2">{book.title}</p>
                <p className="text-[10px] font-600 text-slate-400 text-left mt-0.5">{book.author}</p>
                <div className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[9px] font-800 ${book.available ? "text-emerald-700 bg-emerald-50" : "text-red-600 bg-red-50"}`}>
                  {book.available ? "Tersedia" : "Tidak Tersedia"}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Kategori */}
        <div className="px-5 mb-6">
          <h2 className="font-800 text-[#0B3359] text-sm mb-3">Kategori</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Fiksi", icon: "📖", bg: "#EEF2FF" },
              { name: "Sains", icon: "🔬", bg: "#F0FDF4" },
              { name: "Sejarah", icon: "🏛️", bg: "#FFF7ED" },
              { name: "Filsafat", icon: "🧠", bg: "#FDF4FF" },
              { name: "Pengembangan Diri", icon: "🎯", bg: "#FFFBEB" },
              { name: "Referensi", icon: "📚", bg: "#F0F9FF" },
            ].map(({ name, icon, bg }) => (
              <button key={name} className="rounded-xl p-3 text-center flex flex-col items-center gap-1" style={{ background: bg }}>
                <span className="text-xl">{icon}</span>
                <span className="text-[10px] font-700 text-slate-600 leading-tight">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Catalog Screen ───────────────────────────────────────────────────────────
function CatalogScreen({ onBook, books, categories, activeCategory, setCategory, query, setQuery }: any) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="pt-10 px-5 pb-3" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <h1 className="text-white font-800 text-lg mb-3">Katalog Buku</h1>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <IconSearch color="rgba(255,255,255,0.6)" />
          <input
            value={query}
            onChange={(e: any) => setQuery(e.target.value)}
            placeholder="Cari buku..."
            className="flex-1 bg-transparent text-sm font-600 text-white placeholder-white/50 outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-5 py-3 overflow-x-auto hide-scrollbar bg-white" style={{ borderBottom: "1px solid #f1f5f9" }}>
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-700 transition-all"
            style={activeCategory === cat ? { background: "#0B3359", color: "white" } : { background: "#f1f5f9", color: "#64748b" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-20">
        {books.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <div className="text-4xl mb-2">📭</div>
            <p className="text-sm font-700">Buku tidak ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {books.map((book: Book) => (
              <button key={book.id} onClick={() => onBook(book)} className="bg-white rounded-2xl overflow-hidden shadow-sm text-left" style={{ border: "1px solid #f1f5f9" }}>
                <div className="relative" style={{ height: 160 }}>
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-800 ${book.available ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                    {book.available ? "Tersedia" : "Habis"}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-800 text-[#0B3359] leading-tight line-clamp-2">{book.title}</p>
                  <p className="text-[10px] font-600 text-slate-400 mt-0.5 mb-1">{book.author}</p>
                  <div className="flex items-center gap-1">
                    <IconStar filled />
                    <span className="text-[10px] font-700 text-slate-600">4.{book.id + 2}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Search Screen ────────────────────────────────────────────────────────────
function SearchScreen({ onBack, onBook, books }: any) {
  const [q, setQ] = useState("");
  const results = q.length > 1 ? books.filter((b: Book) => b.title.toLowerCase().includes(q.toLowerCase()) || b.author.toLowerCase().includes(q.toLowerCase())) : [];

  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-4 pb-3" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <IconBack />
          </button>
          <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <IconSearch color="rgba(255,255,255,0.6)" />
            <input
              autoFocus
              value={q}
              onChange={(e: any) => setQ(e.target.value)}
              placeholder="Cari judul atau penulis..."
              className="flex-1 bg-transparent text-sm font-600 text-white placeholder-white/50 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-4">
        {q.length < 2 ? (
          <div>
            <p className="text-xs font-700 text-slate-400 mb-3">Pencarian Terpopuler</p>
            {["Laskar Pelangi", "Bumi Manusia", "Atomic Habits", "Sapiens"].map((t) => (
              <button key={t} onClick={() => setQ(t)} className="w-full flex items-center gap-3 py-3" style={{ borderBottom: "1px solid #f1f5f9" }}>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                  <IconSearch color="#94a3b8" />
                </div>
                <span className="text-sm font-600 text-slate-700">{t}</span>
              </button>
            ))}
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-sm font-700">Tidak ditemukan untuk "{q}"</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs font-700 text-slate-400">{results.length} buku ditemukan</p>
            {results.map((book: Book) => (
              <button key={book.id} onClick={() => onBook(book)} className="w-full flex gap-3 bg-white rounded-xl p-3 shadow-sm text-left" style={{ border: "1px solid #f1f5f9" }}>
                <img src={book.cover} alt={book.title} className="w-12 h-16 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-800 text-[#0B3359] leading-tight">{book.title}</p>
                  <p className="text-xs font-600 text-slate-400 mt-0.5">{book.author}</p>
                  <p className="text-xs font-600 mt-1" style={{ color: "#E8AF22" }}>{book.category}</p>
                  <div className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[9px] font-800 ${book.available ? "text-emerald-700 bg-emerald-50" : "text-red-600 bg-red-50"}`}>
                    {book.available ? "Tersedia" : "Tidak Tersedia"}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Detail Screen ────────────────────────────────────────────────────────────
function DetailScreen({ book, onBack, onBorrow, isFav, onToggleFav }: any) {
  return (
    <div className="h-full flex flex-col">
      {/* Hero */}
      <div className="relative" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)", paddingTop: 40 }}>
        <div className="flex items-center justify-between px-5 py-3">
          <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <IconBack />
          </button>
          <button onClick={onToggleFav} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <IconHeart filled={isFav} active={isFav} />
          </button>
        </div>
        <div className="flex justify-center pb-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: 120, height: 170 }}>
            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 overflow-y-auto hide-scrollbar -mt-4 bg-white rounded-t-3xl">
        <div className="px-5 pt-5 pb-24">
          <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-800 mb-2" style={{ background: "#FFF7ED", color: "#E8AF22" }}>{book.category}</div>
          <h1 className="font-900 text-[#0B3359] text-xl leading-tight">{book.title}</h1>
          <p className="text-slate-400 font-600 text-sm mt-1 mb-3">{book.author} · {book.year}</p>

          <div className="flex gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50">
              {[1, 2, 3, 4].map((i) => <IconStar key={i} filled />)}
              <IconStar />
              <span className="text-xs font-700 text-slate-600 ml-0.5">4.{book.id + 2}</span>
            </div>
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${book.available ? "bg-emerald-50" : "bg-red-50"}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${book.available ? "bg-emerald-500" : "bg-red-500"}`} />
              <span className={`text-xs font-800 ${book.available ? "text-emerald-700" : "text-red-600"}`}>
                {book.available ? `${book.stock} tersedia` : "Habis"}
              </span>
            </div>
          </div>

          <h3 className="font-800 text-[#0B3359] text-sm mb-2">Sinopsis</h3>
          <p className="text-slate-500 text-sm font-600 leading-relaxed mb-4">{book.synopsis}</p>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Tahun Terbit", val: book.year },
              { label: "Stok", val: book.stock > 0 ? `${book.stock} eksemplar` : "Habis" },
              { label: "Kategori", val: book.category },
              { label: "Format", val: "Buku Fisik" },
            ].map(({ label, val }) => (
              <div key={label} className="p-3 rounded-xl" style={{ background: "#f8fafc" }}>
                <p className="text-[10px] font-700 text-slate-400">{label}</p>
                <p className="text-xs font-800 text-[#0B3359] mt-0.5">{String(val)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Borrow Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white" style={{ borderTop: "1px solid #f1f5f9" }}>
        <button
          onClick={book.available ? onBorrow : undefined}
          className="w-full py-3.5 rounded-xl font-800 text-sm transition-all active:scale-95"
          style={book.available ? { background: "linear-gradient(90deg, #0B3359 0%, #0F4A7B 100%)", color: "white" } : { background: "#f1f5f9", color: "#94a3b8" }}
        >
          {book.available ? "Pinjam Buku" : "Buku Tidak Tersedia"}
        </button>
      </div>
    </div>
  );
}

// ─── Borrow Screen ────────────────────────────────────────────────────────────
function BorrowScreen({ book, onBack, onConfirm, borrowDate, setBorrowDate }: any) {
  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-5 pb-4" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <IconBack />
          </button>
          <h2 className="text-white font-800 text-base">Form Peminjaman</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-4">
        {/* Book Card */}
        <div className="flex gap-3 bg-white rounded-2xl p-3 mb-4 shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
          <img src={book.cover} alt={book.title} className="w-14 h-20 object-cover rounded-xl" />
          <div>
            <p className="font-800 text-[#0B3359] text-sm leading-tight">{book.title}</p>
            <p className="text-slate-400 text-xs font-600 mt-0.5">{book.author}</p>
            <div className="mt-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-700 text-emerald-700">Tersedia</span>
            </div>
          </div>
        </div>

        {/* Borrower Info */}
        <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
          <h3 className="font-800 text-[#0B3359] text-sm mb-3">Data Peminjam</h3>
          {[
            { label: "Nama", val: "Ahmad Fauzan" },
            { label: "NIS", val: "2024000123" },
            { label: "Kelas", val: "XII IPA 2" },
          ].map(({ label, val }) => (
            <div key={label} className="flex justify-between py-2" style={{ borderBottom: "1px solid #f8fafc" }}>
              <span className="text-xs font-700 text-slate-400">{label}</span>
              <span className="text-xs font-800 text-[#0B3359]">{val}</span>
            </div>
          ))}
        </div>

        {/* Loan Period */}
        <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
          <h3 className="font-800 text-[#0B3359] text-sm mb-3">Periode Pinjam</h3>
          <div className="flex gap-2">
            <div className="flex-1 p-2.5 rounded-xl text-center" style={{ background: "#f8fafc" }}>
              <p className="text-[10px] font-700 text-slate-400">Tanggal Pinjam</p>
              <p className="text-xs font-800 text-[#0B3359] mt-0.5">15 Sep 2026</p>
            </div>
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="flex-1 p-2.5 rounded-xl text-center" style={{ background: "#f8fafc" }}>
              <p className="text-[10px] font-700 text-slate-400">Batas Kembali</p>
              <p className="text-xs font-800 text-[#0B3359] mt-0.5">{borrowDate}</p>
            </div>
          </div>
          <p className="text-[10px] font-600 text-slate-400 mt-2 text-center">Durasi maksimal peminjaman: 14 hari</p>
        </div>

        {/* Terms */}
        <div className="p-3 rounded-xl mb-4" style={{ background: "#FFF7ED", border: "1px solid #FED7AA" }}>
          <p className="text-xs font-700 text-orange-700 mb-1">Syarat & Ketentuan</p>
          {["Kembalikan tepat waktu untuk menghindari denda.", "Jaga kondisi buku tetap baik.", "Denda keterlambatan: Rp 1.000/hari."].map((t) => (
            <div key={t} className="flex items-start gap-1.5 mt-1">
              <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
              <p className="text-[11px] font-600 text-orange-600">{t}</p>
            </div>
          ))}
        </div>

        <button onClick={onConfirm} className="w-full py-3.5 rounded-xl font-800 text-sm text-white transition-all active:scale-95" style={{ background: "linear-gradient(90deg, #0B3359 0%, #0F4A7B 100%)" }}>
          Konfirmasi Peminjaman
        </button>
      </div>
    </div>
  );
}

// ─── Loans Screen ─────────────────────────────────────────────────────────────
function LoansScreen({ loans, success, onBack }: any) {
  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-5 pb-4" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <h1 className="text-white font-800 text-lg">Status Pinjaman</h1>
        <p className="text-blue-300 text-xs font-600 mt-0.5">{loans.length} pinjaman aktif</p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-20">
        {success && (
          <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-3 mb-4" style={{ border: "1px solid #A7F3D0" }}>
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <IconCheck />
            </div>
            <div>
              <p className="text-xs font-800 text-emerald-800">Peminjaman Berhasil!</p>
              <p className="text-[11px] font-600 text-emerald-600">Silakan ambil buku di perpustakaan.</p>
            </div>
          </div>
        )}

        <h3 className="text-xs font-800 text-slate-400 mb-3 uppercase tracking-wide">Pinjaman Aktif</h3>

        <div className="space-y-3">
          {loans.map((loan: any) => (
            <div key={loan.id} className="bg-white rounded-2xl p-4 shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-800 text-[#0B3359] text-sm">{loan.title}</p>
                  <p className="text-[10px] font-700 text-slate-400 mt-0.5">ID: {loan.id}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-[9px] font-800 ${loan.daysLeft < 0 ? "bg-red-100 text-red-700" : loan.daysLeft <= 2 ? "bg-orange-100 text-orange-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {loan.status}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2 rounded-lg" style={{ background: "#f8fafc" }}>
                  <p className="text-[9px] font-700 text-slate-400">Tanggal Pinjam</p>
                  <p className="text-[11px] font-800 text-[#0B3359]">{loan.borrowDate}</p>
                </div>
                <div className="p-2 rounded-lg" style={{ background: loan.daysLeft < 0 ? "#FEF2F2" : "#f8fafc" }}>
                  <p className="text-[9px] font-700 text-slate-400">Batas Kembali</p>
                  <p className={`text-[11px] font-800 ${loan.daysLeft < 0 ? "text-red-600" : "text-[#0B3359]"}`}>{loan.dueDate}</p>
                </div>
              </div>
              {loan.daysLeft < 0 && (
                <div className="mt-2 p-2 rounded-lg bg-red-50">
                  <p className="text-[11px] font-700 text-red-600">⚠ Terlambat {Math.abs(loan.daysLeft)} hari · Denda: Rp {Math.abs(loan.daysLeft) * 1000}.000</p>
                </div>
              )}
              {loan.daysLeft >= 0 && (
                <p className="text-[11px] font-700 text-slate-500 mt-2">Sisa waktu: <span className="font-800 text-[#0B3359]">{loan.daysLeft} hari</span></p>
              )}
            </div>
          ))}
        </div>

        {/* Kembalikan Button */}
        <div className="mt-4 p-4 bg-white rounded-2xl shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
          <p className="text-xs font-800 text-[#0B3359] mb-1">Cara Pengembalian</p>
          <p className="text-xs font-600 text-slate-500">Datang ke perpustakaan dan tunjukkan ID pinjaman kepada petugas untuk proses pengembalian.</p>
        </div>
      </div>
    </div>
  );
}

// ─── History Screen ───────────────────────────────────────────────────────────
function HistoryScreen({ history, onBack }: any) {
  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-5 pb-4" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <IconBack />
          </button>
          <div>
            <h1 className="text-white font-800 text-lg">Riwayat Bacaan</h1>
            <p className="text-blue-300 text-xs font-600">{history.length} buku telah dikembalikan</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-4 space-y-3">
        {history.map((item: any) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3" style={{ border: "1px solid #f1f5f9" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0B3359, #0F4A7B)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8AF22" strokeWidth="2" strokeLinecap="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-800 text-[#0B3359] text-sm">{item.title}</p>
              <p className="text-xs font-600 text-slate-400">{item.author}</p>
              <p className="text-[11px] font-700 mt-1" style={{ color: "#E8AF22" }}>Dikembalikan: {item.returnDate}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-700 text-slate-400">Durasi</p>
              <p className="text-xs font-800 text-[#0B3359]">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Favorites Screen ─────────────────────────────────────────────────────────
function FavoritesScreen({ books, onBook, onToggleFav, favorites }: any) {
  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-5 pb-4" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <h1 className="text-white font-800 text-lg">Buku Favorit</h1>
        <p className="text-blue-300 text-xs font-600 mt-0.5">{books.length} buku tersimpan</p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-20">
        {books.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-3">💛</div>
            <p className="font-800 text-slate-400 text-sm">Belum ada buku favorit</p>
            <p className="text-xs font-600 text-slate-300 mt-1">Tambahkan buku dari halaman detail</p>
          </div>
        ) : (
          <div className="space-y-3">
            {books.map((book: Book) => (
              <div key={book.id} className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
                <button onClick={() => onBook(book)}>
                  <img src={book.cover} alt={book.title} className="w-14 h-20 object-cover rounded-xl flex-shrink-0" />
                </button>
                <div className="flex-1 min-w-0">
                  <button onClick={() => onBook(book)} className="text-left">
                    <p className="font-800 text-[#0B3359] text-sm leading-tight">{book.title}</p>
                    <p className="text-xs font-600 text-slate-400 mt-0.5">{book.author}</p>
                  </button>
                  <div className="flex items-center gap-1 mt-1">
                    <IconStar filled />
                    <span className="text-[10px] font-700 text-slate-500">4.{book.id + 2}</span>
                  </div>
                  <div className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[9px] font-800 ${book.available ? "text-emerald-700 bg-emerald-50" : "text-red-600 bg-red-50"}`}>
                    {book.available ? "Tersedia" : "Tidak Tersedia"}
                  </div>
                </div>
                <button onClick={() => onToggleFav(book.id)} className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#FFF7ED" }}>
                  <IconHeart filled={favorites.includes(book.id)} active={favorites.includes(book.id)} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Profile Screen ───────────────────────────────────────────────────────────
function ProfileScreen({ onHistory, onLogout }: any) {
  return (
    <div className="h-full flex flex-col">
      <div className="pt-10 px-5 pb-8" style={{ background: "linear-gradient(160deg, #0B3359 0%, #0F4A7B 100%)" }}>
        <h1 className="text-white font-800 text-lg mb-4">Profil Saya</h1>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/30">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&auto=format" alt="Foto profil" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-800 text-base">Ahmad Fauzan</p>
            <p className="text-blue-300 text-xs font-600">NIS: 2024000123</p>
            <p className="text-blue-300 text-xs font-600">XII IPA 2 · Letris School</p>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[{ label: "Total Pinjam", val: "12" }, { label: "Aktif", val: "2" }, { label: "Favorit", val: "2" }].map(({ label, val }) => (
            <div key={label} className="rounded-xl p-2.5 text-center" style={{ background: "rgba(255,255,255,0.12)" }}>
              <p className="text-white font-900 text-lg">{val}</p>
              <p className="text-blue-300 text-[10px] font-700">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-24 space-y-2">
        {[
          { label: "Riwayat Bacaan", icon: "📚", action: onHistory },
          { label: "Pengaturan Akun", icon: "⚙️", action: () => {} },
          { label: "Notifikasi", icon: "🔔", action: () => {} },
          { label: "Kebijakan Privasi", icon: "🔒", action: () => {} },
          { label: "Bantuan", icon: "❓", action: () => {} },
        ].map(({ label, icon, action }) => (
          <button key={label} onClick={action} className="w-full flex items-center gap-3 bg-white rounded-xl p-4 text-left shadow-sm" style={{ border: "1px solid #f1f5f9" }}>
            <span className="text-xl w-8">{icon}</span>
            <span className="flex-1 text-sm font-700 text-[#0B3359]">{label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ))}

        <button onClick={onLogout} className="w-full flex items-center gap-3 rounded-xl p-4 text-left mt-2" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
          <span className="text-xl w-8">🚪</span>
          <span className="flex-1 text-sm font-800 text-red-600">Keluar</span>
        </button>

        <p className="text-center text-[10px] font-600 text-slate-300 pt-2">Smart Library v1.0 · Letris School © 2026</p>
      </div>
    </div>
  );
}
