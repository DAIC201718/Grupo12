from bluetooth import *

# Create the client socket
client_socket=BluetoothSocket( RFCOMM )

client_socket.connect(("B8:27:EB:14:1E:71", 3))

client_socket.send("3")

print "Finished"

client_socket.close()

