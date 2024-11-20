//1.1
"oneIdentity": {
  "bpID": 1,
  "name": "ΑΠΘ",
  "date": 20180108,
  "legalForm": "Α.Ε.",
  "orderOfBusiness": "Πανεπιστημιο",
  "clients": ["Πελατες1", "Πελατες2", "Πελατες3"]
}

//1.2
"oneDescription": {
  "text": "Μεγαλο κειμενο για την περιγραφη της επιχειρησης."
}

//2.1
"twoTeam": {
  "managers": [
    {"id": 1,  "name": "Manager1",  "surname": "hisSurname1",  "job": "Job1",  "linkedIn": "www1"},
    {"id": 2,  "name": "Manager2",  "surname": "hisSurname2",  "job": "Job2",  "linkedIn": "www2"},
    {"id": 3,  "name": "Manager3",  "surname": "hisSurname3",  "job": "Job3",  "linkedIn": "www3"}
  ]
}

//2.2
"twoEmployees": {
  "employees": [
    {"id": 1, "job": "Πωλητής" },
    {"id": 2, "job": "Λογιστής" },
    {"id": 3, "job": "Καθαριστής" },
  ]
}

//2.3
"twoPartners": {
  "externalPArtners": [
    {"id": 1, "name": "Partner1", "surName": "hisSurname1", "expertise": "Exp1", "linkedIn": "www1", "from": 20171115, "until": 20190920, "duties": "Περιγραφη καθηκοντων 1"},
    {"id": 2, "name": "Partner2", "surName": "hisSurname2", "expertise": "Exp2", "linkedIn": "www2", "from": 20171114, "until": 20190910, "duties": "Περιγραφη καθηκοντων 2"},
    {"id": 3, "name": "Partner3", "surName": "hisSurname3", "expertise": "Exp3", "linkedIn": "www3", "from": 20121115, "until": 20290920, "duties": "Περιγραφη καθηκοντων 3"}
  ]
}

//2.4
"twoCost": {
  "salaryList": [
    {"employeeID": 2, "salary": 17900, "bonus": 400, "employment_type": "Ημιαπασχοληση"},
    {"employeeID": 1, "salary": 15800, "bonus": 100, "employment_type": "Πληρης Απασχοληση"},
    {"employeeID": 3, "salary": 14400, "bonus": 300, "employment_type": "Ημιαπασχοληση"}
  ],
  "salaryTotalCost": 1000000
}

//3.1
"threeFaculties": {
  "facultyList": [
    {"adress": "Adress1", "usage": "Usage1", "m2": 570, "ownership_type": "Type1", "start_date": 20190823},
    {"adress": "Adress2", "usage": "Usage2", "m2": 540, "ownership_type": "Type2", "start_date": 20190820},
    {"adress": "Adress3", "usage": "Usage3", "m2": 170, "ownership_type": "Type3", "start_date": 20190824}
  ]
}

//3.2
"threeEquipment": {
  "equipmentList"[
    {"equipType": "Equipment1", "adress": "Adress1", "division": "Div1", "firsthand": true, "acquisition_date": 20160519},
    {"equipType": "Equipment2", "adress": "Adress2", "division": "Div2", "firsthand": true, "acquisition_date": 20160511},
    {"equipType": "Equipment3", "adress": "Adress3", "division": "Div3", "firsthand": true, "acquisition_date": 20160523}
  ]
}

//3.3
"threeCost": {
  "facultyCosts": [
    {"id_fac": 2, "facCost": 8000},
    {"id_fac": 7, "facCost": 3500},
    {"id_fac": 5, "facCost": 1700}
  ],
  "equipmentCosts": [
    {"id_eq":1, "equipCost": 5400},
    {"id_eq":1, "equipCost": 11100},
    {"id_eq":1, "equipCost": 1800}
  ],
  "facultyExpenses": 150000,
  "equipmentExpenses": 210000
}

//4.1
"fourCharacteristics": {//product:true= product , product:false = service
  "charList": [
    {"productID": 1, "productType": false, "name": "Prod1", "directed_to": "Dir1", "innovation_factor": "Inn1",
    "technology": "Tech1", "certificate": "Certificate", "license": "Licence1", "competition": "Comp1", "price": 212331, "description": "Desc1"},
    {"productID": 2, "productType": false, "name": "Prod2", "directed_to": "Dir2", "innovation_factor": "Inn2",
    "technology": "Tech1", "certificate": "Certificate", "license": "Licence1", "competition": "Comp2", "price": 26631, "description": "Desc2"},
    {"productID": 3, "productType": false, "name": "Prod3", "directed_to": "Dir2", "innovation_factor": "Inn3",
    "technology": "Tech1", "certificate": "Certificate", "license": "Licence1", "competition": "Comp3", "price": 2121, "description": "Desc3"}
  ]
}

