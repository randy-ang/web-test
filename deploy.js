var exec = require("child_process").exec;

exec("git push origin test && echo \"done pushing to test\"");