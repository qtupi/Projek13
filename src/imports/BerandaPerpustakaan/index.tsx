import svgPaths from "./svg-2vxkn1a30l";
import imgBookCover from "./7b379b59d15cccf9e221bfe326fa40b28f18ecbe.png";
import imgBookCover1 from "./2713d9dda893561b6917201c52df8b341f182d4e.png";
import imgBookCover2 from "./8c256902ac9b9db13d2e751484cc0a7ad10693f2.png";

function Signal() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="signal">
          <path d={svgPaths.p2e3d3920} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="wifi">
          <path d={svgPaths.p9ec6500} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="battery">
          <path d={svgPaths.p3f7ab300} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="System status">
      <Signal />
      <Wifi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between overflow-clip px-[18px] relative shrink-0 w-full" data-name="Status bar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">9:41</p>
      <SystemStatus />
    </div>
  );
}

function GreetingCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Greeting copy">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#c5d8ea] text-[12px]">Selamat pagi,</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[22px] text-white">Nadya Putri 👋</p>
    </div>
  );
}

function UserRound() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="user-round">
      <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
        <g id="user-round">
          <path d={svgPaths.p169f74a0} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#ffc300] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[42px]" data-name="Profile">
      <UserRound />
    </div>
  );
}

function Greeting() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip pt-[10px] px-[18px] relative shrink-0 w-full" data-name="Greeting">
      <GreetingCopy />
      <Profile />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="search">
          <path d={svgPaths.p374fd000} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function SearchField() {
  return (
    <div className="bg-white h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Search field">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Search />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#65758b] text-[14px]">Buku apa yang ingin kamu baca?</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SearchArea() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[22px] px-[18px] relative shrink-0 w-full" data-name="Search area">
      <SearchField />
    </div>
  );
}

function HeroHeader() {
  return (
    <div className="bg-[#003566] content-stretch flex flex-col h-[202px] items-start overflow-clip relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" data-name="Hero header">
      <StatusBar />
      <Greeting />
      <SearchArea />
    </div>
  );
}

function ScanBarcode() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="scan-barcode">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="scan-barcode">
          <path d={svgPaths.p3ac1a80} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] h-[64px] items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Quick action">
      <ScanBarcode />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[10px] whitespace-nowrap">Pindai</p>
    </div>
  );
}

function Clipboard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="clipboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="clipboard">
          <path d={svgPaths.p3ebb11b0} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] h-[64px] items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Quick action">
      <Clipboard />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[10px] whitespace-nowrap">Pinjaman</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="heart">
          <path d={svgPaths.pda0ca00} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function QuickAction2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[5px] h-[64px] items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Quick action">
      <Heart />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[10px] whitespace-nowrap">Favorit</p>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Quick actions">
      <QuickAction />
      <QuickAction1 />
      <QuickAction2 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Section header">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[17px]">Buku populer</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#003566] text-[12px]">Lihat semua</p>
    </div>
  );
}

function BookCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[104px]" data-name="Book card">
      <div className="h-[138px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[104px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Laskar Pelangi</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Andrea Hirata</p>
    </div>
  );
}

function BookCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[104px]" data-name="Book card">
      <div className="h-[138px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[104px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover1} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Bumi Manusia</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Pramoedya A. T.</p>
    </div>
  );
}

function BookCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[104px]" data-name="Book card">
      <div className="h-[138px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[104px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover2} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Filosofi Teras</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Henry Manampiring</p>
    </div>
  );
}

function BookList() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Book list">
      <BookCard />
      <BookCard1 />
      <BookCard2 />
    </div>
  );
}

function PopularSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Popular section">
      <SectionHeader />
      <BookList />
    </div>
  );
}

function Sparkles() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sparkles">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="sparkles">
          <path d={svgPaths.p1c00680} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ffd60a] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Badge">
      <Sparkles />
    </div>
  );
}

function Copy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-name="Copy">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[14px] whitespace-nowrap">Rekomendasi untukmu</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#65758b] text-[12px] w-[min-content]">Pilihan bacaan berdasarkan minatmu</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-right">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function RecommendationBanner() {
  return (
    <div className="bg-[#fff7d1] content-stretch flex gap-[12px] h-[84px] items-center overflow-clip p-[14px] relative rounded-[18px] shrink-0 w-full" data-name="Recommendation banner">
      <Badge />
      <Copy />
      <ChevronRight />
    </div>
  );
}

function HomeContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-clip pt-[18px] px-[18px] relative w-full" data-name="Home content">
      <QuickActions />
      <PopularSection />
      <RecommendationBanner />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="house">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="house">
          <path d={svgPaths.p391ad370} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <House />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[10px] whitespace-nowrap">Beranda</p>
      <div className="bg-[#ffc300] h-[3px] relative rounded-[999px] shrink-0 w-[18px]" data-name="Active indicator" />
    </div>
  );
}

function Library() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="library">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="library">
          <path d={svgPaths.p36216980} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <Library />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">Katalog</p>
    </div>
  );
}

function Clipboard1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="clipboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="clipboard">
          <path d={svgPaths.pec52f00} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <Clipboard1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">Pinjaman</p>
    </div>
  );
}

function Bookmark() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="bookmark">
          <path d={svgPaths.p1a29d0c0} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <Bookmark />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">Bacaan</p>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="Bottom navigation">
      <div className="content-stretch flex items-start justify-between overflow-clip px-[20px] py-[9px] relative rounded-[inherit] size-full">
        <NavigationItem />
        <NavigationItem1 />
        <NavigationItem2 />
        <NavigationItem3 />
      </div>
      <div aria-hidden className="absolute border-[#dde5ef] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function BerandaPerpustakaan() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col items-start relative size-full" data-name="Beranda perpustakaan">
      <HeroHeader />
      <HomeContent />
      <BottomNavigation />
    </div>
  );
}