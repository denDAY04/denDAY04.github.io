const testProjects = [
  {
    title: 'Project 1',
    description: 'This is the first project and its description is listed here.',
    company: 'Foo Inc.',
    id: 1,
    start: Date.parse('2010-01-01'),
    end: Date.now(),
  },
  {
    title: 'Project 2',
    description: 'This is a MUCH better project. I learned so much!',
    company: 'ASJ ApS',
    id: 2,
    start: Date.now(),
    end: null,
  },
];

async function getProjects() {
  return new Promise((resolve) => {
    resolve(testProjects);
  });
}

export default {
  getProjects,
};
