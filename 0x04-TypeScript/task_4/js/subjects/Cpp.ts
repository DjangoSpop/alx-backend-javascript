namespace Subjects{
    export class Cpp extends Subject{
        teacher: any;
        getRequirements():string{
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher():string{
            if(this.teacher.experienceTeachingC){
                return 'Available teacher: ' + this.teacher.firstName + ' ' + this.teacher.lastName;
            }else{
                return 'No available teacher';
            }
        }
    }
}