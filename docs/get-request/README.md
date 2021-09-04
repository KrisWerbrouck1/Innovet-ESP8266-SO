#	GET request

Via een GET request kan informatie meegegeven worden aan de server. 
Een GET request ziet er als volgt uit:
[http://www.sensor-cube.be/opleidingiot/formget.php?naam=test](http://www.sensor-cube.be/opleidingiot/formget.php?naam=test) 
In bovenstaande voorbeeld is het argument test. Het php bestand zal antwoorden op deze request.

Test onderstaande programma
```cpp 
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "SSID";
const char* password = "Password";

void setup () {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting..");
  }
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    WifiClient client;
    HTTPClient http;  //Declare an object of class HTTPClient
    http.begin(client,"http://jsonplaceholder.typicode.com/users/1");  //Specify request destination
    int httpCode = http.GET();                                                                  //Send the request
    Serial.print("HttpCode:");
    Serial.println(httpCode);
    if (httpCode > 0) { //Check the returning code
      String payload = http.getString();   //Get the request response payload
      Serial.println(payload);             //Print the response payload
    }
    http.end();   //Close connection
  }
  delay(30000);    //Send a request every 30 seconds
}
```

In de voorbeeldcode komt een json notatie terug.

##	JSON

JSON of JavaScript Object Notation is een gestandaardiseerd gegevensformaat. JSON wordt hoofdzakelijk gebruikt voor gegevensuitwisseling tussen server en webapplicatie.
Voorbeeld:
```json
[ { 
    "Naam": "JSON",
    "Type": "Gegevensuitwisselingsformaat",
    "isProgrammeertaal": false,
    "Zie ook": [ "XML", "ASN.1" ] 
  },
  { 
    "Naam": "JavaScript",
    "Type": "Programmeertaal",
    "isProgrammeertaal": true,
    "Jaar": 1995 
  } 
]
```
Meestal wordt de JSON-string niet mooi weergegeven. Zie onderstaande voorbeeld:
```json
[{"status":{"data":"JSON","json":"ok","sensordata":"succes 2-2-0"},"count":2,"output": [{"data":"3","status":"0"},{"data":"4","status":"3"}]}]
```

Met [www.jsonlint.com](www.jsonlint.com) kan de JSON-string gecontroleerd worden op correctheid en leesbaar weergegeven worden.
```json
[{
	"status": {
		"data": "JSON",
		"json": "ok",
		"sensordata": "succes 2-2-0"
	},
	"count": 2,
	"output": [{
		"data": "3",
		"status": "0"
	}, {
		"data": "4",
		"status": "3"
	}]
}]
```

## Opdrachten
*	Roep iedere 5 seconden via een GET request het bestand formget.php aan. Geef iedere maal een andere waarde mee. Vb: 1,2,3, … http://www.sensor-cube.be/opleidingiot/formget.php?naam=test 
*	Verstuur om de 10 seconden een eigen dweet. Meer info kan je vinden op http://dweet.io/ De ESP8266 kan enkel gebruik maken van http, niet van https. Hou hier rekening mee. Geef het resultaat met freeboard eventueel weer.
