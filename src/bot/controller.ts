import TelegramBot from "node-telegram-bot-api";
import { User } from "./User";
import { isAllowed, register } from "./Permission";

enum STATUS {
	NEXT_NAME,
	NEXT_EMAIL,
	NEXT_FAV_LANG,
}

type MessageDictionary = {
	[key: string]: {
		status: STATUS;
		value: {
			name?: string;
			email?: string;
			fav_lang?: string;
		};
	};
};

function init() {
	const bot = new TelegramBot(process.env.BOT_KEY as string, { polling: true });

	const messageDictionary: MessageDictionary = {};

	bot.on("message", (message) => {
		const sender_id = message.chat.id;
		if (isAllowed(sender_id)) {
			if (message.text?.startsWith("/register")) {
				let newid = message.text.split(" ")[1];
				register(Number.parseInt(newid));
				bot.sendMessage(
					sender_id,
					`El usuario de id ${newid} ha sido registrado!`
				);
			} else {
				bot.sendMessage(sender_id, "Hello World");
			}
		} else {
			bot.sendMessage(sender_id, "No puedo hablar contigo");
		}
	});
}

const BotController = { init };
export default BotController;
