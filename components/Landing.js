import React from 'react'
import Link from 'next/link'

export function Landing(){
  return (
    <div className="min-h-screen canvas-grid flex flex-col sm:flex-row items-center justify-center px-2 sm:px-6 w-full">
      <div className="max-w-full sm:max-w-4xl w-full text-center">
        <div className="liquid-glass p-4 sm:p-10 pb-6 sm:pb-8 shadow-xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-[#232946] drop-shadow-sm">Numeric Systems Shape the Cost and Capability of AI</h1>
          <p className="text-base sm:text-lg text-[#232946] mb-6 sm:mb-8">Explore how modern ML arithmetic behaves — and where it breaks.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-6 sm:mb-8 w-full">
            <Link href="/fundamentals" passHref legacyBehavior>
              <a className="w-full sm:w-auto">
                <button type="button" className="btn-primary min-w-[90px] sm:min-w-[140px] max-w-[120px] sm:max-w-[180px] text-base text-center whitespace-nowrap flex justify-center items-center px-2 sm:px-4 py-2 transition-all duration-200 w-full sm:w-auto">Explore Benchmarks</button>
              </a>
            </Link>
            <Link href="/summary" passHref legacyBehavior>
              <a className="w-full sm:w-auto">
                <button type="button" className="btn-ghost min-w-[90px] sm:min-w-[140px] max-w-[120px] sm:max-w-[180px] text-base text-center whitespace-nowrap flex justify-center items-center px-2 sm:px-4 py-2 transition-all duration-200 w-full sm:w-auto">Technical Summary</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 text-left card p-4 sm:p-8 rounded-2xl shadow-lg">
          <h3 className="font-semibold mb-2 text-[#232946]">Quick demo</h3>
          <p className="text-xs sm:text-sm text-[#232946]">This is a scaffold containing the app structure, global numeric selector, a numeric module, and sample static benchmark data. Replace the placeholder visualizations with D3/WebGL graphs to complete the brief.</p>
        </div>
      </div>
    </div>
  )
}
