import { Controller, Body, Delete, Get, Post, Put, Query, } from '@nestjs/common';
import UpdateEmployerDTO from '../dto/update-employer.dto';
import CreateEmployerDTO from '../dto/create-employer.dto';
import { EmployerService } from './employer.service';

@Controller('employer')
export class EmployerController {
    constructor(private readonly employerService: EmployerService) {}

    @Post()
    postEmployer(@Body() employer: CreateEmployerDTO) {
        return this.employerService.insert(employer);
    }

    @Put()
    editEmployer(@Body() employer: UpdateEmployerDTO) {
        return this.employerService.edit(employer);
    }

    @Delete()
    deleteEmployer(@Query('employerID') employerID) {
        return this.employerService.delete(employerID);
    }

    @Get()
    findEmployer(@Query('employerID') employerID) {
        return this.employerService.findEmployer(employerID);
    }
}
