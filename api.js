export default function handler(req, res) {
  const symbols = ["🍒","🍋","🔔","⭐"];
  const s1 = symbols[Math.floor(Math.random()*symbols.length)];
  const s2 = symbols[Math.floor(Math.random()*symbols.length)];
  const s3 = symbols[Math.floor(Math.random()*symbols.length)];

  let image = "https://i.imgur.com/J5LVHEL.png";
  let button = "Spin Again 🎰";
  let postUrl = "/api";

  if (s1===s2 && s2===s3) {
    image = "https://i.imgur.com/8Qf0ZQk.png";
    button = "Claim Reward 🎁";
    postUrl = "https://zora.co/collect/zora:0x6d4c8b8edda44cc3e6f70d1358bc233e5fbd1780/1?referrer=0xbc2876d3daf733e94890e6f82795716c9146a396";
  }

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:button:1" content="${button}" />
      <meta property="fc:frame:post_url" content="${postUrl}" />
      <meta property="fc:frame:input:text" content="${s1} | ${s2} | ${s3}" />
    </head>
    </html>
  `);
}
