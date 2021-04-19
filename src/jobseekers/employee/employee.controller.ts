import { Controller, Body, Delete, Get, Post, Put, Query,} from '@nestjs/common';
import CreateEmployeeDTO from '../dto/create-employee.dto';
import DeleteEmployeeDTO from '../dto/delete-employer.dto';
import UpdateEmployeeDTO from '../dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    postEmployer(@Body() employee: CreateEmployeeDTO) {
        return this.employeeService.insert(employee);
    }

    @Put()
    editEmployer(@Body() employee: UpdateEmployeeDTO) {
        return this.employeeService.edit(employee);
    }

    @Delete()
    deleteEmployer(@Body('employeeID') employeeID: DeleteEmployeeDTO) {
        return this.employeeService.delete(employeeID);
    }

    @Get()
    findEmployer(@Query('employerID') employerID) {
        return this.employeeService.findEmployer(employerID);
    }
}
