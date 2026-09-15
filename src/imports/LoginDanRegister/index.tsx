import svgPaths from "./svg-yslfbfl8q8";

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

function BookOpen() {
  return (
    <div className="absolute left-[214px] size-[145px] top-[56px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="145" preserveAspectRatio="none" viewBox="0 0 145 145" width="145">
        <g id="book-open" opacity="0.18">
          <path d={svgPaths.p2afe500} id="Vector" stroke="#FFD60A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BookOpen1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="book-open">
          <path d={svgPaths.p3a694420} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#ffc300] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Logo">
      <BookOpen1 />
    </div>
  );
}

function WelcomeCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pt-[42px] px-[24px] relative shrink-0 w-full" data-name="Welcome copy">
      <Logo />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">Pustaka Pintar</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#d9e8f7] text-[14px] w-[270px]">Jelajahi pengetahuan, pinjam buku, dan baca di mana saja.</p>
    </div>
  );
}

function WelcomePanel() {
  return (
    <div className="bg-[#003566] content-stretch flex flex-col h-[260px] items-start overflow-clip relative shrink-0 w-full" data-name="Welcome panel">
      <StatusBar />
      <BookOpen />
      <WelcomeCopy />
    </div>
  );
}

function FormHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Form heading">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#001d3d] text-[22px]">Selamat datang!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#65758b] text-[14px]">Masuk menggunakan akun siswa kamu.</p>
    </div>
  );
}

function UserRound() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="user-round">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="user-round">
          <path d={svgPaths.p1be63f60} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <UserRound />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[14px] whitespace-nowrap">Masukkan email atau NIS</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function FormField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Form field">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">Email atau NIS</p>
      <Input />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="lock">
          <path d={svgPaths.p3faee280} id="Vector" stroke="#65758B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Lock />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[14px] whitespace-nowrap">••••••••</p>
      </div>
      <div aria-hidden className="absolute border border-[#dde5ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function FormField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Form field">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[12px] whitespace-nowrap">Kata sandi</p>
      <Input1 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="arrow-right">
          <path d={svgPaths.pf1ad700} id="Vector" stroke="#001D3D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#ffc300] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Primary button">
      <ArrowRight />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001d3d] text-[14px] whitespace-nowrap">Masuk</p>
    </div>
  );
}

function Line() {
  return <div className="bg-[#dde5ef] flex-[1_0_0] h-px min-w-px relative" data-name="Line" />;
}

function Line1() {
  return <div className="bg-[#dde5ef] flex-[1_0_0] h-px min-w-px relative" data-name="Line" />;
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Divider">
      <Line />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#65758b] text-[12px] whitespace-nowrap">atau</p>
      <Line1 />
    </div>
  );
}

function RegisterButton() {
  return (
    <div className="h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Register button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[14px] whitespace-nowrap">Daftar akun baru</p>
      </div>
      <div aria-hidden className="absolute border border-[#003566] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AuthenticationForm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip pb-[22px] pt-[26px] px-[24px] relative w-full" data-name="Authentication form">
      <FormHeading />
      <FormField />
      <FormField1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003566] text-[12px] text-right w-full">Lupa kata sandi?</p>
      <PrimaryButton />
      <Divider />
      <RegisterButton />
    </div>
  );
}

export default function LoginDanRegister() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Login dan register">
      <WelcomePanel />
      <AuthenticationForm />
    </div>
  );
}