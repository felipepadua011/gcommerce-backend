import { fs } from "file-system";
import { Injectable } from "@nestjs/common";
import { CreateMassaDto } from "./dto/create-massa.dto";
import xlsx from "node-xlsx";

@Injectable()
export class MassaService {
  create(createMassaDto: CreateMassaDto) {
    const workSheetsFromBuffer = xlsx.parse(
      fs.readFileSync(`${__dirname}/myFile.xlsx`)
    );
    return workSheetsFromBuffer;
  }

  findAll() {
    const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);
    return workSheetsFromFile;
  }
}
