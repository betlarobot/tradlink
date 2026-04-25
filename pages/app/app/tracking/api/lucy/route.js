export async function POST(req) {
  const { message } = await req.json();

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();

    return Response.json({
      reply: data.choices[0].message.content
    });

  } catch {
    return Response.json({ reply: "Lucy error" });
  }
}
