import { Module } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { JobseekersController } from './jobseekers.controller';
import { EmployerModule } from './employer/employer.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  providers: [JobseekersService],
  controllers: [JobseekersController],
  imports: [EmployerModule, EmployeeModule]
})
export class JobseekersModule {}
