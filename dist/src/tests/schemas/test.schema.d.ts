import { Document, Types } from 'mongoose';
export type TestDocument = Test & Document;
export declare class Test {
    title: string;
    description: string;
    scheduledDate: Date;
    status: string;
    questionCount: number;
    duration: number;
    createdBy: Types.ObjectId;
    lessonId: Types.ObjectId;
}
export declare const TestSchema: import("mongoose").Schema<Test, import("mongoose").Model<Test, any, any, any, (Document<unknown, any, Test, any, import("mongoose").DefaultSchemaOptions> & Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Test, any, import("mongoose").DefaultSchemaOptions> & Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Test>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Test, Document<unknown, {}, Test, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    scheduledDate?: import("mongoose").SchemaDefinitionProperty<Date, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    questionCount?: import("mongoose").SchemaDefinitionProperty<number, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duration?: import("mongoose").SchemaDefinitionProperty<number, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lessonId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Test>;
