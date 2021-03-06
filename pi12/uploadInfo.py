from __future__ import print_function
import paho.mqtt.publish as publish
import psutil
import string
import commands

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

tempAmb = commands.getoutput('python tempsensor.py')
luminosidad = commands.getoutput('python luminosidad.py')
ponoLum=(float(luminosidad)/1024.0) * 100.0
porLum=100.0-ponoLum
# build the payload string.
payload = "field1=" + str(tempAmb) + "&field2=" + str(porLum)

# attempt to publish this data to the topic.
try:
  publish.single(topic, payload, hostname=mqttHost, transport=tTransport, port=tPort,auth={'username':mqttUsername,'password':mqttAPIKey})
  print ("  Temperatura =",tempAmb," Luminosidad =", porLum," Pulsador =", pulsador, " to host: " , mqttHost , " clientID= " , clientID)

except:
  print ("There was an error while publishing the data.")

