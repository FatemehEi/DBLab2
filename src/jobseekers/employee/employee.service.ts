import { Injectable } from '@nestjs/common';
import EmployeeEntity from '../../db/employee.entity';
import CreateEmployeeDTO from '../dto/create-employee.dto';
import DeleteEmployeeDTO from '../dto/delete-employee.dto';
import UpdateEmployeeDTO from '../dto/update-employee.dto';

@Injectable()
export class EmployeeService {
    async insert(employeeDetails: CreateEmployeeDTO): Promise<EmployeeEntity> {
        const employee: EmployeeEntity = EmployeeEntity.create();
        employee.name = employeeDetails.name;
        employee.email = employeeDetails.email;
        employee.phone_number = employeeDetails.phone_number;
        await EmployeeEntity.save(employee);
        return employee;
    }

    async findEmployer(userID: number): Promise<EmployeeEntity> {
        console.log(typeof(userID));
        return await EmployeeEntity.findOne({where: {id: userID}});
        
    }

    async delete(employerDetails: DeleteEmployeeDTO): Promise<number> {
        const employer = await EmployeeEntity.findOne(employerDetails.id);
        await EmployeeEntity.delete(employer);
        return employer.id;
    }

    async edit(employeeDetails: UpdateEmployeeDTO): Promise<EmployeeEntity> {
        const employee = await EmployeeEntity.findOne(employeeDetails.id);
        employee.name = employeeDetails.name;
        employee.email = employeeDetails.email;
        employee.phone_number = employeeDetails.phone_number;
        await EmployeeEntity.save(employee);
        return employee;
    }
}
