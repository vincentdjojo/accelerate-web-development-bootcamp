function uefaEuro2016(teams, score) {
    var winTeam;
    if(score[0]>score[1]){
        winTeam = teams[0];
    } else if (score[1]>score[0]){
        winTeam = teams[1];
    } else {
        winTeam = null;
    }
    var resultStr = `At match ${teams[0]} - ${teams[1]}, `;
    if(winTeam ===null){  // handle draw case
        resultStr += "teams played draw.";
    } else { // otherwise
        resultStr += `${winTeam} won!`;
    }
    return resultStr;
}

// the function should result in
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])) // "At match Portugal - Iceland, teams played draw."