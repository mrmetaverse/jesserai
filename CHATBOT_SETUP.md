# Chatbot Setup Instructions

The JesseRai website includes an intelligent AI chatbot powered by OpenAI and LangChain that can:
- Answer questions about services and pricing
- Help book appointments conversationally  
- Provide salon information (location, hours, stylists)
- Make recommendations based on customer needs

## Setup for Production

### 1. Get an OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (you won't be able to see it again!)

### 2. Add to Vercel

1. Go to your Vercel dashboard
2. Select the `jesserai` project
3. Go to Settings → Environment Variables
4. Add a new variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key
   - **Environment**: Production (and Preview if desired)
5. Click "Save"
6. Redeploy the site for changes to take effect

### 3. Local Development (Optional)

For local testing:

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```

3. Restart your development server

## Demo Mode

The chatbot will work in "demo mode" without an API key, showing a helpful message. For full functionality with AI responses, the API key must be configured.

## Features

- **Context-Aware**: Knows all about JesseRai salon, services, pricing, and staff
- **Conversational Booking**: Can help customers find and book appointments naturally
- **iMessage-Style UI**: Clean, familiar interface with brand colors
- **Scissors Icon**: Shows scissors emoji (✂️) when closed
- **Mobile Responsive**: Works beautifully on all devices

## Cost

OpenAI charges per token used. The chatbot uses GPT-4o-mini which is very cost-effective:
- ~$0.15 per 1M input tokens
- ~$0.60 per 1M output tokens

Typical conversation costs less than $0.01.
