module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if ((str[i] === bracketsConfig[j][0])&&(bracketsConfig[j][0]!==bracketsConfig[j][1])) {
                stack.push(str[i]);
               
            }
            if ((str[i] === bracketsConfig[j][0])&&(bracketsConfig[j][0]===bracketsConfig[j][1])) {
                let count=0;
                for (let z=0; z<stack.length;z++) {
                    if (stack[z]===str[i])count++;
                }

                if ((stack.length === 0)||(count===0)) stack.push(str[i]); else {
                    if (stack[stack.length - 1] === str[i]) stack.pop();
                    if (stack[stack.length - 1] === str[i]) stack.push(str[i]);
                }
            }
            if ((str[i] === bracketsConfig[j][1])&&(bracketsConfig[j][0]!==bracketsConfig[j][1])) {
                if (stack.length === 0) {
                    return false;
                };
                let bracket = stack.pop();

                if (bracket !== bracketsConfig[j][0]) {
                    return false;
                }
            }
        };
    }
    if (stack.length === 0)
        return true;
    else return false;
};
