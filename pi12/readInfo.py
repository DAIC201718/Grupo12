#!/usr/bin/env python
import urllib2,json
import commands

READ_API_KEY='36RN3KRNK3DGZTLH'
CHANNEL_ID='396464'
valor="Nada"
while 1:
    conn = urllib2.urlopen("http://api.thingspeak.com/channels/%s/feeds/last.json?api_key=%s" \
                           % (CHANNEL_ID,READ_API_KEY))

    response = conn.read()
    print "http status code=%s" % (conn.getcode())
    data=json.loads(response)
    motor=data['field5']
    valorp=data['field5']
    if valorp!=valor:
	valor=valorp
    	if motor!="None":
    		if motor=="1":
			commands.getoutput('python /home/pi/clienbluetooth.py')
		elif motor=="2":
			commands.getoutput('python /home/pi/clienbluetooth2.py')
    print data['field5'],data['created_at']
    conn.close()




