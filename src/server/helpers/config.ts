import "dotenv/config";

import { Env, Host } from "../types/constants";

const Config = {
	IS_PROD: <boolean>(process.env.NODE_ENV === Env.prod),
	PORT: <number>(parseInt(process.env.PORT) || 3000),
	HOST: <string>(process.env.NODE_ENV === Env.prod ? Host.prod : Host.dev)
};

export default Config;
