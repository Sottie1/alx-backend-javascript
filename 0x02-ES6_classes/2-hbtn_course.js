export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || !name) {
      throw new TypeError('name must be a non-empty string');
    }
    if (typeof length !== 'number' || !length) {
      throw new TypeError('length must be a non-empty number');
    }
    if (!Array.isArray(students) || !students.length) {
      throw new TypeError('students must be a non-empty array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || !value) {
      throw new TypeError('name must be a non-empty string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number' || !value) {
      throw new TypeError('length must be a non-empty number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.length) {
      throw new TypeError('students must be a non-empty array');
    }
    this._students = value;
  }
}

