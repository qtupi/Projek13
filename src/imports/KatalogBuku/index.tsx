import svgPaths from "./svg-amuzvszpon";
import imgBookCover from "./3d0dc2630fe1f8877678222d3adbe010c27752dd.png";
import imgBookCover1 from "./0549f0ff190397608c68b0d37b70e8aff17ba9d2.png";
import imgBookCover2 from "./7389aaf402e2ccc880a859e642d845494d9e5e5f.png";
import imgBookCover3 from "./81c41ff18c2e5113dd1930ac9f6e2728318158dc.png";

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

function Heart() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="heart">
          <path d={svgPaths.p7608100} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between overflow-clip px-[18px] relative shrink-0 w-full" data-name="Page header">
      <BrandMark />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[17px] whitespace-nowrap">Katalog Buku</p>
      <Heart />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#65758b] text-[14px]">Cari judul, penulis, atau ISBN</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-[#003566] content-stretch flex h-[34px] items-center overflow-clip px-[12px] relative rounded-[999px] shrink-0" data-name="Filter">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Semua</p>
    </div>
  );
}

function Filter1() {
  return (
    <div className="bg-white h-[34px] relative rounded-[999px] shrink-0" data-name="Filter">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">Pelajaran</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Filter2() {
  return (
    <div className="bg-white h-[34px] relative rounded-[999px] shrink-0" data-name="Filter">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">Fiksi</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Filter3() {
  return (
    <div className="bg-white h-[34px] relative rounded-[999px] shrink-0" data-name="Filter">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">Terbaru</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Sliders() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="sliders">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="sliders">
          <path d={svgPaths.p3b53ba80} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="bg-[#ffc300] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[34px]" data-name="Filter options">
      <Sliders />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Filters">
      <Filter />
      <Filter1 />
      <Filter2 />
      <Filter3 />
      <FilterOptions />
    </div>
  );
}

function ResultsHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Results heading">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[17px]">Semua buku</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[12px]">1.248 buku</p>
    </div>
  );
}

function BookCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[145px]" data-name="Book card">
      <div className="h-[188px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[145px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Laut Bercerita</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Leila S. Chudori</p>
    </div>
  );
}

function BookCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[145px]" data-name="Book card">
      <div className="h-[188px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[145px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover1} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Negeri 5 Menara</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Ahmad Fuadi</p>
    </div>
  );
}

function BookRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Book row">
      <BookCard />
      <BookCard1 />
    </div>
  );
}

function BookCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[145px]" data-name="Book card">
      <div className="h-[188px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[145px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover2} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Sains untuk Semua</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">R. Handayani</p>
    </div>
  );
}

function BookCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[145px]" data-name="Book card">
      <div className="h-[188px] relative rounded-[12px] shadow-[0px_6px_18px_0px_rgba(0,29,61,0.08)] shrink-0 w-[145px]" data-name="Book cover">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgBookCover3} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] min-w-full not-italic overflow-hidden relative shrink-0 text-[#001d3d] text-[12px] text-ellipsis w-[min-content]">Matematika XI</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#65758b] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap">Kemendikbud</p>
    </div>
  );
}

function BookRow1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Book row">
      <BookCard2 />
      <BookCard3 />
    </div>
  );
}

function BookGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Book grid">
      <BookRow />
      <BookRow1 />
    </div>
  );
}

function CatalogContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-clip pt-[10px] px-[18px] relative w-full" data-name="Catalog content">
      <SearchField />
      <Filters />
      <ResultsHeading />
      <BookGrid />
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

function Library() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="library">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="library">
          <path d={svgPaths.p36216980} id="Vector" stroke="#003566" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[64px]" data-name="Navigation item">
      <Library />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[10px] whitespace-nowrap">Katalog</p>
      <div className="bg-[#ffc300] h-[3px] relative rounded-[999px] shrink-0 w-[18px]" data-name="Active indicator" />
    </div>
  );
}

function Clipboard() {
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
      <Clipboard />
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

export default function KatalogBuku() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col items-start relative size-full" data-name="Katalog buku">
      <StatusBar />
      <PageHeader />
      <CatalogContent />
      <BottomNavigation />
    </div>
  );
}