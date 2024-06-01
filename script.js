class Team{
    #position
    #matchesPlayed
    #matchesWon
    #matchesDraw
    #matchesLost
    #goalsScored
    #goalsConceded
    #GoalsDifference
    #name
    #points


    constructor( name, matchesPlayed,
                 macthesWon, matchesDraw,
                 goalsScored, goalsConceded) {

        this.#matchesPlayed=matchesPlayed
        this.#matchesWon=macthesWon
        this.#matchesDraw=matchesDraw
        this.#matchesLost=this.#matchesPlayed-(this.#matchesWon+this.#matchesDraw)
        this.#goalsScored=goalsScored
        this.#goalsConceded=goalsConceded
        this.#GoalsDifference=this.#goalsScored-this.#goalsConceded
        this.#name = name;
        this.#points = (this.#matchesWon*3+this.#matchesDraw);


    }
    get position(){
        return this.#position;
    }
    set position(position){
        this.#position=position;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get points() {
        return this.#points;
    }

    set points(value) {
        this.#points = value;
    }


    get matchesPlayed() {
        return this.#matchesPlayed;
    }

    set matchesPlayed(value) {
        this.#matchesPlayed = value;
    }

    get matchesWon() {
        return this.#matchesWon;
    }
    set matchesWon(value) {
        this.#matchesWon = value;
    }

    get matchesDraw() {
        return this.#matchesDraw;
    }

    set matchesDraw(value) {
        this.#matchesDraw = value;
    }
    set matchesLost(matchesLost){
        this.#matchesLost=matchesLost
    }
    get matchesLost(){
        return this.#matchesLost
    }
    get goalsScored() {
        return this.#goalsScored;
    }

    set goalsScored(value) {
        this.#goalsScored = value;
    }

    get goalsConceded() {
        return this.#goalsConceded;
    }

    set goalsConceded(value) {
        this.#goalsConceded = value;
    }


    get goalsDifference() {
        return this.#GoalsDifference;
    }

    set goalsDifference(value) {
        this.#GoalsDifference = value;
    }
}

let teams=[]
//    let lechia = new Team('Lechia Gdańsk', 34, 21, 5,  60, 34)
// let gieksa = new Team('GKS Katowice',  34, 18, 8,  68, 35)
// let arka = new Team('Arka Gdynia',  34, 18, 8,  52, 34)
// let motor =  new Team('Motor Lublin',  34, 16, 8,  49, 42)
// let gornnik =  new Team('Górnik Łęczna',  34, 14, 13,  35, 29)
// let odra =  new Team('Odra Opole',  34, 15, 8,  42, 32)
// let wisla =    new Team('Wisła Płock',  34, 14, 9,  46, 46)
// let miedz =   new Team('Miedź Legnica',  34, 13, 12,  52, 36)
// let gksTychy =    new Team('GKS Tychy',  34, 16, 3,  43, 47)
// let wislaK =   new Team('Wisła Kraków',  34, 13, 11,  62, 50)
// let stal =   new Team('Stal Mielec',  34, 14, 6,  53, 60)
// let chrobry =   new Team('Chrobry Głogów',  34, 11, 9,  35, 49)
// let znicz =   new Team('Znicz Pruszków',  34, 12, 6,  34, 44)
// let brukBet =   new Team('Bruk-Bet Termalica Nieciecza', 34, 10, 11,  56, 52)
// let polonia =   new Team('Polonia Warszawa',  34, 8, 8,  41, 50)
// let resovia =    new Team('Resovia Rzeszów',  34, 9, 7,  39, 60)
// let podbeskidzie =   new Team('Podbeskidzie Bielsko-Biała',  34, 11, 5,  26, 59)
// let zaglebie =  new Team('Zagłębie Sosnowiec',  34, 2, 10,  21, 55)
let lechia = new Team('Lechia Gdańsk', 0, 0, 0,  0, 0)
let gieksa = new Team('GKS Katowice',  0, 0, 0,  0, 0)
let arka = new Team('Arka Gdynia',  0, 0, 0,  0, 0)
let motor =  new Team('Motor Lublin',  0, 0, 0,  0, 0)
let gornnik =  new Team('Górnik Łęczna',  0, 0, 0,  0, 0)
let odra =  new Team('Odra Opole',  0, 0, 0,  0, 0)
let wisla =    new Team('Wisła Płock',  0, 0, 0,  0, 0)
let miedz =   new Team('Miedź Legnica',  0, 0, 0,  0, 0)
let gksTychy =    new Team('GKS Tychy',  0, 0, 0,  0, 0)
let wislaK =   new Team('Wisła Kraków',  0, 0, 0,  0, 0)
let stal =   new Team('Stal Mielec',  0, 0, 0,  0, 0)
let chrobry =   new Team('Chrobry Głogów',  0, 0, 0,  0, 0)
let znicz =   new Team('Znicz Pruszków',  0, 0, 0,  0, 0)
let brukBet =   new Team('Bruk-Bet Termalica Nieciecza', 0, 0, 0,  0, 0)
let polonia =   new Team('Polonia Warszawa',  0, 0, 0,  0, 0)
let resovia =    new Team('Resovia Rzeszów',  0, 0, 0,  0, 0)
let podbeskidzie =   new Team('Podbeskidzie Bielsko-Biała',  0, 0, 0,  0, 0)
let zaglebie =  new Team('Zagłębie Sosnowiec',  0, 0, 0,  0, 0)

