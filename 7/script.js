const patients = [
    {
        name:"Carlos",
        age:20,
        weight:90,
        height:180
    },
    
    {
        name:"João",
        age:50,
        weight:80,
        height:150
    },

    {
        name:"Manuel",
        age:60,
        weight:70,
        height:160
    }

]


let patientsName = []

for(let patient of patients){
    patientsName.push(patient.name)
}

alert(patientsName[0])