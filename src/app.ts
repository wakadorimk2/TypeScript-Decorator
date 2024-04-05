abstract class Department {
  static fiscalYear = '2024';

  protected employees: string[] = [];

  static createEmployee(name: string) {
    return {name: name};
  }

  constructor(protected readonly id: string, public name: string) {
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(): void {
    console.log('IT部門 - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが存在しません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。")
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe(): void {
    console.log('会計部門 - ID: ' + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
// console.log(employee1);

// console.log(Department.fiscalYear);

const it = new ITDepartment('D1', ['Max']);
it.describe();

const accounting = new AccountingDepartment('D2', [])
accounting.mostRecentReport = "通期会計レポート";
accounting.addReport('Something...')

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
