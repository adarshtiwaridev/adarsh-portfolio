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
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);

      setSuggestions(data.suggestions || []);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Please contact Adarsh directly.",
        },
      ]);
      setSuggestions(["How can I contact you?"]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-gradient-to-tr from-indigo-500 to-purple-600
          text-white shadow-2xl
          flex items-center justify-center
          hover:scale-110 transition
        "
      >
        <MessageCircle />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px]">
          <div
            className="
              rounded-3xl overflow-hidden
              bg-white dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              shadow-2xl flex flex-col
            "
          >
            {/* Header */}
            <div className="px-4 py-3 border-b dark:border-neutral-800 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-white">
                    Adarsh AI
                  </p>
                  <p className="text-xs text-neutral-500">
                    Portfolio Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-neutral-500 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              className="
                flex-1 p-4 space-y-4
                overflow-y-auto max-h-[330px]
                no-scrollbar
              "
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      px-4 py-2 rounded-2xl text-sm max-w-[75%]
                      ${
                        msg.role === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <p className="text-xs text-neutral-400">
                  AI is typing…
                </p>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && !loading && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(item)}
                    className="
                      text-xs px-3 py-1.5 rounded-full
                      bg-indigo-50 dark:bg-neutral-800
                      text-indigo-600 dark:text-indigo-400
                      hover:bg-indigo-600 hover:text-white
                      transition
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Input + Send Button */}
            <div className="p-3 border-t dark:border-neutral-800">
              <div
                className="
                  flex items-center gap-2 px-3 py-2 rounded-full
                  bg-neutral-100 dark:bg-neutral-800
                  border border-neutral-300 dark:border-neutral-700
                  focus-within:ring-2 focus-within:ring-indigo-500
                  transition
                "
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type message & press Enter…"
                  className="
                    flex-1 text-sm bg-transparent outline-none
                    text-neutral-800 dark:text-white
                  "
                />

                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading}
                  className="
                    w-9 h-9 rounded-full
                    bg-gradient-to-tr from-indigo-500 to-purple-600
                    text-white flex items-center justify-center
                    hover:scale-105 active:scale-95 transition
                  "
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
    