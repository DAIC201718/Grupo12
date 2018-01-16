from __future__ import print_function
import paho.mqtt.publish as publish
import psutil
import string
from bluetooth import *
import commands

server_socket=BluetoothSocket( RFCOMM )

server_socket.bind(("", 4 ))
server_socket.listen(1)

client_socket, address = server_socket.accept()

data = client_socket.recv(1024)
#encender o apagar led
if data=='0':
        commands.getoutput('python /home/pi/led.py')
else:
        commands.getoutput('python /home/pi/ledoff.py')

string.alphanum='1234567890avcdefghijklmnopqrstuvwxyzxABCDEFGHIJKLMNOPQRSTUVWXYZ'

# The ThingSpeak Channel ID.
channelID = "396464"

# The Write API Key for the channel.
# Replace <YOUR-CHANNEL-WRITEAPIKEY> with your write API key.
writeAPIKey = "HWQ0W58OG3IM7OZM"

# The Hostname of the ThingSpeak MQTT broker.
mqttHost = "mqtt.thingspeak.com"

# You can use any Username.
mqttUsername = "iPers1"

# Your MQTT API Key from Account > My Profile.
mqttAPIKey ="N4V1TPINQQ2DIKJR"

tTransport = "websockets"
tPort = 80

# Create the topic string.
topic = "channels/" + channelID + "/publish/" + writeAPIKey

tempAmb = commands.getoutput('python /home/pi/tempsensor.py')
pulsador = data
luminosidad = commands.getoutput('python /home/pi/luminosidad.py')
ponoLum=(float(luminosidad)/1024.0) * 100.0
porLum=100.0-ponoLum
# build the payload string.
payload = "field1=" + str(tempAmb) + "&field2=" + str(porLum) + "&field3=" + str(pulsador)

# attempt to publish this data to the topic.
try:
	publish.single(topic, payload, hostname=mqttHost, transport=tTransport, port=tPort,auth={'username':mqttUsername,'password':mqttAPIKey})
	print ("  Temperatura =",tempAmb," Luminosidad =", porLum," Pulsador =", pulsador, " to host: " , mqttHost , " clientID= " , clientID)

except:
	print ("There was an error while publishing the data.")

client_socket.close()
server_socket.close()
commands.getoutput('python /home/pi/serverbotonbluetooth.py')

