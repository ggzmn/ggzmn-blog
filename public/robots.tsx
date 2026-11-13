# Rights Reserved 2026 - Made by Gaby
User-agent: *
Content-Signal: search=yes,ai-train=no,ai-input=yes,use=reference

# 1. Blocking AI Agents (Crawlers that scrape content for training AI models)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: anthropic-ai
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Bytespider
User-agent: DeepSeekBot
User-agent: KimiBot
User-agent: PetalBot
User-agent: Baiduspider
User-agent: meta-externalagent
User-agent: Amazonbot
User-agent: Diffbot
User-agent: cohere-ai
User-agent: MistralAI-Training
Disallow: /

-# 1.1 Others Chinese Search Engines
-User-agent: Sogou Spider
-User-agent: Sogou web spider
-User-agent: Bytespider
-User-agent: Kimi-User
-User-agent: YisouSpider
-Disallow: /


# 2. Allowing AI Agents (Crawlers that do not scrape content for training AI models)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: MistralAI-Index
User-agent: MistralAI-User
User-agent: Google-NotebookLM
Allow: /

# 3. Allowing all other crawlers (Search engines, etc.)
User-agent: *
Allow: /

Sitemap: https://madebygaby.dev
