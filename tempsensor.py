tempfile = open("/sys/bus/w1/devices/28-00000996c252/w1_slave")
thetext = tempfile.read()
tempfile.close()
tempdata = thetext.split("\n")[1].split(" ")[9]
temperature = float(tempdata[2:])
temperature = temperature/1000
print temperature
