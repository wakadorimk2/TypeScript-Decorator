class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
    console.log('Employees: ' + this.employees);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

