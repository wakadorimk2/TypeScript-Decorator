class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const accounting = new ITDepartment('D1', ['Max']);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

