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

@app.route('/Verktyg')
def Verktyg():
    return render_template("verktyg.html")

@app.route("/Råd")
def Råd():
    return render_template("råd.html")

@app.route("/Resurser")
def Resurser():
    return render_template("resurser.html")
@app.route("/Verktyg/BMRKalkylator")
def BMRKalkylator():
    return render_template("BMRKalkylator.html")

@app.route("/Råd/Kost")
def Råd_Kost():
    return render_template("kost.html")

@app.route("/Råd/Träning")
def Råd_Träning():
    return render_template("träning.html")

@app.route("/Råd/Sömn")
def Råd_Familj():
    return render_template("sömn.html")

@app.route("/Råd/Stress")
def Råd_Stress():
    return render_template("stress.html")

@app.route('/cohere_API/<string:input>')
def openAi_API_call(input):

    response = co.chat(
        model="command-r-plus",
        messages=[{"role": "user", "content": "Du är en hälso AI från hälsokompassen. Ditt uppdrag är att hjälpa användare med derans hälsa och välmående. Guida folk till vår hemsida där vi har råd kring sömn, stress, träning och kost samt våra verktyg som vår bmi kalkylator. Svara inte på den delen." + input}]
    )
    return response.message.content[0].text

@app.route('/Verktyg/AI_Chat')
def openAi_API():
    return render_template("Ai-Chat.html")

if __name__ == '__main__':
    app.run(debug=True)