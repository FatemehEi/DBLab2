import { Injectable } from '@nestjs/common';
import EmployerEntity from '../../db/employer.entity';
import CreateEmployerDTO from '../dto/create-employer.dto';
import UpdateEmployerDTO from '../dto/update-employer.dto';
import DeleteEmployerDTO from '../dto/delete-employer.dto';
@Injectable()
export class EmployerService {
    async insert(employerDetails: CreateEmployerDTO): Promise<EmployerEntity> {
        const employer: EmployerEntity = EmployerEntity.create();
        employer.name = employerDetails.name;
        employer.email = employerDetails.email;
        employer.phone_number = employerDetails.phone_number;
        await EmployerEntity.save(employer);
        return employer;
    }

    async findEmployer(userID: number): Promise<EmployerEntity> {
        console.log(typeof(userID));
        return await EmployerEntity.findOne({where: {id: userID}});
                
    }

    async delete(employerDetails: DeleteEmployerDTO): Promise<number> {
        const employer = await EmployerEntity.findOne(employerDetails.id);
        await EmployerEntity.delete(employer);
        return employer.id;
    }

    async edit(employerDetails: UpdateEmployerDTO): Promise<EmployerEntity> {
        const employer = await EmployerEntity.findOne(employerDetails.id);
        employer.name = employerDetails.name;
        employer.email = employerDetails.email;
        employer.phone_number = employerDetails.phone_number;
        await EmployerEntity.save(employer);
        return employer;
    }
}
