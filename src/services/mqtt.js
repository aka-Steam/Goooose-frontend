import { createConditionalExpression } from "@vue/compiler-core";

// Используемые топики
var topic_test = "test/pub";
var topic_control = "device/";

let client;

export function startConnect() {
	// Генерируем случайный идентификатор клиента
	let clientID = "clientID-" + parseInt(Math.random() * 100);

	// Получаем имя хоста/IP-адрес, номер порта, имя пользователя и пароль для него из формы
	let host = import.meta.env.VITE_MQTT_HOST;
	let port = import.meta.env.VITE_MQTT_PORT;
	let user = import.meta.env.VITE_MQTT_USER;
	let pass = import.meta.env.VITE_MQTT_PASS;

	// Вывод сообщения для пользователя в div message
	console.log('Connecting to: ' + host + ' on port: ' + port);
	console.log('Using the following client value: ' + clientID);

	// Инициализируем новое клиентское соединение Paho
      client = new Paho.MQTT.Client(host, Number(port), clientID);

	// Устаналиваем обработчики обратного вызова
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;

	// Подключаем клиент, в случае успеха вызывается функция OnConnect
	client.connect({
		onSuccess: onConnect,
		userName: user,
		password: pass,
		useSSL: true//false
	});
}

// Вызывается, когда клиент подключается
function onConnect() {
	// Извлекаем топик длы подписки из формы брокера
	let topic = '#';

	// Вывод на печать для пользователя в разделе сообщений (messages div)
	console.log('Subscribing to: ' + topic);

	// Подписываемся на топик
	client.subscribe(topic);
	document.getElementById('mqtt-indicator').classList.add('conected');
}

// Вызывается, когда клиент теряет свое соединение
function onConnectionLost(responseObject) {
	console.log('ERROR: Connection lost');

	if (responseObject.errorCode !== 0) {
		console.log('ERROR: ' +  responseObject.errorMessage );
	}

	document.getElementById('mqtt-indicator').classList.remove('conected');
}

// Вызывается при поступлении сообщения
function onMessageArrived(message) {
	//console.log("onMessageArrived: " + message.payloadString);
	console.log('Topic: ' + message.destinationName + '  ~> ' + message.payloadString);
	if (message.destinationName == topic_test) {
		colsole.log("Wonderfully! Test data: " + message.payloadString );
	}
}

// Вызывается при нажатии кнопки отключения
export function startDisconnect() {
	client.disconnect();
	console.log('Disconnected');
}

// Вызывается при нажатии кнопки "полить"
export function onPump(device, device_item) {
	let message = new Paho.MQTT.Message(device_item +":pump:on");
	message.destinationName = topic_control + device + "/control";
	client.send(message);
}

// Вызывается при изменении состояния автоматического режима
export function autoModClick(device, device_item, automod) {
	let status = "0"
	let payload = device_item;
	if (automod) {
		payload = payload +":automod:on";

		// // Сохраняем состояние переключателя автоматического режима в БД
		// status = "checked"
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'actions/setAutomode.php',
		// 	data: "automode=" + status,
		// 	error: function (request, status, error) {
		// 		checkbox.checked = !checkbox.checked;
		// 		alert(request.responseText);
		// 		message = new Paho.MQTT.Message("0");
		// 	}
		// })
	} else {
		payload = payload +":automod:off";
		// status = ""
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'actions/setAutomode.php',
		// 	data: "automode=" + status,
		// 	error: function (request, status, error) {
		// 		checkbox.checked = !checkbox.checked
		// 		alert(request.responseText);
		// 		message = new Paho.MQTT.Message("1");
		// 	}
		// })
	}

	let message = new Paho.MQTT.Message(payload);
	message.destinationName = topic_control + device + "/control"
	client.send(message);
}

export function onHumidityThreshold(device, device_item, newValue){
	let status = "0"
	let payload = device_item + ":humidityThreshold:" + newValue;
	let message = new Paho.MQTT.Message(payload);
	message.destinationName = topic_control + device + "/control"
	client.send(message);
}
