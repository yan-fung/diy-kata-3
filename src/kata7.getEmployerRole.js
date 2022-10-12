const getEmployerRole = (employeeName, employees) => {
  const staff = employees.find((person) => person.name === employeeName);
  return staff.role;
};

module.exports = getEmployerRole;
