function getCommonLetters(firstName, secondName) {
    let commonChars = 0;
    for (let i = 0; i < firstName.length; i++) {
        let char = firstName[i];
        if (secondName.includes(char)) {
            commonChars += 2;
            secondName.replace(char, "");
        }
    }
    return commonChars;
}

function getFlamesSecondMethod(remainingChars) {
    let flamesOrder = "FLAMES";

    for (let i = 0; i < 6; i++) {
        const indexToRemove = (remainingChars) % flamesOrder.length;
        console.log(flamesOrder);
        flamesOrder = flamesOrder.replace(flamesOrder[indexToRemove - 1], "");
    }

    return flamesOrder;
}
function getFlames(num) {
    num = num % 6;
    switch (num) {
        case 1:
            return "Friends";
        case 2:
            return "Love";
        case 3:
            return "Affection";
        case 4:
            return "Marriage";
        case 5:
            return "Enemy";
        case 0:
            return "Siblings";
        default:
            return "Please Enter valid input";
    }
}
export function getFlamesResult(name1, name2) {
    let firstName, secondName;
    // remove any whitespace character (spaces, tabs, newlines, etc.)
    if (name1.length < name2.length) {
        firstName = name1.toLowerCase().replace(/\s/g, "");
        secondName = name2.toLowerCase().replace(/\s/g, "");
    } else {
        firstName = name2.toLowerCase().replace(/\s/g, "");
        secondName = name1.toLowerCase().replace(/\s/g, "");
    }
    const totalChars = firstName.length + secondName.length;
    const commonChars = getCommonLetters(firstName, secondName);
    const remainingChars = totalChars - commonChars;
    return getFlames(remainingChars);
}