teams.push(
    lechia,
    gieksa,
    arka,
    motor,
    gornnik,
    odra,
    wisla,
    miedz,
    gksTychy,
    wislaK,
    stal,
    chrobry,
    znicz,
    brukBet,
    polonia,
    resovia,
    podbeskidzie,
    zaglebie
)



function sortTeams(teams){

    function countSumOfPoints(teams){
        let sum = 0
        for (const team of teams) {
            sum+=team.points
        }
        return sum
    }
    let sumOfPoints = countSumOfPoints(teams)
    if(sumOfPoints===0){
        teams.sort((a, b)=>a.name.localeCompare(b.name)).forEach((team, index)=>team.position=index+1)
    }
    else {
        teams.sort((a, b) => b.points - a.points).forEach((team, index) => {
            team.position = index + 1
        })
    }

}
function display(teams){
    teams.forEach(team=>{
        console.log(`${team.position} ${team.name} RM:${team.matchesPlayed} W: ${team.matchesWon} R: ${team.matchesDraw}  P: ${team.matchesLost} BZ: ${team.goalsScored} BS: ${team.goalsConceded} RB: ${team.goalsDifference} PKT: ${team.points}`)
    })
}
function createTable(){
    let table = document.createElement('table');
    let header = document.createElement('tr')
    let headers = ['pozycja', 'klub','RM', 'W', 'R', 'P', 'BZ', 'BS', 'RB', 'Pkt']
    headers.forEach(headerText=>{
        let th = document.createElement('th')
        th.appendChild(document.createTextNode(headerText))
        header.appendChild(th)
    })
    table.appendChild(header)
    teams.forEach(team=>{
        let tr = document.createElement('tr')
        let properties = [
            team.position,
            team.name,
            team.matchesPlayed,
            team.matchesWon,
            team.matchesDraw,
            team.matchesLost,
            team.goalsScored,
            team.goalsConceded,
            team.goalsDifference,
            team.points
        ]
        properties.forEach(property=>{
            let td = document.createElement('td')
            td.appendChild(document.createTextNode(property))
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })

    document.body.appendChild(table)
}

function createMatch(teams){
    function createHomeDiv(homeTeam, homeIndex) {
        let homeTeamDiv = document.createElement('div')
        homeTeamDiv.setAttribute('class', 'home-team-div')
        homeTeamDiv.textContent = `Home: ${homeTeam.name}`
        homeTeamDiv.setAttribute('data-team-index', homeIndex)
        return homeTeamDiv;
    }
    function createInput(valueOfPlaceHolder, classValue) {
        let scoreInput = document.createElement('input');
        scoreInput.setAttribute('type', 'number');
        scoreInput.setAttribute('class', classValue)
        scoreInput.setAttribute('placeholder', valueOfPlaceHolder);
        return scoreInput;
    }
    function createVsDiv() {
        let vsDiv = document.createElement('div')
        vsDiv.setAttribute('class', 'vs-div')
        vsDiv.textContent = 'vs'
        return vsDiv;
    }
    function createAwayTeamDiv(awayTeam, awayIndex) {
        let awayTeamDiv = document.createElement('div')
        awayTeamDiv.setAttribute('class', 'away-team-div')
        awayTeamDiv.textContent = `Away: ${awayTeam.name}`
        awayTeamDiv.setAttribute('data-team-index', awayIndex)

        return awayTeamDiv;
    }

    function createButton(){
        let button = document.createElement('button')
        button.setAttribute('class', 'match-btn')
        button.innerHTML='go'
        return button
    }
    function appendDivsToMatchDiv(homeTeamDiv,
                                  homeTeamScoreInput,
                                  awayTeamScoreInput,
                                  vsDiv, header, matchDiv, button) {
        matchDiv.appendChild(header)
        homeTeamDiv.appendChild(homeTeamScoreInput)
        awayTeamDiv.appendChild(awayTeamScoreInput)
        matchDiv.appendChild(homeTeamDiv)
        matchDiv.appendChild(vsDiv)
        matchDiv.appendChild(awayTeamDiv)
        matchDiv.appendChild(button)
    }
    function createHeader(value){
        let header = document.createElement('h1')
        header.innerHTML=value
        return header
    }


    let matchDiv = document.createElement('div')
    matchDiv.setAttribute('class', 'match-div')
    let homeTeamIndex = Math.floor(Math.random()*teams.length)
    let awayTeamIndex
    do{
        awayTeamIndex = Math.floor(Math.random()*teams.length)
    }while (awayTeamIndex===homeTeamIndex)
    let newHomeIndex = homeTeamIndex+1
    let newAwayIndex = awayTeamIndex+1


    let homeTeam = teams[newHomeIndex]
    let awayTeam = teams[newAwayIndex]


    console.log(teams[newHomeIndex])
    console.log(homeTeam)

    console.log(awayTeam)






    let button = createButton()
    let header = createHeader('kolejka 1')
    let homeTeamDiv = createHomeDiv(homeTeam, newHomeIndex);
    let homeTeamScoreInput = createInput('home goals', 'home-input' );
    let vsDiv = createVsDiv();
    let awayTeamDiv = createAwayTeamDiv(awayTeam, newAwayIndex);
    let awayTeamScoreInput = createInput('away goals', 'away-input')





    appendDivsToMatchDiv(
        homeTeamDiv,
        homeTeamScoreInput,
        awayTeamScoreInput,
        vsDiv,
        header,
        matchDiv,
        button);



    calculateMatch(homeTeamScoreInput, awayTeamScoreInput, homeTeam, awayTeam, button )

    document.body.appendChild(matchDiv);

}

function calculateMatch(homeTeamScoreInput, awayTeamScoreInput, homeTeam, awayTeam, button ) {
    button.addEventListener('click', function () {
        let winner
        let homeValue = parseInt(homeTeamScoreInput.value)
         let awayValue = parseInt(awayTeamScoreInput.value)
            if (homeValue<0||awayValue<0){
                console.log('liczba bramek nie może być ujemna')
            }
            else {
                homeTeam.matchesPlayed++
                awayTeam.matchesPlayed++
                homeTeam.goalsScored += homeValue
                awayTeam.goalsScored += awayValue
                homeTeam.goalsConceded += awayValue
                awayTeam.goalsConceded += homeValue
                homeTeam.goalsDifference = homeTeam.goalsScored-homeTeam.goalsConceded
                awayTeam.goalsDifference = awayTeam.goalsScored-homeTeam.goalsConceded

                if (homeValue < awayValue) {
                    awayTeam.points += 3
                    awayTeam.matchesWon++
                    homeTeam.matchesLost++
                } else if (homeValue > awayValue) {
                    homeTeam.points += 3
                    homeTeam.matchesWon++
                    awayTeam.matchesLost++
                    winner = homeTeam.name
                } else if (homeValue === awayValue) {
                    homeTeam.points += 1
                    awayTeam.points += 1
                    awayTeam.matchesDraw++
                    homeTeam.matchesDraw++
                    winner = 'remis'
                }
            }
            sortTeams(teams)
            display(teams)

            
            console.log(`wynik meczu ${homeTeam.name}  ${homeValue} : ${awayValue} ${awayTeam.name} \n
            winner is ${winner}
                            `)



        console.log(homeTeam.points)
    })
   

}






sortTeams(teams)
createMatch(teams)

//display(teams)
createTable()

