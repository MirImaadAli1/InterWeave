from flask import Flask, redirect, render_template, request, session

# Configure application
app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():

    return render_template("home.html")

