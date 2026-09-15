import svgPaths from "./svg-7df92soj25";
import imgBookCover from "./de81b4013d98075ce91bb88adeac90e18ced93bb.png";
import imgBookCover1 from "./7b5233ebffcda3a03e6dc8205d86e3238efa9adc.png";

function Signal() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="signal">
          <path d={svgPaths.p2e3d3920} id="Vector" stroke="#001D3D" strokeLinecap="round" />
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
          <path d={svgPaths.p9ec6500} id="Vector" stroke="#001D3D" strokeLinecap="round" />
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
          <path d={svgPaths.p3f7ab300} id="Vector" stroke="#001D3D" strokeLinecap="round" />
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[11px] whitespace-nowrap">9:41</p>
      <SystemStatus />
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="book-open">
          <path d={svgPaths.p3b17f100} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BrandMark() {
  return (
    <div className="bg-[#ffc300] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[30px]" data-name="Brand mark">
      <BookOpen />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="bell">
          <path d={svgPaths.p1a15f240} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between overflow-clip px-[18px] relative shrink-0 w-full" data-name="Page header">
      <BrandMark />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[17px] whitespace-nowrap">Status Pinjaman</p>
      <Bell />
    </div>
  );
}

function SummaryCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Summary copy">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#c5d8ea] text-[12px]">Pinjaman aktif</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] text-white">2 buku</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#c5d8ea] text-[10px]">Jangan lupa kembalikan tepat waktu</p>
    </div>
  );
}

function Library() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="library">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="library">
          <path d={svgPaths.p810ee40} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function SummaryIcon() {
  return (
    <div className="bg-[#ffc300] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="Summary icon">
      <Library />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#003566] content-stretch flex h-[108px] items-start justify-between overflow-clip p-[16px] relative rounded-[18px] shrink-0 w-full" data-name="Summary">
      <SummaryCopy />
      <SummaryIcon />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Tab">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[12px] whitespace-nowrap">Aktif (2)</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip relative" data-name="Tab">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[12px] whitespace-nowrap">Riwayat</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#eaf0f7] content-stretch flex gap-[4px] h-[38px] items-start overflow-clip p-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Tabs">
      <Tab />
      <Tab1 />
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[#fff1da] content-stretch flex flex-col items-start overflow-clip px-[9px] py-[4px] relative rounded-[999px] shrink-0" data-name="Status badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#e88b00] text-[10px] whitespace-nowrap">3 HARI LAGI</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="calendar">
          <path d={svgPaths.p99d9c00} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DueDate() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Due date">
      <Calendar />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[12px] whitespace-nowrap">Jatuh tempo 14 Sep 2026</p>
    </div>
  );
}

function ProgressTrack() {
  return (
    <div className="bg-[#eaf0f7] content-stretch flex flex-col h-[5px] items-start overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Progress track">
      <div className="bg-[#e88b00] h-[5px] relative rounded-[999px] shrink-0 w-[148px]" data-name="Progress" />
    </div>
  );
}

function LoanInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-w-px overflow-clip relative" data-name="Loan info">
      <StatusBadge />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#001d3d] text-[14px] w-[min-content]">Laut Bercerita</p>
      <DueDate />
      <ProgressTrack />
    </div>
  );
}

function LoanCard() {
  return (
    <div className="bg-white content-stretch flex gap-[14px] items-start overflow-clip p-[14px] relative rounded-[18px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-full" data-name="Loan card">
      <div className="h-[94px] relative rounded-[8px] shrink-0 w-[70px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgBookCover} />
      </div>
      <LoanInfo />
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="bg-[#e8f6ef] content-stretch flex flex-col items-start overflow-clip px-[9px] py-[4px] relative rounded-[999px] shrink-0" data-name="Status badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f8a5b] text-[10px] whitespace-nowrap">9 HARI LAGI</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="calendar">
          <path d={svgPaths.p99d9c00} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DueDate1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Due date">
      <Calendar1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[12px] whitespace-nowrap">Jatuh tempo 20 Sep 2026</p>
    </div>
  );
}

function ProgressTrack1() {
  return (
    <div className="bg-[#eaf0f7] content-stretch flex flex-col h-[5px] items-start overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="Progress track">
      <div className="bg-[#1f8a5b] h-[5px] relative rounded-[999px] shrink-0 w-[98px]" data-name="Progress" />
    </div>
  );
}

function LoanInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-w-px overflow-clip relative" data-name="Loan info">
      <StatusBadge1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#001d3d] text-[14px] w-[min-content]">Sains untuk Semua</p>
      <DueDate1 />
      <ProgressTrack1 />
    </div>
  );
}

function LoanCard1() {
  return (
    <div className="bg-white content-stretch flex gap-[14px] items-start overflow-clip p-[14px] relative rounded-[18px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-full" data-name="Loan card">
      <div className="h-[94px] relative rounded-[8px] shrink-0 w-[70px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgBookCover1} />
      </div>
      <LoanInfo1 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="clock">
          <path d={svgPaths.p1dbb2580} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Copy">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[12px]">1 permintaan menunggu persetujuan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[10px]">Periksa kembali beberapa saat lagi</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PickupRequest() {
  return (
    <div className="bg-[#fff7d1] content-stretch flex gap-[11px] items-center overflow-clip p-[14px] relative rounded-[12px] shrink-0 w-full" data-name="Pickup request">
      <Clock />
      <Copy />
      <ChevronRight />
    </div>
  );
}

function LoanContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip pt-[12px] px-[18px] relative w-full" data-name="Loan content">
      <Summary />
      <Tabs />
      <LoanCard />
      <LoanCard1 />
      <PickupRequest />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="house">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="house">
          <path d={svgPaths.p391ad370} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <House />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">Beranda</p>
    </div>
  );
}

function Library1() {
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
      <Library1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">Katalog</p>
    </div>
  );
}

function Clipboard() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="clipboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="clipboard">
          <path d={svgPaths.pec52f00} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <Clipboard />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[10px] whitespace-nowrap">Pinjaman</p>
      <div className="bg-[#ffc300] h-[3px] relative rounded-[999px] shrink-0 w-[18px]" data-name="Active indicator" />
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

export default function StatusPinjaman() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col items-start relative size-full" data-name="Status pinjaman">
      <StatusBar />
      <PageHeader />
      <LoanContent />
      <BottomNavigation />
    </div>
  );
}