//4.2
"fourCR": {
  "crList": [
    {"productID": 1, "productType": false, "name": "Prod1", "copyright": "CR1"},
    {"productID": 2, "productType": true, "name": "Prod2", "copyright": "CR2"},
    {"productID": 3, "productType": true, "name": "Prod3", "copyright": "CR3"}
  ]
}

//4.3
"fourIncome": {
  "incomeList": [
    {"productID": 1, "productType": false, "name": "Prod1", "sellPrice": 15600, "productCost": 500, "numProcuct":12, "persentageIncrease": 56},
    {"productID": 2, "productType": true, "name": "Prod2", "sellPrice": 600, "productCost": 1500, "numProcuct":160, "persentageIncrease": 6},
    {"productID": 3, "productType": true, "name": "Prod3", "sellPrice": 5600, "productCost": 5400, "numProcuct":29, "persentageIncrease": 105}
  ]
}

//5.1
"fiveSWOT": {
  "strong": [{"text":"Δυνατα1"},{"text":"Δυνατα2"},{"text":"Δυνατα3"}],
  "weak": [{"text":"Αδυνατα1"},{"text":"Αδυνατα2"},{"text":"Αδυνατα3"}],
  "opportunities": [{"text":"Ευκαιριες1"},{"text":"Ευκαιριες2"},{"text":"Ευκαιριες3"}],
  "threats": [{"text":"Απειλες1"},{"text":"Απειλες2"},{"text":"Απειλες3"}]
}

//5.2
"fivePESTEL": {
  "factors": [
    {"factorID": 1, "description": "Περιγραφη1", "example": "Παραδειγμα1"},
    {"factorID": 2, "description": "Περιγραφη2", "example": "Παραδειγμα2"},
    {"factorID": 3, "description": "Περιγραφη3", "example": "Παραδειγμα3"}
  ]
}

//5.3
"fiveNotes": {
  "text": "Κειμενο παρατηρησεων."
}

//6.1
"sixStrategy":{
  "promotion": "Καναλια προβολης",
  "contribution": "Καναλια διανομης",
  "marketEntry": "Τεχνικες εισαγωγης στην αγορα",
  "publicRelations": "Δημοσιες Σχεσεις",
  "avoid": "Κινησεις προς αποφυγειν"
}

//6.2
"sixMarketing": {
  "marketingActions":[
    {"id": 1, "title":"Ενεργεια1", "implementationTime": 54, "frequency": 2, "implementationCost": 60, "totalCost":"Συνολικο Κοστος 1"},
    {"id": 2, "title":"Ενεργεια2", "implementationTime": 4, "frequency": 6, "implementationCost": 560, "totalCost":"Συνολικο Κοστος 2"},
    {"id": 3, "title":"Ενεργεια3", "implementationTime": 67, "frequency": 9, "implementationCost": 8960, "totalCost":"Συνολικο Κοστος 3"}
  ]
}

//7.1
"eightStart": {
  "startActions": [
    {"actionID": 1 , "name": "Ενεργεια1", "actionCost": 56},
    {"actionID": 2 , "name": "Ενεργεια2", "actionCost": 54},
    {"actionID": 3 , "name": "Ενεργεια3", "actionCost": 7}
  ],
  "actionsTotalCost": 6000
}

//7.2
"eightFunction": {
  "startFunctions": [
    {"functionID": 1 , "name": "Ενεργεια1", "functionCost": 56},
    {"functionID": 2 , "name": "Ενεργεια2", "functionCost": 54},
    {"functionID": 3 , "name": "Ενεργεια3", "functionCost": 7}
  ],
  "functionsTotalCost": 6000
}

//7.3
"eightDeadSpot": {
  "dsList": [
    {"productID": 1 , "deadSpot":"Νεκρο σημειο1"},
    {"productID": 2 , "deadSpot":"Νεκρο σημειο2"},
    {"productID": 3 , "deadSpot":"Νεκρο σημειο3"}
  ]
}

//8 is empty

//9
"nineLinks": {
  "linkList": [
    {"linkID":1, "URL":"www1", "title":"Τιτλος1", "section": "Section1"},
    {"linkID":2, "URL":"www2", "title":"Τιτλος2", "section": "Section2"},
    {"linkID":3, "URL":"www3", "title":"Τιτλος3", "section": "Section3"}
  ]
}

//10
"tenConclusion": {
  "text": "Κειμενο περιληψης"
}


//end
