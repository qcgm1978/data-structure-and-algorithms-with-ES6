import { grades } from './02-chapter-Arrays'
import * as math from 'mathjs'
it(`grades`, () => {
    expect(grades).toBeInstanceOf(Function)
});
it(`Implementation of the grade using classes`, () => {
    const gradeObj = [90, 89, 75, 90, 89, 75, 90, 89, 75, 90, 89, 75, 90, 89, 75, 90, 89, 75];
    const grade = new grades(gradeObj);
    grade.addGrade(90);
    grade.addGrade(25);
    expect(`Avg grade: ${grade.displayAvg()}`).toEqual(`Avg grade: ${math.sum(...grade.grades) / (gradeObj.length + 2)}`);
});