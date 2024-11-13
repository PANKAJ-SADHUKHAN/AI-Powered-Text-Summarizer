const axios = require('axios');
async function summarizeText(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });
  let config = {
    method: 'POST',
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <your_huggingface_access_token>'
    },
    data: data
  };
  try {
    const response = await axios.request(config);
    // Return the summary text from the response
    return response.data[0].summary_text;
  } catch (err) {
    console.log(err);
  }
}

module.exports = summarizeText;
