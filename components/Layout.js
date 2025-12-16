import React from 'react'
import GlobalControls, { useSidebar, SidebarContext } from './GlobalControls'
import Header from './Header'

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  // Responsive: on mobile, overlay; on desktop, shift main content
  return (
    <SidebarContext.Provider value={{ open: sidebarOpen, setOpen: setSidebarOpen }}>
      <div className="min-h-screen flex flex-col w-full bg-white overflow-x-hidden">
        <Header />
        <div className="flex flex-1 relative w-full overflow-x-hidden">
          <main
            className={`flex-1 p-safe sm:p-6 max-w-full sm:max-w-7xl mx-auto transition-all duration-300 w-full flex flex-col items-center justify-center`}
            style={{ minHeight: 'calc(100vh - 64px)', paddingTop: '4.5rem' }}
          >
            <div className="canvas-grid p-safe sm:p-6 w-full max-w-full flex flex-col items-center justify-center">
              {children}
            </div>
          </main>
          <GlobalControls />
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
