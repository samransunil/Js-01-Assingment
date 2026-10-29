let basicsallary=+prompt("Enter your basic sallary in PKR:");

console.log(`
    Basic Sallary = ${basicsallary}
    House Allowance  = ${(basicsallary*0.2)}
    Medical Allowance  = ${(basicsallary*0.1)}
    Gross Sallary = ${(basicsallary+(basicsallary*0.2)+(basicsallary*0.1))}
    Tax Detecation = ${(basicsallary*0.05)}
    Net Sallary = ${(basicsallary+(basicsallary*0.2)+(basicsallary*0.1))-(basicsallary*0.05)}

    `);
