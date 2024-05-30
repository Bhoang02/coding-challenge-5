// U89173488

// step 1: Implement employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Created: ${this.name}, Monthly Salary: ${this.salary}`);
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}

// step2: create manager subclass
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getAnnualSalary() {
        const baseAnnualSalary = super.getAnnualSalary();
        const bonus = baseAnnualSalary * 0.15;
        const totalAnnualSalary = baseAnnualSalary + bonus;
        console.log(`Manager Created: ${this.name}, Department: ${this.department}`);
        console.log(`Bonus: ${bonus.toFixed(2)}, Total Annual Salary including Bonus: ${totalAnnualSalary.toFixed(2)}`);
        return totalAnnualSalary;
    }
}