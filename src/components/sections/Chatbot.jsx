"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey 👋 I’m Adarsh’s AI assistant. Ask me anything about skills, projects, or contact.",
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    "Who is Adarsh?",
    "What skills do you have?",
    "Show me your projects",
    "How can I contact you?",
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);

      setSuggestions(data.suggestions || []);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m not sure about that. Please connect with the admin.",
        },
      ]);
      setSuggestions(["How can I contact you?"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
        bg-gradient-to-tr from-indigo-500 to-purple-600 text-white
        shadow-xl flex items-center justify-center hover:scale-110 transition"
      >
        <MessageCircle />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px]">
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-neutral-900
            border dark:border-neutral-800 shadow-2xl flex flex-col">

            {/* Header */}
            <div className="px-4 py-3 border-b dark:border-neutral-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm flex items-center justify-center font-semibold">
                  AI
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Adarsh AI</h3>
                  <p className="text-xs text-neutral-500">
                    Portfolio Assistant
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[320px] scrollbar-hide">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center">
                      AI
                    </div>
                  )}

                  <div
                    className={`px-4 py-2 rounded-2xl text-sm max-w-[75%]
                    ${
                      msg.role === "user"
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-neutral-100 dark:bg-neutral-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center">
                    AI
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1 rounded-full
                    bg-neutral-200 dark:bg-neutral-700
                    hover:bg-black hover:text-white transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t dark:border-neutral-800 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                className="flex-1 px-3 py-2 text-sm rounded-lg
                border dark:border-neutral-700 bg-transparent outline-none"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading}
                className="p-2 rounded-lg bg-black text-white
                dark:bg-white dark:text-black"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
