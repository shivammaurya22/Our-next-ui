"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  isOwn: boolean
  avatar?: string
}

interface Contact {
  id: string
  name: string
  avatar?: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  unreadCount?: number
}

export default function ChatInterface() {
  const [selectedContact, setSelectedContact] = useState<string>("1")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Sarah Wilson",
      content: "Hey! How are you doing today?",
      timestamp: "10:30 AM",
      isOwn: false,
      avatar: "/woman-portrait.png",
    },
    {
      id: "2",
      sender: "You",
      content: "I'm doing great! Just working on some new projects. How about you?",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: "3",
      sender: "Sarah Wilson",
      content: "That sounds exciting! I'd love to hear more about what you're working on.",
      timestamp: "10:35 AM",
      isOwn: false,
      avatar: "/woman-portrait.png",
    },
  ])

  const [contacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Sarah Wilson",
      avatar: "/woman-portrait.png",
      lastMessage: "That sounds exciting! I'd love to hear...",
      timestamp: "10:35 AM",
      isOnline: true,
      unreadCount: 2,
    },
    {
      id: "2",
      name: "Mike Johnson",
      avatar: "/thoughtful-man.png",
      lastMessage: "See you tomorrow!",
      timestamp: "9:45 AM",
      isOnline: true,
    },
    {
      id: "3",
      name: "Team Design",
      avatar: "/diverse-team-meeting.png",
      lastMessage: "Alex: The mockups look great",
      timestamp: "Yesterday",
      isOnline: false,
      unreadCount: 5,
    },
    {
      id: "4",
      name: "Emma Davis",
      avatar: "/professional-woman.png",
      lastMessage: "Thanks for the help!",
      timestamp: "Yesterday",
      isOnline: false,
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "You",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const selectedContactData = contacts.find((c) => c.id === selectedContact)

  return (
    <div className="flex h-screen bg-slate-900">
      {/* Left Icon Sidebar */}
      <div className="w-16 bg-slate-800 flex flex-col items-center py-4 space-y-4 border-r border-slate-700">
        <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
        <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
        </button>
        <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7.5"
            />
          </svg>
        </button>
        <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </button>
        <div className="flex-1"></div>
        <Link
          href="/"
          className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          title="Logout"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </Link>
      </div>

      {/* Contacts Sidebar */}
      <div className="w-80 bg-slate-800 flex flex-col border-r border-slate-700">
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-white">Messages</h1>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-3 mb-2 cursor-pointer transition-colors hover:bg-slate-700 rounded-lg ${
                  selectedContact === contact.id ? "bg-orange-500" : "bg-transparent"
                }`}
                onClick={() => setSelectedContact(contact.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {contact.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-slate-800"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white truncate">{contact.name}</h3>
                      <span className="text-xs text-slate-400">{contact.timestamp}</span>
                    </div>
                    <p className="text-sm text-slate-400 truncate">{contact.lastMessage}</p>
                  </div>

                  {contact.unreadCount && (
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {contact.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-900">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-700 bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={selectedContactData?.avatar || "/placeholder.svg"}
                  alt={selectedContactData?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {selectedContactData?.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-slate-800"></div>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-white">{selectedContactData?.name}</h2>
                <p className="text-sm text-slate-400">
                  {selectedContactData?.isOnline ? "Online" : "Last seen recently"}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-2 text-indigo-400 hover:text-indigo-300 hover:bg-slate-700 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
              <button className="p-2 text-indigo-400 hover:text-indigo-300 hover:bg-slate-700 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                {!msg.isOwn && (
                  <img
                    src={msg.avatar || "/placeholder.svg"}
                    alt={msg.sender}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}

                <div className={`max-w-xs lg:max-w-md ${msg.isOwn ? "order-first" : ""}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      msg.isOwn ? "bg-purple-600 text-white ml-auto" : "bg-slate-700 text-white"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <p className={`text-xs text-slate-400 mt-1 ${msg.isOwn ? "text-right" : "text-left"}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-700 bg-slate-800">
          <div className="flex items-end gap-3">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>

            <div className="flex-1 relative">
              <input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              onClick={handleSendMessage}
              className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
