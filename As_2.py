from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.htm')

@app.route('/login', methods=['GET'])
def signin_form():
    return render_template('login.htm')

@app.route('/login', methods=['POST'])
def signin():
    # 需要从request对象读取表单内容：
    if request.form['username']=='admin' and request.form['password']=='password':
        return render_template('calendar.html')
    return render_template('error.htm')

if __name__ == '__main__':
    app.run()
