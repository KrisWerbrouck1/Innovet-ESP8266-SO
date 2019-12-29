#	Microcontroller als simpele webserver

In onderstaande voorbeeld wordt de microcontroller in het netwerk geplaatst. De microcontroller doet dienst als server om een webpagina weer te geven. Vul zeker het juist SSID en paswoord van het netwerk in.

```cpp 
#include "ESP8266WiFi.h"
#include "ESP8266WebServer.h"

ESP8266WebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin("WIFISSID", "WIFIPASSWORD");  //Connect to the WiFi network
  while (WiFi.status() != WL_CONNECTED) {  //Wait for connection
    delay(500);
    Serial.println("Waiting to connect…");
  }

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //Print the local IP
  server.on("/other", []() {   //Define the handling function for the path
    server.send(200, "text / plain", "Other URL");
  });
  server.on("/", handleRootPath);    //Associate the handler function to the path
  server.begin();                    //Start the server
  Serial.println("Server listening");
}

void loop() {
  server.handleClient();         //Handling of incoming requests
}

void handleRootPath() {            //Handler for the rooth path
  server.send(200, "text/plain", "Hello world");
}
```

Test het programma uit.

## Onderzoeksvragen

Wat is het nut van volgende stuk code:

```cpp 
while (WiFi.status() != WL_CONNECTED) {  
    delay(500);
    Serial.println("Waiting to connect…");
   }
```


Wat is het nut van volgende regel code:
```cpp 
Serial.println(WiFi.localIP());
```	

Waarvoor staat 80 in volgende regel code:
```cpp 
ESP8266WebServer server(80);
```	
Wanneer wordt de functie handleRootPath aangeroepen wordt.


Waarvoor staat ```cpp  server.send(200, "text / plain", "Other URL"); ```	

## Opdrachten
* Geef je naam weer op de webpagina.
*	Geef een analoge waarde afkomstig van een potentiometer weer op de webpagina. 
*	Maak gebruik van poort 8080 om een tekst weer te geven op de webserver. 

##	Gebruik HTML

In plaats van de info als plain text weer te geven op de webpagina kan ook gebruik gemaakt worden van HTML.

Voorbeeld van een webpagina in HTML 5 die ook geschikt is voor mobiele webpagina’s.

```html
<!doctype html>
<head>
<meta name='viewport' content='width=device-width,initial-
scale=1.0'>
<title>ESP 8266 webpagina</title>
</head> 
<body> 
<H1>Welcome page</H1> 
</body>
</html>
```	

Meer uitleg rond HTML kan je vinden op [W3 Schools](https://www.w3schools.com/html/default.asp)

```cpp
#include "ESP8266WiFi.h"
#include "ESP8266WebServer.h"

ESP8266WebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin("SSID", "Password");  //Connect to the WiFi network
  while (WiFi.status() != WL_CONNECTED) {  //Wait for connection
    delay(500);
    Serial.println("Waiting to connect…");
  }

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //Print the local IP
  server.on("/other", []() {   //Define the handling function for the path
    server.send(200, "text/html", "<!doctype html><head><meta name='viewport' content='width=device-width,initial-scale=1.0'><title>ESP 8266 webpagina</title></head> <body> <H1>Welcome page</H1>  </body></html>");
  });
  server.on("/", handleRootPath);    //Associate the handler function to the path
  server.begin();                    //Start the server
  Serial.println("Server listening");
}

void loop() {
  server.handleClient();         //Handling of incoming requests
}

void handleRootPath() {            //Handler for the rooth path
   server.send(200, "text/html", "<!doctype html><head><meta name='viewport' content='width=device-width,initial-scale=1.0'><title>ESP 8266 webpagina</title></head> <body> <H1>Welcome page</H1>  </body></html>");
 }
```
Test bovenstaande programma uit.

## Opdracht
*	Geef een analoge waarde afkomstig van een potentiometer weer op de webpagina. 

##	Aansturen actuatoren

Het is mogelijk om parameters mee te geven in een browser. Voorbeeld

```cpp 
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

ESP8266WebServer server(80);

int ledPin = 14;
bool ledState = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  WiFi.begin("SSID", "PASSWORD"); //Connect to the WiFi network

  while (WiFi.status() != WL_CONNECTED) { //Wait for connection
    delay(500);
    Serial.println("Waiting to connect…");
  }

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP()); //Print the local IP

  server.on("/on", turnOn);  //Associate the handler function to the path
  server.on("/off", turnOff);//Associate the handler function to the path
  server.on("/toggle", toggle);//Associate the handler function to the path

  server.begin(); //Start the server
  Serial.println("Server listening");
}

void loop() {
  server.handleClient();
}


void turnOn() {
  ledState = HIGH;
  digitalWrite(ledPin, ledState);
  server.send(200, "text / plain", "LED on");
}

void turnOff() {
  ledState = LOW;
  digitalWrite(ledPin, ledState);
  server.send(200, "text / plain", "LED off");
}

void toggle() {
  ledState = !ledState;
  digitalWrite(ledPin, ledState);
  server.send(200, "text / plain", "LED toggled");
}
```

Test bovenstaande programma uit.

## Opdracht
*	Stuur 2 leds aan via de webbrowser.
