import { DrizzleAsyncProvider } from "@/core/database/drizzle/drizzle.provider";
import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

import * as sc from "@/core/database/drizzle/schema";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: NodePgDatabase<typeof sc>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const result = await this.db
      .insert(sc.users)
      .values(createUserDto)
      .returning({ id: sc.users.id });

    return result;
  }
}
