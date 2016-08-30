#!/usr/bin/env node

"use strict";

const { exec } = require("child_process");

exec("/usr/bin/cal", (err, stdout) => {
		console.log(stdout);
})
