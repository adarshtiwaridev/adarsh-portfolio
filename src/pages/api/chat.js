import chatReplies from "@/data/chatReplies";

export default async function handler(req, res) {
  console.log("🔥 API HIT");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  const userMessage =
    messages?.[messages.length - 1]?.content
      ?.toLowerCase()
      ?.trim() || "";

  console.log("🧠 User message:", userMessage);

  // ================= 1️⃣ Greeting =================
  if (["hi", "hello", "hey"].includes(userMessage)) {
    return res.status(200).json({
      reply:
        "👋 Hi! I’m Adarsh Tiwari’s portfolio assistant. You can ask me about his skills, projects, experience, or contact details.",
      suggestions: [
        "Who is Adarsh?",
        "Show me your projects",
        "What skills do you have?",
      ],
      source: "greeting",
    });
  }

  // ================= 2️⃣ Data-based replies =================
  for (const item of chatReplies) {
    if (item.keywords.some((key) => userMessage.includes(key))) {
      console.log("⚡ Data reply used");
      return res.status(200).json({
        reply: item.reply,
        suggestions: item.suggestions || [],
        source: "data",
      });
    }
  }

  // ================= 3️⃣ Non-related question fallback =================
  return res.status(200).json({
    reply:
      "🙂 I mainly help with questions related to Adarsh Tiwari — his skills, projects, experience, and career. Feel free to ask about those!",
    suggestions: [
      "Who is Adarsh?",
      "Show me your projects",
      "How can I contact you?",
    ],
    source: "restricted",
  });
}
