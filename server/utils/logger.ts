import dayjs from "dayjs";
import logger from "pino";

const isDevelopment = "development";

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]")}"`,
  ...(isDevelopment === "development" && {
    transport: {
      target: "pino-pretty",
    },
  }),
});

export default log;
