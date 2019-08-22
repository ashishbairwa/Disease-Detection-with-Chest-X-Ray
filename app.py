
import os
from flask import Flask, render_template,request
app = Flask(__name__)

from inference import get_call_name

@app.route('/',methods=['GET','POST'])
def hello_world():
	if request.method=='GET':
		return render_template('index.html')
	if request.method=='POST':
		file=request.files['file']
		image=file.read()
		call_name=get_call_name(image_bytes=image)
		return render_template('result.html',dis=call_name)	
	

if __name__ == '__main__':
	app.run(debug=True,port=os.getenv('PORT',5000))
   
