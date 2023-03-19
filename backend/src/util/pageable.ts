import {ApiProperty} from "@nestjs/swagger";

export class Pageable<T>{
    @ApiProperty({type: Object, isArray: true, description: "Array of searched objects"})
    content: T[];
    @ApiProperty({type: Number})
    pageNumber: number;
    @ApiProperty({type: Number})
    pageSize: number

    constructor(pageable: Pageable<T>) {
        Object.assign(this, pageable);
    }
}