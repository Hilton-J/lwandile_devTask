import dayjs from "dayjs";
import logger from "pino";

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]")}"`,
  transport: {
    target: "pino-pretty",
  },
});

export default log;
