import sys
value=int(float(sys.argv[1])*.2046)
if value>1023:
	value=1023
sys.stdout.write(str(value) )

