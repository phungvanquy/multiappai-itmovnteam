
# MultiAppAI API Documentation

This document provides an overview of the MultiAppAI API endpoints, including request and response examples.

**Base URL:** `https://multiappai-api.itmovnteam.com/v1`

---

## Authentication

All API requests require an API key passed in the `Authorization` header as a Bearer token.

```
Authorization: Bearer $API_KEY
```

---

## 1. Get List of Models

Retrieve a list of available AI models supported by the API.

### Endpoint

`GET /models`

### Request Example

```bash
curl https://multiappai-api.itmovnteam.com/v1/models \
   -H "Authorization: Bearer $API_KEY"
```

## 2. Chat Completions

Engage in conversational AI interactions, with or without streaming capabilities.

### Endpoint

`POST /chat/completions`

### Headers

*   `Content-Type: application/json`
*   `Authorization: Bearer $API_KEY`

### Request Body

The request body is a JSON object with the following fields:

| Field      | Type      | Description                                                                                                                                                                                                                                                                | Required |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `model`    | `string`  | The ID of the model to use for the completion. Example: `gpt-4.1`.                                                                                                                                                                                                         | Yes      |
| `messages` | `array`   | A list of messages comprising the conversation so far. Each message is an object with `role` and `content`. <br> - `role`: Can be `developer`, `user`, `assistant`, etc. <br> - `content`: The text of the message.                                                           | Yes      |
| `stream`   | `boolean` | If `true`, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. Default `false`. | No       |

### Request Example (without streaming)

```bash
curl https://multiappai-api.itmovnteam.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "developer",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "stream": false
  }'
```

### Response Example

```json
{
  "id": "chatcmpl-B9MBs8CjcvOU2jLn4n570S5qMJKcT",
  "object": "chat.completion",
  "created": 1741569952,
  "model": "gpt-4.1-2025-04-14",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I assist you today?",
        "refusal": null,
        "annotations": []
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 19,
    "completion_tokens": 10,
    "total_tokens": 29,
    "prompt_tokens_details": {
      "cached_tokens": 0,
      "audio_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0,
      "audio_tokens": 0,
      "accepted_prediction_tokens": 0,
      "rejected_prediction_tokens": 0
    }
  },
  "service_tier": "default"
}
```

---

## 3. Text to Speech (Create Speech)

Convert text into natural-sounding speech.

### Endpoint

`POST /chat/completions`

**Note:** This endpoint is shared with Chat Completions. The functionality is determined by the `model` parameter.

### Headers

*   `Content-Type: application/json`
*   `Authorization: Bearer $API_KEY`

### Request Body

The request body is a JSON object with the following fields:

| Field   | Type     | Description                                                          | Required |
| :------ | :------- | :------------------------------------------------------------------- | :------- |
| `model` | `string` | The ID of the model to use for speech generation. Must be `tts-1`.   | Yes      |
| `input` | `string` | The text to be converted to speech.                                  | Yes      |
| `voice` | `string` | The voice to use for the speech. ( Supported voices are: `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`) | Yes      |

### Request Example

This example uses `--output speech.mp3` to save the binary audio response directly to a file.

```bash
curl https://multiappai-api.itmovnteam.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "tts-1",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
  }' \
  --output speech.mp3
```

### Response

The API returns a binary audio file (MP3 format).

---

## 4. Image Generation
Generate images from text prompts using AI models.
### Endpoint
`POST /images/generations`
### Headers
*   `Content-Type: application/json`
*   `Authorization: Bearer $API_KEY`
### Request Body
The request body is a JSON object with the following fields:
| Field | Type | Description | Required |
| :------ | :------- | :------------------------------------------------------------------- | :------- |
| `model` | `string` | The ID of the model to use for image generation. Example: `dall-e-3`. | Yes |
| `prompt` | `string` | A text description of the desired image(s). | Yes |
| `n` | `integer` | The number of images to generate. Defaults to `1`. | No |
| `size` | `string` | The size of the generated images. Example: `1024x1024`. (Supported sizes depend on the model; see the official OpenAI documentation for details) | No |
### Request Example
```bash
curl https://multiappai-api.itmovnteam.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "dall-e-3",
    "prompt": "A cute baby sea otter",
    "n": 1,
    "size": "1024x1024"
  }'
```
### Response Example
```json
{
  "created": 1713833628,
  "data": [
    {
      "b64_json": "..."
    }
  ],
  "usage": {
    "total_tokens": 100,
    "input_tokens": 50,
    "output_tokens": 50,
    "input_tokens_details": {
      "text_tokens": 10,
      "image_tokens": 40
    }
  }
}
```


