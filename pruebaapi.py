
import urllib2,json
import commands

conn = urllib2.urlopen("http://api.openweathermap.org/data/2.5/weather?id=6362368&APPID=cbce3df7f6c25c424979af71d400c353")

response = conn.read()
print "http status code=%s" % (conn.getcode())
data=json.loads(response)
val=data['wind']['speed']
if val>='22':
	commands.getoutput("python /home/pi/clienbluetooth2.py")
