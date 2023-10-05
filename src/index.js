import { translate } from "./translator";
import { responseToAssistant } from "./util";
import { initEnv } from "./env";

export default {
    async fetch(request, env) {
        console.log(`Recieved request on Translator`)
        initEnv(env)
        try {
            const body = await request.json();
            const text = body.message.text;
            console.log(`Text: ${text}`)
            const translated = await translate(env, text)
            console.log(`Translated Message: ${translated}`)
            return responseToAssistant(translated);
        } catch (e) {
            console.error(e);
            return responseToAssistant(JSON.stringify(e, null, 2));
        }
    },
};

