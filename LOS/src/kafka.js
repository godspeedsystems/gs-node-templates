const { Kafka } = require("kafkajs");
const kafka = new Kafka({
	clientId: 'my_lending_kafka_service',
	brokers: ['localhost:29092'],
});

test().then(console.log).catch(console.log).then(async () => await consume())
async function test() {
	const producer = kafka.producer();
	await producer.connect();
	let result = await producer.send({
		topic: 'hello',
		messages: [{ value: 'mastersilv3r' }],
	});
	return result;
}

async function consume() {
	const consumer = kafka.consumer({ groupId: 'grpId1' });
	await consumer.subscribe({
		topic: 'hello',
		fromBeginning: true,
	});

	await consumer.run({
		eachMessage: async (messagePayload) => {
			const { message } = messagePayload;
			// let msgValue;
			// let status;
			// let data;
			// try {
			// 	msgValue = message?.value?.toString();
			// 	data = {
			// 		body: JSON.parse(msgValue || ''),
			// 	};
			// 	status = 200;
			// } catch (ex) {
			// 	console.error('errrrr %o', ex)
			// }
			console.log(messagePayload.message.value.toString());
		},
	});
}
