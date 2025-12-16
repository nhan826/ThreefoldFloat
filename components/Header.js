import Link from 'next/link'

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 mx-auto z-50 bg-white/95 shadow-xl border-b border-slate-200/60 transition-all duration-500 rounded-none sm:rounded-full px-safe sm:px-8 py-2 flex flex-col sm:flex-row items-center justify-between max-w-full sm:max-w-4xl w-full sm:w-auto overflow-x-hidden" style={{backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)'}}>
      <div className="flex items-center justify-center w-full sm:w-auto gap-1 sm:gap-4">
        <span className="inline-flex items-center gap-1 sm:gap-2 w-full justify-center">
          <Link href="/" legacyBehavior>
            <a className="flex items-center group min-w-[70px] sm:min-w-[140px]">
              <img src="/logo.svg" alt="Logo" width={100} height={44} className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg max-h-10 w-[70px] sm:w-[140px] object-contain" />
            </a>
          </Link>
        </span>
      </div>
      <nav className="flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-end mt-1 sm:mt-0">
        <Link href="/benchmarks" legacyBehavior>
          <a className="text-[#232946] hover:text-indigo-600 px-3 py-2 text-[1rem] font-normal transition-colors duration-300 whitespace-nowrap rounded-md focus:outline-none w-full text-center">Benchmarks</a>
        </Link>
        <Link href="/summary" legacyBehavior>
          <a className="text-[#232946] hover:text-indigo-600 px-3 py-2 text-[1rem] font-normal transition-colors duration-300 whitespace-nowrap rounded-md focus:outline-none w-full text-center">Technical Summary</a>
        </Link>
        <Link href="/howto" legacyBehavior>
          <a className="text-[#232946] hover:text-indigo-600 px-3 py-2 text-[1rem] font-normal transition-colors duration-300 whitespace-nowrap rounded-md focus:outline-none w-full text-center">How To Use</a>
        </Link>
      </nav>
    </header>
  )
}
