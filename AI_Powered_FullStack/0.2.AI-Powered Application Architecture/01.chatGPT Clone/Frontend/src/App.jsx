import React from 'react'

import Sidebar from './Components/Sidebar/Sidebar'
import ChatHeader from './components/ChatHeader/ChatHeader'
import ChatMessage from './components/ChatMessage/ChatMessage';

function App() {
  return (
    <div className='app'>

      {/* side bar */}
      <Sidebar/>
      <main className='main'>
        {/* chatHeader */}
<ChatHeader/>
        {/* messageList */}
    <ChatMessage/>
        {/* chatInput */}
      </main>
    </div>
  )
}

export default App


