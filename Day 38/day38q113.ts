let countryCapitalMap = new Map<string, string>();

countryCapitalMap.set("Pakistan", "Islamabad");
countryCapitalMap.set("India", "New Delhi");
countryCapitalMap.set("Japan", "Tokyo");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("USA", "Washington D.C");

console.log("Country-Capital Map:");
for(let [country, capital] of countryCapitalMap){
    console.log(`${country} - ${capital}`);
}

function checkCanadaCapital(countryCapitalMap: Map<string, string>): void {
    if(countryCapitalMap.has("Canada")){
        let capital = countryCapitalMap.get("Canada");
        console.log(`The capital of Canada is ${capital}`);
    }else{
        console.log("Canada is not in the map");
    }
}
checkCanadaCapital(countryCapitalMap);