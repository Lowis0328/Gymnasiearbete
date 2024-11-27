import os
from flask import Flask, render_template
from dotenv import load_dotenv
import cohere

load_dotenv()

co = cohere.ClientV2(api_key=os.getenv('API_KEY'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/openAi_API_call/<string:input>')
def openAi_API_call(input):
    response = co.chat(
        model="command-r-plus",
        messages=[{"role": "user", "content": input}]
    )
    return response.message.content[0].text

@app.route('/openAi_API')
def openAi_API():
    return render_template("Ai-Chat.html")

if __name__ == '__main__':
    app.run(debug=True)