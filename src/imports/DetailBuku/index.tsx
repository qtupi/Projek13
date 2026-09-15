import svgPaths from "./svg-pkru2brdgc";
import imgBookCover from "./6c7f136df232e5c8bc78f6ab07d66d5d6f68a397.png";

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

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="arrow-left">
          <path d={svgPaths.p3d61df00} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="share">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="share">
          <path d={svgPaths.p2f9f9580} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between overflow-clip px-[18px] relative shrink-0 w-full" data-name="Page header">
      <ArrowLeft />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[17px] whitespace-nowrap">Detail Buku</p>
      <Share />
    </div>
  );
}

function Availability() {
  return (
    <div className="bg-[#e8f6ef] content-stretch flex flex-col items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-name="Availability">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f8a5b] text-[10px] whitespace-nowrap">TERSEDIA</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC300" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Rating">
      <Star />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">4.8</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[10px] whitespace-nowrap">(126 ulasan)</p>
    </div>
  );
}

function BookInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Book info">
      <Availability />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#001d3d] text-[22px] w-[min-content]">Laut Bercerita</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#003566] text-[14px] whitespace-nowrap">Leila S. Chudori</p>
      <Rating />
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#65758b] text-[12px] w-[min-content]">
        <p className="leading-[1.5] mb-0">Fiksi • 379 halaman</p>
        <p className="leading-[1.5]">Kepustakaan Populer Gramedia</p>
      </div>
    </div>
  );
}

function BookOverview() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full" data-name="Book overview">
      <div className="h-[180px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[132px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover} />
      </div>
      <BookInfo />
    </div>
  );
}

function Statistic() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[92px]" data-name="Statistic">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[10px]">Bahasa</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[12px]">Indonesia</p>
    </div>
  );
}

function Statistic1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[92px]" data-name="Statistic">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[10px]">Terbit</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[12px]">2017</p>
    </div>
  );
}

function Statistic2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[92px]" data-name="Statistic">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[10px]">Stok</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[12px]">3 buku</p>
    </div>
  );
}

function BookStatistics() {
  return (
    <div className="[word-break:break-word] bg-[#f7f9fc] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip py-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-name="Book statistics">
      <Statistic />
      <Statistic1 />
      <Statistic2 />
    </div>
  );
}

function Synopsis() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full" data-name="Synopsis">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#001d3d] text-[17px] whitespace-nowrap">Sinopsis</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#65758b] text-[14px] w-[min-content]">Kisah persahabatan, cinta, keluarga, dan kehilangan para aktivis mahasiswa pada masa penuh gejolak. Sebuah cerita tentang keberanian untuk bersuara dan ingatan yang tak pernah padam.</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003566] text-[12px] whitespace-nowrap">Baca selengkapnya</p>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="info">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="info">
          <path d={svgPaths.p38022fc0} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LoanNote() {
  return (
    <div className="bg-[#fff7d1] content-stretch flex gap-[10px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Loan note">
      <Info />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-px not-italic relative text-[#001d3d] text-[12px]">Masa pinjam 7 hari. Ambil buku di meja sirkulasi setelah permintaan disetujui.</p>
    </div>
  );
}

function HeartOff() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="heart-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="heart-off">
          <path d={svgPaths.p22d36100} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function FavoriteButton() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-[50px]" data-name="Favorite button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <HeartOff />
      </div>
      <div aria-hidden className="absolute border border-[#003566] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BookPlus() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="book-plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="book-plus">
          <path d={svgPaths.p11391d00} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#ffc300] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Primary button">
      <BookPlus />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[14px] whitespace-nowrap">Pinjam buku fisik</p>
    </div>
  );
}

function LoanButtonContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Loan button container">
      <PrimaryButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Actions">
      <FavoriteButton />
      <LoanButtonContainer />
    </div>
  );
}

function DetailContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip pb-[18px] pt-[10px] px-[20px] relative w-full" data-name="Detail content">
      <BookOverview />
      <BookStatistics />
      <Synopsis />
      <LoanNote />
      <Actions />
    </div>
  );
}

export default function DetailBuku() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Detail buku">
      <StatusBar />
      <PageHeader />
      <DetailContent />
    </div>
  );
}