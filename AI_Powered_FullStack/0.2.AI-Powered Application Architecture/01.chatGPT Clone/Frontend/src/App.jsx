import React from 'react'

import Sidebar from './Components/Sidebar/Sidebar'
import ChatHeader from './components/ChatHeader/ChatHeader'

function App() {
  return (
    <div className='app'>

      {/* side bar */}
      <Sidebar/>
      <main>
        {/* chatHeader */}
<ChatHeader/>
        {/* messageList */}

        {/* chatInput */}
      </main>
    </div>
  )
}

export default App


