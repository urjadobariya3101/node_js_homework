const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { start } = require("repl");
const { emailService } = require("../services");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

