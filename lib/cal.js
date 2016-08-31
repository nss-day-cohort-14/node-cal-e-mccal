#!/usr/bin/env node

"use strict";

const {exec} = require("child_process");
const { createMonth } = require("./month");

createMonth();

// exec("/usr/bin/cal", (stdout) => {
//     console.log(stdout);
// })
